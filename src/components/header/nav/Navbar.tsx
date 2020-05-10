import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navbar.module.css';

interface Props {
  menu: boolean;
  toggleMenu(menu: boolean): void;
}

const Navbar: React.FC<Props> = ({ menu, toggleMenu }) => {
  const menuClass = clsx(styles.list, menu && styles.open);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.mobileMenu}
        type="button"
        onClick={() => toggleMenu(menu)}
      >
        <span />
        <span />
      </button>

      <ul className={menuClass}>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
            onClick={() => toggleMenu(menu)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trial"
            className={styles.link}
            activeClassName={styles.active}
            onClick={() => toggleMenu(menu)}
          >
            Get trial accaunt
          </NavLink>
        </li>
      </ul>

      <Link to="/signup" className="btn btn--blue">
        Sign up
      </Link>
    </nav>
  );
};

export default Navbar;
