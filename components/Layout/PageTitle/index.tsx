import React, { ReactElement, ReactNode } from 'react';

import css from './index.module.css';

const PageTitle = ({ children }: { children: ReactElement | ReactNode }): ReactElement => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>{children}</h1>
        </div>
    );
};

export default PageTitle;
