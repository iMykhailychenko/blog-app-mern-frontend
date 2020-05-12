import React from 'react';
import styles from './Aside.module.css';

interface Props {}

const Aside: React.FC<Props> = ({ children }) => (
  <aside className={styles.aside}>
    <div className={styles.inner}>{children}</div>
  </aside>
);

export default Aside;
