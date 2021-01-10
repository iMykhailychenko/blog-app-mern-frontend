import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ChangeEvent, FormEvent, ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
}

const SearchForm = ({ value, onChange, onSubmit }: IProps): ReactElement => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
    };

    return (
        <form className={css.form} action="#" method="post" onSubmit={handleSubmit}>
            <div className={css.inner}>
                <label className={css.label}>
                    <p className={css.text}>What do you want to read?</p>
                    <div className={css.input_wrp}>
                        <input
                            value={value}
                            onChange={handleChange}
                            type="text"
                            name="search"
                            className={css.input}
                            placeholder="Start typing"
                        />
                        <button type="reset" className={css.reset}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </label>
                <button type="submit" className={clsx('btn btn--blue', css.submit)}>
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
