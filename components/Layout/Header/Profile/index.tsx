import { faBell, faChevronDown, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';

import routes from '../../../../assets/routes';
import { IAuth, IState } from '../../../../interfaces';
import UserAvatar from '../../../Common/UserAvatar';
import css from './index.module.css';
import NewsModal from './NewsModal';
import ProfileModal from './ProfileModal';

const Profile = (): ReactElement => {
    const auth = useSelector<IState, IAuth | null>(state => state.auth);
    const [dropdown, setDropdown] = useState({ profile: false, news: false });
    const handleDropProfile = (): void => {
        setDropdown({ ...dropdown, profile: !dropdown.profile });
    };
    const handleDropNews = (): void => {
        setDropdown({ ...dropdown, news: !dropdown.news });
    };

    return (
        <>
            <div className={css.container}>
                <Link href={routes.search}>
                    <a className={css.btn}>
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                </Link>

                <Link href={routes.posts.new}>
                    <a className={css.btn}>
                        <FontAwesomeIcon icon={faPlus} />
                    </a>
                </Link>

                <button className={css.btn} type="button" onClick={handleDropNews}>
                    {/* TEMP */}
                    {/* {!!notification.length && <span className={css.num}>{notification.length}</span>} */}
                    <FontAwesomeIcon icon={faBell} />
                </button>

                <button className={css.wrp} type="button" onClick={handleDropProfile}>
                    {auth?.user && (
                        <UserAvatar
                            avatar={auth?.user?.avatar}
                            name={(auth?.user?.name[0] + auth?.user?.surname[0]).toUpperCase()}
                        />
                    )}
                    <FontAwesomeIcon className={css.icon} icon={faChevronDown} />
                </button>

                {dropdown.profile && <ProfileModal onClick={handleDropProfile} />}
                {dropdown.news && <NewsModal onClick={handleDropNews} />}
            </div>
        </>
    );
};

export default Profile;
