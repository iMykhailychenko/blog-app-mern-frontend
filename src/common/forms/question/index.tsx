import React from 'react';
import { useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import clsx from 'clsx';
import { getAuth } from '../../../redux/selectors';
import styles from './index.module.css';
import user from '../../../assets/user';

interface Values {
    name: string;
    email: string;
    text: string;
}

interface Errors {
    name?: string;
    email?: string;
    text?: string;
}

// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default () => {
    const { isAuth } = useSelector(getAuth);

    const initialValues: Values = {
        name: isAuth ? user.name : '',
        email: isAuth ? user.email : '',
        text: '',
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
                console.log(values);
            }}
        >
            {() => (
                <Form>
                    <h2 className={styles.title}>How can I help you?</h2>

                    <Field
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="name"
                    />
                    <ErrorMessage
                        name="name"
                        render={msg => (
                            <span className={styles.errors}>{msg}</span>
                        )}
                    />

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

                    <Field
                        className={clsx(styles.input, styles.textarea)}
                        as="textarea"
                        type="email"
                        name="text"
                        placeholder="text"
                    />
                    <ErrorMessage
                        name="text"
                        render={msg => (
                            <span className={styles.errors}>{msg}</span>
                        )}
                    />

                    <button className="btn btn--info" type="submit">
                        Send question
                    </button>
                </Form>
            )}
        </Formik>
    );
};
