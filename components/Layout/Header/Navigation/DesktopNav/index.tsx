import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../../assets/routes';
import useAuth from '../../../../../hooks/auth.hook';
import css from '../index.module.css';

const DesktopNav = (): ReactElement => {
    const auth = useAuth();

    return (
        <ul className={clsx(css.list, css.open)}>
            <li>
                <Link href={routes.home}>
                    <a className={css.link}>Home</a>
                </Link>
            </li>
            <li>
                <Link href={routes.about}>
                    <a className={css.link}>About</a>
                </Link>
            </li>
            <li>
                <Link href={routes.question}>
                    <a className={css.link}>Question</a>
                </Link>
            </li>
            {!auth?.token && (
                <li>
                    <Link href={routes.trial}>
                        <a className={css.link}>Get trial account</a>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default DesktopNav;
