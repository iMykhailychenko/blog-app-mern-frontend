import axios, { AxiosResponse } from 'axios';

import { IParams, IPost } from '../interfaces';

const api = {
    pixabay: async <T>(param: T): Promise<AxiosResponse> => await axios.get('https://pixabay.com/api/', param),
    auth: {
        login: (body: Body): Promise<AxiosResponse<IPost[]>> => axios.post('/auth/login', body),
    },
    posts: {
        getPosts: (params: IParams): Promise<AxiosResponse<IPost[]>> => axios.get('/posts', { params }),
    },
};

export default api;
