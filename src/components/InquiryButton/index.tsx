import React, { useCallback, useRef, useState, ReactNode } from 'react';
import Translate from '@docusaurus/Translate';
import InquiryDialog from '@site/src/components/InquiryDialog';
import styles from './styles.module.css';

type Props = {
  children?: ReactNode;
  variant?: 'button' | 'inline';
};

export default function InquiryButton({
  children,
  variant = 'button',
}: Props): JSX.Element {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const label = children ?? (
    <Translate id="inquiry.button.label">Contact us</Translate>
  );

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    // Restore focus to the trigger so keyboard / screen-reader users
    // do not lose their position after the dialog closes.
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={variant === 'inline' ? styles.inline : styles.button}
        onClick={handleOpen}
      >
        {label}
      </button>
      <InquiryDialog open={open} onClose={handleClose} />
    </>
  );
}
