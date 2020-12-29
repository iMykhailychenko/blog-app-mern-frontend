import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { ICommentList, IState } from '../../../../interfaces';
import CommentsList from './CommentsList';
import css from './index.module.css';
import NewComment from './NewComment';

const Comments = (): ReactElement => {
    const comments = useSelector<IState, ICommentList>(state => state.comments);
    return (
        <>
            <NewComment />
            {comments?.data?.comments?.length ? (
                <CommentsList />
            ) : (
                <p className={css.container}>No comments yet. You can be first who live the comment</p>
            )}
        </>
    );
};

export default Comments;
