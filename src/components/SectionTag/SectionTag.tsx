import type { FC } from 'react';
import styles from './SectionTag.module.scss';

interface SectionTagProps {
  /** Order number shown before the label, e.g. 1 -> "01". */
  number: number;
  /** Text shown after the number, e.g. "FEATURED GAME". */
  label: string;
  /** Colour scheme of the tag. */
  variant?: 'yellow' | 'orange';
}

const SectionTag: FC<SectionTagProps> = ({ number, label, variant = 'yellow' }) => (
  <div className={`${styles.tag} ${styles[variant]}`}>
    <span className={styles.bullet} aria-hidden="true" />
    <span className={styles.text}>
      {String(number).padStart(2, '0')} / {label}
    </span>
  </div>
);

export default SectionTag;
