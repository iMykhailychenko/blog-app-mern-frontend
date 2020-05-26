import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';

// styles
import styles from './MainTitleInput.module.css';
import defaultStyles from '../Input.module.css';

const input = clsx(styles.title, defaultStyles.input);

const MainTitleInput: React.FC<{}> = () => {
  const [value, setValue] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <input
      className={input}
      onChange={handleInput}
      value={value}
      type="text"
      name="title"
      placeholder="Add post title"
    />
  );
};

export default MainTitleInput;
