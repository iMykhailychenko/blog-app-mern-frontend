import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import routes from '../../../../assets/routes';
import { IState } from '../../../../interfaces';

interface IProps {
    path?: string;
    reverse?: boolean;
}

const AuthRedirect = ({ path, reverse = false }: IProps): null => {
    const router = useRouter();
    const token = useSelector<IState, string | null | undefined>(state => state.auth?.token);

    useEffect(() => {
        if (reverse ? token : !token) {
            router.replace(path || routes.home);
        }
    }, [token]);

    return null;
};

export default AuthRedirect;
