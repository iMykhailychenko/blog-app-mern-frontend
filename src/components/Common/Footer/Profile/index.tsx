import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import routes from '../../../../routes';
import styles from './index.module.css';

const Profile = (): ReactElement => {
    const dispatch = useDispatch();
    console.log(dispatch);

    return (
        <ul className={styles.list}>
            <li>
                <Link to={routes.User.path[0]('1')}>Your profile</Link>
            </li>
            <li>
                <Link to={routes.Post.New.path}>Create new post</Link>
            </li>
            <li>{/* <Link to={routes.Settings.p}>Settings</Link> */}</li>
            <li>
                <button type="button">Log out</button>
            </li>
        </ul>
    );
};

export default Profile;
