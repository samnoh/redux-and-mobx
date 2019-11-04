import { USER_LOGIN, USER_LOGOUT, CHANGE_LANGUAGE } from 'actions/user';

const initialState = {
    username: null,
    language: 'english'
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, username: action.payload };
        case USER_LOGOUT:
            return { ...state, username: null };
        case CHANGE_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
};

export default userReducer;
