import React, { ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './Hashtag.module.css';
import inputStyles from '../Input.module.css';


interface Props {
  tags: string[];
  handleInput(event: ChangeEvent<HTMLInputElement>): void;
}

const Hashtag: React.FC<Props> = ({ tags, handleInput }) => {
  const input = clsx(inputStyles.input, styles.input);
  const tagsStr = tags.reduce(
    (acc, item) => (acc += !item ? '' : `#${item} `),
    '',
  );

  return (
    <>
      <h4 className={styles.title}>Add some hashtags for your post</h4>

      <input
        className={input}
        onChange={handleInput}
        type="text"
        name="hashtag"
        placeholder="nature sun river weekend ..."
      />

      <p className={styles.tags}>{tagsStr}</p>
    </>
  );
};

export default Hashtag;
