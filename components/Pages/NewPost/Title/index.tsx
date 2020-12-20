import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import inputs from '../inputs.module.css';
import css from './index.module.css';

const Title = (): ReactElement => {
    const dispatch = useDispatch();
    const title = useSelector<IState, string>(state => state.posts.newPost.title);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({ type: types.NEW_POST_TITLE, payload: event.target.value });
    };

    return (
        <input
            value={title}
            onChange={handleChange}
            type="text"
            name="title"
            className={clsx(inputs.input, inputs.empty, css.input)}
            placeholder="Title"
        />
    );
};

export default Title;
