import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import ScrollTop from '../../scroll_top';
import { generateTags } from '../../../helpers/functions';
import router from '../../../config/router';
import styles from './index.module.css';

import { post } from '../../../assets/single_post';

export default () => {
    const left: string | undefined =
        window.innerWidth < 1380 ? '1.8rem' : undefined;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Socials title={post.title} />

                <p className={styles.date}>{post.date}</p>

                <h1 className={styles.title}>{post.title}</h1>

                <div className={styles.tags}>
                    {post.tags.length &&
                        generateTags(post.tags).map(tag => (
                            <Link
                                to={router.post.tag(tag)}
                                key={tag}
                                className={styles.tag}
                            >
                                {`#${tag}`}
                            </Link>
                        ))}
                </div>

                <ScrollTop left={left} />
            </div>
        </div>
    );
};
