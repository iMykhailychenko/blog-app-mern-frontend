import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import * as types from './Picture.types';
import api from '../../../assets/api';
import { IState } from '../../../interfaces';

const random = (max: number): number => Math.floor(Math.random() * (max - 1)) + 1;

export const getPicture = <T>(param: T): ThunkAction<void, IState, unknown, Action<any>> => async dispatch => {
    dispatch<types.IAction>({ type: types.GET_PICTURE_START });

    try {
        const { data, status } = await api.pixabay(param);
        if (status < 200 || status >= 300) throw new Error('Something went wrong');

        dispatch({
            type: types.GET_PICTURE_SUCCESS,
            payload: data.hits[random(40)].largeImageURL,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: types.GET_PICTURE_SUCCESS,
            payload: '/about.jpg',
        });
        dispatch({
            type: types.GET_PICTURE_ERROR,
        });
    }
};
