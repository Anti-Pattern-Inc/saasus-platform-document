import { AskAIModal } from './AskAIModal.js';

/**
 * 検索統合管理クラス
 * 検索結果へのAskAIオプション追加、ドロップダウンメニューの監視を担当
 */
export class SearchIntegration {
  constructor() {
    this.askAIModal = new AskAIModal();
    this.dropdownObserver = null;
  }

  /**
   * 現在の言語を判定
   * Docusaurusのi18n設定に基づいてURLパスから判定
   * これはDocusaurusの標準的な実装方法です
   */
  getCurrentLanguage() {
    return window.location.pathname.startsWith('/ja/') ? 'ja' : 'en';
  }

  /**
   * 言語に応じたテキストを取得
   */
  getLocalizedText(language) {
    const texts = {
      ja: {
        tellMeAbout: 'について教えて',
        description: 'AIに質問してSaaSusの使い方を学びましょう'
      },
      en: {
        tellMeAbout: 'Tell me about',
        description: 'Ask the AI about SaaSus usage'
      }
    };
    return texts[language] || texts.en;
  }

  /**
   * 言語に応じてクエリを整形
   */
  formatQuery(language, query) {
    const localizedText = this.getLocalizedText(language);
    
    if (language === 'ja') {
      // 日本語の場合：「検索ワードについて教えて」
      return `${query}${localizedText.tellMeAbout}`;
    } else {
      // 英語の場合：「Tell me about 検索ワード」
      return `${localizedText.tellMeAbout} ${query}`;
    }
  }

