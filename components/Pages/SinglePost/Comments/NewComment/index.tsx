import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import routes from '../../../../../assets/routes';
import useAuth from '../../../../../hooks/auth.hook';
import types from '../../../../../redux/types';
import ProfileBig from '../../../../Common/Profile/ProfileBig';
import CommentForm from '../CommentForm';
import css from './index.module.css';

const NewComment = (): ReactElement => {
    const dispatch = useDispatch();
    const auth = useAuth();

    const handleSubmit = (payload: { id: string | string[]; form: FormData }): void => {
        dispatch({ type: types.POST_COMMENT_START, payload });
    };

    return auth.token ? (
        <div className={css.container}>
            <h3 className={css.title}>Leave the comment:</h3>
            <ProfileBig user={auth.user} />
            <div className={css.sep} />
            <CommentForm onSubmit={handleSubmit} />
        </div>
    ) : (
        <div className={css.container}>
            <p className={css.auth}>
                <Link href={routes.auth.login}>Login</Link> or <Link href={routes.auth.signup}>Signup</Link> to leave
                the comment
            </p>
        </div>
    );
};

export default NewComment;
