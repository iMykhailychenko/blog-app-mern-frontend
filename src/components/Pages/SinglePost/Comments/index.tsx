import React, { ReactElement } from 'react';

import CommentsList from './CommentsList';
import NewComment from './NewComment';

const Comment = (): ReactElement => {
    return (
        <>
            <CommentsList />
            <NewComment />
        </>
    );
};

export default Comment;
