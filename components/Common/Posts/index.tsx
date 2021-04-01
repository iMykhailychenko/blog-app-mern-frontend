import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';

import { IPost } from '../../../interfaces';
import css from './index.module.css';
import SinglePost from './SinglePost';

type Media = { [key: number]: number; default: number };

const media = (col: number): Media => ({
    default: col,
    1300: 1,
    900: 2,
    610: 1,
});

interface IProps {
    content: IPost[];
    wide?: boolean;
    author?: boolean;
    col?: number;
}

const Posts = ({ content, col = 2, author }: IProps): ReactElement => {
    return (
        <Masonry breakpointCols={media(col)} className={css.list} columnClassName={css.column}>
            {content?.length && content?.map(item => <SinglePost key={item._id} item={item} author={author} />)}
        </Masonry>
    );
};

export default Posts;
