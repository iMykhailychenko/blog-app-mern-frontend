import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

// import { INotification } from '../../../../../../interfaces';
import css from './index.module.css';
// import routes from '../../../../../../routes';

// const text: { [key: string]: string } = {
//     post: ' liked your post:',
//     comment: ' liked your comment on this post:',
// };

// const Like = ({ user, target, post }: INotification): ReactElement => (
const Like = (): ReactElement => (
    <li className={css.notif}>
        <div className={css.icon}>
            <FontAwesomeIcon icon={faHeart} />
        </div>

        <div className={css.wrp}>
            {/* <Link className={css.user} to={routes.ProfileBig.path[0](user.id)}>
                {user.name}
            </Link>
            <span>{text[target]}</span>
            <Link className={css.title} to={routes.Post.Single.path[0](post.items.id)}>
                {post.items.title}
            </Link> */}
        </div>
    </li>
);

export default Like;
