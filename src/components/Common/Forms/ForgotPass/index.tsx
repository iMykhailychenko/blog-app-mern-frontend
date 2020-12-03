import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import router from '../../../config/router';
import styles from './index.module.css';

interface Values {
    email: string;
}

interface Errors {
    email?: string;
}
// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default () => {
    const initialValues: Values = {
        email: '',
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
                console.log('forgot pass');
            }}
        >
            {() => (
                <Form>
                    <h2 className={styles.title}>Enter your mail</h2>

                    <Field className={styles.input} type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" render={msg => <span className={styles.errors}>{msg}</span>} />

                    <Link className={styles.link} to={router.auth.login}>
                        Go to login page
                    </Link>

                    <button className="btn btn--gray" type="submit">
                        Get new password
                    </button>
                </Form>
            )}
        </Formik>
    );
};