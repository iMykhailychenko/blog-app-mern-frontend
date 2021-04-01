import { faKeyboard, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../assets/config';
import { formatDate } from '../../../../assets/helpers';
import routes from '../../../../assets/routes';
import { IAuth, IPost, IState, IUser } from '../../../../interfaces';
import types from '../../../../redux/types';
import Likes from '../../Likes';
import ProfileBig from '../../Profile/ProfileBig';
import css from '../index.module.css';

const DESC_LIMIT = 180;

interface IProps {
    item: IPost;
    author?: boolean;
}

const SinglePost = ({ item, author }: IProps): ReactElement => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const auth = useSelector<IState, IAuth | null>(state => state.auth);
    const profile = useSelector<IState, IUser | null>(state => state.profile);

    const handleDelete = (): void => {
        dispatch({
            type: types.DELETE_POST_START,
            config: { page: query?.page || 1, limit: config.postPerPage },
            payload: item._id,
        });
    };

    return (
        <li className={clsx(css.card, !item.banner && css.grid)} key={item?._id}>
            <Link href={routes.posts.single[0](item?._id)}>
                <a className={css.postLink}>
                    {item.banner && <img className={css.img} src={config.img(item.banner)} alt={item.title} />}
                    <div className={css.inner}>
                        <h4 className={css.title}>{item.title}</h4>
                        <p className={css.text}>
                            {item?.desc?.length > DESC_LIMIT ? `${item?.desc?.slice(0, DESC_LIMIT)}...` : item?.desc}
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
                    <button type="button" onClick={handleDelete}>
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
                    feedback={item.feedback}
                    queue={item.queue}
                    typeLike={types.LIKE_POPULAR_POSTS_START}
                    typeDislike={types.DISLIKE_POPULAR_POSTS_START}
                    typeQueue={types.UPDATE_QUEUE_POPULAR_START}
                />
            </div>
        </li>
    );
};

export default SinglePost;
