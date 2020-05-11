import React from 'react';
import clsx from 'clsx';

import styles from './InputTitle.module.css';

interface Props {}

const input = clsx(styles.title, styles.input);

const InputTitle: React.FC<Props> = () => (
  <input
    className={input}
    type="text"
    name="title"
    placeholder="Add post title"
  />
);

export default InputTitle;
