import React from 'react';
import { getDate } from '../../../../helpers/functions';
import styles from './index.module.css';

export default () => <p className={styles.date}>{`Date: ${getDate()}`}</p>;
