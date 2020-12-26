import axios, { AxiosResponse } from 'axios';

import { IParams, IPost, IUser } from '../interfaces';

axios.defaults.baseURL =
    process.env.NODE_ENV !== 'production' ? 'http://localhost:6000/api' : 'https://ihor-blog.herokuapp.com/api';

const api = {
    picture: (): Promise<AxiosResponse<void>> => axios.get('/pictures/random'),
    auth: {
        login: (body: Body): Promise<AxiosResponse<IUser>> => axios.post('/auth/login', body),
        signup: (body: Body): Promise<AxiosResponse<void>> => axios.post('/auth/register', body),
        logout: (): Promise<AxiosResponse<void>> => axios.post('/auth/logout'),
        getUser: (): Promise<AxiosResponse<void>> => axios.get('/users/profile'),
    },
    posts: {
        getPosts: (params: IParams): Promise<AxiosResponse<IPost[]>> => axios.get('/posts', { params }),
        getSinglePost: (id: string, params?: { [key: string]: string | null }): Promise<AxiosResponse<IPost>> =>
            axios.get(`/posts/${id}`, { params }),
        newPost: (body: { [key: string]: string | string[] }): Promise<AxiosResponse<void>> =>
            axios.post('/posts', body),
        uploadBanner: ({ id, form }: { id: string; form: FormData }): Promise<AxiosResponse<void>> =>
            axios.post(`/posts/${id}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
    },
    feedback: {
        like: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/like/${id}`),
        dislike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/dislike/${id}`),
    },
};

export default api;
