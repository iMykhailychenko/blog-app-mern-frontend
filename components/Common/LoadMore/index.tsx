import clsx from 'clsx';
import React, { ReactElement } from 'react';

import styles from './index.module.css';

const LoadMore = (): ReactElement => (
  <div className={styles.container}>
    <button className={clsx('btn', 'btn--blue', styles.btn)} type="button">
      Load more
    </button>
  </div>
);

export default LoadMore;
