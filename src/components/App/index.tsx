import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../Common/Loader/BigLoader';
import ScrollTop from '../HOC/ScrollTop';
import AuthWrap from '../HOC/AuthWrap';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

import routes from '../../routes';

const App = () => (
    <>
        <Header />
        <ScrollTop />
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route path={routes.Home.path} exact component={routes.Home.component} />
                <Route path={routes.Post.Single.path[1]} component={routes.Post.Single.component} />
                <Route path={routes.User.path[1]} component={routes.User.component} />
                <Route path={routes.About.path} component={routes.About.component} />
                <Route path={routes.Question.path} component={routes.Question.component} />
                <Route path={routes.Trial.path} component={routes.Trial.component} />
                <Route path={routes.Search.path} component={routes.Search.component} />
                <Route path={routes.Post.Tag.path[1]} component={routes.Post.Tag.component} />
                <AuthWrap path={routes.Post.New.path} component={routes.Post.New.component} />
                <AuthWrap path={routes.Auth.Login.path} component={routes.Auth.Login.component} revers />
                <AuthWrap path={routes.Auth.ForgotPass.path} component={routes.Auth.ForgotPass.component} revers />
            </Switch>
        </Suspense>
        <Footer />
    </>
);

export default App;
