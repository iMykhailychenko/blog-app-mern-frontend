import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import user from '../../../assets/user';
import { logout } from '../../auth/Auth.action';
import NewsModal from './NewsModal';
import ProfileModal from './ProfileModal';
import router from '../../../config/router';
import styles from './index.module.css';
import notification from '../../../assets/notification';

export default () => {
    const dispatch = useDispatch();

    // profile modal
    const [profile, setProfile] = useState(false);
    const closeP = (): void => {
        setProfile(false);
    };
    const openP = (): void => {
        setProfile(!profile);
    };
    const handleLoguot = (): void => {
        closeP();
        dispatch(logout());
    };

    // user activity information
    const [news, setNews] = useState(false);
    const closeN = (): void => {
        setNews(false);
    };
    const openN = (): void => {
        setNews(!news);
    };

    return (
        <>
            {profile && <div className={styles.backdrop} onClick={closeP} />}
            {news && <div className={styles.backdrop} onClick={closeN} />}

            <div className={styles.container}>
                <Link className={styles.btn} to={router.search}>
                    <FontAwesomeIcon icon={faSearch} />
                </Link>

                <button className={styles.btn} onClick={openN}>
                    {!!notification.length && <span className={styles.num}>{notification.length}</span>}
                    <FontAwesomeIcon icon={faBell} />
                </button>

                <button className={styles.wrp} onClick={openP}>
                    <img className={styles.avatar} src={user.avatar} alt={user.name} />
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>

                {profile && <ProfileModal onClick={closeP} onLogout={handleLoguot} />}

                {news && <NewsModal onClick={closeN} />}
            </div>
        </>
    );
};
