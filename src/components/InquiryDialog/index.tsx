import React, { useEffect, useRef } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

const POST_URL =
  'https://account-engagement.anti-pattern.co.jp/l/985311/2026-06-01/2gpbd9';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function InquiryDialog({ open, onClose }: Props): JSX.Element | null {
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    firstInputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-dialog-title"
      onClick={onClose}
    >
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 id="inquiry-dialog-title" className={styles.title}>
            <Translate id="inquiry.dialog.title">
              Contact us about SaaSus Platform
            </Translate>
          </h2>
        </div>

        <form action={POST_URL} method="post">
          <div className={styles.content}>
            <p className={styles.consent}>
              <Translate
                id="inquiry.dialog.consent"
                values={{
                  legal: (
                    <a
                      href="https://anti-pattern.co.jp/legal/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Translate id="inquiry.dialog.consent.legalLink">
                        Privacy Policy
                      </Translate>
                    </a>
                  ),
                }}
              >
                {
                  'SaaSus Platform is operated by Anti-Pattern Inc. By submitting this form, you agree to our {legal}.'
                }
              </Translate>
            </p>

            <div className={styles.field}>
              <label htmlFor="inquiry-email" className={styles.label}>
                <Translate id="inquiry.dialog.field.email">Email</Translate>
                <span className={styles.required}>*</span>
              </label>
              <input
                ref={firstInputRef}
                id="inquiry-email"
                className={styles.input}
                type="email"
                name="email"
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="inquiry-company" className={styles.label}>
                <Translate id="inquiry.dialog.field.company">
                  Company name
                </Translate>
                <span className={styles.required}>*</span>
              </label>
              <input
                id="inquiry-company"
                className={styles.input}
                type="text"
                name="Company"
                required
                autoComplete="organization"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="inquiry-phone" className={styles.label}>
                <Translate id="inquiry.dialog.field.phone">
                  Phone number
                </Translate>
                <span className={styles.required}>*</span>
              </label>
              <input
                id="inquiry-phone"
                className={styles.input}
                type="tel"
                name="phone"
                required
                pattern="0[0-9]{9,10}"
                autoComplete="tel"
                placeholder={translate({
                  id: 'inquiry.dialog.field.phone.placeholder',
                  message: '10 or 11 digits without hyphens',
                })}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="inquiry-last-name" className={styles.label}>
                <Translate id="inquiry.dialog.field.lastName">
                  Last name
                </Translate>
                <span className={styles.required}>*</span>
              </label>
              <input
                id="inquiry-last-name"
                className={styles.input}
                type="text"
                name="last_name"
                required
                autoComplete="family-name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="inquiry-first-name" className={styles.label}>
                <Translate id="inquiry.dialog.field.firstName">
                  First name
                </Translate>
                <span className={styles.required}>*</span>
              </label>
              <input
                id="inquiry-first-name"
                className={styles.input}
                type="text"
                name="first_name"
                required
                autoComplete="given-name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="inquiry-content" className={styles.label}>
                <Translate id="inquiry.dialog.field.content">
                  Inquiry details
                </Translate>
                <span className={styles.required}>*</span>
              </label>
              <textarea
                id="inquiry-content"
                className={styles.textarea}
                name="content"
                required
                rows={4}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              <Translate id="inquiry.dialog.action.cancel">Cancel</Translate>
            </button>
            <button type="submit" className={styles.submitButton}>
              <Translate id="inquiry.dialog.action.submit">Send</Translate>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
