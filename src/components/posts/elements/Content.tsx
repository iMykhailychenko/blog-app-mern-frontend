import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Posts.module.css';

interface Props {
    id: string;
    placeholder?: string;
    title: string;
    text: string;
    date: string;
    tags: string[];
}

const Content: React.FC<Props> = ({
    id,
    placeholder,
    title,
    text,
    date,
    tags,
}) => (
    <>
        <Link to={`/post/${id}`} className={styles.postLink}>
            {placeholder && (
                <img className={styles.img} src={placeholder} alt="" />
            )}
            <div className={styles.inner}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.text}>{text}</p>
                <p className={styles.date}>{date}</p>
            </div>
        </Link>

        <div className={styles.inner}>
            {!!tags.length &&
                tags.map((tag, index) => (
                    <Link
                        to={`/tags/${tag}`}
                        key={index}
                        className={styles.tag}
                    >
                        {`#${tag}`}
                    </Link>
                ))}
        </div>
    </>
);

export default Content;
