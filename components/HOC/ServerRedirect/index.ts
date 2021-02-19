import { GetServerSidePropsContext } from 'next';

import routes from '../../../assets/routes';
import { IAuth } from '../../../interfaces';
import serverCookie from '../ServerCookie';

const serverRedirect = (ctx: GetServerSidePropsContext, path?: string | null, reverse = false): IAuth | null => {
    const auth = serverCookie(ctx);
    const redirect = reverse ? auth?.token : !auth?.token;
    if (redirect) {
        ctx.res.statusCode = 302;
        ctx.res.setHeader('Location', path || routes.home);
    }

    return auth;
};

export default serverRedirect;
