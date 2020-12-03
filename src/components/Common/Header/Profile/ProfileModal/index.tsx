import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../../../routes';
import styles from '../index.module.css';

interface IProps {
    onLogout: () => void;
}

const ProfileModal = ({ onLogout }: IProps): ReactElement => {
    return (
        <div className={styles.modal}>
            {/* <h4 className={styles.name}>{user.name}</h4>
            <p className={styles.nick}>{'@' + user.nick}</p> */}

            {/* <Link className={styles.link} to={routes.User.path[0](user.id)}>
                Your profile
            </Link> */}
            <Link className={styles.link} to={routes.Post.New.path}>
                New post
            </Link>
            {/* <Link className={styles.link} to={routes.Settings.path}>
                Settings
            </Link> */}
            <button className={styles.link} type="button" onClick={onLogout}>
                Log out
            </button>
        </div>
    );
};

export default ProfileModal;
