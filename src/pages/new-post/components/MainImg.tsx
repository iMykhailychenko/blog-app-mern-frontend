import React, { Component, ChangeEvent } from 'react';
import styles from '../NewPost.module.css';

interface Props {}
interface State {
  mainImg: string;
}

export default class MainImg extends Component<Props, State> {
  state = {
    mainImg: '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (!files || !files.length) return;

    const mainImg = window.URL.createObjectURL(files[0]);
    this.setState({ mainImg });
  };

  render() {
    const { mainImg } = this.state;

    return (
      <>
        {mainImg && <img src={mainImg} alt="" />}

        <label htmlFor="image_uploads" className={styles.addImgLable}>
          Choose main post image ( .jpg, .jpeg, .png, .webp, .gif )
        </label>

        <input
          id="image_uploads"
          type="file"
          className={styles.addImg}
          onChange={this.handleChange}
          name="img"
          accept=".jpg, .jpeg, .png, .webp, .gif"
        />
      </>
    );
  }
}
