import '../styles/styles.css';

import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import { parseCookie } from '../assets/helpers';
import interceptors from '../assets/interceptors';
import { AuthProvider } from '../components/Common/Auth/AuthContext';
import Layout from '../components/Layout/Layout';
import { IAuth } from '../interfaces';
import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps, auth }: AppProps & { auth: IAuth }): ReactElement => {
    const history = useRouter();
    interceptors({ history });

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" href="/about.jpg" />
                <title>Blog Application</title>
            </Head>
            <AuthProvider authServer={auth}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </>
    );
};

MyApp.getInitialProps = async appContext => {
    const props = await App.getInitialProps(appContext);
    return { ...props, token: parseCookie<IAuth>(appContext?.ctx?.req?.headers?.cookie) };
};

export default wrapper.withRedux(MyApp);
