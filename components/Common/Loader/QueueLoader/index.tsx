import React, { ReactElement } from 'react';

import css from './index.module.css';

const DEFAULT_ARRAY = [0, 1, 2, 3, 4];

interface IProps {
    loading: boolean;
    isEmpty: boolean;
    children?: ReactElement | ReactElement[];
}

const QueueLoader = ({ children, loading, isEmpty }: IProps): ReactElement => (
    <>
        {loading ? (
            <ul>
                {DEFAULT_ARRAY.map(items => (
                    <li className={css.loading} key={items} />
                ))}
            </ul>
        ) : isEmpty ? (
            <p className={css.empty}>You don&apos;t have any post in a queue</p>
        ) : (
            children
        )}
    </>
);

export default QueueLoader;