  /**
   * AskAIオプションを作成
   */
  createAskAIOption(query) {
    const language = this.getCurrentLanguage();
    const localizedText = this.getLocalizedText(language);
    
    const askAIOption = document.createElement('div');
    askAIOption.className = 'suggestion_fB_2 ask-ai-suggestion';
    askAIOption.setAttribute('role', 'option');
    askAIOption.setAttribute('id', 'ask-ai-option-' + Date.now());
    askAIOption.innerHTML = `
      <span class="hitIcon_a7Zy">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
        </svg>
      </span>
      <span class="hitWrapper_sAK8">
        <span class="hitTitle_vyVt">
          ${language === 'ja' 
            ? `<span>${query}</span><span>${localizedText.tellMeAbout}</span>`
            : `<span>${localizedText.tellMeAbout}</span> <span>${query}</span>`
          }
        </span>
        <span class="hitPath_ieM4">${localizedText.description}</span>
      </span>
      <span class="hitAction_NqkB">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 3v4c0 2-2 4-4 4H2"></path>
            <path d="M8 17l-6-6 6-6"></path>
          </g>
        </svg>
      </span>
    `;

    // Docusaurusの検索システムが期待するdocumentプロパティを追加
    askAIOption.document = {
      u: '#', // ダミーのURL（AskAIオプションはページ遷移しない）
      h: '',  // ハッシュなし
      t: query, // タイトル
      tokens: [query] // 検索トークン
    };

    // クリックイベントを追加
    askAIOption.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.handleAskAIClick(query);
    });

    return askAIOption;
  }

  /**
   * AskAIオプションを検索結果に追加
   */
  addAskAIOption(query) {
    const searchInput = document.querySelector('.navbar__search-input');
    if (!searchInput || !query || !query.trim()) {
      return;
    }

    const trimmedQuery = query.trim();
    
    // 既存のDocusaurusの検索ドロップダウンメニューを探す
    const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
    if (!dropdownMenu) {
      return;
    }

    // 既存のAskAIオプションを削除（更新のため）
    const existingAskAI = dropdownMenu.querySelector('.ask-ai-suggestion');
    if (existingAskAI) {
      existingAskAI.remove();
    }

    // AskAIオプションをdatasetの外に配置（シンプルで扱いやすい）
    const askAIOption = this.createAskAIOption(trimmedQuery);
    
    // dropdownMenuの最初に追加（datasetの外）
    dropdownMenu.insertBefore(askAIOption, dropdownMenu.firstChild);
    dropdownMenu.setAttribute('data-ask-ai-added', 'true');
    
  }

  /**
   * 検索結果パネルをクリーンアップ
   */
  cleanupSearchPanel() {
    // 既存のDocusaurusの検索ドロップダウンメニューからAskAIオプションを削除
    const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
    if (dropdownMenu) {
      dropdownMenu.removeAttribute('data-ask-ai-added');
      const askAIOption = dropdownMenu.querySelector('.ask-ai-suggestion');
      if (askAIOption) {
        askAIOption.remove();
      }
    }
  }

  /**
   * ドロップダウンメニューの監視
   */
  observeDropdownMenu() {
    const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
    if (!dropdownMenu) {
      return null;
    }

    // MutationObserverでドロップダウンメニューの表示状態を監視
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const display = dropdownMenu.style.display;
          if (display === 'none' || !display) {
            // ドロップダウンメニューが非表示になったらAskAIオプションも非表示
            this.cleanupSearchPanel();
          }
        }
      });
    });

    observer.observe(dropdownMenu, {
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    return observer;
  }

  /**
   * AskAIクリック時の処理
   */
  async handleAskAIClick(query) {
    try {
      // クエリが空の場合は処理をスキップ
      if (!query || query.trim().length === 0) {
        console.warn('AskAI: Empty query provided');
        return;
      }

      // 言語に応じてクエリを整形
      const language = this.getCurrentLanguage();
      const formattedQuery = this.formatQuery(language, query);
      
      // モーダルを表示してAPI呼び出しも実行
      await this.askAIModal.showAndAsk(formattedQuery, language);
    } catch (error) {
      console.error('AskAI Error:', error);
      // エラーが発生した場合は通常の検索処理にフォールバック
      // 何もしない（デフォルトの検索動作を許可）
    }
  }

  /**
   * 検索入力の監視を開始
   */
  startSearchInputMonitoring() {
    const searchInput = document.querySelector('.navbar__search-input');
    if (!searchInput) {
      return null;
    }

    const handleInput = () => {
      const query = searchInput.value.trim();
      
      if (query) {
        // 検索ワードがある場合は少し遅延させて検索結果が表示されるのを待つ
        setTimeout(() => {
          const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
          if (dropdownMenu && dropdownMenu.style.display !== 'none') {
            const currentQuery = searchInput.value.trim();
            if (currentQuery) {
              this.addAskAIOption(currentQuery);
            }
            // ドロップダウンメニューの監視を開始
            if (!this.dropdownObserver) {
              this.dropdownObserver = this.observeDropdownMenu();
            }
          }
        }, 50);
      } else {
        // 検索ワードが空の場合はAskAIオプションを削除
        this.cleanupSearchPanel();
        // ドロップダウンメニューの監視を停止
        if (this.dropdownObserver) {
          this.dropdownObserver.disconnect();
          this.dropdownObserver = null;
        }
      }
    };

    const handleKeyDown = (e) => {
      // Enterキーが押された場合の処理
      if (e.key === 'Enter') {
        const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
        if (dropdownMenu && dropdownMenu.style.display !== 'none') {
          const selectedSuggestion = dropdownMenu.querySelector('.suggestion_fB_2[class*="cursor"]');
          
          // AskAIオプションが選択されている場合のみ処理を停止
          if (selectedSuggestion && selectedSuggestion.classList.contains('ask-ai-suggestion')) {
            // AskAIオプションが選択されている場合は、通常の検索処理を停止
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // AskAIの処理を実行
            const query = selectedSuggestion.document?.t || selectedSuggestion.document?.title || '';
            if (query) {
              this.handleAskAIClick(query);
            }
            return;
          }
          
          // AskAIオプションが選択されていない場合は、AIオプションを検索結果から除外
          const askAIOptions = dropdownMenu.querySelectorAll('.ask-ai-suggestion');
          askAIOptions.forEach(option => {
            option.remove();
          });
        }
        
        // 通常の検索処理を継続
        // 何もしない（デフォルトの検索動作を許可）
      }
    };

    const handleBlur = () => {
      // 少し遅延させてクリックイベントが処理されるのを待つ
      setTimeout(() => {
        // AIオプションを検索結果から除外
        const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
        if (dropdownMenu) {
          const askAIOptions = dropdownMenu.querySelectorAll('.ask-ai-suggestion');
          askAIOptions.forEach(option => {
            option.remove();
          });
        }
        
        this.cleanupSearchPanel();
        if (this.dropdownObserver) {
          this.dropdownObserver.disconnect();
          this.dropdownObserver = null;
        }
      }, 150);
    };

    const handleFocus = () => {
      const query = searchInput.value.trim();
      if (query) {
        // 少し遅延させて検索結果が表示されるのを待つ
        setTimeout(() => {
          const dropdownMenu = document.querySelector('.dropdownMenu_qbY6');
          if (dropdownMenu) {
            const isVisible = dropdownMenu.style.display !== 'none' && 
                             dropdownMenu.offsetParent !== null;
            
            if (isVisible) {
              const currentQuery = searchInput.value.trim();
              if (currentQuery) {
                this.addAskAIOption(currentQuery);
              }
              if (!this.dropdownObserver) {
                this.dropdownObserver = this.observeDropdownMenu();
              }
            } else {
              // ドロップダウンメニューが表示されていない場合は、少し待って再試行
              setTimeout(() => {
                const retryDropdownMenu = document.querySelector('.dropdownMenu_qbY6');
                if (retryDropdownMenu && retryDropdownMenu.style.display !== 'none') {
                  const currentQuery = searchInput.value.trim();
                  if (currentQuery) {
                    this.addAskAIOption(currentQuery);
                  }
                  if (!this.dropdownObserver) {
                    this.dropdownObserver = this.observeDropdownMenu();
                  }
                }
              }, 200);
            }
          }
        }, 100);
      }
    };

    // イベントリスナーを追加
    searchInput.addEventListener('input', handleInput);
    searchInput.addEventListener('keydown', handleKeyDown);
    searchInput.addEventListener('blur', handleBlur);
    searchInput.addEventListener('focus', handleFocus);
    
    // クリーンアップ関数を返す
    return () => {
      searchInput.removeEventListener('input', handleInput);
      searchInput.removeEventListener('keydown', handleKeyDown);
      searchInput.removeEventListener('blur', handleBlur);
      searchInput.removeEventListener('focus', handleFocus);
      if (this.dropdownObserver) {
        this.dropdownObserver.disconnect();
      }
    };
  }
}
