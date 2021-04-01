import { useContext } from 'react';

import { Auth } from '../components/HOC/Auth/AuthContext';

const useAuth = (): string | null => {
    const [value] = useContext(Auth);
    return value;
};

export default useAuth;
