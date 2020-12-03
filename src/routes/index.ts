import React from 'react';

type IDynamic = [(id: string) => string, string];

const routes = {
    Home: { path: '/', component: React.lazy(() => import('../components/Pages/Home' /* webpackChunkName: "Home" */)) },
    Trial: {
        path: '/trial',
        component: React.lazy(() => import('../components/Pages/Trial' /* webpackChunkName: "Trial" */)),
    },
    // Settings: { path: '/settings', component: React.lazy(() => import('../components/Pages/Settings' /* webpackChunkName: "About" */))  },
    About: {
        path: '/about',
        component: React.lazy(() => import('../components/Pages/About' /* webpackChunkName: "About" */)),
    },
    Question: {
        path: '/question',
        component: React.lazy(() => import('../components/Pages/Question' /* webpackChunkName: "Question" */)),
    },
    Search: {
        path: '/search',
        component: React.lazy(() => import('../components/Pages/Search' /* webpackChunkName: "Search" */)),
    },
    User: {
        path: [(id: string): string => `/user/${id}`, '/user/:id'] as IDynamic,
        component: React.lazy(() => import('../components/Pages/Profile' /* webpackChunkName: "Profile" */)),
    },
    Post: {
        Single: {
            path: [(id: string): string => `/post/${id}`, '/post/:id'] as IDynamic,
            component: React.lazy(() => import('../components/Pages/SinglePost' /* webpackChunkName: "SinglePost" */)),
        },
        Tag: {
            path: [(tag: string): string => `/tags/${tag}`, '/tags/:tag'] as IDynamic,
            component: React.lazy(() => import('../components/Pages/Tags' /* webpackChunkName: "Tags" */)),
        },
        New: {
            path: '/new_post',
            component: React.lazy(() => import('../components/Pages/NewPost' /* webpackChunkName: "NewPost" */)),
        },
    },
    Auth: {
        // Signup: { path: '/signup', component: React.lazy(() => import('../components/Pages/Login' /* webpackChunkName: "Login" */))  },
        Login: {
            path: '/login',
            component: React.lazy(() => import('../components/Pages/Auth/Login' /* webpackChunkName: "Login" */)),
        },
        ForgotPass: {
            path: '/forgot_pass',
            component: React.lazy(
                () => import('../components/Pages/Auth/ForgotPass' /* webpackChunkName: "ForgotPass" */),
            ),
        },
        // ResetPass: { path: '/reset_pass', component: React.lazy(() => import('../components/Pages/ResetPass' /* webpackChunkName: "ResetPass" */))  },
    },
};

export default routes;
