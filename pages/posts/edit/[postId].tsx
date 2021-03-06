import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { Router, useRouter } from 'next/router';
import React, { ChangeEvent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../../assets/config';
import { serverRedirect } from '../../../assets/helpers';
import Meta from '../../../components/Common/Meta';
import AuthRedirect from '../../../components/HOC/Auth/AuthRedirect';
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

const EditPost = (): ReactElement | null => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const auth = useSelector<IState, IAuth | null>(state => state.auth);
    const post = useSelector<IState, IPost | null>(state => state.posts.single.data);

    const handleBannerChange = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({
            type: types.EDIT_POSTS_BANNER_START,
            payload: { id: query.postId, banner: event.target?.files?.[0] },
        });
    };

    const handleDeleteBanner = (): void => {
        dispatch({ type: types.EDIT_POSTS_BANNER_START, payload: { id: query.postId } });
    };

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
                    <Socials />
                    <DateText />
                    <Title />
                    <Tags />

                    {post.banner ? (
                        <button className={css.delete} onClick={handleDeleteBanner} type="button">
                            <FontAwesomeIcon icon={faTimesCircle} />
                            <span>Delete banner</span>
                        </button>
                    ) : null}

                    <div className={css.banner}>
                        {post.banner ? (
                            <img className={css.banner} src={config.prod.back + post.banner} alt="" />
                        ) : null}
                        <input type="file" onChange={handleBannerChange} className={css.file} />
                        <div className={css.add}>
                            <div className="add" />
                            <p>Edit page banner</p>
                        </div>
                    </div>

                    <Desc />
                    <ContentEditor />
                    <Socials />

                    <EditButtons />
                </div>
            </div>
        </>
    ) : null;
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        const auth: string | null = serverRedirect((ctx as unknown) as GetServerSidePropsContext);
        if (!auth) return;
        ctx.store.dispatch({ type: types.GET_USER_INFO_START });

        ctx.store.dispatch({
            type: types.GET_SINGLE_POST_START,
            payload: ctx.query.postId,
        });
        ctx.store.dispatch(END);
        await (ctx?.store as IStore)?.sagaTask?.toPromise();
    },
);

export default EditPost;
