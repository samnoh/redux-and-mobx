import { USER_LOGIN, USER_LOGOUT, USER_CHANGE_LANGUAGE, GET_USER_FRIENDS } from 'actions/user';

const initialState = {
    username: null,
    language: 'english',
    friends: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            const { username, id } = action.payload;
            return { ...state, username, id };
        case USER_LOGOUT:
            return { ...state, username: null };
        case USER_CHANGE_LANGUAGE:
            return { ...state, language: action.payload };
        case GET_USER_FRIENDS:
            return { ...state, friends: action.payload };
        default:
            return state;
    }
};

export default userReducer;
