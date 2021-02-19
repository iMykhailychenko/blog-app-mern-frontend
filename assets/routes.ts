type IDynamic = [(id: string) => string, string];

const routes = {
    home: '/',
    trial: '/trial',
    about: '/about',
    question: '/question',
    search: '/search',

    settings: [(id: string | null | undefined = ':id'): string => `/settings/${id}`, '/settings/:id'] as IDynamic,

    queue: [(id: string | null | undefined = ':id'): string => `/queue/${id}`, '/queue/:id'] as IDynamic,

    users: [(id: string | null | undefined = ':id'): string => `/users/${id}`, '/users/:id'] as IDynamic,

    posts: {
        single: [(id: string): string => `/posts/${id}`, '/posts/:postId'] as IDynamic,
        tag: [(tag: string): string => `/search?q=${tag}`, '/search'] as IDynamic,
        edit: [(id: string): string => `/posts/edit/${id}`, '/posts/edit/:postId'] as IDynamic,
        new: '/posts/new_post',
    },

    auth: {
        signup: '/auth/signup',
        login: '/auth/login',
        forgotPass: '/auth/forgot_pass',
        resetPass: '/auth/reset_pass',
    },
};

export default routes;
