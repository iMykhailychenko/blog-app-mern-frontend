import React, { ReactElement } from 'react';

// import { useDispatch } from 'react-redux';
import css from './index.module.css';

interface IProps {
    title: string;
    onSubmit: () => void;
}

const Confirm = ({ title }: IProps): ReactElement => {
    return (
        <div className={css.wrp}>
            <h2 className={css.title}>{title}</h2>

            <div className={css.btnWrp}>
                <button className={css.btn + ' btn btn--gray'}>No</button>
                <button className={css.btn + ' btn btn--blue'}>Yes</button>
            </div>
        </div>
    );
};

export default Confirm;
