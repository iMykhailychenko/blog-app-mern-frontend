import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { IAuth, IState } from '../../../../interfaces';
import css from './index.module.css';

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
    const auth = useSelector<IState, IAuth | null>(state => state.auth);

    return (
        <Formik
            initialValues={
                auth?.user
                    ? { name: `${auth?.user.name} ${auth?.user.surname}`, email: auth?.user.email, text: '' }
                    : initialValues
            }
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
                    <p className={css.text}>How can I help you?</p>

                    <Field className={css.input} type="text" name="name" placeholder="name" />
                    <ErrorMessage name="name" render={msg => <span className={css.errors}>{msg}</span>} />

                    <Field className={css.input} type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" render={msg => <span className={css.errors}>{msg}</span>} />

                    <TextareaAutosize
                        className={clsx(css.input, css.textarea)}
                        name="text"
                        placeholder="your question"
                    />
                    <ErrorMessage name="text" render={msg => <span className={css.errors}>{msg}</span>} />

                    <button className="btn btn--blue" type="submit">
                        Send question
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Question;
