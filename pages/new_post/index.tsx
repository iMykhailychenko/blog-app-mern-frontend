import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';

import AuthRedirect from '../../components/Common/Auth/AuthRedirect';
import serverRedirect from '../../components/HOC/ServerRedirect';
import Banner from '../../components/Pages/NewPost/Banner';
import DateText from '../../components/Pages/NewPost/DateText';
import Desc from '../../components/Pages/NewPost/Desc';
import Socials from '../../components/Pages/NewPost/Socials';
import SubmitButtons from '../../components/Pages/NewPost/SubmitButtons';
import Tags from '../../components/Pages/NewPost/Tags';
import Title from '../../components/Pages/NewPost/Title';
import { wrapper } from '../../redux/store';
import css from './index.module.css';
const ContentEditor = dynamic(() => import('../../components/Pages/NewPost/ContentEditor'), { ssr: false });

const NewPost = (): ReactElement => {
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
                    <Banner />
                    <Desc />
                    <ContentEditor />
                    <Socials />

                    {/*buttons*/}
                    <SubmitButtons />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(serverRedirect());

export default NewPost;
