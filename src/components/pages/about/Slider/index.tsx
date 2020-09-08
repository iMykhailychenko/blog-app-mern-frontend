import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import styles from './index.module.css';
import content from '../../../../assets/slider';

export default ({
    className = undefined,
}: {
    className?: string | undefined;
}) => (
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
                appendDots={(dots: ReactElement): ReactElement => (
                    <ul> {dots} </ul>
                )}
            >
                {content.map(({ text, banner }, index) => (
                    <div className={styles.slide} key={index}>
                        <img
                            className={styles.img}
                            draggable={false}
                            src={banner}
                            alt=""
                        />
                        <p>{text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
);
