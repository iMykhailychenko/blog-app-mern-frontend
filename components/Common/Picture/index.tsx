import clsx from 'clsx';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../interfaces';
import types from '../../../redux/types';
import css from './index.module.css';

interface IProps {
    className?: string;
}

const Picture = ({ className }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const picture = useSelector<IState, string | null>(state => state.picture);

    useEffect(() => {
        dispatch({ type: types.GET_PICTURE_START });
    }, []);

    return picture ? (
        <img className={clsx(css.banner, className)} src={picture} alt="" />
    ) : (
        <div className={clsx(css.banner, className)} />
    );
};

export default Picture;
