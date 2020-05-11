import React from 'react';
import styles from './AddContent.module.css';

interface Props {}

const AddContentBtn: React.FC<Props> = () => (
  <div className={styles.addContainer}>
    <h4 className={styles.addTitle}>Add some content for your post</h4>
    <button className={styles.add} type="button"></button>

    <ul className={styles.contentLabl}>
        <li>heading</li>
        <li>text field</li>
        <li>img block</li>
    </ul>
  </div>
);

export default AddContentBtn;
