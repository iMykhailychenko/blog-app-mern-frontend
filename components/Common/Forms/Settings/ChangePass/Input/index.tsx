import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ChangeEvent, ReactElement, useState } from 'react';

import css from '../../index.module.css';

interface IProps {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    className?: string;
    placeholder?: string;
    error?: string;
}

const Input = ({ value, onChange, className, name, placeholder, error }: IProps): ReactElement => {
    const [type, setType] = useState<'text' | 'password'>('password');

    const handleType = (): void => {
        setType(value => (value === 'text' ? 'password' : 'text'));
    };

    return (
        <>
            <div className={css.wrp}>
                <button className={css.btn} onClick={handleType} type="button">
                    <FontAwesomeIcon icon={type === 'text' ? faEye : faEyeSlash} />
                </button>
                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={clsx(css.input, className, error && css.inputError)}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
            {error && <span className={css.passError}>{error}</span>}
        </>
    );
};

export default Input;
