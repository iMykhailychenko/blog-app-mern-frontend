import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { tagsActions } from '../../../redux/post-editor/editorActions';
// libs
import clsx from 'clsx';
// styles
import styles from './Hashtag.module.css';
import inputStyles from '../Input.module.css';

const Hashtag = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
        dispatch(tagsActions(event.target.value));
    };

    const input = clsx(inputStyles.input, styles.input);

    return (
        <>
            <h4 className={styles.title}>Add some hashtags for your post</h4>

            <p className={styles.tags}>{`#${value.split(' ').join(' #')}`}</p>

            <input
                className={input}
                onChange={handleInput}
                value={value}
                type="text"
                name="hashtag"
                placeholder="nature sun river weekend ..."
            />
        </>
    );
};

export default Hashtag;
