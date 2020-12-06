import { IState } from '../interfaces';

const initState: IState = {
  auth: {
    loading: true,
    user: null,
  },
  posts: {
    list: {
      loading: true,
      data: null,
    },
  },
};

export default initState;
