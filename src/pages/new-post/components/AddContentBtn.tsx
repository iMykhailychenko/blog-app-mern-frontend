import React from 'react';
import styles from '../NewPost.module.css';

interface Props {}

const AddContentBtn: React.FC<Props> = () => (
  <div className={styles.addContainer}>
    <h4 className={styles.addTitle}>Add some content for your post</h4>
    <button className={styles.add} type="button"></button>
  </div>
);

export default AddContentBtn;
