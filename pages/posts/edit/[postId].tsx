import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../../assets/config';
import { getUserId } from '../../../assets/helpers';
import AuthRedirect from '../../../components/Common/Auth/AuthRedirect';
import serverRedirect from '../../../components/HOC/ServerRedirect';
import DateText from '../../../components/Pages/NewPost/DateText';
import Desc from '../../../components/Pages/NewPost/Desc';
import Socials from '../../../components/Pages/NewPost/Socials';
import EditButtons from '../../../components/Pages/NewPost/EditButtons';
import Tags from '../../../components/Pages/NewPost/Tags';
import Title from '../../../components/Pages/NewPost/Title';
import { IPost, IState, IStore, IUser } from '../../../interfaces';
import { wrapper } from '../../../redux/store';
import types from '../../../redux/types';
import css from '../new_post/index.module.css';
const ContentEditor = dynamic(() => import('../../../components/Pages/NewPost/ContentEditor'), { ssr: false });

const EditPost = (): ReactElement => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const user = useSelector<IState, IUser>(state => state.auth.user);
    const post = useSelector<IState, IPost | null>(state => state.posts.single.data);

    useEffect(() => {
        dispatch({
            type: types.GET_EDIT_POST_START,
            payload: query.postId,
            user: user._id,
        });
    }, [dispatch]);

    return (
        <>
            <AuthRedirect />
            <div className={css.container}>
                <div className={css.content}>
                    {/*elements*/}
                    <Socials />
                    <DateText />
                    <Title />
                    <Tags />
                    {post?.banner && <img className={css.banner} src={config.img + post.banner} alt={post.title} />}
                    <Desc />
                    <ContentEditor />
                    <Socials />

                    {/*submit*/}
                    <EditButtons />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    serverRedirect(
        async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
            if (!ctx.query?.postId) return null;
            store.dispatch({
                type: types.GET_SINGLE_POST_START,
                payload: ctx.query.postId,
                user: getUserId(ctx.req.headers.cookie),
            });
            store.dispatch(END);
            await store.sagaTask.toPromise();
        },
    ),
);

export default EditPost;
