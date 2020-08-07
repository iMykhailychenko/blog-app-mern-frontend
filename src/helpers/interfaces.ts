export interface IPost {
    items: {
        id: string;
        placeholder?: string;
        title: string;
        text: string;
        tags: string;
        date: string;
    };
    user: {
        id: string;
        avatar: string;
        name: string;
        nick: string;
    };
}

export interface IPostFields {
    title: string;
    desc: string;
    tags: string;
    content: string;
}

export interface INewPost extends IPostFields {
    banner: File | null;
}

export interface ISinglePost extends IPostFields {
    banner: string;
    date: string;
    user: {
        id: string;
        avatar: string;
        name: string;
        nick: string;
    };
}

export interface IState {
    menu: boolean;
    post: {
        list: {
            loading: boolean;
            items: IPost[];
            error: boolean;
        };
        newPost: INewPost;
        single: {
            loading: boolean;
            items: ISinglePost;
            error: boolean;
        }
    };
}
