import React, { ReactElement } from 'react';

import Login from '../../../Common/Loader/SmallLoader';
import styles from './index.module.css';

const AsideForm = (): ReactElement => (
    <>
        <Login />
        <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam assumenda doloribus veritatis voluptatem
            nihil debitis itaque ea sed at optio.
        </p>
    </>
);

export default AsideForm;
