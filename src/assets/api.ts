import axios, { AxiosResponse } from 'axios';

export default {
    pixabay: async <T>(param: T): Promise<AxiosResponse> => await axios.get('https://pixabay.com/api/', param),
};
