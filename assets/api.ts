import axios, { AxiosResponse } from 'axios';

import { IParams, IPost } from '../interfaces';

axios.defaults.baseURL = 'http://localhost:4000/api';

const api = {
    auth: {
        login: (body: Body): Promise<AxiosResponse<IPost[]>> => axios.post('/auth/login', body),
        logout: (): Promise<AxiosResponse<void>> => axios.post('/auth/logout'),
    },
    posts: {
        getPosts: (params: IParams): Promise<AxiosResponse<IPost[]>> => axios.get('/posts', { params }),
        getSinglePost: (id: string): Promise<AxiosResponse<IPost>> => axios.get(`/posts/${id}`),
        newPost: (body: { [key: string]: string | string[] }): Promise<AxiosResponse<void>> =>
            axios.post('/posts', body),
        uploadBanner: ({ id, form }: { id: string; form: FormData }): Promise<AxiosResponse<void>> =>
            axios.post(`/posts/${id}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
    },
};

export default api;
