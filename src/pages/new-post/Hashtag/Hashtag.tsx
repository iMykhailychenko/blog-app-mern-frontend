import React, { Component, ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './Hashtag.module.css';
import inputStyles from '../Input.module.css';

interface Props {}

export default class Hashtag extends Component<Props> {
  state = {
    value: '',
  };

  handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    this.setState({ value });
  };

  render() {
    const input = clsx(inputStyles.input, styles.input);
    const { value } = this.state;

    const tagsArr = value.split(' ').map(tag => `#${tag}`);
    const tags = tagsArr.join(' ');

    return (
      <>
        <h4 className={styles.title}>Add some hashtags for your post</h4>

        <input
          className={input}
          value={value}
          onChange={this.handleInput}
          type="text"
          name="hashtag"
          placeholder="nature sun river weekend ..."
        />

        {tags.length === 1 ? (
          <p className={styles.tags}></p>
        ) : (
          <p className={styles.tags}>{tags}</p>
        )}
      </>
    );
  }
}
