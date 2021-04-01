import axios, { AxiosResponse } from 'axios';
import { Params } from 'next/dist/next-server/server/router';

import { ICommentPagination, IPost, IPostPagination, IUser } from '../interfaces';
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
    },
    auth: {
        login: (body: Body): Promise<AxiosResponse<IUser>> => axios.post('/auth/login', body),
        signup: (body: Body): Promise<AxiosResponse<void>> => axios.post('/auth/register', body),
        logout: (): Promise<AxiosResponse<void>> => axios.post('/auth/logout'),
        getUser: (): Promise<AxiosResponse<void>> => axios.get('/users/profile'),
    },
    posts: {
        getPosts: (params: Params): Promise<AxiosResponse<IPost[]>> => axios.get('/posts', { params }),
        getUserPosts: (id: string): Promise<AxiosResponse<IPost[]>> => axios.get(`/posts/user/${id}`),
        getSinglePost: (id: string): Promise<AxiosResponse<IPost>> => axios.get(`/posts/${id}`),
        newPost: (form: FormData): Promise<AxiosResponse<void>> => axios.post('/posts', form),
        deletePost: (id: string): Promise<AxiosResponse<void>> => axios.delete(`/posts/${id}`),
        editPost: ({ id, form }: { id: string; form: IPost }): Promise<AxiosResponse<void>> =>
            axios.put(`/posts/${id}`, form),
        editPostBanner: ({ id, form }: { id: string; form: FormData | null }): Promise<AxiosResponse<void>> =>
            axios.put(`/posts/${id}/banner`, form || null),
    },
    trending: {
        getTrendingPosts: (): Promise<AxiosResponse<IPost[]>> => axios.get('/trending/posts'),
        getTrendingTags: (): Promise<AxiosResponse<string[]>> => axios.get('/trending/tags'),
    },
    feedback: {
        postLike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/like/${id}`),
        postDislike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/dislike/${id}`),
        profileLike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/like/${id}/users`),
        profileDislike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/dislike/${id}/users`),
        commentLike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/like/${id}/comments/`),
        commentDislike: (id: string): Promise<AxiosResponse<void>> => axios.put(`/feedback/dislike/${id}/comments/`),
    },
    comments: {
        getComment: (id: string): Promise<AxiosResponse<ICommentPagination>> => axios.get(`/comments/${id}`),
        postComment: ({ id, form }: { id: string; form: FormData }): Promise<AxiosResponse<void>> =>
            axios.post(`/comments/${id}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
        deleteComment: (id: string): Promise<AxiosResponse<[ICommentPagination]>> => axios.delete(`/comments/${id}`),
        editComment: ({ comment, form }: IAnswer): Promise<AxiosResponse<ICommentPagination>> =>
            axios.put(`/comments/${comment}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
        postAnswer: ({ id, comment, form }: IAnswer): Promise<AxiosResponse<void>> =>
            axios.post(`/comments/${id}/${comment}`, form, { headers: { 'content-type': 'multipart/form-data' } }),
    },
    settings: {
        updateAvatar: (form: FormData | null): Promise<AxiosResponse<void>> => axios.put('/settings/avatar/', form),
        updateBanner: (form: FormData | null): Promise<AxiosResponse<void>> => axios.put('/settings/banner/', form),
        updateUserInfo: (data: { name?: string; surname?: string; email?: string }): Promise<AxiosResponse<void>> =>
            axios.put('/settings/user/', data),
        updateBio: (data: string): Promise<AxiosResponse<void>> => axios.put('/settings/bio/', { bio: data }),
    },
    queue: {
        getQueue: (params: Params): Promise<AxiosResponse<IPostPagination>> => axios.get('/queue/', { params }),
        updateQueue: (id: string): Promise<AxiosResponse<void>> => axios.put(`/queue/${id}`),
    },
    followers: {
        followers: ({ id, params }: { id: string; params: Params }): Promise<AxiosResponse<IPostPagination>> =>
            axios.get(`/users/profile/${id}/followers`, { params }),
        following: ({ id, params }: { id: string; params: Params }): Promise<AxiosResponse<IPostPagination>> =>
            axios.get(`/users/profile/${id}/following`, { params }),
    },
};

export default api;
