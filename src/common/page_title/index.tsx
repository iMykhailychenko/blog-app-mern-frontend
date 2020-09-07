import React, { ReactNode, ReactElement } from 'react';
import styles from './index.module.css';

export default ({ children }: { children: ReactElement | ReactNode }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{children}</h1>
        </div>
    );
};
