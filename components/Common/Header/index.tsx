import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

import styles from './index.module.css';
import Navigation from './Navigation';

const Header = (): ReactElement => {
  return (
    <>
      <button className={styles.btn}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <header className={clsx(styles.header)}>
        <div className="container">
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
