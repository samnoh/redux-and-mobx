import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_CHANGE_LANGUAGE,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE
} from 'actions/user';

const initialState = {
    username: null,
    language: 'english',
    friends: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, username: action.payload };
        case USER_LOGOUT:
            return { ...state, username: null };
        case USER_CHANGE_LANGUAGE:
            return { ...state, language: action.payload };
        case GET_FRIENDS_SUCCESS:
            return { ...state, friends: action.payload };
        case GET_FRIENDS_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default userReducer;
