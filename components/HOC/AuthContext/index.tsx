import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IAuth, IState } from '../../../interfaces';

export const Auth = createContext<[value: IAuth | null, setValue: (t: IAuth | null) => void]>(null);

interface IProps {
    authServer?: IAuth | null;
    children: JSX.Element | JSX.Element[] | ReactElement;
}

const AuthProvider = ({ authServer = null, children }: IProps): ReactElement => {
    const auth = useSelector<IState, IAuth>(state => state.auth);
    const [value, setValue] = useState<IAuth | null>(auth.token ? auth : authServer);

    useEffect(() => {
        setValue(auth);
    }, [auth]);

    return <Auth.Provider value={[value, setValue]}>{children}</Auth.Provider>;
};

export default AuthProvider;
