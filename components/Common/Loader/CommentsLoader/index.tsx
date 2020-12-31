import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    isEmpty: boolean;
    loading: boolean;
    children: ReactElement;
}

const CommentsLoader = ({ loading, isEmpty, children }: IProps): ReactElement => {
    return isEmpty ? (
        <p className={css.container}>No comments yet. You can be first who live the comment</p>
    ) : (
        <>
            {loading && (
                <ul className={css.container}>
                    <li className={css.wrp}>
                        <div className={css.user}>
                            <div className={css.avatar} />
                            <div className={css.text}>
                                <span />
                                <span />
                            </div>
                        </div>

                        <div className={css.text}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </li>
                </ul>
            )}
            {children}
        </>
    );
};

export default CommentsLoader;
