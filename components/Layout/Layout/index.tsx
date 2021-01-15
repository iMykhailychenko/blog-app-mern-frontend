import React, { ReactElement } from 'react';

import AuthInterceptor from '../../Common/Auth/AuthInterceptor';
import BigLoader from '../../Common/Loader/BigLoader';
import ModalComponent from '../../Common/Modal';
import Footer from '../Footer';
import Header from '../Header';
import ScrollTop from '../ScrollTopBtn';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: IProps): ReactElement => (
    <>
        <Header />
        <AuthInterceptor />
        <BigLoader />
        <ModalComponent />
        {children}
        <ScrollTop />
        <Footer />
    </>
);

export default Layout;
