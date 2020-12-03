import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Pages/Auth/Auth.action';
import styles from './index.module.css';
import routes from '../../../../routes';

const Profile = (): ReactElement => {
    const dispatch = useDispatch();

    return (
        <ul className={styles.list}>
            <li>
                <Link to={routes.User.path[0](1)}>Your profile</Link>
            </li>
            <li>
                <Link to={routes.Post.New.path}>Create new post</Link>
            </li>
            <li>{/* <Link to={routes.Settings.p}>Settings</Link> */}</li>
            <li>
                <button
                    onClick={(): void => {
                        dispatch(logout());
                    }}
                >
                    Log out
                </button>
            </li>
        </ul>
    );
};

export default Profile;
