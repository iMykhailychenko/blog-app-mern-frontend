import React, { ReactElement } from 'react';

import { formateDate } from '../../../../assets/helpers';
import styles from './index.module.css';

const DateText = (): ReactElement => (
  <p className={styles.date}>{`Date: ${formateDate(Date.now())}`}</p>
);

export default DateText;
