import React from 'react';
import ReactDOM from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

/**
 * Markdownレンダリングユーティリティクラス
 * Markdownの処理、シンタックスハイライト、HTMLエスケープを担当
 */
export class MarkdownRenderer {
  constructor() {
    this.containerRoots = new Map();
  }

  /**
   * HTMLエスケープ関数
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Markdownをレンダリング
   */
  renderMarkdown(text, container) {
    if (!text || !container) {
      console.warn('renderMarkdown: Missing text or container', { text: !!text, container: !!container });
      return;
    }

    // エスケープされた改行文字を実際の改行に変換
    const processedText = text.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    
    try {
      // マークダウン専用のコンテナを作成または取得
      let markdownContainer = container.querySelector('.ask-ai-markdown');
      if (!markdownContainer) {
        markdownContainer = document.createElement('div');
        markdownContainer.className = 'ask-ai-markdown';
        container.appendChild(markdownContainer);
      }
      
      // 既存のrootを取得または新規作成
      let root = this.containerRoots.get(markdownContainer);
      if (!root) {
        root = ReactDOM.createRoot(markdownContainer);
        this.containerRoots.set(markdownContainer, root);
      }
      
      // 直接ReactMarkdownコンポーネントをレンダリング
      root.render(
        React.createElement(MDXProvider, null,
          React.createElement(ReactMarkdown, {
            remarkPlugins: [remarkGfm],
            components: {
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  React.createElement('div', { className: 'code-block' },
                    React.createElement('div', { className: 'code-block-header' },
                      React.createElement('span', { className: 'code-block-language' }, match[1]),
                      React.createElement('div', { className: 'code-block-buttons' },
                        React.createElement('button', {
                          className: 'code-block-copy',
                          onClick: () => {
                            const codeText = String(children).replace(/\n$/, "");
                            navigator.clipboard.writeText(codeText).then(() => {
                              // コピー成功時のフィードバック
                              const btn = event.target.closest('.code-block-copy');
                              const originalHTML = btn.innerHTML;
                              btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="16" height="16" style="min-width: 16px; min-height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>';
                              btn.style.color = '#10b981';
                              setTimeout(() => {
                                btn.innerHTML = originalHTML;
                                btn.style.color = '';
                              }, 2000);
                            }).catch(err => {
                              console.error('コピーに失敗しました:', err);
                            });
                          }
                        }, React.createElement('svg', {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          width: "16",
                          height: "16",
                          style: { minWidth: "16px", minHeight: "16px" }
                        }, React.createElement('path', {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        })))
                      )
                    ),
                    React.createElement('div', { className: 'code-block-content' },
                      React.createElement(SyntaxHighlighter, {
                        style: duotoneLight,
                        language: match[1],
                        PreTag: "div",
                        showLineNumbers: false,
                        wrapLines: true,
                        ...props
                      }, String(children).replace(/\n$/, ""))
                    )
                  )
                ) : (
                  React.createElement('code', { className: className, ...props }, children)
                );
              },
              table({ children, ...props }) {
                return React.createElement('div', { className: "table-wrapper" },
                  React.createElement('table', { className: "markdown-table", ...props }, children)
                );
              },
            }
          }, processedText)
        )
      );
      
    } catch (error) {
      console.error('Markdown rendering error:', error);
      // フォールバック: プレーンテキストとして表示
      try {
        container.innerHTML = `<div class="markdown-content">${this.escapeHtml(processedText)}</div>`;
      } catch (fallbackError) {
        console.error('Fallback rendering also failed:', fallbackError);
        container.textContent = processedText;
      }
    }
  }

  /**
   * コンテナのクリーンアップ
   */
  cleanup(container) {
    if (container && this.containerRoots.has(container)) {
      const root = this.containerRoots.get(container);
      root.unmount();
      this.containerRoots.delete(container);
    }
  }
}
