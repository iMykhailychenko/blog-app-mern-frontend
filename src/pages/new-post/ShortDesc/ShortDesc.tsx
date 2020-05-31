import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { descActions } from '../../../redux/post-editor/editorActions';
// libs
import clsx from 'clsx';
// styles
import styles from './ShortDesc.module.css';
import defaultStyles from '../Input.module.css';

const input = clsx(styles.text, defaultStyles.input);

const ShortDesc = () => {
    const dispatch = useDispatch();

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        dispatch(descActions(event.target.value));
    };

    return (
        <textarea
            className={input}
            onChange={handleInput}
            name="title"
            placeholder="Provide a short description for a post preview ..."
        />
    );
};

export default ShortDesc;
