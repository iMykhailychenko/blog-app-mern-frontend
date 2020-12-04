import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import inputs from '../inputs.module.css';
import styles from './index.module.css';

const Title = (): ReactElement => {
    const dispatch = useDispatch();
    console.log(dispatch);
    // const value = useSelector(getTitle);

    return <input type="text" name="title" className={clsx(inputs.input, styles.input)} placeholder="Title" />;
};

export default Title;
