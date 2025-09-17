import { AskAIClient } from './AskAIClient.js';
import { MarkdownRenderer } from './MarkdownRenderer.js';

/**
 * AskAIモーダル管理クラス
 * モーダルの表示、チャットUI、イベント処理を担当
 */
export class AskAIModal {
  constructor() {
    // 現在の言語を判定してAskAIClientを初期化
    const currentLanguage = window.location.pathname.startsWith('/ja/') ? 'ja' : 'en';
    
    // AskAIClientに言語のみを渡す（API URLはcustomFieldsから取得）
    this.askAIClient = new AskAIClient({
      language: currentLanguage,
      mockMode: false
    });
    this.markdownRenderer = new MarkdownRenderer();
    this.modal = null;
    this.streamingText = '';
    this.lastUpdateTime = 0;
    this.updateInterval = 100; // 100ms間隔で更新
    this.conversationHistory = []; // モーダル専用の会話履歴
  }

  /**
   * 指定された言語のAskAIインスタンスを取得
   * @param {string} language - 言語コード
   * @returns {Promise<Object>} - AskAIインスタンス
   */
  async getAskAIInstance(language) {
    return await this.askAIClient.getInstance(language);
  }

  /**
   * 会話履歴に追加
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
   * 会話履歴をクリア
   */
  clearHistory() {
    this.conversationHistory = [];
  }

