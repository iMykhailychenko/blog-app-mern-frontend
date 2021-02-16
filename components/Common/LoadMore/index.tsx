import React, { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import PostsLoader from '../Loader/PostsLoader';
import css from './index.module.css';

interface IProps {
    onSubmit: (page: number) => void;
    loading: boolean;
    total: number;
}

const LoadMore = ({ onSubmit, loading, total = 1 }: IProps): ReactElement => {
    const [innerLoading, setInnerLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '200px',
    });

    setTimeout(() => {
        setInnerLoading(false);
    }, 500);

    useEffect(() => {
        let id = null;
        if (!loading && !innerLoading) {
            setInnerLoading(true);

            id = setTimeout(() => {
                setInnerLoading(false);
                setPage(value => value + 1);
                onSubmit(page + 1);
            }, 500);
        }

        return () => {
            if (id !== null) clearTimeout(id);
        };
    }, [inView]);

    return page < total ? (
        <div ref={ref} className={css.container}>
            <PostsLoader />
        </div>
    ) : null;
};

export default LoadMore;
