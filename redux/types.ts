const types = {
    /** AUTH */
    // LOGIN
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    // SIGNUP
    SIGNUP_START: 'SIGNUP_START',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    // LOGOUT
    LOGOUT_START: 'LOGOUT_START',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'LOGOUT_ERROR',
    // GET_USER_INFO
    GET_USER_INFO_START: 'GET_USER_INFO_START',
    GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
    GET_USER_INFO_ERROR: 'GET_USER_INFO_ERROR',

    /** PROFILE */
    // GET_PROFILE
    GET_PROFILE_START: 'GET_PROFILE_START',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    GET_PROFILE_ERROR: 'GET_PROFILE_ERROR',
    // LIKE_PROFILE
    LIKE_PROFILE_START: 'LIKE_PROFILE_START',
    LIKE_PROFILE_SUCCESS: 'LIKE_PROFILE_SUCCESS',
    LIKE_PROFILE_ERROR: 'LIKE_PROFILE_ERROR',
    // DISLIKE_PROFILE
    DISLIKE_PROFILE_START: 'DISLIKE_PROFILE_START',
    DISLIKE_PROFILE_SUCCESS: 'DISLIKE_PROFILE_SUCCESS',
    DISLIKE_PROFILE_ERROR: 'DISLIKE_PROFILE_ERROR',
    // FOLLOW_USER
    FOLLOW_USER_START: 'FOLLOW_USER_START',
    FOLLOW_USER_SUCCESS: 'FOLLOW_USER_SUCCESS',
    FOLLOW_USER_ERROR: 'FOLLOW_USER_ERROR',
    // GET_FOLLOWERS
    GET_FOLLOWERS_START: 'GET_FOLLOWERS_START',
    GET_FOLLOWERS_SUCCESS: 'GET_FOLLOWERS_SUCCESS',
    GET_FOLLOWERS_ERROR: 'GET_FOLLOWERS_ERROR',
    // GET_FOLLOWING
    GET_FOLLOWING_START: 'GET_FOLLOWING_START',
    GET_FOLLOWING_SUCCESS: 'GET_FOLLOWING_SUCCESS',
    GET_FOLLOWING_ERROR: 'GET_FOLLOWING_ERROR',
    // MORE_FOLLOWERS
    MORE_FOLLOWERS_START: 'MORE_FOLLOWERS_START',
    MORE_FOLLOWERS_SUCCESS: 'MORE_FOLLOWERS_SUCCESS',
    MORE_FOLLOWERS_ERROR: 'MORE_FOLLOWERS_ERROR',
    // MORE_FOLLOWING
    MORE_FOLLOWING_START: 'MORE_FOLLOWING_START',
    MORE_FOLLOWING_SUCCESS: 'MORE_FOLLOWING_SUCCESS',
    MORE_FOLLOWING_ERROR: 'MORE_FOLLOWING_ERROR',

    /** POSTS */
    // GET_POSTS
    RESET_POSTS: 'RESET_POSTS',
    // GET_POSTS
    GET_POSTS_START: 'GET_POSTS_START',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR: 'GET_POSTS_ERROR',
    // UPDATE_USER_BIO
    UPDATE_USER_BIO_START: 'UPDATE_USER_BIO_START',
    UPDATE_USER_BIO_SUCCESS: 'UPDATE_USER_BIO_SUCCESS',
    UPDATE_USER_BIO_ERROR: 'UPDATE_USER_BIO_ERROR',
    // MORE_POSTS
    MORE_POSTS_START: 'MORE_POSTS_START',
    MORE_POSTS_SUCCESS: 'MORE_POSTS_SUCCESS',
    MORE_POSTS_ERROR: 'MORE_POSTS_ERROR',
    // GET_USER_POSTS
    GET_USER_POSTS_START: 'GET_USER_POSTS_START',
    GET_USER_POSTS_SUCCESS: 'GET_USER_POSTS_SUCCESS',
    GET_USER_POSTS_ERROR: 'GET_USER_POSTS_ERROR',
    // WRITE NEW POST
    NEW_POST_TITLE: 'NEW_POST_TITLE',
    NEW_POST_TAGS: 'NEW_POST_TAGS',
    NEW_POST_BANNER: 'NEW_POST_BANNER',
    NEW_POST_DESC: 'NEW_POST_DESC',
    NEW_POST_CONTENT: 'NEW_POST_CONTENT',
    NEW_POST_MEDIA: 'NEW_POST_MEDIA',
    NEW_POST_EDIT: 'NEW_POST_EDIT',
    // PUBLISH NEW POST
    PUBLISH_POSTS_START: 'PUBLISH_POSTS_START',
    PUBLISH_POSTS_SUCCESS: 'PUBLISH_POSTS_SUCCESS',
    PUBLISH_POSTS_ERROR: 'PUBLISH_POSTS_ERROR',
    // BANNER OF NEW POST
    EDIT_POSTS_BANNER_START: 'EDIT_POSTS_BANNER_START',
    EDIT_POSTS_BANNER_SUCCESS: 'EDIT_POSTS_BANNER_SUCCESS',
    EDIT_POSTS_BANNER_ERROR: 'EDIT_POSTS_BANNER_ERROR',
    // SINGLE POST
    GET_SINGLE_POST_START: 'GET_SINGLE_POST_START',
    GET_SINGLE_POST_SUCCESS: 'GET_SINGLE_POST_SUCCESS',
    GET_SINGLE_POST_ERROR: 'GET_SINGLE_POST_ERROR',
    // DELETE_POST
    DELETE_POST_START: 'DELETE_POST_START',
    DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
    DELETE_POST_ERROR: 'DELETE_POST_ERROR',
    // GET_EDIT_POST
    GET_EDIT_POST_START: 'GET_EDIT_POST_START',
    GET_EDIT_POST_SUCCESS: 'GET_EDIT_POST_SUCCESS',
    GET_EDIT_POST_ERROR: 'GET_EDIT_POST_ERROR',
    // UPDATE_POST
    UPDATE_POST_START: 'UPDATE_POST_START',
    UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
    UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
    // GET_TRENDING_POST
    GET_TRENDING_POST_START: 'GET_TRENDING_POST_START',
    GET_TRENDING_POST_SUCCESS: 'GET_TRENDING_POST_SUCCESS',
    GET_TRENDING_POST_ERROR: 'GET_TRENDING_POST_ERROR',
    // GET_TRENDING_TAGS
    GET_TRENDING_TAGS_START: 'GET_TRENDING_TAGS_START',
    GET_TRENDING_TAGS_SUCCESS: 'GET_TRENDING_TAGS_SUCCESS',
    GET_TRENDING_TAGS_ERROR: 'GET_TRENDING_TAGS_ERROR',
    // RESET_POST_FORM
    RESET_POST_FORM: 'RESET_POST_FORM',

    /** COMMENT */
    // GET_COMMENTS
    GET_COMMENTS_START: 'GET_COMMENTS_START',
    GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
    GET_COMMENTS_ERROR: 'GET_COMMENTS_ERROR',
    // POST_COMMENT
    POST_COMMENT_START: 'POST_COMMENT_START',
    POST_COMMENT_SUCCESS: 'POST_COMMENT_SUCCESS',
    POST_COMMENT_ERROR: 'POST_COMMENT_ERROR',
    // POST_ANSWER
    POST_ANSWER_START: 'POST_ANSWER_START',
    POST_ANSWER_SUCCESS: 'POST_ANSWER_SUCCESS',
    POST_ANSWER_ERROR: 'POST_ANSWER_ERROR',
    // DELETE_COMMENT
    DELETE_COMMENT_START: 'DELETE_COMMENT_START',
    DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
    DELETE_COMMENT_ERROR: 'DELETE_COMMENT_ERROR',
    // EDIT_COMMENT
    EDIT_COMMENT_START: 'EDIT_COMMENT_START',
    EDIT_COMMENT_SUCCESS: 'EDIT_COMMENT_SUCCESS',
    EDIT_COMMENT_ERROR: 'EDIT_COMMENT_ERROR',
    // POST_COMMENT_LIKE
    LIKE_COMMENT_START: 'LIKE_COMMENT_START',
    LIKE_COMMENT_SUCCESS: 'LIKE_COMMENT_SUCCESS',
    LIKE_COMMENT_ERROR: 'LIKE_COMMENT_ERROR',
    // POST_COMMENT_DISLIKE
    DISLIKE_COMMENT_START: 'DISLIKE_COMMENT_START',
    DISLIKE_COMMENT_SUCCESS: 'DISLIKE_COMMENT_SUCCESS',
    DISLIKE_COMMENT_ERROR: 'DISLIKE_COMMENT_ERROR',

    /** FEEDBACK */
    // LIKE_POST
    LIKE_POST_START: 'LIKE_POST_START',
    LIKE_POST_SUCCESS: 'LIKE_POST_SUCCESS',
    LIKE_POST_ERROR: 'LIKE_POST_ERROR',
    // DISLIKE_POST
    DISLIKE_POST_START: 'DISLIKE_POST_START',
    DISLIKE_POST_SUCCESS: 'DISLIKE_POST_SUCCESS',
    DISLIKE_POST_ERROR: 'DISLIKE_POST_ERROR',
    // LIKE_POPULAR_POSTS
    LIKE_POPULAR_POSTS_START: 'LIKE_POPULAR_POSTS_START',
    LIKE_POPULAR_POSTS_SUCCESS: 'LIKE_POPULAR_POSTS_SUCCESS',
    LIKE_POPULAR_POSTS_ERROR: 'LIKE_POPULAR_POSTS_ERROR',
    // DISLIKE_POPULAR_POSTS
    DISLIKE_POPULAR_POSTS_START: 'DISLIKE_POPULAR_POSTS_START',
    DISLIKE_POPULAR_POSTS_SUCCESS: 'DISLIKE_POPULAR_POSTS_SUCCESS',
    DISLIKE_POPULAR_POSTS_ERROR: 'DISLIKE_POPULAR_POSTS_ERROR',

    /** SETTINGS */
    // UPDATE_AVATAR
    UPDATE_AVATAR_START: 'UPDATE_AVATAR_START',
    UPDATE_AVATAR_SUCCESS: 'UPDATE_AVATAR_SUCCESS',
    UPDATE_AVATAR_ERROR: 'UPDATE_AVATAR_ERROR',
    // UPDATE_USER_BANNER
    UPDATE_USER_BANNER_START: 'UPDATE_USER_BANNER_START',
    UPDATE_USER_BANNER_SUCCESS: 'UPDATE_USER_BANNER_SUCCESS',
    UPDATE_USER_BANNER_ERROR: 'UPDATE_USER_BANNER_ERROR',
    // UPDATE_USER_INFO
    UPDATE_USER_INFO_START: 'UPDATE_USER_INFO_START',
    UPDATE_USER_INFO_SUCCESS: 'UPDATE_USER_INFO_SUCCESS',
    UPDATE_USER_INFO_ERROR: 'UPDATE_USER_INFO_ERROR',

    /** QUEUE */
    // GET_QUEUE
    GET_QUEUE_START: 'GET_QUEUE_START',
    GET_QUEUE_SUCCESS: 'GET_QUEUE_SUCCESS',
    GET_QUEUE_ERROR: 'GET_QUEUE_ERROR',
    // MORE_QUEUE
    MORE_QUEUE_START: 'MORE_QUEUE_START',
    MORE_QUEUE_SUCCESS: 'MORE_QUEUE_SUCCESS',
    MORE_QUEUE_ERROR: 'MORE_QUEUE_ERROR',
    // UPDATE_QUEUE
    UPDATE_QUEUE_START: 'UPDATE_QUEUE_START',
    UPDATE_QUEUE_SUCCESS: 'UPDATE_QUEUE_SUCCESS',
    UPDATE_QUEUE_ERROR: 'UPDATE_QUEUE_ERROR',
    // UPDATE_QUEUE_POPULAR
    UPDATE_QUEUE_POPULAR_START: 'UPDATE_QUEUE_POPULAR_START',
    UPDATE_QUEUE_POPULAR_SUCCESS: 'UPDATE_QUEUE_POPULAR_SUCCESS',
    UPDATE_QUEUE_POPULAR_ERROR: 'UPDATE_QUEUE_POPULAR_ERROR',

    /** CONFIG */
    // COLUMN
    POST_IN_COLUMN: 'POST_IN_COLUMN',
};

export default types;
