import { GetServerSidePropsContext } from 'next';

import { getToken } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import { IStore } from '../../../interfaces';

type Callback = (ctx: GetServerSidePropsContext & { store: IStore }) => Promise<void> | void;

const serverRedirect = (func?: Callback, path?: string): Callback => async (
    ctx: GetServerSidePropsContext & { store: IStore },
): Promise<void> => {
    if (!getToken(ctx.req.headers.cookie)) {
        ctx.res.statusCode = 302;
        ctx.res.setHeader('Location', path || routes.home);
    }

    if (func) return func(ctx);
};

export default serverRedirect;
