import '../styles/styles.css';

import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import App, { AppProps } from 'next/app';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router, useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { END } from 'redux-saga';

import config from '../assets/config';
import { parseCookie } from '../assets/helpers';
import interceptors from '../assets/interceptors';
import AuthProvider from '../components/HOC/Auth/AuthContext';
import MediaProvider from '../components/HOC/Media';
import serverCookie from '../components/HOC/ServerCookie';
import Layout from '../components/Layout/Layout';
import { IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';

const MyApp = ({
    Component,
    pageProps,
    width,
    token,
}: AppProps & { width: number; token: string | null }): ReactElement => {
    const history = useRouter();
    interceptors({ history });

    return (
        <AuthProvider tokenServer={token}>
            <MediaProvider width={width}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MediaProvider>
        </AuthProvider>
    );
};

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => {
    const toMatch = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i;
    const isMobile = toMatch.test(appContext?.ctx?.req?.headers?.['user-agent'] || '');

    const token = parseCookie<string | null>({ value: appContext?.ctx?.req?.headers?.cookie, parsed: true });
    if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    const props = await App.getInitialProps(appContext);
    return { ...props, width: isMobile ? 500 : 1400, token };
};

export default wrapper.withRedux(MyApp);
