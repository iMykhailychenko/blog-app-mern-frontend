import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../assets/config';
import { formatDate } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import { IPost, IState, IUser } from '../../../interfaces';
import types from '../../../redux/types';
import Likes from '../Likes';
import User from '../User';
import css from './index.module.css';

interface IProps {
    content: IPost[];
    wide?: boolean;
    author?: boolean;
    col?: number;
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

const DESC_LIMIT = 180;

const Posts = ({ content, col = 2, wide = false, author }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const { query } = useRouter();

    const user = useSelector<IState, IUser>(state => state.auth.user);
    const profile = useSelector<IState, IUser>(state => state.profile);
    const token = useSelector<IState, string | null>(state => state.auth.token);

    const handleDelete = (payload: string): (() => void) => (): void => {
        dispatch({
            type: types.DELETE_POST_START,
            config: { page: query?.page || 1, limit: config.postPerPage },
            payload,
        });
    };

    return (
        <Masonry
            breakpointCols={wide ? mediaNotAuth(col) : mediaAuth(col)}
            className={css.list}
            columnClassName={css.column}
        >
            {content?.map(item => (
                <li className={clsx(css.card, !item.banner && css.grid)} key={item._id}>
                    <Link href={routes.posts.single[0](item._id)}>
                        <a className={css.postLink}>
                            {item.banner && <img className={css.img} src={config.img + item.banner} alt={item.title} />}
                            <div className={css.inner}>
                                <h4 className={css.title}>{item.title}</h4>
                                <p className={css.text}>
                                    {item.desc.length > DESC_LIMIT ? `${item.desc.slice(0, DESC_LIMIT)}...` : item.desc}
                                </p>
                                <p className={css.date}>{formatDate(item.date)}</p>
                            </div>
                        </a>
                    </Link>

                    <div className={css.likes}>
                        <Likes
                            targetId={item._id}
                            typeLike={types.LIKE_POPULAR_POSTS_START}
                            typeDislike={types.DISLIKE_POPULAR_POSTS_START}
                            like={item.feedback.like}
                            dislike={item.feedback.dislike}
                            view={item.feedback.view}
                        />
                    </div>

                    {!!item.tags.length && (
                        <div className={css.tags}>
                            {item.tags.map(tag => (
                                <Link href={routes.posts.tag[0](tag)} key={tag}>
                                    <a className={css.tag}>{`#${tag}`}</a>
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className={css.inner}>
                        <User user={author ? profile : item?.author?.[0]} />
                    </div>

                    {token && (author ? profile?._id : item?.author?.[0]?._id) === user._id && (
                        <div className={css.management}>
                            <button className={css.managementBtn} type="button">
                                <FontAwesomeIcon icon={faSlidersH} />
                            </button>

                            <div className={css.managementInner}>
                                <Link href={routes.posts.edit[0](item._id)}>
                                    <a>Edit post</a>
                                </Link>
                                <button type="button" onClick={handleDelete(item._id)}>
                                    Delete post
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </Masonry>
    );
};

export default Posts;
