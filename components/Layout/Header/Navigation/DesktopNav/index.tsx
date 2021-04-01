import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import routes from '../../../../../assets/routes';
import useAuth from '../../../../../hooks/auth.hook';
import css from '../index.module.css';

const DesktopNav = (): ReactElement => {
    const auth = useAuth();
    const history = useRouter();

    return (
        <ul className={clsx(css.list, css.open)}>
            <li>
                <Link href={routes.home}>
                    <a className={clsx(css.link, routes.home === history.pathname && css.active)}>Home</a>
                </Link>
            </li>
            <li>
                <Link href={routes.about}>
                    <a className={clsx(css.link, routes.about === history.pathname && css.active)}>About</a>
                </Link>
            </li>
            <li>
                <Link href={routes.question}>
                    <a className={clsx(css.link, routes.question === history.pathname && css.active)}>Question</a>
                </Link>
            </li>
            {!auth && (
                <li>
                    <Link href={routes.trial}>
                        <a className={clsx(css.link, routes.trial === history.pathname && css.active)}>
                            Get trial account
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default DesktopNav;
