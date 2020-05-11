import React, { Component, ChangeEvent } from 'react';
import clsx from 'clsx';
import styles from './MainImg.module.css';

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
    const container = clsx(styles.container, mainImg && styles.containerWitImg);
    const lable = clsx(styles.lable, mainImg && styles.lableWitImg);

    return (
      <div className={container}>
        {mainImg && (
          <>
            <img className={styles.img} src={mainImg} alt="" />
            <button className={styles.imgBtn}>Delete</button>
          </>
        )}

        <label className={lable}>
          <span>
            {mainImg
              ? 'Change image'
              : 'Choose main post image ( .jpg, .jpeg, .png, .webp, .gif )'}
          </span>

          <input
            type="file"
            className={styles.addImg}
            onChange={this.handleChange}
            name="img"
            accept=".jpg, .jpeg, .png, .webp, .gif"
          />
        </label>
      </div>
    );
  }
}
