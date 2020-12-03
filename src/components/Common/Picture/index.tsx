import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selector from '../../../redux/selectors';
import { getPicture } from './Picture.action';
import styles from './index.module.css';

const KEY: string = '18012143-92de9efa5ecf55cb65fb624d5';

interface IParam {
    params: {
        [key: string]: string;
    };
}

const params: IParam = {
    params: {
        key: KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        editors_choice: 'true',
        category: 'nature, places, travel, buildings',
        per_page: '40',
        page: '1',
    },
};

const Picture = (): ReactElement => {
    const dispatch = useDispatch();
    const picture = useSelector(selector.getPicture);

    useEffect(() => {
        dispatch(getPicture<IParam>(params));
    }, [dispatch]);

    return <img className={styles.banner} src={picture} alt="banner" />;
};

export default Picture;
