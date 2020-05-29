import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './FormLogin.module.css';

interface Values {
    email: string;
    password: string;
}

interface Errors {
    email?: string;
    password?: string;
}

const initialValues: Values = {
    email: '',
    password: '',
};

// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const FormLogin: React.FC<{}> = () => (
    <>
        <Formik
            initialValues={initialValues}
            validate={(values: Values): Errors => {
                const errors: Errors = {};
                return errors;
            }}
            onSubmit={(values, actions) => {
                actions.resetForm();
                console.log('dddd');
            }}
        >
            {() => (
                <Form>
                    <h2 className={styles.title}>Log In to see more</h2>

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
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    <ErrorMessage
                        name="password"
                        render={msg => (
                            <span className={styles.errors}>{msg}</span>
                        )}
                    />

                    <button className="btn btn--info" type="submit">
                        Log in
                    </button>
                </Form>
            )}
        </Formik>

        <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            assumenda doloribus veritatis voluptatem nihil debitis itaque ea sed
            at optio. Ratione velit illo quis nisi iure sunt nobis consequatur
            quibusdam?
        </p>
    </>
);

export default FormLogin;
