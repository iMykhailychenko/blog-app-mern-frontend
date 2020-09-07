import user from './user';
import posts from './posts'
import {INotification} from '../helpers/interfaces'

const notification: INotification[] = [
    {
        type: 'like',
        target: 'post',
        user,
        post: posts[1],
    },
    {
        type: 'like',
        target: 'comment',
        user,
        post: posts[3],
    },
    {
        type: 'comment',
        target: 'post',
        user,
        post: posts[0],
    },
    {
        type: 'comment',
        target: 'comment',
        user,
        post: posts[4],
    }
];

export default notification;