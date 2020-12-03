import React, { ReactElement } from 'react';
import styles from './index.module.css';
interface IParam {
    params: {
        [key: string]: string;
    };
}

const Picture = (): ReactElement => {
    return <img className={styles.banner} src="/about.jpg" alt="banner" />;
};

export default Picture;
