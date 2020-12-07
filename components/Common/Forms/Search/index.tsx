import React, { ChangeEvent, FormEvent, ReactElement } from 'react';

import styles from './index.module.css';

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
    <form
      className={styles.form}
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className={styles.inner}>
        <label className={styles.label}>
          <p className={styles.text}>What do you want to read?</p>
          <div className={styles.input_wrp}>
            <input
              value={value}
              onChange={handleChange}
              type="text"
              name="search"
              className={styles.input}
              placeholder="start typing"
            />
            <input type="reset" className={styles.reset} value="&#10005;" />
          </div>
        </label>
        <button type="submit" className="btn btn--blue">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
