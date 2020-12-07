import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import css from './index.module.css';
import Navigation from './Navigation';

const Header = (): ReactElement => {
  return (
    <>
      <button className={css.btn}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <header className={css.header}>
        <div className="container">
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
