import clsx from 'clsx';
import React, { ChangeEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import inputs from '../inputs.module.css';
import css from './index.module.css';

const Desc = (): ReactElement => {
    const dispatch = useDispatch();
    const desc = useSelector<IState, string>(state => state.posts.newPost.desc);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        dispatch({ type: types.NEW_POST_DESC, payload: event.target.value });
    };

    return (
        <textarea
            value={desc}
            onChange={handleChange}
            name="desc"
            cols={30}
            rows={40}
            placeholder="Short description for the post preview"
            className={clsx(inputs.input, inputs.empty, css.input)}
        />
    );
};

export default Desc;
