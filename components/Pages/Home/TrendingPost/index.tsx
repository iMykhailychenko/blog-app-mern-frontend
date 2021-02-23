import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import config from '../../../../assets/config';
import routes from '../../../../assets/routes';
import { IPost, IState } from '../../../../interfaces';
import Socials from '../../SinglePost/Socials';
import css from './index.module.css';

const MAX_LENGTH = 200;
const TrendingPost = (): ReactElement | null => {
    const trending = useSelector<IState, IPost | null>(state => state.trending?.post);
    const desc =
        trending?.desc && trending?.desc?.length > MAX_LENGTH
            ? trending.desc.slice(0, MAX_LENGTH) + '...'
            : trending?.desc || '';

    return trending ? (
        <div
            className={clsx(css.banner, trending?.banner && css.shadow)}
            style={trending?.banner ? { backgroundImage: `url(${config.prod.back + trending.banner})` } : {}}
        >
            <h2 className={css.title}>Post of the day</h2>

            <div className={css.post}>
                <Link href={routes.posts.single[0](trending._id)}>
                    <a className={css.link}>
                        <h3 className={css.subtitle}>{trending.title}</h3>
                        {desc && (
                            <p
                                className={css.text}
                                dangerouslySetInnerHTML={{
                                    __html: desc.replace(/\n\n/gi, '<br/>').replace(/\n/gi, '<br/>'),
                                }}
                            />
                        )}
                    </a>
                </Link>

                <div className={css.socials}>
                    <Socials title={trending.title} fill="var(--white)" />
                </div>
            </div>
        </div>
    ) : null;
};

export default TrendingPost;
