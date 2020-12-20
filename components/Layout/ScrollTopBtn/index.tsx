import React, { createRef, ReactElement, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import pop from '../../../transitions/pop.module.css';
import styles from './index.module.css';

const ScrollTop = (): ReactElement => {
    const buttonRef = createRef<HTMLButtonElement>();

    const [top, setTop] = useState(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollTop = window.scrollY < 150 ? false : true;
            setTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <CSSTransition in={top} timeout={600} classNames={pop} unmountOnExit>
            <button className={styles.btn} ref={buttonRef} onClick={handleClick} type="button" />
        </CSSTransition>
    );
};

export default ScrollTop;
