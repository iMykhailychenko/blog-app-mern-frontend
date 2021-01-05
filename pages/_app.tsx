import '../styles/styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useStore } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import interceptors from '../assets/interceptors';
import AuthInterceptor from '../components/Common/Auth/AuthInterceptor';
import BigLoader from '../components/Common/Loader/BigLoader';
import ModalComponent from '../components/Common/Modal';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ScrollTop from '../components/Layout/ScrollTopBtn';
import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
    const store = useStore();
    const history = useRouter();
    const persist = persistStore(store, {});

    interceptors({ history });

    return (
        <PersistGate loading={null} persistor={persist}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" href="/about.jpg" />
                <title>Blog Application</title>
            </Head>
            <AuthInterceptor />
            <BigLoader />
            <ModalComponent />
            <Header />
            <Component {...pageProps} />
            <ScrollTop />
            <Footer />
        </PersistGate>
    );
};

export default wrapper.withRedux(MyApp);
