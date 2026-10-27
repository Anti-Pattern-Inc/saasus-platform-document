import React, {type ReactNode} from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import styles from './styles.module.css';

export default function FeatureTable({children}: {children: ReactNode}) {
  return <div className={styles.tableContainer}>{children}</div>;
}

export function FeatureAnchor({id, children}: {id: string; children: ReactNode}) {
  useBrokenLinks().collectAnchor(id);
  return <span id={id}>{children}</span>;
}
