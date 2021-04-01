import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import config from '../../../../assets/config';
import routes from '../../../../assets/routes';
import types from '../../../../redux/types';
import GoogleFacebook from '../../GoogleFacebook';
import css from './index.module.css';

interface Values {
    name: string;
    surname: string;
    email: string;
    password: string;
}

interface Errors {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
}

// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const FormSignUp = (): ReactElement => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const initialValues: Values = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={(): Errors => {
                const errors: Errors = {};
                return errors;
            }}
            onSubmit={(values, actions) => {
                dispatch({ type: types.SIGNUP_START, payload: values });
                actions.resetForm();
            }}
        >
            {() => (
                <Form>
                    <h2 className={css.title}>Login to get more</h2>

                    <Field className={css.input} type="text" name="name" placeholder="name" />
                    <ErrorMessage name="name" render={msg => <span className={css.errors}>{msg}</span>} />

                    <Field className={css.input} type="text" name="surname" placeholder="surname" />
                    <ErrorMessage name="surname" render={msg => <span className={css.errors}>{msg}</span>} />

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

                    <Link href={routes.auth.login}>
                        <a className={css.link}>Do you already have an account?</a>
                    </Link>

                    <button className="btn btn--gray" type="submit">
                        Submit
                    </button>

                    <p className={css.text}>or signup with:</p>

                    <GoogleFacebook />
                </Form>
            )}
        </Formik>
    );
};

export default FormSignUp;
