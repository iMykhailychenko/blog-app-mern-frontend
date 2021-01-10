import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { IState, IUser } from '../../../../interfaces';
import { modal } from '../../../Common/Modal';
import ProfileBig from '../../../Common/Profile/ProfileBig';
import css from './index.module.css';

interface IProps {
    type?: 'followers' | 'following';
}

const FollowersModal = ({ type = 'followers' }: IProps): ReactElement => {
    const profile = useSelector<IState, IUser>(state => state.profile);

    return (
        <div className={css.modal}>
            <button className={css.close} type="button" onClick={modal.close}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className={css.list}>
                <div className={css.scroll}>
                    {profile?.[type]?.length
                        ? profile?.[type]?.map(item => <ProfileBig key={item._id} user={item} />)
                        : null}
                </div>
            </div>
        </div>
    );
};

export default FollowersModal;
