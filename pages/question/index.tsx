import React, { ReactElement } from 'react';

import QuestionForm from '../../components/Common/Forms/Question';
import Meta from '../../components/Common/Meta';
import Picture from '../../components/Common/Picture';
import PageTitle from '../../components/Layout/PageTitle';
import css from './index.module.css';

const Question = (): ReactElement => {
    return (
        <>
            <Meta
                title="Have a question?"
                description="Have a question? Feel free to ask whatever you want | Read and share ideas"
            />
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
                    <QuestionForm />
                </div>
            </div>
        </>
    );
};

export default Question;
