import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { getDesc } from '../../../../redux/selectors';
import inputs from '../inputs.module.css';
import styles from './index.module.css';

const Desc = (): ReactElement => {
    const dispatch = useDispatch();
    const value = useSelector(getDesc);

    return (
        <textarea
            name="desc"
            cols={30}
            rows={40}
            placeholder="Short description for the post preview"
            className={clsx(inputs.input, styles.input)}
        />
    );
};

export default Desc;
