import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import routes from '../../../../../assets/routes';
import { IState } from '../../../../../interfaces';
import styles from '../index.module.css';

const DesktopNav = ({ className }: { className?: string }): ReactElement => {
    const token = useSelector<IState, string | null>(state => state.auth.token);

    return (
        <ul className={className}>
            <li>
                <Link href={routes.home}>
                    <a className={styles.link}>Home</a>
                </Link>
            </li>
            <li>
                <Link href={routes.about}>
                    <a className={styles.link}>About</a>
                </Link>
            </li>
            <li>
                <Link href={routes.question}>
                    <a className={styles.link}>Question</a>
                </Link>
            </li>
            {!token && (
                <li>
                    <Link href={routes.trial}>
                        <a className={styles.link}>Get trial accaunt</a>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default DesktopNav;
