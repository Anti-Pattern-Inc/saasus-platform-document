/**
 * SaaSus Ask AI Client Library
 * SaaSusドキュメントサイトで使用する統合クライアントライブラリ
 * API通信、インスタンス管理、ストリーミング処理を統合
 */
export class AskAIClient {
  constructor(options = {}) {
    this.language = options.language; // デフォルト値なし
    this.timeout = options.timeout || 120000; // タイムアウトを2分に延長
    this.conversationHistory = []; // 一時的な会話履歴（askWithHistoryで使用）
    this.mockMode = options.mockMode || false; // 開発用モックモード
    
    // インスタンス管理
    this.instances = new Map(); // 言語ごとのインスタンスを管理
    this.currentLanguage = this.language; // デフォルト言語
  }

  /**
   * AskAIクライアントの初期化を待機
   */
  async waitForInitialization() {
    return new Promise((resolve, reject) => {
      if (window.SaaSusAskAI) {
        resolve();
        return;
      }

      // 最大5秒待機
      let attempts = 0;
      const maxAttempts = 50; // 100ms * 50 = 5秒
      const interval = setInterval(() => {
        attempts++;
        if (window.SaaSusAskAI) {
          clearInterval(interval);
          resolve();
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          reject(new Error('Ask AI client not loaded'));
        }
      }, 100);
    });
  }

  /**
   * 言語を設定
   * @param {string} language - 言語コード ('ja' または 'en')
   */
  setLanguage(language) {
    this.currentLanguage = language;
    // 言語が変更された場合、該当言語のインスタンスがなければ作成される
  }

  /**
   * 言語に応じたAPI URLを生成
   * @param {string} language - 言語コード
   * @returns {string} - API URL
   */
  generateApiUrl(language) {
    // 実行時環境検出でAPI URLを決定
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || 
                       hostname === '127.0.0.1' ||
                       hostname.includes('localhost');
    
    const baseUrl = isLocalhost 
      ? 'http://localhost:4111'
      : 'https://your-api-gateway-domain.amazonaws.com/prod';

    return language === 'ja' 
      ? `${baseUrl}/api/agents/saasusAskAiAgentJa/stream`
      : `${baseUrl}/api/agents/saasusAskAiAgentEn/stream`;
  }

  /**
   * AskAIインスタンスを取得または作成
   * @param {string} language - 言語コード（省略時は現在の言語を使用）
   */
  async getInstance(language = null) {
    const targetLanguage = language || this.currentLanguage;
    
    // 該当言語のインスタンスが既に存在する場合はそれを返す
    if (this.instances.has(targetLanguage)) {
      return this.instances.get(targetLanguage);
    }
    
    // 新しい言語のインスタンスを作成
    await this.waitForInitialization();
    
    // 言語に応じたAPIエンドポイントを設定
    const apiUrl = this.generateApiUrl(targetLanguage);
    
    const instance = new window.SaaSusAskAI({
      apiUrl: apiUrl,
      language: targetLanguage,
      mockMode: false
    });
    
    // インスタンスをキャッシュ
    this.instances.set(targetLanguage, instance);
    
    return instance;
  }

