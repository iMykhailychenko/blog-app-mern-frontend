import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import routes from '../../../../assets/routes';
import types from '../../../../redux/types';
import GoogleFacebook from '../../GoogleFacebook';
import css from './index.module.css';

interface Values {
    email: string;
    password: string;
    remember: boolean;
}

interface Errors {
    email?: string;
    password?: string;
    remember?: boolean;
}

// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const initialValues: Values = {
    email: '',
    password: '',
    remember: false,
};

const FormLogin = (): ReactElement => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    return (
        <Formik
            initialValues={initialValues}
            validate={(): Errors => {
                const errors: Errors = {};
                return errors;
            }}
            onSubmit={(values, actions) => {
                dispatch({ type: types.LOGIN_START, payload: values });
                actions.resetForm();
            }}
        >
            {() => (
                <Form>
                    <h2 className={css.title}>Login to get more</h2>

                    <Field className={css.input} type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" render={msg => <span className={css.errors}>{msg}</span>} />

                    <div className={css.wrp}>
                        <button
                            className={css.show}
                            type="button"
                            onClick={() => {
                                setShow(!show);
                            }}
                        >
                            {show ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </button>
                        <Field
                            className={css.input}
                            type={show ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                        />
                        <ErrorMessage name="password" render={msg => <span className={css.errors}>{msg}</span>} />
                    </div>

                    <Link href={routes.auth.forgotPass}>
                        <a className={css.link}>Forgot your password?</a>
                    </Link>

                    <button className="btn btn--gray" type="submit">
                        Log in
                    </button>

                    <p className={css.text}>or login with:</p>

                    <GoogleFacebook />
                </Form>
            )}
        </Formik>
    );
};

export default FormLogin;
