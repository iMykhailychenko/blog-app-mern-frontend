import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import css from './index.module.css';

interface IProps {
    col?: number;
}

type Media = { [key: number]: number; default: number };

const mediaNotAuth = (col: number): Media => ({
    default: col,
    1100: 1,
    900: 2,
    580: 1,
});

const mediaAuth = (col: number): Media => ({
    default: col,
    580: 1,
});

const DEFAULT_ARRAY = [0, 1, 2, 3];

const PostsLoader = ({ col = 2 }: IProps): ReactElement => {
    const token = useSelector<IState, string | null>(state => state.auth.token);

    return (
        <Masonry
            breakpointCols={token ? mediaAuth(col) : mediaNotAuth(col)}
            className={css.list}
            columnClassName={css.column}
        >
            {DEFAULT_ARRAY.map(items => (
                <li className={css.wrp} key={items}>
                    <div className={css.img} />

                    <div className={css.text}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={css.user}>
                        <div className={css.avatar} />
                        <div className={css.text}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </li>
            ))}
        </Masonry>
    );
};

export default PostsLoader;
