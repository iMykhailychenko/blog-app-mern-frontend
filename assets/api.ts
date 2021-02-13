import axios, { AxiosResponse } from 'axios';

import { ICommentPagination, IParams, IPost, IUser } from '../interfaces';
import config from './config';

axios.defaults.baseURL = config.api;

interface IAnswer {
    id?: string;
    comment?: string;
    form: FormData;
}

const api = {
    profile: {
        putFollowers: (id: string): Promise<AxiosResponse<[IUser]>> => axios.put(`/users/followers/${id}`),
        getProfile: (id: string): Promise<AxiosResponse<[IUser]>> => axios.get(`/users/profile/${id}`),
        like: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/like/${id}/users`),
        dislike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/dislike/${id}/users`),
    },
    auth: {
        login: (body: Body): Promise<AxiosResponse<IUser>> => axios.post('/auth/login', body),
        signup: (body: Body): Promise<AxiosResponse<void>> => axios.post('/auth/register', body),
        logout: (): Promise<AxiosResponse<void>> => axios.post('/auth/logout'),
        getUser: (): Promise<AxiosResponse<void>> => axios.get('/users/profile'),
    },
    posts: {
        getPosts: (params: IParams): Promise<AxiosResponse<IPost[]>> => axios.get('/posts', { params }),
        getTrendingPosts: (): Promise<AxiosResponse<IPost[]>> => axios.get('/trending/posts'),
        getUserPosts: (id: string): Promise<AxiosResponse<IPost[]>> => axios.get(`/posts/user/${id}`),
        getSinglePost: (id: string, params?: { [key: string]: string | null }): Promise<AxiosResponse<IPost>> =>
            axios.get(`/posts/${id}`, { params }),
        newPost: (form: FormData): Promise<AxiosResponse<void>> => axios.post('/posts', form),
        deletePost: (id: string): Promise<AxiosResponse<void>> => axios.delete(`/posts/${id}`),
        editPost: ({ id, form }: { id: string; form: IPost }): Promise<AxiosResponse<void>> =>
            axios.put(`/posts/${id}`, form),
        editPostBanner: ({ id, form }: { id: string; form: FormData | null }): Promise<AxiosResponse<void>> =>
            axios.put(`/posts/${id}/banner`, form || null),
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
        editComment: ({ comment, form }: IAnswer): Promise<AxiosResponse<[ICommentPagination]>> =>
            axios.put(`/comments/${comment}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
        postAnswer: ({ id, comment, form }: IAnswer): Promise<AxiosResponse<void>> =>
            axios.post(`/comments/${id}/${comment}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
        commentLike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/like/${id}/comments/`),
        commentDislike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/dislike/${id}/comments/`),
    },
    settings: {
        updateAvatar: (form: FormData | null): Promise<AxiosResponse<void>> => axios.put('/settings/avatar/', form),
        updateBanner: (form: FormData | null): Promise<AxiosResponse<void>> => axios.put('/settings/banner/', form),
        updateUserInfo: (data: { name?: string; surname?: string; email?: string }): Promise<AxiosResponse<void>> =>
            axios.put('/settings/user/', data),
        updateBio: (data: string): Promise<AxiosResponse<void>> => axios.put('/settings/bio/', { bio: data }),
    },
};

export default api;
