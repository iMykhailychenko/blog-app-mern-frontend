import { faBell, faChevronDown, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

import routes from '../../../../assets/routes';
import useAuth from '../../../../hooks/auth.hook';
import UserAvatar from '../../../Common/UserAvatar';
import css from './index.module.css';
import NewsModal from './NewsModal';
import ProfileModal from './ProfileModal';

type Dropdown = 'profile' | 'news';
type Handler = () => void;

const Profile = (): ReactElement => {
    const auth = useAuth();

    const [dropdown, setDropdown] = useState({ profile: false, news: false });
    const handleDrop = (name: Dropdown): Handler => (): void => {
        setDropdown({ ...dropdown, [name]: !dropdown[name] });
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

                <button className={css.btn} type="button" onClick={handleDrop('news')}>
                    {/* TEMP */}
                    {/* {!!notification.length && <span className={css.num}>{notification.length}</span>} */}
                    <FontAwesomeIcon icon={faBell} />
                </button>

                <button className={css.wrp} type="button" onClick={handleDrop('profile')}>
                    {auth?.user && (
                        <UserAvatar
                            avatar={auth?.user?.avatar}
                            name={(auth?.user?.name[0] + auth?.user?.surname[0]).toUpperCase()}
                        />
                    )}
                    <FontAwesomeIcon className={css.icon} icon={faChevronDown} />
                </button>

                {dropdown.profile && <ProfileModal onClick={handleDrop('profile')} />}
                {dropdown.news && <NewsModal onClick={handleDrop('news')} />}
            </div>
        </>
    );
};

export default Profile;
