import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../assets/routes';
import Picture from '../../components/Common/Picture';
import PageTitle from '../../components/Layout/PageTitle';
import css from './index.module.css';

const Trial = (): ReactElement => {
    return (
        <>
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
                    <kbd>Asdf1234</kbd>
                    <p className={css.text}>
                        After login you will get access to the test account. will be able to create / delete / modify
                        posts and much more
                    </p>
                </div>
            </div>
        </>
    );
};

export default Trial;