  /**
   * スクロールを最下部に移動
   */
  scrollToBottom(force = false) {
    const chatContainer = document.querySelector('.ask-ai-chat-container');
    if (!chatContainer) return;

    setTimeout(() => {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 5);
  }

  /**
   * メッセージの更新（ストリーミング用）
   */
  updateStreamingMessage(newChunk, fullText) {
    let currentAIMessage = document.querySelector('.ask-ai-message.ai-message:last-child');
    
    // メッセージが存在しない場合は作成
    if (!currentAIMessage) {
      const chatContainer = this.modal.querySelector('.ask-ai-chat-container');
      currentAIMessage = document.createElement('div');
      currentAIMessage.className = 'ask-ai-message ai-message';
      currentAIMessage.innerHTML = `
        <div class="message-content">
          <div class="ask-ai-markdown"></div>
        </div>
      `;
      chatContainer.appendChild(currentAIMessage);
    }
    
    const content = currentAIMessage.querySelector('.message-content');
    if (content) {
      currentAIMessage.classList.remove('loading');
      
      // マークダウンをレンダリング
      this.markdownRenderer.renderMarkdown(fullText, content);
      
      this.scrollToBottom();
    }
  }

  /**
   * メッセージの更新（全体テキスト用）
   */
  updateMessage(text) {
    let currentAIMessage = document.querySelector('.ask-ai-message.ai-message:last-child');
    
    // メッセージが存在しない場合は作成
    if (!currentAIMessage) {
      const chatContainer = this.modal.querySelector('.ask-ai-chat-container');
      currentAIMessage = document.createElement('div');
      currentAIMessage.className = 'ask-ai-message ai-message';
      currentAIMessage.innerHTML = `
        <div class="message-content">
          <div class="ask-ai-markdown"></div>
        </div>
      `;
      chatContainer.appendChild(currentAIMessage);
    }
    
    const content = currentAIMessage.querySelector('.message-content');
    if (content) {
      currentAIMessage.classList.remove('loading');
      
      // マークダウンをレンダリング
      this.markdownRenderer.renderMarkdown(text, content);
      
      this.scrollToBottom();
    }
  }

  /**
   * モーダルのスタイルを追加
   */
  addModalStyles() {
    const style = document.createElement('style');
    // インラインスタイルは削除 - custom.cssのスタイルを使用
    document.head.appendChild(style);
    return style;
  }

  /**
   * メッセージ送信処理
   */
  async sendMessage(newQuery) {
    const chatContainer = this.modal.querySelector('.ask-ai-chat-container');
    const input = this.modal.querySelector('.ask-ai-input');

    // ユーザーメッセージを追加
    const userMessage = document.createElement('div');
    userMessage.className = 'ask-ai-message user-message';
    userMessage.innerHTML = `
      <div class="message-content">
        ${newQuery}
      </div>
    `;
    chatContainer.appendChild(userMessage);

    // 入力フィールドをクリア
    input.value = '';
    this.scrollToBottom(true);

    // ストリーミング用の変数をリセット
    this.streamingText = '';
    this.lastUpdateTime = 0;

    // ユーザーメッセージを履歴に追加（API呼び出し前）
    this.addToHistory('user', newQuery);

    try {
      // ストリーミング用のコールバック関数
      const onTextPart = (textPart) => {
        const processedText = this.askAIClient.processStreamingData(textPart);
        this.streamingText += processedText;
        
        // スロットリングで更新頻度を制御
        const now = Date.now();
        if (now - this.lastUpdateTime >= this.updateInterval) {
          const previousLength = this.streamingText.length - processedText.length;
          const newChunk = this.streamingText.slice(previousLength);
          this.updateStreamingMessage(newChunk, this.streamingText);
          this.lastUpdateTime = now;
        }
      };
      
      const onErrorPart = (errorPart) => {
        console.error('Streaming error:', errorPart);
        this.updateMessage('エラーが発生しました: ' + errorPart);
      };

      // 現在の言語を取得
      const currentLanguage = window.location.pathname.startsWith('/ja/') ? 'ja' : 'en';

      // 言語に応じたインスタンスを取得
      const askAIInstance = await this.getAskAIInstance(currentLanguage);

      const response = await askAIInstance.askWithHistory(
        newQuery, 
        this.conversationHistory, 
        onTextPart, 
        onErrorPart, 
        currentLanguage
      );

      // 最終的なメッセージを更新
      const answer = response.answer || this.streamingText || '回答を取得できませんでした。';
      this.updateMessage(answer);
      
      // 成功時のみassistantメッセージを履歴に追加
      if (answer && answer !== 'AIが回答を生成中...' && answer !== '回答を取得できませんでした。' && answer.trim().length > 0) {
        this.addToHistory('assistant', answer);
      }
      
    } catch (error) {
      console.error('AskAI Error:', error);
      this.updateMessage('エラーが発生しました: ' + error.message);
      
      // エラー時はユーザーメッセージのみ履歴に追加済み（上記で追加）
    }
  }


  /**
   * モーダルを閉じる
   */
  closeModal() {
    // 会話履歴をクリア
    this.clearHistory();
    
    // bodyのスクロールを復元
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    
    // Markdownレンダラーのクリーンアップ
    const chatContainer = this.modal.querySelector('.ask-ai-chat-container');
    if (chatContainer) {
      this.markdownRenderer.cleanup(chatContainer);
    }
    
    // モーダルとスタイルを削除
    document.body.removeChild(this.modal);
    const style = document.querySelector('style');
    if (style && style.textContent.includes('ask-ai-modal')) {
      style.remove();
    }
  }

  /**
   * モーダルを表示してAPI呼び出しも実行
   */
  async showAndAsk(query, language) {
    // 会話履歴をリセット（新しいセッション開始）
    this.clearHistory();
    
    // ユーザーメッセージを履歴に追加
    this.addToHistory('user', query);
    
    // モーダルを作成
    this.modal = document.createElement('div');
    this.modal.className = 'ask-ai-modal';
    this.modal.innerHTML = `
      <div class="ask-ai-modal-overlay">
        <div class="ask-ai-modal-content">
          <div class="ask-ai-header">
            <button class="ask-ai-back-btn">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M6.89844 0.902344L1.79844 6.00293L6.89638 11.1008" stroke="currentColor" stroke-width="1.56775" stroke-linecap="round"></path>
              </svg>
              Back to Search
            </button>
          </div>
          <div class="ask-ai-chat-container">
            <div class="ask-ai-message user-message">
              <div class="message-content">
                ${query}
              </div>
            </div>
          </div>
          <div class="ask-ai-input-container">
            <textarea class="ask-ai-input" placeholder="Enter your message..." rows="1"></textarea>
            <button class="ask-ai-send-btn" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // スタイルを追加
    this.addModalStyles();
    document.body.appendChild(this.modal);
    
    // bodyのスクロールを無効にする
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // イベントリスナーを設定
    this.setupEventListeners();

    // API呼び出しを実行（sendMessageは履歴追加も行うため、直接API呼び出し）
    await this.performAPIRequest(query, language);
  }

  /**
   * API呼び出しを実行（履歴追加なし）
   */
  async performAPIRequest(query, language) {
    // ストリーミング用の変数をリセット
    this.streamingText = '';
    this.lastUpdateTime = 0;

    try {
      // ストリーミング用のコールバック関数
      const onTextPart = (textPart) => {
        const processedText = this.askAIClient.processStreamingData(textPart);
        this.streamingText += processedText;
        
        // スロットリングで更新頻度を制御
        const now = Date.now();
        if (now - this.lastUpdateTime >= this.updateInterval) {
          const previousLength = this.streamingText.length - processedText.length;
          const newChunk = this.streamingText.slice(previousLength);
          this.updateStreamingMessage(newChunk, this.streamingText);
          this.lastUpdateTime = now;
        }
      };
      
      const onErrorPart = (errorPart) => {
        console.error('Streaming error:', errorPart);
        this.updateMessage('エラーが発生しました: ' + errorPart);
      };

      // 言語に応じたインスタンスを取得
      const askAIInstance = await this.getAskAIInstance(language);

      const response = await askAIInstance.askWithHistory(
        query, 
        this.conversationHistory, 
        onTextPart, 
        onErrorPart, 
        language
      );
      
      // 最終的なメッセージを更新
      const answer = response.answer || this.streamingText || '回答を取得できませんでした。';
      this.updateMessage(answer);
      
      // 成功時のみassistantメッセージを履歴に追加
      if (answer && answer !== 'AIが回答を生成中...' && answer !== '回答を取得できませんでした。' && answer.trim().length > 0) {
        this.addToHistory('assistant', answer);
      }
      
    } catch (error) {
      console.error('AskAI Error:', error);
      this.updateMessage('エラーが発生しました: ' + error.message);
    }
  }


  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    const input = this.modal.querySelector('.ask-ai-input');
    const sendBtn = this.modal.querySelector('.ask-ai-send-btn');
    const backBtn = this.modal.querySelector('.ask-ai-back-btn');
    const overlay = this.modal.querySelector('.ask-ai-modal-overlay');

    // 入力フィールドにフォーカス
    input.focus();

    // 送信ボタンのイベント
    sendBtn.addEventListener('click', () => {
      const newQuery = input.value.trim();
      if (newQuery) {
        this.sendMessage(newQuery);
      }
    });

    // Enterキーのイベント
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const newQuery = input.value.trim();
        if (newQuery) {
          this.sendMessage(newQuery);
        }
      }
    });

    // テキストエリアの自動リサイズ
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });

    // 閉じるボタンのイベント
    backBtn.addEventListener('click', () => this.closeModal());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeModal();
    });
  }
}
