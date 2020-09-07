import React from 'react';
import styles from './index.module.css';

export default ({ src }: { src: string }) => (
    <img className={styles.img} src={src} alt="attachment" />
);
