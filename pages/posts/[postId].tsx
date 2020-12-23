import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import routes from '../../assets/routes';
import Likes from '../../components/Common/Likes';
import Socials from '../../components/Pages/SinglePost/Socials';
import { IPost, IState, IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const SinglePost = (): ReactElement => {
    const post = useSelector<IState, IPost>(state => state.posts.single.data);

    return (
        post && (
            <div className={css.container}>
                <div className={css.content}>
                    <div className={css.likesHead}>
                        <div>
                            <p className={css.subtext}>Share this post in social media:</p>
                            <Socials title={post.title} />
                        </div>

                        <div>
                            <p className={css.subtext}>User feedbacks:</p>
                            <div className={css.likes}>
                                <Likes
                                    like={post.feedback.like}
                                    dislike={post.feedback.dislike}
                                    view={post.feedback.view}
                                    click
                                />
                            </div>
                        </div>
                    </div>

                    <p className={css.subtext}>{'Publication date: ' + post.date}</p>

                    <h1 className={css.title}>{post.title}</h1>

                    <div className={css.tags}>
                        {post.tags.map(tag => (
                            <Link href={routes.posts.tag[0](tag)} key={tag}>
                                <a className={css.tag}>{`#${tag}`}</a>
                            </Link>
                        ))}
                    </div>

                    {post.banner && <img className={config.img + post.banner} src={post.banner} alt={post.title} />}

                    <div className="ready quill">
                        <div className="ql-container ql-post-container ql-snow">
                            <div className="ql-editor ql-post" dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                    </div>

                    <p className={css.subtext}>Share this post in social media:</p>
                    <div className={css.likes}>
                        <Socials title={post.title} />
                    </div>

                    <p className={css.subtext}>User feedbacks:</p>
                    <div className={css.likes}>
                        <Likes
                            like={post.feedback.like}
                            dislike={post.feedback.dislike}
                            view={post.feedback.view}
                            click
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        if (!ctx.query?.postId) return;

        store.dispatch({ type: types.GET_SINGLE_POST_START, payload: ctx.query.postId });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default SinglePost;