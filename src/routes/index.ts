import { lazy } from 'react';

const routes = {
    Home: { path: '/', component: lazy(() => import('../components/Pages/Home' /* webpackChunkName: "Home" */)) },
    Trial: {
        path: '/trial',
        component: lazy(() => import('../components/Pages/Trial' /* webpackChunkName: "Trial" */)),
    },
    // Settings: { path: '/settings', component: lazy(() => import('../components/Pages/Settings' /* webpackChunkName: "About" */))  },
    About: {
        path: '/about',
        component: lazy(() => import('../components/Pages/About' /* webpackChunkName: "About" */)),
    },
    Question: {
        path: '/question',
        component: lazy(() => import('../components/Pages/Question' /* webpackChunkName: "Question" */)),
    },
    Search: {
        path: '/search',
        component: lazy(() => import('../components/Pages/Search' /* webpackChunkName: "Search" */)),
    },
    User: {
        path: [(id: string): string => `/user/${id}`, '/user/:id'] as IDynamic,
        component: lazy(() => import('../components/Pages/Profile' /* webpackChunkName: "Profile" */)),
    },
    Post: {
        Single: {
            path: [(id: string): string => `/post/${id}`, '/post/:id'] as IDynamic,
            component: lazy(() => import('../components/Pages/SinglePost' /* webpackChunkName: "SinglePost" */)),
        },
        Tag: {
            path: [(tag: string): string => `/tags/${tag}`, '/tags/:tag'] as IDynamic,
            component: lazy(() => import('../components/Pages/Tags' /* webpackChunkName: "Tags" */)),
        },
        New: {
            path: '/new_post',
            component: lazy(() => import('../components/Pages/NewPost' /* webpackChunkName: "NewPost" */)),
        },
    },
    Auth: {
        // Signup: { path: '/signup', component: lazy(() => import('../components/Pages/Login' /* webpackChunkName: "Login" */))  },
        Login: {
            path: '/login',
            component: lazy(() => import('../components/Pages/Login' /* webpackChunkName: "Login" */)),
        },
        ForgotPass: {
            path: '/forgot_pass',
            component: lazy(() => import('../components/Pages/ForgotPass' /* webpackChunkName: "ForgotPass" */)),
        },
        // ResetPass: { path: '/reset_pass', component: lazy(() => import('../components/Pages/ResetPass' /* webpackChunkName: "ResetPass" */))  },
    },
};

export default routes;
