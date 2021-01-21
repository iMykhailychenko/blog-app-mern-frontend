import clsx from 'clsx';
import { Router, useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import types from '../../../../redux/types';
import css from './index.module.css';

const EditButton = (): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const handleReset = (): void => {
            dispatch({ type: types.RESET_POST_FORM });
        };
        Router.events.on('routeChangeComplete', handleReset);

        return () => {
            Router.events.off('routeChangeComplete', handleReset);
        };
    }, []);

    const handleSubmit = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setTimeout(() => {
            dispatch({ type: types.UPDATE_POST_START, payload: router.query.postId, router });
        }, 200);
    };

    return (
        <div className={css.flex}>
            <button onClick={handleSubmit} className={clsx('btn btn--blue', css.btn)} type="button">
                Save Editing
            </button>
        </div>
    );
};

export default EditButton;
