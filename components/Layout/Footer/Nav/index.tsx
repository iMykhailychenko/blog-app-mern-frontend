import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../assets/routes';
import styles from './index.module.css';

const Nav = (): ReactElement => {
    return (
        <ul className={styles.list}>
            <li>
                <Link href={routes.home}>Home</Link>
            </li>
            <li>
                <Link href={routes.about}>About</Link>
            </li>
            <li>
                <Link href={routes.question}>Help</Link>
            </li>
            <li>
                <Link href={routes.trial}>Get trial accaunt</Link>
            </li>
        </ul>
    );
};

export default Nav;
