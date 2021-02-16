import { HYDRATE } from 'next-redux-wrapper';

import { IPostList, IState } from '../../interfaces';
import { IAction } from './saga';

const queue = (state: IPostList = null, action: IAction): IPostList => {
    switch (action.type) {
        case HYDRATE:
            return (action.payload as IState).queue;

        default:
            return state;
    }
};

export default queue;
