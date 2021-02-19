import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface IProps {
    onSubmit: (page: number) => void;
    loading?: boolean;
    total?: number;
    children: ReactElement;
    style?: CSSProperties;
}

const LoadMore = ({ onSubmit, loading, total = 1, children, style }: IProps): ReactElement | null => {
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
        let id: NodeJS.Timeout | null = null;
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
        <>
            <div ref={ref} style={style || {}} />
            {children}
        </>
    ) : null;
};

export default LoadMore;
