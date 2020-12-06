import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import styles from './index.module.css';

const Search = (): ReactElement => {
  const dispatch = useDispatch();

  // const handleChange = (event: ChangeEvent<HTMLFormElement>): void => {
  //     dispatch(searchAction(event.target.value ? event.target.value : ''));
  // };

  return (
    <form className={styles.form} action="#" method="post">
      <div className={styles.inner}>
        <label className={styles.label}>
          <p className={styles.text}>What do you want to read?</p>
          <div className={styles.input_wrp}>
            <input
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

export default Search;
