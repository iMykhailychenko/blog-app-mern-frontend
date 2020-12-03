import React, { ReactElement } from 'react';
import NewComment from './NewComment';
import CommentsList from './CommentsList';

const Comment = (): ReactElement => {
    return (
        <>
            <CommentsList />
            <NewComment />
        </>
    );
};

export default Comment;
