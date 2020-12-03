import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export default () => (
    <div className={styles.container}>
        <button className={clsx('btn', 'btn--blue', styles.btn)} type="button">
            Load more
        </button>
    </div>
);
