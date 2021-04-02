import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';

import { serverRedirect } from '../../assets/helpers';
import routes from '../../assets/routes';
import Meta from '../../components/Common/Meta';
import Picture from '../../components/Common/Picture';
import AuthRedirect from '../../components/HOC/Auth/AuthRedirect';
import PageTitle from '../../components/Layout/PageTitle';
import { IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const Trial = (): ReactElement => {
    const dispatch = useDispatch();
    const handleLogin = (): void => {
        dispatch({
            type: types.LOGIN_START,
            payload: { email: 'example@mail.com', password: 'Asdf1234@', remember: false },
        });
    };
    return (
        <>
            <AuthRedirect reverse />
            <Meta
                title="Blog app | Demo account"
                description="Do not want to register but interesting? You are lucky, I signed up for you"
                keywords="login auth blog"
            />
            <PageTitle>
                Do not want to register but interesting?{' '}
                <span role="img" aria-label="img">
                    🤔
                </span>
            </PageTitle>

            <div className={css.content}>
                <Picture className={css.img} />

                <div className={css.inner}>
                    <h2 className={css.title}>You are lucky, I signed up for you</h2>
                    <p className={css.text}>
                        Just go to the{' '}
                        <Link href={routes.auth.login}>
                            <a>login</a>
                        </Link>{' '}
                        page and enter this email and password:
                    </p>
                    <kbd>example@mail.com</kbd>
                    <br />
                    <kbd>Asdf1234@</kbd>
                    <p className={css.text}>
                        After login you will get access to the test account. will be able to create / delete / modify
                        posts and much more
                    </p>
                    <button className="btn btn--blue" onClick={handleLogin}>
                        Login now
                    </button>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async ctx => {
    const token = serverRedirect((ctx as unknown) as GetServerSidePropsContext, null, true);
    if (token) {
        ctx.store.dispatch({ type: types.GET_USER_INFO_START });
        ctx.store.dispatch(END);
        await (ctx.store as IStore).sagaTask.toPromise();
    }
});

export default Trial;
