import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../../routes';
import styles from './index.module.css';

const Nav = (): ReactElement => {
    return (
        <ul className={styles.list}>
            <li>
                <Link to={routes.Home.path}>Home</Link>
            </li>
            <li>
                <Link to={routes.About.path}>About</Link>
            </li>
            <li>
                <Link to={routes.Question.path}>Help</Link>
            </li>
            <li>
                <Link to={routes.Trial.path}>Get trial accaunt</Link>
            </li>
        </ul>
    );
};

export default Nav;
