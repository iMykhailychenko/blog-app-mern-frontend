import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../../common/loader/big_loader';
import ScrollTopHoc from '../scroll_top_hoc';
import AuthWrap from '../../common/auth_wrap';
import Header from '../header';
import Footer from '../footer';
import router from '../../config/router';

const About = lazy(() =>
    import('../pages/about' /* webpackChunkName: "About" */),
);
const Home = lazy(() => import('../pages/home' /* webpackChunkName: "Home" */));
const Question = lazy(() => import('../pages/question' /* webpackChunkName: "Question" */));
const Profile = lazy(() =>
    import('../pages/profile' /* webpackChunkName: "Profile" */),
);
const SinglePost = lazy(() =>
    import('../pages/single_post' /* webpackChunkName: "SinglePost" */),
);
const NewPost = lazy(() =>
    import('../pages/new_post' /* webpackChunkName: "NewPost" */),
);
const Trial = lazy(() =>
    import('../pages/trial' /* webpackChunkName: "Trial" */),
);
const Login = lazy(() =>
    import('../pages/login' /* webpackChunkName: "Login" */),
);
const ForgotPass = lazy(() =>
    import('../pages/forgot_pass' /* webpackChunkName: "ForgotPass" */),
);
const Search = lazy(() =>
    import('../pages/search' /* webpackChunkName: "Search" */),
);
const Tags = lazy(() =>
    import('../pages/tags' /* webpackChunkName: "Tags" */),
);

const App = () => (
    <>
        <Header />

        <ScrollTopHoc />

        <Suspense fallback={<Loader />}>
            <Switch>
                <Route path={router.home} exact component={Home} />
                <Route path={router.post.single[1]} component={SinglePost} />
                <Route path={router.user[1]} component={Profile} />
                <Route path={router.about} component={About} />
                <Route path={router.question} component={Question} />
                <Route path={router.trial} component={Trial} />
                <Route path={router.search} component={Search} />
                <Route path={router.post.tag[1]} component={Tags} />

                <AuthWrap path={router.auth.login} component={Login} revers />
                <AuthWrap
                    path={router.auth.forgotPass}
                    component={ForgotPass}
                    revers
                />

                <AuthWrap path={router.post.new} component={NewPost} />
            </Switch>
        </Suspense>

        <Footer />
    </>
);

export default App;
