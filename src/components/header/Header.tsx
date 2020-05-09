import React from 'react';
import Navbar from './nav/Navbar';
import styles from './Header.module.css';

interface Props {}

const Header: React.FC<Props> = () => (
  <header className={styles.header}>
    <div className="container">
      <Navbar />
    </div>
  </header>
);

export default Header;
