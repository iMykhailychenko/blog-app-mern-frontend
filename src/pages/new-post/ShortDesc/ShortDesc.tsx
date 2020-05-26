import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './ShortDesc.module.css';
import defaultStyles from '../Input.module.css';

const input = clsx(styles.text, defaultStyles.input);

const ShortDesc: React.FC<{}> = () => {
  const [value, setValue] = useState('');

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  return (
    <textarea
      className={input}
      onChange={handleInput}
      value={value}
      name="title"
      placeholder="Provide a short description for a post preview ..."
    />
  );
};

export default ShortDesc;
