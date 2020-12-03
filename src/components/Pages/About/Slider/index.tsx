import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import styles from './index.module.css';

const slider: { id: number; text: string; banner: string }[] = [
    {
        id: 1,
        text:
            'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
        banner: '/img/slider/1.jpg',
    },
    {
        id: 2,
        text:
            'Lorem dfdsfdsfdsfds dsfdsfdsfsd Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus. sdfsdfsdf dsfdsfdsf',
        banner: '/img/slider/2.jpg',
    },
    {
        id: 3,
        text:
            'Lorem dfdsfdsfdsfds dsfdsfdsfsd sdfsdfsdf dsfdsfdsf Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus.',
        banner: '/img/slider/3.jpg',
    },
    {
        id: 4,
        text:
            'Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus. Lorem dfdsfdsfdsfds dsfdsfdsfsd sdfsdfsdf dsfdsfdsf',
        banner: '/img/slider/4.jpg',
    },
    {
        id: 5,
        text:
            'Lorem dfdsfdsfdsfds dsfdsfdsfsd Aamet consectetur, adipisicing elit. Illum repellendus delectus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum repellendus delectus. sdfsdfsdf dsfdsfdsf',
        banner: '/img/slider/5.jpg',
    },
];

export default ({ className = undefined }: { className?: string | undefined }) => (
    <div className={className}>
        <div className={styles.wrp}>
            <Slider
                dots={true}
                slidesToShow={1}
                slidesToScroll={1}
                initialSlide={0}
                arrows={false}
                autoplay
                infinite
                draggable
                autoplaySpeed={5500}
                dotsClass={styles.dotsList}
                appendDots={(dots: ReactElement): ReactElement => <ul> {dots} </ul>}
            >
                {slider.map(({ id, text, banner }) => (
                    <div className={styles.slide} key={id}>
                        <img className={styles.img} draggable={false} src={banner} alt="" />
                        <p>{text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
);
