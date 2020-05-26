import React from 'react';
import { NavLink, Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../../redux/rootState';

// utils
import clsx from 'clsx';

// styles
import styles from './Navbar.module.css';


const Navbar: React.FC<{}> = () => {
  const menu = useSelector((state: IState) => state.menu);
  const dispatch = useDispatch();

  const menuClass = clsx(styles.list, menu && styles.open);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.mobileMenu}
        type="button"
        onClick={() => dispatch(menu)}
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
            onClick={() => dispatch(menu)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trial"
            className={styles.link}
            activeClassName={styles.active}
            onClick={() => dispatch(menu)}
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
