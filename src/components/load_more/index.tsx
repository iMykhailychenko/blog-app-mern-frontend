import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

const btn = clsx('btn', 'btn--blue', styles.btn);

export default () => (
    <div className={styles.container}>
        <button className={btn} type="button">
            Load more
        </button>
    </div>
);
