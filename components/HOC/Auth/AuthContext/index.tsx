import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';

export const Auth = createContext<[value: string | null, setValue: ((t: string | null) => void) | null]>([null, null]);

interface IProps {
    tokenServer?: string | null;
    children: JSX.Element | JSX.Element[] | ReactElement;
}

const AuthProvider = ({ tokenServer = null, children }: IProps): ReactElement => {
    const [value, setValue] = useState<string | null>(null);
    const auth = useSelector<IState, string | null>(state => state.auth?.token || null);

    useEffect(() => {
        setValue(process.browser ? auth : tokenServer);
    }, [auth, tokenServer]);

    return <Auth.Provider value={[value, setValue]}>{children}</Auth.Provider>;
};

export default React.memo(AuthProvider);
