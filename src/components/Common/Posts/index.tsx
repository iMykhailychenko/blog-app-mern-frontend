import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import clsx from 'clsx';
import User from '../User';
import Likes from '../Likes';
import { generateTags } from '../../../assets/helpers';
import { getAuth } from '../../../redux/selectors';
import { IPost } from '../../../interfaces';
import styles from './index.module.css';
import routes from '../../../routes';

interface IProps {
    content: IPost[];
    col?: number;
}

const mediaNotAuth = (col: number): { [key: number]: number; default: number } => ({
    default: col,
    1100: 1,
    900: 2,
    580: 1,
});

const mediaAuth = (col: number): { [key: number]: number; default: number } => ({
    default: col,
    580: 1,
});

const Posts = ({ content, col = 2 }: IProps): ReactElement => {
    const { isAuth } = useSelector(getAuth);
    return (
        <Masonry
            breakpointCols={isAuth ? mediaAuth(col) : mediaNotAuth(col)}
            className={styles.list}
            columnClassName={styles.column}
        >
            {content.map(({ items, user }) => (
                <li className={clsx(styles.card, !items.placeholder && styles.grid)} key={items.id}>
                    <Link to={routes.Post.Single.path[0](items.id)} className={styles.postLink}>
                        {items.placeholder && <img className={styles.img} src={items.placeholder} alt={items.title} />}
                        <div className={styles.inner}>
                            <h4 className={styles.title}>{items.title}</h4>
                            <p className={styles.text}>{items.text}</p>
                            <p className={styles.date}>{items.date}</p>
                        </div>
                    </Link>

                    <div className={styles.likes}>
                        <Likes like={items.like} dislike={items.dislike} watched={items.watched} />
                    </div>

                    {!!items.tags.length && (
                        <div className={styles.tags}>
                            {generateTags(items.tags).map(tag => (
                                <Link to={routes.Post.Tag.path[0](tag)} key={tag} className={styles.tag}>
                                    {`#${tag}`}
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className={styles.inner}>
                        <User {...user} />
                    </div>
                </li>
            ))}
        </Masonry>
    );
};

export default Posts;
