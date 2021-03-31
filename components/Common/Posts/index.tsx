import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

import { IPost, IState } from '../../../interfaces';
import css from './index.module.css';
import SinglePost from './SinglePost';

type Media = { [key: number]: number; default: number };

const media = (col: number): Media => ({
    default: col,
    1100: 1,
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
    const isColumn = useSelector<IState, boolean>(state => state.config.postColumn);

    return isColumn ? (
        <ul className={css.wrp}>
            {content?.length && content?.map(item => <SinglePost key={item._id} item={item} author={author} />)}
        </ul>
    ) : (
        <Masonry breakpointCols={media(col)} className={css.list} columnClassName={css.column}>
            {content?.length && content?.map(item => <SinglePost key={item._id} item={item} author={author} />)}
        </Masonry>
    );
};

export default Posts;
