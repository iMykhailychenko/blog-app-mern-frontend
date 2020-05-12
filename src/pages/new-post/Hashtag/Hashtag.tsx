import React, { Component } from 'react';
import clsx from 'clsx';

import styles from './Hashtag.module.css';
import inputStyles from '../Input.module.css';

interface Props {}

export default class Hashtag extends Component<Props> {
  render() {
    const input = clsx(inputStyles.input, styles.input);

    return (
      <>
        <h4 className={styles.title}>Add some hashtags for your post</h4>

        <input
          className={input}
          type="text"
          name="hashtag"
          placeholder="nature sun river weekend ..."
        />
      </>
    );
  }
}
