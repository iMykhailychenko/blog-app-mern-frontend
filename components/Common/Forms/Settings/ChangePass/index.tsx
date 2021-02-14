import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import css from '../index.module.css';
import Input from './Input';

interface Errors {
    oldPass?: string;
    newPass?: string;
    confirmPass?: string;
}

interface Value {
    oldPass: string;
    newPass: string;
    confirmPass: string;
}

const init: Value = { oldPass: '', newPass: '', confirmPass: '' };

const ChangePass = (): ReactElement => {
    const [error, setError] = useState<Errors>(init);
    const [value, setValue] = useState<Value>(init);
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue({ ...value, [event.target.name]: event.target.value });
        setError(init);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        // not empty
        if (!value.newPass) {
            setError({ newPass: 'This is required field' });
            return;
        }
        if (!value.confirmPass) {
            setError({ confirmPass: 'This is required field' });
            return;
        }
        if (!value.oldPass) {
            setError({ oldPass: 'This is required field' });
            return;
        }

        // not equal
        if (value.confirmPass !== value.newPass) {
            setError({ confirmPass: 'Passwords do not match' });
            return;
        }

        // not in right condition
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_#?!@$%^&*-]).{8,}$/.test(value.newPass)) {
            setError({
                newPass:
                    'Password must contain more than 8 characters: capital letters, numbers and special characters',
            });
            return;
        }
    };

    return (
        <form action="#" method="post" onSubmit={handleSubmit} className={css.flex}>
            <div className={css.inner}>
                <h3 className={css.subtitle}>New password:</h3>
                <Input
                    value={value.newPass}
                    onChange={handleChange}
                    className={css.input}
                    placeholder="new password"
                    name="newPass"
                    error={error.newPass}
                />

                <h3 className={css.subtitle}>Confirm password:</h3>
                <Input
                    value={value.confirmPass}
                    onChange={handleChange}
                    className={css.input}
                    placeholder="confirm password"
                    name="confirmPass"
                    error={error.confirmPass}
                />
            </div>
            <div className={css.inner}>
                <h3 className={css.subtitle}>Old password:</h3>
                <Input
                    value={value.oldPass}
                    onChange={handleChange}
                    className={css.input}
                    placeholder="old password"
                    name="oldPass"
                    error={error.oldPass}
                />

                <button className="btn btn--blue" type="submit">
                    Save
                </button>
            </div>
        </form>
    );
};

export default ChangePass;
