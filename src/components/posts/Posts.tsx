import React from 'react';

// components
import Content from './components/Content';
import User from './components/User';

//styles
import styles from './Posts.module.css';

// dev utils
import content from './content';

interface Props {}

const Post: React.FC<Props> = () => (
  <ul className={styles.list}>
    {content.map(({ post: { id, ...args }, user }) => (
      <li className={styles.card} key={id}>
        <Content {...args} />
        <User {...user} />
      </li>
    ))}
  </ul>
);

export default Post;
