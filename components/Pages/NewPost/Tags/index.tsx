import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import inputs from '../inputs.module.css';
import styles from './index.module.css';

const Tags = (): ReactElement => {
  const dispatch = useDispatch();
  // const value = useSelector(getTags);

  return (
    <>
      <p className={styles.text}>Provide tags for your post:</p>

      {/* <ul className={styles.list}>
                {generateTags(value).map((tag, index) => (
                    <li className={styles.item} key={tag + index}>{`#${tag.length < 15 ? tag : tag.slice(0, 15)}`}</li>
                ))}
            </ul> */}

      <input
        type="text"
        name="tags"
        className={clsx(inputs.input, inputs.empty, styles.input)}
        placeholder="javascipt react redux..."
      />
    </>
  );
};

export default Tags;
