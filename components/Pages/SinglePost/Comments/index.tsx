import React, { ReactElement } from 'react';

import CommentsList from './CommentsList';
import NewComment from './NewComment';

const Comments = (): ReactElement => {
    return (
        <>
            <CommentsList />
            <NewComment />
        </>
    );
};

export default Comments;
