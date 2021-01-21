import React, { ReactElement, ReactNode } from 'react';

import css from './index.module.css';

const Aside = ({ children }: { children: ReactNode }): ReactElement => (
    <aside className={css.aside}>
        <div className={css.inner}>{children}</div>
    </aside>
);

export default Aside;
