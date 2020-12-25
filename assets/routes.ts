type IDynamic = [(id: string) => string, string];

const routes = {
    home: '/',
    trial: '/trial',
    settings: '/settings',
    about: '/about',
    question: '/question',
    search: '/search',
    user: [(id: string): string => `/user/${id}`, '/user/:id'] as IDynamic,

    posts: {
        single: [(id: string): string => `/posts/${id}`, '/posts/:id'] as IDynamic,
        tag: [(tag: string): string => `/tags/${tag}`, '/tags/:tag'] as IDynamic,
        new: '/new_post',
    },

    auth: {
        signup: '/auth/signup',
        login: '/auth/login',
        forgotPass: '/auth/forgot_pass',
        resetPass: '/auth/reset_pass',
    },
};

export default routes;
