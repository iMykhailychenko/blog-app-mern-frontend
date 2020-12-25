import React, { ReactElement } from 'react';

import QuestionForm from '../../components/Common/Forms/Question';
import Picture from '../../components/Common/Picture';
import PageTitle from '../../components/Layout/PageTitle';
import css from './index.module.css';

const Question = (): ReactElement => {
    return (
        <>
            <PageTitle>
                Have a question?{' '}
                <span role="img" aria-label="img">
                    🤔
                </span>
            </PageTitle>

            <div className={css.content}>
                <Picture className={css.img} />

                <div className={css.inner}>
                    <h2 className={css.title}>Feel free to ask whatever you want</h2>

                    <p className={css.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores assumenda in
                        exercitationem, cum minima non repudiandae veniam ut, harum alias praesentium ipsa adipisci
                        quibusdam sequi. Mollitia expedita vero dolorum.
                    </p>

                    <QuestionForm />
                </div>
            </div>
        </>
    );
};

export default Question;
