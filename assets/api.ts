import axios, { AxiosResponse } from 'axios';

import { IParams, IPost } from '../interfaces';

axios.defaults.baseURL = 'http://localhost:4000/api';

const api = {
    pixabay: async <T>(param: T): Promise<AxiosResponse> => await axios.get('https://pixabay.com/api/', param),
    auth: {
        login: (body: Body): Promise<AxiosResponse<IPost[]>> => axios.post('/auth/login', body),
        logout: (): Promise<AxiosResponse<void>> => axios.post('/auth/logout'),
    },
    posts: {
        getPosts: (params: IParams): Promise<AxiosResponse<IPost[]>> => axios.get('/posts', { params }),
    },
};

export default api;
