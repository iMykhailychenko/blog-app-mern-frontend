import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './MainTitleInput.module.css';
import defaultStyles from '../Input.module.css';

interface Props {
  handleInput(event: ChangeEvent<HTMLInputElement>): void;
}

const input = clsx(styles.title, defaultStyles.input);

const MainTitleInput: React.FC<Props> = ({ handleInput }) => (
  <input
    className={input}
    onChange={handleInput}
    type="text"
    name="title"
    placeholder="Add post title"
  />
);

export default MainTitleInput;
