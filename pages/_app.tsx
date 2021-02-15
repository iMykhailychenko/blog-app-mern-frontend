import '../styles/styles.css';

import axios from 'axios';
import App, { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import { parseCookie } from '../assets/helpers';
import interceptors from '../assets/interceptors';
import AuthProvider from '../components/HOC/AuthContext';
import MediaProvider from '../components/HOC/Media';
import Layout from '../components/Layout/Layout';
import { IAuth } from '../interfaces';
import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps, width, auth }: AppProps & { width: number; auth: IAuth }): ReactElement => {
    const history = useRouter();
    interceptors({ history });

    return (
        <AuthProvider authServer={auth}>
            <MediaProvider width={width}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MediaProvider>
        </AuthProvider>
    );
};

MyApp.getInitialProps = async appContext => {
    const toMatch = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i;
    const isMobile = toMatch.test(appContext?.ctx?.req?.headers?.['user-agent']);

    const props = await App.getInitialProps(appContext);
    const auth = parseCookie<IAuth>(appContext?.ctx?.req?.headers?.cookie);
    if (auth?.token) axios.defaults.headers.common.Authorization = `Bearer ${auth?.token}`;
    return { ...props, width: isMobile ? 500 : 1400, auth };
};

export default wrapper.withRedux(MyApp);
