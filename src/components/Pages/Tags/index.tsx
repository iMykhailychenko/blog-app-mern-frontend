import React, { ReactElement } from 'react';
// import { useParams } from 'react-router-dom';
// import Posts from '../../Common/Posts';
import styles from './index.module.css';

const Tags = (): ReactElement => {
    // const { tag } = useParams();

    return (
        <div>
            <div className={styles.content}>
                <h2 className={styles.title}>Popular posts</h2>
                {/* <Posts content={posts} /> */}
            </div>
        </div>
    );
};

export default Tags;
