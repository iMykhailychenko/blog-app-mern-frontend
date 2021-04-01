import { GetServerSidePropsContext } from 'next';

import { parseCookie } from '../../../assets/helpers';

const serverCookie = (ctx: GetServerSidePropsContext): string | null =>
    parseCookie<string | null>({ value: ctx.req.headers.cookie, parsed: true });

export default serverCookie;
