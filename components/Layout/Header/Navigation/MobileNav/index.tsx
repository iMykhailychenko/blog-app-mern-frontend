import Link from 'next/link';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import routes from '../../../../../assets/routes';
import { IAuth, IState } from '../../../../../interfaces';
import css from '../index.module.css';

interface IProps {
    className?: string;
    onClick: () => void;
}

const MobileNav = ({ className, onClick }: IProps): ReactElement | null => {
    const body = document.querySelector('body');
    const auth = useSelector<IState, IAuth | null>(state => state.auth);

    return body
        ? ReactDOM.createPortal(
              <>
                  <div className={css.backdrop} onClick={onClick} aria-hidden />
                  <ul className={className}>
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
              </>,
              body,
          )
        : null;
};

export default MobileNav;
