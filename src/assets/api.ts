import axios, { AxiosResponse } from 'axios';

interface IParams {
    [key: string]: string | number;
}

const api = {
    pixabay: async <T>(param: T): Promise<AxiosResponse> => await axios.get('https://pixabay.com/api/', param),
    posts: {
        getPosts: (params: IParams): Promise<AxiosResponse> => axios.get('/posts', { params }),
    },
};

export default api;
