import React, { ReactElement } from 'react';

import CommentsList from './CommentsList';
import NewComment from './NewComment';

const Comments = (): ReactElement => {
    return (
        <>
            <NewComment />
            <CommentsList />
        </>
    );
};

export default Comments;
