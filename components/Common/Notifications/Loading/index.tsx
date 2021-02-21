import React, { ReactElement } from 'react';

import SmallLoader from '../../Loader/SmallLoader';
import css from './index.module.css';

interface IProps {
    text?: string | null;
}

const Loading = ({ text = null }: IProps): ReactElement => {
    return (
        <div className={css.modal}>
            <div className={css.inner}>
                {text ? <h2 className={css.title}>{text}</h2> : null}
                <SmallLoader />
            </div>
        </div>
    );
};

export default Loading;
