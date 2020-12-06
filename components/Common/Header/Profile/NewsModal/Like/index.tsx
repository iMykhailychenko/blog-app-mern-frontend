import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

// import { INotification } from '../../../../../../interfaces';
import styles from './index.module.css';
// import routes from '../../../../../../routes';

// const text: { [key: string]: string } = {
//     post: ' liked your post:',
//     comment: ' liked your comment on this post:',
// };

// const Like = ({ user, target, post }: INotification): ReactElement => (
const Like = (): ReactElement => (
  <li className={styles.notif}>
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faHeart} />
    </div>

    <div className={styles.wrp}>
      {/* <Link className={styles.user} to={routes.User.path[0](user.id)}>
                {user.name}
            </Link>
            <span>{text[target]}</span>
            <Link className={styles.title} to={routes.Post.Single.path[0](post.items.id)}>
                {post.items.title}
            </Link> */}
    </div>
  </li>
);

export default Like;
