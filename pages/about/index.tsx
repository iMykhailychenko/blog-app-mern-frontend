import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { END } from 'redux-saga';

import { serverCookie } from '../../assets/helpers';
import Meta from '../../components/Common/Meta';
import PageTitle from '../../components/Layout/PageTitle';
import Slider from '../../components/Pages/About/Slider';
import { IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const About = (): ReactElement => {
    return (
        <>
            <Meta title="#Hello world" />
            <PageTitle>
                #Hello world{' '}
                <span role="img" aria-label="img">
                    ✋
                </span>
            </PageTitle>

            <div className={css.slider_block}>
                <div className={css.slider_title}>
                    <h3>
                        Perspiciatis aliquam doloremque vitae, assumenda amet fugit reiciendis similique cupiditate
                        explicabo quibusdam saepe
                    </h3>
                </div>

                <Slider className={css.slider} />
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        const token = serverCookie((ctx as unknown) as GetServerSidePropsContext);
        if (token) {
            ctx.store.dispatch({ type: types.GET_USER_INFO_START });
            ctx.store.dispatch(END);
            await (ctx.store as IStore).sagaTask.toPromise();
        }
    },
);

export default About;
