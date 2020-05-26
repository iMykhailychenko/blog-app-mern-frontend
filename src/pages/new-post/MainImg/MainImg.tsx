import React, { useState, ChangeEvent, createRef } from 'react';
import clsx from 'clsx';
import styles from './MainImg.module.css';


const MainImg: React.FC<{}> = () => {
  const fileInputRef = createRef<HTMLInputElement>();
  const [mainImg, setMainImg] = useState('');

  // get img from pc
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (!files || !files.length) return;
    setMainImg(window.URL.createObjectURL(files[0]));
  };

  // delete img 
  const handleClick = (): void => {
    const { current } = fileInputRef;

    if (!current || !current.files || !current.files.length) return;
    current.value = '';
    setMainImg('');
  };

  // css classes
  const container = clsx(styles.container, mainImg && styles.containerWitImg);
  const lable = clsx(styles.lable, mainImg && styles.lableWitImg);

  return (
    <div className={container}>
      {mainImg && (
        <>
          <img className={styles.img} src={mainImg} alt="" />
          <button className={styles.imgBtn} onClick={handleClick}>
            Remove
          </button>
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
          ref={fileInputRef}
          className={styles.addImg}
          onChange={handleChange}
          name="img"
          accept=".jpg, .jpeg, .png, .webp, .gif"
        />
      </label>
    </div>
  );
};

export default MainImg;
