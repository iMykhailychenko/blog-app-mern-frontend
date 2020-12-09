import React, { ReactElement, useState } from 'react';

import SearchForm from '../../components/Common/Forms/Search';
import styles from './index.module.css';

const Search = (): ReactElement => {
    const [search, setSearch] = useState('');
    const handleSubmit = (): void => {
        console.log(search);
    };

    return (
        <>
            <SearchForm value={search} onChange={setSearch} onSubmit={handleSubmit} />
            <div className={styles.content}>
                <h2 className={styles.title}>{search.length ? 'Search results:' : 'Popular posts:'}</h2>
                {/* <Posts content={posts} /> */}
            </div>
        </>
    );
};

export default Search;