  /**
   * Ask AI に質問を送信（ストリーミング）
   * MastraのストリーミングAPIを使用してリアルタイムでテキストを取得
   * 
   * @param {string} question - 質問内容
   * @param {Object} options - オプション（Mastraのstream APIオプション）
   * @param {Function} onTextPart - テキスト部分のコールバック（リアルタイム描画用）
   * @param {Function} onErrorPart - エラー部分のコールバック
   * @returns {Promise<Object>} - AI の回答（UI描画に必要な最小限のデータのみ）
   */
  async ask(question, options = {}, onTextPart = null, onErrorPart = null) {
    try {
      // モックモードの場合は固定レスポンスを返す
      if (this.mockMode) {
        return this.getMockResponse(question, onTextPart);
      }

      // 会話履歴を含むメッセージを構築
      const messages = [];
      
      // 会話履歴がある場合は追加（コンテキスト維持のため）
      if (this.conversationHistory.length > 0) {
        messages.push(...this.conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        })));
      }
      
      // 現在の質問を追加（履歴に含まれていない場合のみ）
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage || lastMessage.content !== question) {
        messages.push({
          role: 'user',
          content: question
        });
      }

      // MastraのストリーミングAPIリクエストボディ
      // ドキュメント: https://mastra.ai/ja/reference/agents/stream
      const requestBody = {
        messages: messages,
        // ストリーミング設定
        temperature: options.temperature || 0.7, // 創造性の制御
        // maxTokens: options.maxTokens || 200, // 最大トークン数
        toolChoice: options.toolChoice || 'auto', // ツール使用の制御
        // 描画に不要なデータは返さない設定
        savePerStep: false, // ステップごとの保存は無効（UI描画には不要）
      };

      // AbortControllerを使用してタイムアウトを管理
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);
      
      // 現在の言語に応じたAPI URLを取得
      const apiUrl = this.generateApiUrl(this.currentLanguage);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // ストリーミングレスポンスの処理
      // MastraのストリーミングAPIは独自形式でデータを送信
      let fullAnswer = '';
      let finalAnswer = ''; // 最終的な回答（ツール呼び出し後のみ）
      let isToolCallPhase = false; // ツール呼び出しフェーズかどうか
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // バイナリデータをテキストにデコード
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.trim() === '') continue;
            
            try {
              // Mastraのストリーミング形式を処理
              // フォーマット: "0:\"テキスト内容\"" または "data: {JSONデータ}"
              if (line.startsWith('0:')) {
                // テキストチャンクの処理
                const textContent = line.slice(2); // "0:"を除去
                if (textContent.startsWith('"') && textContent.endsWith('"')) {
                  const content = textContent.slice(1, -1); // 前後のクォートを除去
                  fullAnswer += content;
                  
                  // ツール呼び出し後のテキストのみを最終回答に追加
                  if (isToolCallPhase) {
                    finalAnswer += content;
                  }
                  
                  // リアルタイム描画のためのコールバック（ツール呼び出し後のみ表示）
                  if (onTextPart && isToolCallPhase) {
                    onTextPart(content);
                  }
                }
              } else if (line.startsWith('9:')) {
                // ツール呼び出しの開始を検知
                isToolCallPhase = true;
              } else if (line.startsWith('a:')) {
                // ツール呼び出しの結果を検知
                // ツール呼び出し結果の後は最終回答フェーズ
                isToolCallPhase = true;
              } else if (line.startsWith('data: ')) {
                // 従来のSSE形式もサポート
                const data = line.slice(6);
                if (data === '[DONE]') continue; // ストリーム終了マーカー
                
                const parsed = JSON.parse(data);
                
                // テキストデータのみを処理（UI描画に必要なデータのみ）
                if (parsed.type === 'text' && parsed.content) {
                  fullAnswer += parsed.content;
                  // リアルタイム描画のためのコールバック
                  if (onTextPart) {
                    onTextPart(parsed.content);
                  }
                } 
                // エラーデータの処理
                else if (parsed.type === 'error') {
                  if (onErrorPart) {
                    onErrorPart(parsed.error);
                  }
                }
              }
              // その他のデータ（toolCalls、usage等）はUI描画に不要なため無視
              // これにより描画パフォーマンスを向上
            } catch (parseError) {
              console.warn('Failed to parse streaming data:', line, parseError);
            }
          }
        }
      } finally {
        reader.releaseLock();
      }

      // 最終回答を決定（ツール呼び出し後のテキストがある場合はそれを使用）
      const finalResponse = finalAnswer || fullAnswer;
      
      // 空の回答の場合のフォールバック
      if (!finalResponse || finalResponse.trim().length === 0) {
        const fallbackAnswer = 'すみません、回答を生成できませんでした。';
        return {
          answer: fallbackAnswer
        };
      }
      
      // UI描画に必要な最小限のデータのみを返却
      // usage、toolCalls、finishReason等は描画に不要なため除外
      return {
        answer: finalResponse
      };

    } catch (error) {
      console.error('SaaSus Ask AI Error:', error);
      
      // AbortErrorの場合は特別な処理
      if (error.name === 'AbortError') {
        const errorMessage = 'リクエストがタイムアウトしました。もう一度お試しください。';
        if (onErrorPart) {
          onErrorPart(errorMessage);
        }
        throw new Error(errorMessage);
      }
      
      if (onErrorPart) {
        onErrorPart(error.message);
      }
      throw error;
    }
  }

  /**
   * ストリーミングデータの処理
   */
  processStreamingData(textPart) {
    if (typeof textPart === 'string') {
      return textPart;
    } else if (typeof textPart === 'object' && textPart !== null) {
      if (textPart.text) {
        return textPart.text;
      } else if (textPart.content) {
        return textPart.content;
      } else if (textPart.message) {
        return textPart.message;
      } else {
        return String(textPart);
      }
    } else {
      return String(textPart);
    }
  }

  /**
   * 特定の言語のインスタンスをクリア
   * @param {string} language - クリアする言語コード
   */
  clearInstance(language) {
    if (this.instances.has(language)) {
      this.instances.delete(language);
    }
  }

  /**
   * すべてのインスタンスをクリア
   */
  clearAllInstances() {
    this.instances.clear();
  }

  /**
   * 現在の言語を取得
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  /**
   * 利用可能な言語のインスタンス一覧を取得
   */
  getAvailableLanguages() {
    return Array.from(this.instances.keys());
  }

  /**
   * 履歴を含めて質問を送信（ストリーミング）
   * @param {string} query - 質問内容
   * @param {Array} history - 会話履歴
   * @param {Function} onTextPart - テキスト部分のコールバック
   * @param {Function} onErrorPart - エラー部分のコールバック
   * @param {string} language - 言語コード
   */
  async askWithHistory(query, history, onTextPart, onErrorPart, language = null) {
    try {
      const targetLanguage = language || this.currentLanguage;
      
      // 履歴を一時的に設定
      const originalHistory = this.conversationHistory;
      this.conversationHistory = history;
      
      const streamOptions = {
        temperature: 0.7,
        // maxTokens: 200,
        toolChoice: 'auto',
        savePerStep: false, // ステップごとの保存は無効（UI描画には不要）
      };

      const response = await this.ask(query, streamOptions, onTextPart, onErrorPart);
      
      // 履歴を元に戻す（セッション間で履歴が残らないように）
      this.conversationHistory = originalHistory;
      
      return response;
    } catch (error) {
      console.error('AskAI Error:', error);
      throw error;
    }
  }

  /**
   * 会話履歴に追加（一時的な使用のため）
   * @param {string} role - 'user' または 'assistant'
   * @param {string} content - メッセージ内容
   */
  addToHistory(role, content) {
    this.conversationHistory.push({
      role: role,
      content: content,
      timestamp: new Date().toISOString()
    });
    
    // 履歴が長くなりすぎないよう制限（最新10メッセージまで）
    if (this.conversationHistory.length > 10) {
      this.conversationHistory = this.conversationHistory.slice(-10);
    }
  }

  /**
   * 会話履歴をクリア（一時的な使用のため）
   */
  clearHistory() {
    this.conversationHistory = [];
  }

  /**
   * モックモードの切り替え
   * @param {boolean} enabled - モックモードを有効にするかどうか
   */
  setMockMode(enabled) {
    this.mockMode = enabled;
    console.log(`Mock mode ${enabled ? 'enabled' : 'disabled'}`);
  }

  /**
   * 開発用のモックレスポンスを返す（実際のストリーミング形式を再現）
   * @param {string} question - 質問内容
   * @param {Function} onTextPart - テキスト部分のコールバック
   * @returns {Promise<Object>} - モックレスポンス
   */
  async getMockResponse(question, onTextPart) {
    
    // 実際のストリーミングデータの形式を再現
    const mockStreamingData = [
      'f:{"messageId":"msg-mock-001"}',
      '0:"S"',
      '0:"aaSusでの"',
      '0:"ユーザー作成方法"',
      '0:"について詳しく"',
      '0:"ご説明いたします。"',
      '0:"\\n\\n## SaaSusでのユーザー作成方法\\n\\nSaaSusでは"',
      '0:"、以下の複"',
      '0:"数の方法でユーザ"',
      '0:"ーを作成すること"',
      '0:"ができます。\\n\\n### 1. S"',
      '0:"aaS運用コンソールから"',
      '0:"の作成\\n\\n####"',
      '0:" 新規ユーザーの作"',
      '0:"成"',
      '0:"\\n- 「新規ユーザー"',
      '0:"の作成」ボタン"',
      '0:"をクリックします\\n- "',
      '0:"作成フォームが表示されます\\n- 必"',
      '0:"要な情報を入力して"',
      '0:"ユーザーを作成します"',
      '0:"\\n\\n#### 既存ユーザーの"',
      '0:"テナントへの追加"',
      '0:"\\n- 「新規ユーザーの作"',
      '0:"成」ボタンの"',
      '0:"セレクトボックスから"',
      '0:"「既存ユーザーのテナントへの追加"',
      '0:"」を選択します\\n- 既"',
      '0:"に登録済みのユーザ"',
      '0:"ーに新たなテナント"',
      '0:"を割り当てること"',
      '0:"ができます\\n\\n### 2. API"',
      '0:"を使用した作成\\n\\n**"',
      '0:"Auth API - CreateSaasUser**"',
      '0:" を使用して"',
      '0:"プログラム的にユーザーを作"',
      '0:"成できます。\\n\\n- **API エ"',
      '0:"ンドポイント**: [Auth API –"',
      '0:" CreateSaasUser](/ja/"',
      '0:"docs/reference/auth-api#"',
      '0:"tag/saasUser/operation/"',
      '0:"CreateSaasUser)\\n-"',
      '0:" **実装ガイド**: [Sa"',
      '0:"aSにユーザー作成機能"',
      '0:"が実装されているケースの"',
      '0:"実装](/ja/docs/part-6/usecase/about-"',
      '0:"saas-user-accounts#%"',
      '0:"EF%BC%93%E"',
      '0:"F%BC%92saas%"',
      '0:"E3%81%AB%E"',
      '0:"3%83%A6%E"',
      '0:"3%83%BC%E3"',
      '0:"%82%B6%E3%83%BC%E4%"',
      '0:"BD%9C%E6%"',
      '0:"88%90%E6%A9%9F%E8%"',
      '0:"83%BD%E3%81%8C%E5%A"',
      '0:"E%9F%E8%"',
      '0:"A3%85%E3%"',
      '0:"81%95%E3%82"',
      '0:"%8C%E3%81"',
      '0:"%A6%E3%81"',
      '0:"%84%E3%82%8B%E3%82%"',
      '0:"B1%E3%83%"',
      '0:"BC%E3%82%B"',
      '0:"9%E3%81%AE%E5%AE%"',
      '0:"9F%E8%A3"',
      '0:"%85)\\n\\n### 3. セ"',
      '0:"ルフサインアップ機"',
      '0:"能\\n\\n**セルフサインアップを"',
      '0:"許可する場合：**\\n-"',
      '0:" SaaSus Platformが生"',
      '0:"成するログイン画面に"',
      '0:"「新規登"',
      '0:"録はこちら」が"',
      '0:"表示されます\\n- ユ"',
      '0:"ーザー自身がア"',
      '0:"カウントを作成でき"',
      '0:"ます\\n- セルフサインアップが"',
      '0:"完了すると、"',
      '0:"ユーザーはログイ"',
      '0:"ン状態でSaaSに"',
      '0:"遷移します\\n\\n### 4."',
      '0:" テナント作"',
      '0:"成時の代"',
      '0:"表者ユーザー作"',
      '0:"成\\n\\nテナントを"',
      '0:"新規作成する際に"',
      '0:"、代表者ユーザ"',
      '0:"ーを同時に作成することができます。"',
      '0:"\\n\\n**新規で"',
      '0:"代表者ユーザーを"',
      '0:"作成する場合の"',
      '0:"入力項目：**"',
      '0:"\\n| 項目名         | 説"',
      '0:"明                                         |\\n|-------------"',
      '0:"---|----------------------------------------------|\\n| メールアド"',
      '0:"レス | 新規ユ"',
      '0:"ーザーのログインIDと"',
      '0:"して使用されます    |\\n| 仮パスワード"',
      '0:"   | 初回ログイン時に使用する一時"',
      '0:"的なパスワード     |\\n\\n:::"',
      '0:"info\\n新規登録された代表者は"',
      '0:"、そのテナントに所属するユーザーとして"',
      '0:"自動登録され、`admin"',
      '0:"`（管理者）ロ"',
      '0:"ールが付与されます。\\n:::\\n\\n### "',
      '0:"ユーザー作成後の役"',
      '0:"割設定\\n\\nユーザー"',
      '0:"作成後は、適切な役割（"',
      '0:"ロール）を設定する"',
      '0:"必要があります：\\n- `"',
      '0:"admin`：管理者権限"',
      '0:"\\n- `user`：一"',
      '0:"般利用者権限（"',
      '0:"事前に役割定"',
      '0:"義で作成が"',
      '0:"必要）\\n\\nこれ"',
      '0:"らの方法を組"',
      '0:"み合わせることで、様"',
      '0:"々なユースケースに対応したユ"',
      '0:"ーザー管理が可能"',
      '0:"です。どの方法を選択"',
      '0:"するかは、お客様の"',
      '0:"SaaSの要件や"',
      '0:"運用方針に応じて決定してい"',
      '0:"ただけます。"',
      'e:{"finishReason":"stop","usage":{"promptTokens":1000,"completionTokens":500},"isContinued":false}',
      'd:{"finishReason":"stop","usage":{"promptTokens":1500,"completionTokens":800}}'
    ];

    let fullAnswer = '';
    
    // 実際のストリーミング形式を再現
    for (const chunk of mockStreamingData) {
      // 実際のクライアントと同じ処理ロジック
      if (chunk.startsWith('0:')) {
        let textContent = chunk.slice(2); // "0:"を除去
        
        // クォートで囲まれている場合は除去
        if (textContent.startsWith('"') && textContent.endsWith('"')) {
          textContent = textContent.slice(1, -1);
        }
        
        // エスケープされた文字を処理
        textContent = textContent.replace(/\\n/g, '\n').replace(/\\"/g, '"');
        
        if (textContent) {
          fullAnswer += textContent;
          
          // リアルタイム描画のためのコールバック
          if (onTextPart) {
            onTextPart(textContent);
          }
        }
      }
      
      // ストリーミング風の遅延を追加（実際のAPIの速度に近づける）
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // 会話履歴は呼び出し元で管理するため、ここでは追加しない

    return {
      answer: fullAnswer
    };
  }
}

// グローバルに公開（開発用）
if (typeof window !== 'undefined') {
  window.SaaSusAskAI = AskAIClient;
}
