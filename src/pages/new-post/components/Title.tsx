import React from 'react';
import clsx from 'clsx';

import styles from '../NewPost.module.css';

interface Props {}

const inputTitle = clsx(styles.title, styles.input);

const Title: React.FC<Props> = () => (
  <input
    className={inputTitle}
    type="text"
    name="title"
    placeholder="Add post title"
  />
);

export default Title;
