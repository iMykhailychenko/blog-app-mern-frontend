import placeholder from '../../images/placeholder.jpg';
import { v4 as uuidv4 } from 'uuid';
import avatar from '../../images/avatar.jpg';

interface IContent {
  post: {
    id: string;
    placeholder?: string;
    title: string;
    text: string;
    tags: string[] | [];
    date: string;
  };
  user: {
    avatar: string;
    name: string;
    nick: string;
  };
}

const content: IContent[] = [
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: [],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: [],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: [],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: [],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
  {
    post: {
      id: uuidv4(),
      placeholder,
      title:
        'Dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus',
      text:
        'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
      tags: ['react', 'js', 'typescript', 'css', 'html'],
      date: '09 december 2020, 18:00',
    },
    user: {
      avatar,
      name: 'Ihor Mykhailychenko',
      nick: 'ihormykh',
    },
  },
];

export default content;
