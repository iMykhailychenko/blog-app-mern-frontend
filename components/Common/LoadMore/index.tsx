import React, { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import css from './index.module.css';

interface IProps {
    onSubmit: (page: number) => void;
    loading: boolean;
}

const LoadMore = ({ onSubmit, loading }: IProps): ReactElement => {
    const [innerLoading, setInnerLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '400px',
    });

    useEffect(() => {
        if (!loading && !innerLoading) {
            setInnerLoading(true);

            setTimeout(() => {
                setPage(value => value + 1);
                onSubmit(page + 1);
                setInnerLoading(false);
            }, 300);
        }
    }, [inView]);

    return <div ref={ref} className={css.container} />;
};

export default LoadMore;
