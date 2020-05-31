import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { titleActions } from '../../../redux/post-editor/editorActions';
//libs
import clsx from 'clsx';
// styles
import styles from './MainTitleInput.module.css';
import defaultStyles from '../Input.module.css';

const input = clsx(styles.title, defaultStyles.input);

const MainTitleInput: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch(titleActions(event.target.value));
    };

    const mobile = window.innerWidth > 768;

    return (
        <input
            className={input}
            onChange={handleInput}
            type="text"
            name="title"
            placeholder={mobile ? 'Add post title' : 'Title'}
        />
    );
};

export default MainTitleInput;
