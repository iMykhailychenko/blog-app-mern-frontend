import React, { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import css from './index.module.css';

interface IProps {
    onSubmit: (page: number) => void;
    loading: boolean;
}

const LoadMore = ({ onSubmit, loading }: IProps): ReactElement => {
    const [innerLoading, setInnerLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '400px',
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

    return <div ref={ref} className={css.container} />;
};

export default LoadMore;
