import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../../assets/routes';
import styles from '../index.module.css';

interface IProps {
    className?: string;
}

const MobileNav = ({ className }: IProps): ReactElement => {
    // const { isAuth } = useSelector(getAuth);

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
            {/* {!isAuth && (
                <li>
                    <Link
                        href={routes.Trial.path}
                        className={styles.link}
                        activeClassName={styles.active}
                        onClick={onClick}
                    >
                        Get trial account
                    </Link>
                </li>
            )} */}
        </ul>
    );
};

export default MobileNav;
