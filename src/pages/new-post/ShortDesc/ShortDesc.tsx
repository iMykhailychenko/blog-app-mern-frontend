import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './ShortDesc.module.css';
import defaultStyles from '../Input.module.css';

interface Props {
  handleInput(event: ChangeEvent<HTMLTextAreaElement>): void;
}

const input = clsx(styles.text, defaultStyles.input);

const ShortDesc: React.FC<Props> = ({ handleInput }) => (
  <textarea
    className={input}
    onChange={handleInput}
    name="title"
    placeholder="Provide a short description for a post preview ..."
  />
);

export default ShortDesc;
