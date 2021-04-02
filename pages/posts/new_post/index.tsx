import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';
import { END } from 'redux-saga';

import { serverRedirect } from '../../../assets/helpers';
import Meta from '../../../components/Common/Meta';
import AuthRedirect from '../../../components/HOC/Auth/AuthRedirect';
import Banner from '../../../components/Pages/NewPost/Banner';
import DateText from '../../../components/Pages/NewPost/DateText';
import Desc from '../../../components/Pages/NewPost/Desc';
import Socials from '../../../components/Pages/NewPost/Socials';
import SubmitButtons from '../../../components/Pages/NewPost/SubmitButtons';
import Tags from '../../../components/Pages/NewPost/Tags';
import Title from '../../../components/Pages/NewPost/Title';
import { IStore } from '../../../interfaces';
import { wrapper } from '../../../redux/store';
import types from '../../../redux/types';
import css from './index.module.css';
const ContentEditor = dynamic(() => import('../../../components/Pages/NewPost/ContentEditor'), { ssr: false });

const NewPost = (): ReactElement => {
    return (
        <>
            <AuthRedirect />
            <Meta title="Create new post" />
            <div className={css.container}>
                <div className={css.content}>
                    {/*elements*/}
                    <Socials />
                    <DateText />
                    <Title />
                    <Tags />
                    <Banner />
                    <Desc />
                    <ContentEditor />
                    <Socials />

                    {/*submit*/}
                    <SubmitButtons />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        const token = serverRedirect((ctx as unknown) as GetServerSidePropsContext, null);
        if (token) {
            ctx.store.dispatch({ type: types.GET_USER_INFO_START });
            ctx.store.dispatch(END);
            await (ctx.store as IStore).sagaTask.toPromise();
        }
    },
);

export default NewPost;
