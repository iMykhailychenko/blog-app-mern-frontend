import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../../../common/forms/search';
import Posts from '../../posts';
import { getSearch } from '../../../redux/selectors';
import styles from './index.module.css';
import posts from '../../../assets/posts';

export default () => {
    const search = useSelector(getSearch);
    return (
        <>
            <Search />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {search.length ? 'Search results:' : 'Popular posts:'}
                </h2>
                <Posts content={posts} />
            </div>
        </>
    );
};
