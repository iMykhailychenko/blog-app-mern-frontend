const config = {
    postPerPage: 15,
    img: process.env.NODE_ENV === 'production' ? 'https://ihor-blog.herokuapp.com/' : 'http://localhost:7000/',
    api: process.env.NODE_ENV === 'production' ? 'https://ihor-blog.herokuapp.com/api' : 'http://localhost:7000/api',
    host: process.env.NODE_ENV === 'production' ? 'https://blog-eta-teal.vercel.app/' : 'http://localhost:5000',
};

export default config;
