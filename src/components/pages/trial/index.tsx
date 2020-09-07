import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../common/page_title';
import router from '../../../config/router';
import styles from './index.module.css';

export default () => {
    return (
        <>
            <PageTitle>
                Do not want to register but interesting?{' '}
                <span role="img" aria-label="img">
                    🤔
                </span>
            </PageTitle>

            <div className={styles.content}>
                <img className={styles.img} src="trial.jpg" alt="" />

                <div className={styles.inner}>
                    <h2 className={styles.title}>
                        You are lucky, I signed up for you
                    </h2>
                    <p className={styles.text}>
                        Just go to the <Link to={router.auth.login}>login</Link>{' '}
                        page and enter this email and password:
                    </p>
                    <kbd>example@mail.com</kbd>
                    <br />
                    <kbd>Asdf1234</kbd>
                    <p className={styles.text}>
                        After login you will get access to the test account.
                        will be able to create / delete / modify posts and much
                        more
                    </p>
                </div>
            </div>
        </>
    );
};
