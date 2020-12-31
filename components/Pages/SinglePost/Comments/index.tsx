import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { ICommentList, IState } from '../../../../interfaces';
import CommentsLoader from '../../../Common/Loader/CommentsLoader';
import CommentsList from './CommentsList';
import NewComment from './NewComment';

const Comments = (): ReactElement => {
    const comments = useSelector<IState, ICommentList>(state => state.comments);
    return (
        <>
            <NewComment />
            <CommentsLoader loading={comments.loading} isEmpty={!comments?.data?.comments?.length}>
                <CommentsList />
            </CommentsLoader>
        </>
    );
};

export default Comments;
