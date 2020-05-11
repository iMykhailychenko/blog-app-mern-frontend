import React from 'react';
import clsx from 'clsx';

import styles from './MainTitleInput.module.css';
import defaultStyles from '../Input.module.css';

interface Props {}

const input = clsx(styles.title, defaultStyles.input);

const MainTitleInput: React.FC<Props> = () => (
  <input
    className={input}
    type="text"
    name="title"
    placeholder="Add post title"
  />
);

export default MainTitleInput;
