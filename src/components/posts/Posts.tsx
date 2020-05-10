import React from 'react';

// components
import Content from './components/Content';
import User from './components/User';

//styles
import styles from './Posts.module.css';

// dev utils
import content from './dev-content';

interface Props {}

const Post: React.FC<Props> = () => (
  <ul className={styles.list}>
    {content.map(({ post, user }) => (
      <li className={styles.card} key={post.id}>
        <Content {...post} />

        <User {...user} />
      </li>
    ))}
  </ul>
);

export default Post;
