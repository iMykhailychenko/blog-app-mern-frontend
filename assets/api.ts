import axios, { AxiosResponse } from 'axios';

import { ICommentPagination, IParams, IPost, IUser } from '../interfaces';

axios.defaults.baseURL =
    process.env.NODE_ENV !== 'production' ? 'http://localhost:7000/api' : 'https://ihor-blog.herokuapp.com/api';

interface IAnswer {
    id: string;
    comment: string;
    form: FormData;
}
const api = {
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
    comments: {
        getComment: (id: string): Promise<AxiosResponse<[ICommentPagination]>> => axios.get(`/comments/${id}`),
        postComment: ({ id, form }: { id: string; form: FormData }): Promise<AxiosResponse<void>> =>
            axios.post(`/comments/${id}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
        deleteComment: (id: string): Promise<AxiosResponse<[ICommentPagination]>> => axios.delete(`/comments/${id}`),
        postAnswer: ({ id, comment, form }: IAnswer): Promise<AxiosResponse<void>> =>
            axios.post(`/comments/${id}/${comment}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
    },
};

export default api;
