import React, { ReactElement } from 'react';

import styles from './index.module.css';

const ImgModal = ({ src }: { src: string }): ReactElement => <img className={styles.img} src={src} alt="attachment" />;

export default ImgModal;
