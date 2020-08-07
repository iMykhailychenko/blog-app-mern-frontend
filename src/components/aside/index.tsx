import React, { ReactNode } from 'react';
import styles from './index.module.css';

export default ({ children }: { children: ReactNode }) => (
    <aside className={styles.aside}>
        <div className={styles.inner}>{children}</div>
    </aside>
);
