import { IComment } from '../helpers/interfaces';
import avatar from '../images/avatar.jpg';
import img from '../images/post.jpg';

export const comments: IComment[] = [
    {
        id: '01',
        date: '07.08.2020',
        text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores 
        voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam 
        sequi voluptatem quidem? Consequuntur!`,
        like: ['01', '02', '03', '50', '34', '32'],
        dislike: ['23', '765', '88', '39'],
        user: {
            avatar,
            id: 'user-0001',
            name: 'Ihor Mykhailychenko',
            email: 'ihor_mail@gmail.com',
            nick: 'ihormykh',
            posts: 215,
        },
        parent: true,
        answers: [
            {
                id: '01',
                date: '07.08.2020',
                text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores 
                voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam 
                sequi voluptatem quidem? Consequuntur!`,
                like: ['01', '02', '03', '50', '34', '32'],
                dislike: ['23', '765', '88', '39'],
                parent: false,
                user: {
                    avatar,
                    id: 'user-0002',
                    name: 'Ihor Mykhailychenko',
                    email: 'ihor_mail@gmail.com',
                    nick: 'ihormykh',
                    posts: 215,
                },
            },
            {
                id: '02',
                date: '07.08.2020',
                text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores 
                voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam 
                sequi voluptatem quidem? Consequuntur!`,
                like: ['01', '02', '03', '50', '34', '32'],
                dislike: ['23', '765', '88', '39'],
                parent: false,
                img,
                user: {
                    avatar,
                    id: 'user-0002',
                    name: 'Ihor Mykhailychenko',
                    email: 'ihor_mail@gmail.com',
                    nick: 'ihormykh',
                    posts: 215,
                },
            },
            {
                id: '03',
                date: '07.08.2020',
                text: `labore nulla nihil soluta. Et voluptas veniam sequi voluptatem quidem? Consequuntur!`,
                like: ['01', '02', '03', '50', '34', '32'],
                dislike: ['23', '765', '88', '39'],
                parent: false,
                user: {
                    avatar,
                    id: 'user-0002',
                    name: 'Ihor Mykhailychenko',
                    email: 'ihor_mail@gmail.com',
                    nick: 'ihormykh',
                    posts: 215,
                },
            },
        ],
    },
    {
        id: '02',
        date: '07.08.2020',
        text: `Itaque  exercitationem facilis, sint consequatur ad ducimus maiores 
        voluptatibus distinctio velit, labore nulla nihil soluta. Et voluptas veniam 
        sequi voluptatem quidem? Consequuntur!`,
        like: ['01', '02', '03', '50', '34', '32'],
        dislike: ['23', '765', '88', '39'],
        parent: true,
        user: {
            avatar,
            id: 'user-0002',
            name: 'Ihor Mykhailychenko',
            email: 'ihor_mail@gmail.com',
            nick: 'ihormykh',
            posts: 215,
        },
    },
    {
        id: '03',
        date: '07.08.2020',
        text: `labore nulla nihil soluta. Et voluptas veniam sequi voluptatem quidem? Consequuntur!`,
        like: ['01', '02', '03', '50', '34', '32'],
        dislike: ['23', '765', '88', '39'],
        parent: true,
        img,
        user: {
            avatar,
            id: 'user-0002',
            name: 'Ihor Mykhailychenko',
            email: 'ihor_mail@gmail.com',
            nick: 'ihormykh',
            posts: 215,
        },
    },
];
