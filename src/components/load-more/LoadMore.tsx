import React from 'react';
import clsx from 'clsx';
import styles from './LoadMore.module.css';

interface Props {}

const btn = clsx('btn', 'btn--blue', styles.btn);

const LoadMore: React.FC<Props> = () => (
  <div className={styles.container}>
    <button className={btn} type="button">
      Load more
    </button>
  </div>
);

export default LoadMore;
