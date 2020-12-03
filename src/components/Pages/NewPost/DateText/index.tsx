import React, { ReactElement } from 'react';
import { getDate } from '../../../../assets/helpers';
import styles from './index.module.css';

const DateText = (): ReactElement => <p className={styles.date}>{`Date: ${getDate()}`}</p>;

export default DateText;
