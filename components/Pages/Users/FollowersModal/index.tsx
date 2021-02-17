import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../assets/config';
import { IFollowers, IFollowersPagination, IState, IUser } from '../../../../interfaces';
import types from '../../../../redux/types';
import { modal } from '../../../Common/Modal';
import ProfileBig from '../../../Common/Profile/ProfileBig';
import css from './index.module.css';

interface IProps {
    type?: 'followers' | 'following';
}

const FollowersModal = ({ type = 'followers' }: IProps): ReactElement => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const followers = useSelector<IState, IFollowers>(state => state.followers);

    useEffect(() => {
        dispatch({
            type: type === 'followers' ? types.GET_FOLLOWERS_START : types.GET_FOLLOWING_START,
            payload: { params: { page: 1, limit: config.usersPerPage }, id: query.userId },
        });
    }, [dispatch]);

    return (
        <div className={css.modal}>
            <button className={css.close} type="button" onClick={modal.close}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <form action="#" method="post" className={css.search}>
                <div className={css.wrp}>
                    <input type="text" className={css.input} />
                    <button type="reset" className={css.reset}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <button type="submit" className={css.btn}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>

            <div className={css.list}>
                <div className={css.scroll}>
                    {followers?.data?.users?.length
                        ? followers?.data?.users?.map(item => <ProfileBig width={12} key={item._id} user={item} />)
                        : null}
                </div>
            </div>
        </div>
    );
};

export default FollowersModal;
