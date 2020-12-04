import React, { ReactElement, ReactNode } from 'react';

import styles from './index.module.css';

const PageTitle = ({ children }: { children: ReactElement | ReactNode }): ReactElement => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{children}</h1>
        </div>
    );
};

export default PageTitle;
