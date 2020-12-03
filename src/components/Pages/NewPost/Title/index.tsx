import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { getTitle } from '../../../../redux/selectors';
import inputs from '../inputs.module.css';
import styles from './index.module.css';

const Title = (): ReactElement => {
    const dispatch = useDispatch();
    const value = useSelector(getTitle);

    return <input type="text" name="title" className={clsx(inputs.input, styles.input)} placeholder="Title" />;
};

export default Title;
