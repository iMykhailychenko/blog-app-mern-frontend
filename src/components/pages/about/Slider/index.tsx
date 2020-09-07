import React, { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './index.module.css';
import content from '../../../../assets/slider';

export default ({
    className = undefined,
}: {
    className?: string | undefined;
}) => {
    return (
        <div className={className}>
            <Carousel
                showDots={true}
                arrows={false}
                responsive={{
                    mobile: {
                        breakpoint: { max: 50000, min: 0 },
                        items: 1,
                    },
                }}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={300}
                containerClass={styles.wrp}
                dotListClass={styles.dot}
                itemClass={styles.slide}
            >
                {content.map(({ text, banner }, index) => (
                    <Fragment key={index}>
                        <img
                            className={styles.img}
                            src={banner}
                            alt=""
                            draggable={false}
                        />
                        <p key={index}>{text}</p>
                    </Fragment>
                ))}
            </Carousel>
        </div>
    );
};
