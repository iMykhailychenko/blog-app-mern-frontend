import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './index.module.css';
import NewsModal from './NewsModal';
import ProfileModal from './ProfileModal';
// import routes from '../../../../routes';

const Profile = (): ReactElement => {
    const dispatch = useDispatch();
    console.log(dispatch);

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
            {profile && <div className={styles.backdrop} onClick={closeP} aria-hidden />}
            {news && <div className={styles.backdrop} onClick={closeN} aria-hidden />}

            <div className={styles.container}>
                {/* <Link className={styles.btn} to={routes.Search.path}>
                    <FontAwesomeIcon icon={faSearch} />
                </Link> */}

                <button className={styles.btn} type="button" onClick={openN}>
                    {/* {!!notification.length && <span className={styles.num}>{notification.length}</span>} */}
                    <FontAwesomeIcon icon={faBell} />
                </button>

                <button className={styles.wrp} type="button" onClick={openP}>
                    {/* <img className={styles.avatar} src={user.avatar} alt={user.name} /> */}
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>

                {profile && <ProfileModal onLogout={handleLoguot} />}

                {news && <NewsModal onClick={closeN} />}
            </div>
        </>
    );
};

export default Profile;
