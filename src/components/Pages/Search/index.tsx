import React, { ReactElement } from 'react';

// import { useSelector } from 'react-redux';
// import Posts from '../../Common/Posts';
// import { getSearch } from '../../../redux/selectors';
import SearchForm from '../../Common/Forms/Search';
import styles from './index.module.css';

const Search = (): ReactElement => {
    // const search = useSelector(getSearch);
    return (
        <>
            <SearchForm />
            <div className={styles.content}>
                {/* <h2 className={styles.title}>{search.length ? 'Search results:' : 'Popular posts:'}</h2> */}
                {/* <Posts content={posts} /> */}
            </div>
        </>
    );
};

export default Search;
