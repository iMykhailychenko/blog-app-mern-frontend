import { GetServerSidePropsContext } from 'next';

import routes from '../../../assets/routes';
import serverCookie from '../ServerCookie';

const serverRedirect = (ctx: GetServerSidePropsContext, path?: string | null, reverse = false): string | null => {
    const auth = serverCookie(ctx);
    const redirect = reverse ? auth : !auth;
    if (redirect) {
        ctx.res.statusCode = 302;
        ctx.res.setHeader('Location', path || routes.home);
    }

    return auth;
};

export default serverRedirect;
