import React, { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IAuth, IState } from '../../../../interfaces';

const Auth = createContext<[value: IAuth | null, setValue: (t: IAuth | null) => void]>(null);

interface IProps {
    authServer?: IAuth | null;
    children: JSX.Element | JSX.Element[] | ReactElement;
}

export const AuthProvider = ({ authServer = null, children }: IProps): ReactElement => {
    const [value, setValue] = useState<IAuth | null>(null);
    const auth = useSelector<IState, IAuth>(state => state.auth);

    useEffect(() => {
        setValue(auth || authServer);
    }, [auth, authServer]);

    return <Auth.Provider value={[value, setValue]}>{children}</Auth.Provider>;
};

const useAuth = (): IAuth | null => {
    const [value] = useContext(Auth);
    return value;
};

export default useAuth;
