import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import routes from '../../../../../assets/routes';
import { IState } from '../../../../../interfaces';
import CommentForm from '../CommentForm';
import css from './index.module.css';

const NewComment = (): ReactElement => {
    const token = useSelector<IState, string | null>(state => state.auth.token);

    return token ? (
        <div className={css.container}>
            <h3 className={css.title}>Leave the comment:</h3>
            <CommentForm />
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
