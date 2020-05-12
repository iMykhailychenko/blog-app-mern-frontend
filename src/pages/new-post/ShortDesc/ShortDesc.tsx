import React from 'react';
import clsx from 'clsx';

import styles from './ShortDesc.module.css';
import defaultStyles from '../Input.module.css';

interface Props {}

const input = clsx(styles.text, defaultStyles.input);

const ShortDesc: React.FC<Props> = () => (
  <textarea
    className={input}
    name="title"
    placeholder="Provide a short description for a post preview ..."
  />
);

export default ShortDesc;
