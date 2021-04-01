import React, { ReactElement } from 'react';

import BigLoader from '../../Common/Loader/BigLoader';
import ModalComponent from '../../Common/Modal';
import AuthInterceptor from '../../HOC/Auth/AuthInterceptor';
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
