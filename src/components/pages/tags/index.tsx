import React from 'react';
// import { useParams } from 'react-router-dom';
import Posts from '../../posts';
import styles from './index.module.css';
import posts from '../../../assets/posts';

export default () => {
    // const { tag } = useParams();

    return (
        <div>
            <div className={styles.content}>
                <h2 className={styles.title}>Popular posts</h2>
                <Posts content={posts} />
            </div>
        </div>
    );
};
