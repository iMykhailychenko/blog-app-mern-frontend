import React from 'react';
import Slider from './Slider';
import styles from './index.module.css';
import PageTitle from '../../../common/page_title';

export default () => {
    return (
        <>
            <PageTitle>
                #Hello world{' '}
                <span role="img" aria-label="img">
                    ✋
                </span>
            </PageTitle>

            <div className={styles.slider_block}>
                <div className={styles.slider_title}>
                    <h3>
                        Perspiciatis aliquam doloremque vitae, assumenda amet fugit reiciendis similique cupiditate
                        explicabo quibusdam saepe
                    </h3>
                </div>

                <Slider className={styles.slider} />
            </div>
        </>
    );
};
