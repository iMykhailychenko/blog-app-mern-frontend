import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { IState, IUser } from '../../../../interfaces';
import styles from './index.module.css';

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
const initialValues: Values = {
    name: '',
    email: '',
    text: '',
};
// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Question = (): ReactElement => {
    const user = useSelector<IState, IUser>(state => state.auth.user);

    return (
        <Formik
            initialValues={user ? { name: `${user.name} ${user.surname}`, email: user.email, text: '' } : initialValues}
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
                    <h2 className={styles.title}>How can I help you?</h2>

                    <Field className={styles.input} type="text" name="name" placeholder="name" />
                    <ErrorMessage name="name" render={msg => <span className={styles.errors}>{msg}</span>} />

                    <Field className={styles.input} type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" render={msg => <span className={styles.errors}>{msg}</span>} />

                    <Field
                        className={clsx(styles.input, styles.textarea)}
                        as="textarea"
                        type="email"
                        name="text"
                        placeholder="text"
                    />
                    <ErrorMessage name="text" render={msg => <span className={styles.errors}>{msg}</span>} />

                    <button className="btn btn--info" type="submit">
                        Send question
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Question;
