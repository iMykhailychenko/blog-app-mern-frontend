import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import routes from '../../../../assets/routes';
// import { useDispatch } from 'react-redux';
import css from './index.module.css';

interface Values {
    email: string;
}

interface Errors {
    email?: string;
}
// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const ForgotPass = (): ReactElement => {
    const initialValues: Values = {
        email: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={(values: Values): Errors => {
                const errors: Errors = {};
                console.log(values);
                return errors;
            }}
            onSubmit={(values, actions) => {
                actions.resetForm();
            }}
        >
            {() => (
                <Form>
                    <h2 className={css.title}>Enter your mail</h2>

                    <Field className={css.input} type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" render={msg => <span className={css.errors}>{msg}</span>} />

                    <Link href={routes.auth.login}>
                        <a className={css.link}>Go to login page</a>
                    </Link>

                    <button className="btn btn--gray" type="submit">
                        Get new password
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ForgotPass;
