import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import inputs from '../inputs.module.css';
import styles from './index.module.css';

const Desc = (): ReactElement => {
  const dispatch = useDispatch();
  console.log(dispatch);
  // const value = useSelector(getDesc);

  return (
    <textarea
      name="desc"
      cols={30}
      rows={40}
      placeholder="Short description for the post preview"
      className={clsx(inputs.input, inputs.empty, styles.input)}
    />
  );
};

export default Desc;
