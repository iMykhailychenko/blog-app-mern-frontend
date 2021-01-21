import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../assets/routes';
import AuthRedirect from '../../components/Common/Auth/AuthRedirect';
import Meta from '../../components/Common/Meta';
import Picture from '../../components/Common/Picture';
import serverRedirect from '../../components/HOC/ServerRedirect';
import { wrapper } from '../../redux/store';
import css from './index.module.css';

const Settings = (): ReactElement => {
    return (
        <>
            <AuthRedirect />
            <Meta
                title="Blog app | Demo account"
                description="Do not want to register but interesting? You are lucky, I signed up for you"
                keywords="login auth blog"
            />

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
                    <button className="btn btn--blue">Login now</button>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(serverRedirect(null, null));

export default Settings;
