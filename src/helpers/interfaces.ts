export interface IPost {
    items: {
        id: string;
        placeholder?: string;
        title: string;
        text: string;
        tags: string[] | [];
        date: string;
    };
    user: {
        id: string;
        avatar: string;
        name: string;
        nick: string;
    };
}

export interface INewPost {
    title: string;
    desc: string;
    banner: File | null;
    tags: string[];
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
    };
}
