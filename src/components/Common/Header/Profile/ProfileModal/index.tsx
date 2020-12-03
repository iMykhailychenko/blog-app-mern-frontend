import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../../../routes';
import styles from '../index.module.css';

interface IProps {
    onClick: () => void;
    onLogout: () => void;
}

const ProfileModal = ({ onClick, onLogout }: IProps): ReactElement => {
    return (
        <div className={styles.modal}>
            {/* <h4 className={styles.name}>{user.name}</h4>
            <p className={styles.nick}>{'@' + user.nick}</p>

            <Link className={styles.link} to={routes.User.path[0](user.id)} onClick={onClick}>
                Your profile
            </Link>
            <Link className={styles.link} to={routes.Post.New.path} onClick={onClick}>
                New post
            </Link>
            <Link className={styles.link} to={routes.Settings.path} onClick={onClick}>
                Settings
            </Link> */}
            <button className={styles.link} onClick={onLogout}>
                Log out
            </button>
        </div>
    );
};

export default ProfileModal;
