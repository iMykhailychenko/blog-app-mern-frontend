import store from '../../redux/store';
import { open } from './Modal.action';
import { IModal } from './Modal.types';

export default (arg: IModal): void => {
    store.dispatch(open(arg));
};
