import clsx from 'clsx';
import React, { ReactElement, useEffect, useState } from 'react';

import css from './index.module.css';

interface IProps {
    className?: string;
}

const picture: string[] = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
];

const Picture = ({ className }: IProps): ReactElement => {
    const [img, setImg] = useState('');

    useEffect(() => {
        if (process.browser) {
            const random = Math.round(Math.random() * 10);
            setImg(`/img/banners/${picture[random]}`);
        }
    }, []);

    return <img className={clsx(css.banner, className)} src={img} alt="" />;
};

export default Picture;
