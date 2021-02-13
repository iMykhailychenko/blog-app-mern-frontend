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
const TrendingPost = (): ReactElement => {
    const post = useSelector<IState, IPost | null>(state => state.posts.trending);

    const desc = post?.desc?.length > MAX_LENGTH ? post.desc.slice(0, MAX_LENGTH) + '...' : post?.desc;
    return post ? (
        <div
            className={clsx(css.banner, post?.banner && css.shadow)}
            style={post?.banner ? { backgroundImage: `url(${config.img + post.banner})` } : {}}
        >
            <h2 className={css.title}>Post of the day</h2>

            <div className={css.post}>
                <Link href={routes.posts.single[0](post._id)}>
                    <a className={css.link}>
                        <h3 className={css.subtitle}>{post.title}</h3>
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
                    <Socials title={post.title} fill="var(--white)" />
                </div>
            </div>
        </div>
    ) : null;
};

export default TrendingPost;
