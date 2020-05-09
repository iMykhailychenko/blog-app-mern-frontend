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

interface Props {}

const initialValues: Values = {
  email: '',
  password: '',
};

// const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const FormLogin: React.FC<Props> = () => (
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
        <h2 className={styles.title}>Login to see more</h2>

        <Field
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
        />
        <ErrorMessage
          name="email"
          render={msg => <span className={styles.errors}>{msg}</span>}
        />

        <Field
          className={styles.input}
          type="password"
          name="password"
          placeholder="password"
        />
        <ErrorMessage
          name="password"
          render={msg => <span className={styles.errors}>{msg}</span>}
        />

        <div className={styles.btn}>
          <button className="btn btn--blue" type="submit">
            Log in
          </button>
          <button className="btn btn--gray" type="button">
            Sing in
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default FormLogin;
