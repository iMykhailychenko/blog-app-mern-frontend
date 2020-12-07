import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

import { formateDate } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import { IPost, IState } from '../../../interfaces';
import Likes from '../Likes';
import User from '../User';
import css from './index.module.css';

interface IProps {
  content: IPost[];
  col?: number;
}

type Media = { [key: number]: number; default: number };

const mediaNotAuth = (col: number): Media => ({
  default: col,
  1100: 1,
  900: 2,
  580: 1,
});

const mediaAuth = (col: number): Media => ({
  default: col,
  580: 1,
});

const Posts = ({ content, col = 2 }: IProps): ReactElement => {
  const token = useSelector<IState, string | null>(state => state.auth.token);

  return (
    <Masonry
      breakpointCols={token ? mediaAuth(col) : mediaNotAuth(col)}
      className={css.list}
      columnClassName={css.column}
    >
      {content?.map(items => (
        <li
          className={clsx(css.card, !items.banner && css.grid)}
          key={items._id}
        >
          <Link href={routes.post.single[0](items._id)}>
            <a className={css.postLink}>
              {items.banner && (
                <img className={css.img} src={items.banner} alt={items.title} />
              )}
              <div className={css.inner}>
                <h4 className={css.title}>{items.title}</h4>
                <p className={css.text}>{items.desc}</p>
                <p className={css.date}>{formateDate(items.date)}</p>
              </div>
            </a>
          </Link>

          <div className={css.likes}>
            <Likes
              like={items.feedback.like}
              dislike={items.feedback.dislike}
              view={items.feedback.view}
            />
          </div>

          {!!items.tags.length && (
            <div className={css.tags}>
              {items.tags.map(tag => (
                <Link href={routes.post.tag[0](tag)} key={tag}>
                  <a className={css.tag}>{`#${tag}`}</a>
                </Link>
              ))}
            </div>
          )}

          <div className={css.inner}>
            <User user={items.author[0]} />
          </div>
        </li>
      ))}
    </Masonry>
  );
};

export default Posts;
