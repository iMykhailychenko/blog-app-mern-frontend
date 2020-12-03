import axios, { AxiosResponse } from 'axios';

const api = {
    pixabay: async <T>(param: T): Promise<AxiosResponse> => await axios.get('https://pixabay.com/api/', param),
};

export default api;
