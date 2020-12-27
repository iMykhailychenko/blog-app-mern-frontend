import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from './index.module.css';

interface IProps {
    className?: string;
}

const picture: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

const Picture = ({ className }: IProps): ReactElement => {
    const random = Math.round(Math.random() * 10);
    return <img className={clsx(css.banner, className)} src={`/img/banners/${picture[random]}`} alt="" />;
};

export default Picture;
