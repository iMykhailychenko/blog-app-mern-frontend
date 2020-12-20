import clsx from 'clsx';
import React, { ReactElement, useEffect, useState } from 'react';

import { throttle } from '../../../assets/helpers';
import css from './index.module.css';
import Navigation from './Navigation';

let prev = 0;

const Header = (): ReactElement => {
    const [delta, setDelta] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = throttle((): void => {
            if (window.scrollY < 100 && !delta) {
                setScrolled(false);
                setDelta(false);
                prev = 0;
                return;
            }

            setScrolled(true);
            setDelta(prev < window.scrollY);
            prev = window.scrollY;
        }, 300);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={clsx(css.header, delta && css.transform, scrolled && css.scrolled)}>
            <div className="container">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
