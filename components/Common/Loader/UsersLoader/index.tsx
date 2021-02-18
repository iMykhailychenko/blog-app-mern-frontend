import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    length?: number;
}

const UsersLoader = ({ length = 30 }: IProps): ReactElement => (
    <>
        {Array(length)
            .fill(1)
            .map((items, index) => (
                <div className={css.wrp} key={items + index}>
                    <div className={css.user} />
                    <div className={css.text}>
                        <span />
                        <span />
                    </div>
                </div>
            ))}
    </>
);

export default UsersLoader;
