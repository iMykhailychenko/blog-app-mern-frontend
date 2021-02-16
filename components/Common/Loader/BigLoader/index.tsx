import { Router } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';

import css from './index.module.css';

const BigLoader = (): ReactElement => {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const handleOpen = () => {
            setLoader(true);
        };
        const handleClose = () => {
            setLoader(false);
        };

        Router.events.on('routeChangeStart', handleOpen);
        Router.events.on('routeChangeComplete', handleClose);

        return () => {
            Router.events.off('routeChangeStart', handleOpen);
            Router.events.off('routeChangeComplete', handleClose);
        };
    }, []);

    return (
        loader && (
            <div className={css.wrp}>
                <svg
                    width={48}
                    height={48}
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="var(--black)"
                >
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth={2}>
                            <circle strokeOpacity=".5" cx={18} cy={18} r={18} />
                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="0 18 18"
                                    to="360 18 18"
                                    dur="1s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        )
    );
};

export default BigLoader;
