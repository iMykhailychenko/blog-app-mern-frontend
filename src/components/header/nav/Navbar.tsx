import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface Props {}

const Navbar: React.FC<Props> = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trial"
          className={styles.link}
          activeClassName={styles.active}
        >
          Get trial accaunt
        </NavLink>
      </li>
    </ul>

    <Link to="/login" className="btn btn--blue">
      Sign up
    </Link>
  </nav>
);

export default Navbar;
