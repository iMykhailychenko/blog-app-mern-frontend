import { GetServerSidePropsContext } from 'next';

import routes from '../../../assets/routes';
import serverCookie from '../ServerCookie';

const serverRedirect = (ctx: GetServerSidePropsContext, path?: string | null, reverse = false): string | null => {
    const token = serverCookie(ctx);
    const redirect = reverse ? token : !token;
    if (redirect) {
        ctx.res.statusCode = 302;
        ctx.res.setHeader('Location', path || routes.home);
    }

    return token;
};

export default serverRedirect;
