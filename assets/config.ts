const dev = 'http://localhost:5000/api';
const back = 'https://ihor-blog.herokuapp.com/';
const google = 'https://ihor-blog.herokuapp.com/api/auth/google';
const front = 'https://blog-eta-teal.vercel.app/';

const config = {
    dev,
    back,
    front,
    google,
    postPerPage: 6,
    queuePerPage: 5,
    usersPerPage: 40,
    api: process.env.NODE_ENV === 'production' ? back + 'api' : dev,
    colors: {
        A: '#2575f5',
        B: '#17b4f3',
        C: '#9a19f1',
        D: '#2e51f8',
        E: '#e61af5',
        F: '#981aee',
        G: '#168af3',
        H: '#1666f3',
        I: '#5314f5',
        J: '#11b3f6',
        K: '#2b3ff1',
        L: '#6b17f1',
        M: '#7d14f5',
        N: '#f115d4',
        O: '#3326ef',
        P: '#a315ef',
        Q: '#f516b7',
        R: '#ba16f3',
        S: '#14c0f5',
        T: '#5311f3',
        U: '#f31386',
        V: '#17bef1',
        W: '#1099f1',
        X: '#0e7df5',
        Y: '#13d7f3',
        Z: '#095ef1',
    } as { [key: string]: string },
};

export default config;
