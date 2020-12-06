import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../../routes';
import styles from './index.module.css';

const Login = (): ReactElement => {
  return (
    <p className={styles.tetx}>
      <Link to={routes.Auth.Login.path}>Login</Link>
      {' or '}
      {/* <Link to={routes.Auth.Si}>Singup</Link> */}
      {' to get more'}
    </p>
  );
};

export default Login;
