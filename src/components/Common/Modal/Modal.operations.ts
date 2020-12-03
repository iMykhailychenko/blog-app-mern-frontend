import { IModal } from '../../../interfaces';
import store from '../../../redux/store';
import { open } from './Modal.action';

export default (arg: IModal): void => {
    store.dispatch(open(arg));
};
