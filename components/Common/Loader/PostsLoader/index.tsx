import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';

import css from './index.module.css';

interface IProps {
    col?: number;
    wide?: boolean;
}

type Media = { [key: number]: number; default: number };

const mediaNotAuth = (col: number): Media => ({
    default: col,
    1100: 1,
    900: 2,
    610: 1,
});

const mediaAuth = (col: number): Media => ({
    default: col,
    610: 1,
});

const DEFAULT_ARRAY = [0, 1, 2, 3];

const PostsLoader = ({ col = 2, wide = false }: IProps): ReactElement => (
    <Masonry
        breakpointCols={wide ? mediaNotAuth(col) : mediaAuth(col)}
        className={css.list}
        columnClassName={css.column}
    >
        {DEFAULT_ARRAY.map(items => (
            <li className={css.wrp} key={items}>
                <div className={css.img} />

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
