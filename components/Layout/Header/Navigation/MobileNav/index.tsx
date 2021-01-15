import Link from 'next/link';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import routes from '../../../../../assets/routes';
import useAuth from '../../../../Common/Auth/AuthContext';
import styles from '../index.module.css';
import css from '../index.module.css';

interface IProps {
    className?: string;
    onClick: () => void;
}

const MobileNav = ({ className, onClick }: IProps): ReactElement => {
    const auth = useAuth();
    const body = document.querySelector('body');

    return ReactDOM.createPortal(
        <>
            <div className={css.backdrop} onClick={onClick} aria-hidden />
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

                {!auth && (
                    <li>
                        <Link href={routes.trial}>
                            <a className={styles.link}>Get trial account</a>
                        </Link>
                    </li>
                )}
            </ul>
        </>,
        body,
    );
};

export default MobileNav;
