import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { Router, useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../../assets/config';
import { parseCookie } from '../../../assets/helpers';
import useAuth from '../../../components/../hooks/auth.hook';
import AuthRedirect from '../../../components/Common/Auth/AuthRedirect';
import Meta from '../../../components/Common/Meta';
import serverRedirect from '../../../components/HOC/ServerRedirect';
import DateText from '../../../components/Pages/NewPost/DateText';
import Desc from '../../../components/Pages/NewPost/Desc';
import EditButtons from '../../../components/Pages/NewPost/EditButtons';
import Socials from '../../../components/Pages/NewPost/Socials';
import Tags from '../../../components/Pages/NewPost/Tags';
import Title from '../../../components/Pages/NewPost/Title';
import { IAuth, IPost, IState, IStore } from '../../../interfaces';
import { wrapper } from '../../../redux/store';
import types from '../../../redux/types';
import css from '../new_post/index.module.css';
const ContentEditor = dynamic(() => import('../../../components/Pages/NewPost/ContentEditor'), { ssr: false });

const EditPost = (): ReactElement => {
    const { query } = useRouter();
    const dispatch = useDispatch();
    const auth = useAuth();

    const post = useSelector<IState, IPost | null>(state => state.posts.single.data);

    useEffect(() => {
        dispatch({
            type: types.GET_EDIT_POST_START,
            payload: query.postId,
            user: auth?.user?._id,
        });
    }, [dispatch]);

    useEffect(() => {
        const handleReset = () => {
            dispatch({ type: types.RESET_POST_FORM });
        };
        Router.events.on('routeChangeStart', handleReset);

        return () => {
            Router.events.off('routeChangeStart', handleReset);
        };
    }, [dispatch]);

    return post ? (
        <>
            <Meta
                title={`Edit post: ${post.title}`}
                description={post.desc}
                keywords={post.tags.join(' ')}
                icon={post.banner}
            />
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
    ) : null;
};

export const getServerSideProps = wrapper.getServerSideProps(
    serverRedirect(
        async (ctx: GetServerSidePropsContext & { store: IStore; auth: IAuth }): Promise<void> => {
            if (!ctx.query?.postId) return null;
            ctx.store.dispatch({
                type: types.GET_SINGLE_POST_START,
                payload: ctx.query.postId,
                user: ctx.auth?.user?._id,
            });
            ctx.store.dispatch(END);
            await ctx.store.sagaTask.toPromise();
        },
    ),
);

export default EditPost;
