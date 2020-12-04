import React, { ReactElement, ReactNode } from 'react';

import styles from './index.module.css';

const Aside = ({ children }: { children: ReactNode }): ReactElement => (
    <aside className={styles.aside}>
        <div className={styles.inner}>{children}</div>
    </aside>
);

export default Aside;
