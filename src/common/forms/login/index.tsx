import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import router from '../../../config/router';
import { login } from '../../../components/auth/Auth.action';
import styles from './index.module.css';

interface Values {
    email: string;
    password: string;
}

interface Errors {
    email?: string;
    password?: string;
}

// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const initialValues: Values = {
        email: '',
        password: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={(values: Values): Errors => {
                const errors: Errors = {};
                return errors;
            }}
            onSubmit={(values, actions) => {
                actions.resetForm();
                console.log('dddd');
                dispatch(login());
            }}
        >
            {() => (
                <Form>
                    <h2 className={styles.title}>Login to get more</h2>

                    <Field
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="email"
                    />
                    <ErrorMessage
                        name="email"
                        render={msg => (
                            <span className={styles.errors}>{msg}</span>
                        )}
                    />

                    <div className={styles.wrp}>
                        <button
                            className={styles.show}
                            type="button"
                            onClick={() => {
                                setShow(!show);
                            }}
                        >
                            {show ? (
                                <FontAwesomeIcon icon={faEye} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} />
                            )}
                        </button>
                        <Field
                            className={styles.input}
                            type={show ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                        />
                        <ErrorMessage
                            name="password"
                            render={msg => (
                                <span className={styles.errors}>{msg}</span>
                            )}
                        />
                    </div>

                    <Link className={styles.link} to={router.auth.forgotPass}>
                        Forgot your password?
                    </Link>

                    <button className="btn btn--gray" type="submit">
                        Log in
                    </button>
                </Form>
            )}
        </Formik>
    );
};
