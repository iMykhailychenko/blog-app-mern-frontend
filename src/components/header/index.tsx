import React from 'react';
import Navbar from './nav';
import styles from './index.module.css';

export default () => (
    <header className={styles.header}>
        <div className="container">
            <Navbar />
        </div>
    </header>
);
