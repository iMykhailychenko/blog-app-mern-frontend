import React from 'react';

// components
import Content from './elements/Content';
import User from './elements/User';

//styles
import styles from './Posts.module.css';

// dev utils
import content from './dev-content';


const Post: React.FC<{}> = () => (
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
