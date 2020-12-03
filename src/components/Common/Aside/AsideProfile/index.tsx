import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getAuth } from '../../../../redux/selectors';
import styles from './index.module.css';

const AsideProfile = (): ReactElement => {
    const auth = useSelector(getAuth);
    const params = useParams();

    return (
        <div className={styles.inner}>
            {/* <img className={styles.img} src={avatar} alt={user.name} />

            <Link className={styles.link} to={router.user[0](user.id)}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.nick}>{`@${user.nick}`}</p>
            </Link>

            <p className={styles.text}>{`total posts: ${user.posts}`}</p>

            {auth.isAuth && (
                <Link to={router.post.new}>
                    <button className="add" />
                    <p className={styles.text}>Add new post</p>
                </Link>
            )} */}
        </div>
    );
};

export default AsideProfile