import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../assets/config';
import { IFollowers, IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import UsersLoader from '../../../Common/Loader/UsersLoader';
import LoadMore from '../../../Common/LoadMore';
import { modal } from '../../../Common/Modal';
import ProfileBig from '../../../Common/Profile/ProfileBig';
import css from './index.module.css';

interface IProps {
    type?: 'followers' | 'following';
}

const FollowersModal = ({ type = 'followers' }: IProps): ReactElement => {
    const { query } = useRouter();
    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>('');

    const followers = useSelector<IState, IFollowers>(state => state.followers);

    useEffect(() => {
        dispatch({
            type: type === 'followers' ? types.GET_FOLLOWERS_START : types.GET_FOLLOWING_START,
            payload: { params: { page: 1, limit: config.usersPerPage }, id: query.userId },
        });
    }, [dispatch]);

    const handleLoadMore = (page: number): void => {
        dispatch({
            type: type === 'followers' ? types.MORE_FOLLOWERS_START : types.MORE_FOLLOWING_START,
            payload: { params: { page, limit: config.usersPerPage, q: search || null }, id: query.userId },
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    const handleReset = (): void => {
        setSearch('');
        if (!search.trim()) return;
        dispatch({
            type: type === 'followers' ? types.GET_FOLLOWERS_START : types.GET_FOLLOWING_START,
            payload: { params: { page: 1, limit: config.usersPerPage }, id: query.userId },
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch({
            type: type === 'followers' ? types.GET_FOLLOWERS_START : types.GET_FOLLOWING_START,
            payload: { params: { page: 1, limit: config.usersPerPage, q: search || null }, id: query.userId },
        });
    };

    return (
        <div className={css.modal}>
            <button className={css.close} type="button" onClick={modal.close}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <form action="#" method="post" className={css.search} onSubmit={handleSubmit}>
                <div className={css.wrp}>
                    <input type="text" onChange={handleChange} className={css.input} />
                    <button type="reset" className={css.reset} onClick={handleReset}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <button type="submit" className={css.btn}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>

            <div className={css.list}>
                <div className={css.scroll}>
                    {followers.loading ? (
                        <UsersLoader />
                    ) : followers?.data?.users?.length ? (
                        followers?.data?.users?.map(item => <ProfileBig width={12} key={item._id} user={item} />)
                    ) : null}
                    <LoadMore
                        total={followers?.data?.total}
                        loading={followers.more}
                        onSubmit={handleLoadMore}
                        style={{ width: '100%' }}
                    >
                        <UsersLoader />
                    </LoadMore>
                </div>
            </div>
        </div>
    );
};

export default FollowersModal;
