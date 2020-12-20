import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';

import ScrollTop from '../../components/Layout/ScrollTopBtn';
import Banner from '../../components/Pages/NewPost/Banner';
import DateText from '../../components/Pages/NewPost/DateText';
import Desc from '../../components/Pages/NewPost/Desc';
import Socials from '../../components/Pages/NewPost/Socials';
import SubmitButtons from '../../components/Pages/NewPost/SubmitButtons';
import Tags from '../../components/Pages/NewPost/Tags';
import Title from '../../components/Pages/NewPost/Title';
import css from './index.module.css';
const ContentEditor = dynamic(() => import('../../components/Pages/NewPost/ContentEditor'), { ssr: false });

const NewPost = (): ReactElement => {
    return (
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
                <ScrollTop />

                {/*buttons*/}
                <SubmitButtons />
            </div>
        </div>
    );
};

export default NewPost;
