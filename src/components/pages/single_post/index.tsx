import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Likes from '../../likes';
import Comments from './Comments';
import ScrollTop from '../../scroll_top_btn';
import { generateTags } from '../../../helpers/functions';
import router from '../../../config/router';
import 'react-quill/dist/quill.snow.css';
import '../new_post/Content/index.css';
import './content.css';
import styles from './index.module.css';

import { post } from '../../../assets/single_post';

export default () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.likesHead}>
                <div>
                    <p className={styles.subtext}>
                        Share this post in social media:
                    </p>
                    <Socials title={post.title} />
                </div>

                <div>
                    <p className={styles.subtext}>User feedbacks:</p>
                    <div className={styles.likes}>
                        <Likes
                            like={post.like}
                            dislike={post.dislike}
                            watched={post.watched}
                            click
                        />
                    </div>
                </div>
            </div>

            <p className={styles.subtext}>{'Publication date: ' + post.date}</p>

            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.tags}>
                {post.tags.length &&
                    generateTags(post.tags).map(tag => (
                        <Link
                            to={router.post.tag[0](tag)}
                            key={tag}
                            className={styles.tag}
                        >
                            {`#${tag}`}
                        </Link>
                    ))}
            </div>

            <img className={styles.banner} src={post.banner} alt={post.title} />

            <div className="quill">
                <div className="ql-container ql-post-container ql-snow">
                    <div
                        className="ql-editor ql-post"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </div>

            <p className={styles.subtext}>Share this post in social media:</p>
            <div className={styles.likes}>
                <Socials title={post.title} />
            </div>

            <p className={styles.subtext}>User feedbacks:</p>
            <div className={styles.likes}>
                <Likes
                    like={post.like}
                    dislike={post.dislike}
                    watched={post.watched}
                    click
                />
            </div>

            <Comments />

            <ScrollTop />
        </div>
    </div>
);
