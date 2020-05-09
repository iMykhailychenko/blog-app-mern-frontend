import React from 'react';
import styles from '../Posts.module.css';

interface Props {
  placeholder?: string;
  title: string;
  text: string;
  date: string;
  tags: string[];
}

const Content: React.FC<Props> = ({ placeholder, title, text, date, tags }) => (
  <>
    <a
      className={styles.postLink}
      href="https://ihor-mykhailychenko.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {placeholder && <img className={styles.img} src={placeholder} alt="" />}
    </a>

    <div className={styles.inner}>
      <div className={styles.content}>
        <a
          className={styles.postLink}
          href="https://ihor-mykhailychenko.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </a>
        {!!tags.length &&
          tags.map((tag, index) => (
            <a
              className={styles.tag}
              key={index}
              href="https://ihor-mykhailychenko.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`#${tag}`}
            </a>
          ))}

        <p className={styles.date}>{date}</p>
      </div>
    </div>
  </>
);

export default Content;
