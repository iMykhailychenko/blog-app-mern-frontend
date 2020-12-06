import React, { ReactElement } from 'react';

import styles from './index.module.css';

interface IProps {
  text: string;
}

const NotificationError = ({ text }: IProps): ReactElement => {
  return <div className={styles.modal}>{text}</div>;
};

export default NotificationError;
