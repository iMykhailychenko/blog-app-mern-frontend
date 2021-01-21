import React, { ReactElement } from 'react';

import { formatDate } from '../../../../assets/helpers';
import css from './index.module.css';

const DateText = (): ReactElement => <p className={css.date}>{`Date: ${formatDate(Date.now())}`}</p>;

export default DateText;
