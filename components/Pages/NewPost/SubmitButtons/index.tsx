import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import types from '../../../../redux/types';
import css from './index.module.css';

const SubmitButtons = (): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setTimeout(() => {
            dispatch({ type: types.PUBLISH_POSTS_START, router });
        }, 200);
    };

    return (
        <div className={css.flex}>
            <button onClick={handleSubmit} className={clsx('btn btn--blue', css.btn)} type="button">
                Submit Post
            </button>
        </div>
    );
};

export default SubmitButtons;
