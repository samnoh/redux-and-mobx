import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_CHANGE_LANGUAGE,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE
} from 'store/types/user';

const initialState = {
    username: null,
    language: 'english',
    friends: []
};

const userReducer = (state = initialState, { type, payload, error }) => {
    switch (type) {
        case USER_LOGIN:
            return { ...state, username: payload };
        case USER_LOGOUT:
            return { ...state, username: null };
        case USER_CHANGE_LANGUAGE:
            return { ...state, language: payload };
        case GET_FRIENDS_SUCCESS:
            return { ...state, friends: payload };
        case GET_FRIENDS_FAILURE:
            return { ...state, error: error };
        default:
            return state;
    }
};

export default userReducer;
