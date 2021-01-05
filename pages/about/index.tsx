import React, { ReactElement } from 'react';

import Meta from '../../components/Common/Meta';
import PageTitle from '../../components/Layout/PageTitle';
import Slider from '../../components/Pages/About/Slider';
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

export default About;
