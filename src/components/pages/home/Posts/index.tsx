import React from 'react';
import Content from './Parts/Posts.content';
import User from './Parts/Posts.user';
import styles from './index.module.css';
import content from '../../../../assets/posts';

export default () => (
    <ul className={styles.list}>
        {content.map(({ items, user }) => (
            <li className={styles.card} key={items.id}>
                <Content {...items} />
                <User {...user} />
            </li>
        ))}
    </ul>
);
