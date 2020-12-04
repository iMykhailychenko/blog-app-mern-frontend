import React, { ReactElement } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import CommentForm from '../CommentForm';
// import routes from '../../../../../routes';
import styles from './index.module.css';

const NewComment = (): ReactElement => {
    const dispatch = useDispatch();
    console.log(dispatch);
    // const { isAuth } = useSelector(getAuth);
    // const handleChange = (value: string): void => {
    //     console.log(dispatch, value);
    // };

    // return isAuth ? (
    //     <div className={styles.container}>
    //         <h3 className={styles.title}>Leave the comment:</h3>
    //         <CommentForm onChange={handleChange} />
    //     </div>
    // ) : (
    //     <div className={styles.container}>
    //         <p className={styles.auth}>
    //             {/* <Link to={routes.Auth.Login.path}>Login</Link> or <Link to={'/routes.Auth.Signup.path'}>Signup</Link> to */}
    //             leave the comment
    //         </p>
    //     </div>
    // );
    return (
        <div className={styles.container}>
            <p className={styles.auth}>
                {/* <Link to={routes.Auth.Login.path}>Login</Link> or <Link to={'/routes.Auth.Signup.path'}>Signup</Link> to */}
                leave the comment
            </p>
        </div>
    );
};

export default NewComment;
