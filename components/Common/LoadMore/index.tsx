import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from './index.module.css';

const LoadMore = (): ReactElement => (
    <div className={css.container}>
        <button className={clsx('btn', 'btn--blue', css.btn)} type="button">
            Load more
        </button>
    </div>
);

export default LoadMore;
