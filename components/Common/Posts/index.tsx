import { faKeyboard, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
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
import useAuth from '../../../hooks/auth.hook';
import { IPost, IState, IUser } from '../../../interfaces';
import types from '../../../redux/types';
import Likes from '../Likes';
import ProfileBig from '../Profile/ProfileBig';
import css from './index.module.css';

interface IProps {
    content: IPost[];
    wide?: boolean;
    author?: boolean;
    col?: number;
}

type Media = { [key: number]: number; default: number };

const media = (col: number): Media => ({
    default: col,
    1100: 1,
    900: 2,
    610: 1,
});

const DESC_LIMIT = 180;

const Posts = ({ content, col = 2, author }: IProps): ReactElement => {
    const dispatch = useDispatch();
    const auth = useAuth();
    const { query } = useRouter();

    const profile = useSelector<IState, IUser>(state => state.profile);

    const handleDelete = (payload: string): (() => void) => (): void => {
        dispatch({
            type: types.DELETE_POST_START,
            config: { page: query?.page || 1, limit: config.postPerPage },
            payload,
        });
    };

    return (
        <Masonry breakpointCols={media(col)} className={css.list} columnClassName={css.column}>
            {content?.length &&
                content?.map(item => (
                    <li className={clsx(css.card, !item.banner && css.grid)} key={item?._id}>
                        <Link href={routes.posts.single[0](item?._id)}>
                            <a className={css.postLink}>
                                {item.banner && (
                                    <img className={css.img} src={config.img + item.banner} alt={item.title} />
                                )}
                                <div className={css.inner}>
                                    <h4 className={css.title}>{item.title}</h4>
                                    <p className={css.text}>
                                        {item?.desc?.length > DESC_LIMIT
                                            ? `${item?.desc?.slice(0, DESC_LIMIT)}...`
                                            : item?.desc}
                                    </p>
                                </div>
                            </a>
                        </Link>
                        {item.tags?.length ? (
                            <div className={css.tags}>
                                {item.tags.map(tag => (
                                    <Link href={routes.posts.tag[0](tag)} key={tag}>
                                        <a className={css.tag}>{`#${tag}`}</a>
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                        <p className={css.date}>{formatDate(item.date)}</p>

                        {auth?.token && (author ? profile?._id : item?.author?.[0]?._id) === auth?.user?._id && (
                            <div className={css.manage}>
                                <Link href={routes.posts.edit[0](item._id)}>
                                    <a>
                                        <FontAwesomeIcon icon={faKeyboard} />
                                        <span>Edit post</span>
                                    </a>
                                </Link>
                                <button type="button" onClick={handleDelete(item._id)}>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                    <span>Delete post</span>
                                </button>
                            </div>
                        )}

                        <div className={css.inner}>
                            <ProfileBig user={author ? profile : item?.author?.[0]} />
                        </div>

                        <div className={css.likes}>
                            <Likes
                                targetId={item?._id}
                                typeLike={types.LIKE_POPULAR_POSTS_START}
                                typeDislike={types.DISLIKE_POPULAR_POSTS_START}
                                feedback={item.feedback}
                            />
                        </div>
                    </li>
                ))}
        </Masonry>
    );
};

export default Posts;
