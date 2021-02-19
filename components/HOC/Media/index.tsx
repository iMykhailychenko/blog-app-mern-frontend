import React, { createContext, ReactElement, useEffect, useState } from 'react';

export const Media = createContext<[media: number | null, setMedia: ((v: number) => void) | null]>([null, null]);

interface IProps {
    width?: number;
    children: JSX.Element | JSX.Element[] | ReactElement;
}

const MediaProvider = ({ children, width }: IProps): ReactElement => {
    const [media, setMedia] = useState<number>(width || 767);
    useEffect(() => {
        if (process.browser) {
            const handleResize = (): void => {
                setMedia(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return <Media.Provider value={[media, setMedia]}>{children}</Media.Provider>;
};

export default MediaProvider;
