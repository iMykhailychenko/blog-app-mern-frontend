import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';

import css from './index.module.css';

interface IProps {
    col?: number;
}

type Media = { [key: number]: number; default: number };

const media = (col: number): Media => ({
    default: col,
    1100: 1,
    900: 2,
    610: 1,
});

const DEFAULT_ARRAY = [0, 1];

const PostsLoader = ({ col = 2 }: IProps): ReactElement => (
    <Masonry breakpointCols={media(col)} className={css.list} columnClassName={css.column}>
        {DEFAULT_ARRAY.map(items => (
            <li className={css.wrp} key={items}>
                <div className={css.text}>
                    <span />
                    <span />
                    <span />
                </div>

                <div className={css.user}>
                    <div className={css.avatar} />
                    <div className={css.text}>
                        <span />
                        <span />
                    </div>
                </div>
            </li>
        ))}
    </Masonry>
);

export default PostsLoader;
