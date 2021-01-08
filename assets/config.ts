const config = {
    postPerPage: 15,
    img: process.env.NODE_ENV === 'production' ? 'https://ihor-blog.herokuapp.com/' : 'http://localhost:7000/',
    api: {
        dev: 'http://localhost:7000/api',
        prod: 'https://ihor-blog.herokuapp.com/api',
    },
    host: {
        dev: 'http://localhost:5000',
        prod: 'https://blog-eta-teal.vercel.app/',
    },
};

export default config;
