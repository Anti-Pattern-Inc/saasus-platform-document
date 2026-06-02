import React, { useState, ReactNode } from 'react';
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

  const label = children ?? (
    <Translate id="inquiry.button.label">Contact us</Translate>
  );

  return (
    <>
      <button
        type="button"
        className={variant === 'inline' ? styles.inline : styles.button}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      <InquiryDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
