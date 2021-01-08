import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { modal } from '../../../../../Common/Modal';
import css from './index.module.css';

interface IProps {
    src: string;
}

const Photo = ({ src }: IProps): ReactElement => {
    return (
        <div className={css.inner} onClick={modal.close} aria-hidden>
            <button className={css.close} type="button">
                <FontAwesomeIcon icon={faTimes} />
            </button>

            {src && <img className={css.banner} src={src} alt="" />}
        </div>
    );
};

export default Photo;
