import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import types from '../../../../redux/types';
import css from './index.module.css';

const SubmitButtons = (): ReactElement => {
    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        dispatch({ type: types.PUBLISH_POSTS_START });
    };

    return (
        <div className={css.flex}>
            <button onClick={handleSubmit} className={clsx('btn btn--blue', css.btn)} type="button">
                Опубликовать
            </button>
        </div>
    );
};

export default SubmitButtons;
