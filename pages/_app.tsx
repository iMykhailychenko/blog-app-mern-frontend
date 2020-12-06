import '../styles/styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useStore } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import interceptors from '../assets/interceptors';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import ModalComponent from '../components/Common/Modal';
import ScrollTop from '../components/Common/ScrollTopBtn';
import AuthInterceptor from '../components/HOC/AuthInterceptor';
import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const store = useStore();
  const history = useRouter();
  const persistor = persistStore(store, {}, () => {
    persistor.persist();
  });

  interceptors({ history });

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is my blog app createtd with react / next.s / redux / typescript / node.js"
        />
        <meta
          name="keywords"
          content="This is my blog app createtd with react / next.js / redux / typescript / node.js"
        />
        <meta property="og:url" content="/" />
        <meta
          property="og:title"
          content="This is my blog app createtd with react / next.s / redux / typescript / node.js"
        />
        <meta property="og:image" content="/about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="image_src" href="/about.jpg" />
        <meta name="twitter:image" content="/about.jpg" />
        <meta property="vk:image" content="/about.jpg" />
        <meta property="og:image" content="/about.jpg" />
        <link rel="image_src" href="/about.jpg" />
        <meta
          property="og:description"
          content="This is my blog app createtd with react / next.s / redux / typescript / node.js"
        />
        <meta
          name="twitter:description"
          content="This is my blog app createtd with react / next.s / redux / typescript / node.js"
        />
        <meta
          name="twitter:title"
          content="This is my blog app createtd with react / next.s / redux / typescript / node.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ihor_mykhailychenko" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app.png" />
        <meta name="application-name" content="blog" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <title>Blog Application</title>
      </Head>
      <AuthInterceptor />
      <ScrollTop />
      <ModalComponent />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
