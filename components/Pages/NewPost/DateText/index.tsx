import React, { ReactElement } from 'react';

import { formatDate } from '../../../../assets/helpers';
import styles from './index.module.css';

const DateText = (): ReactElement => <p className={styles.date}>{`Date: ${formatDate(Date.now())}`}</p>;

export default DateText;
