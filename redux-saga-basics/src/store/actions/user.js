import {
    USER_LOGIN,
    USER_LOGIN_ASYNC,
    USER_LOGOUT,
    USER_CHANGE_LANGUAGE,
    GET_FRIENDS
} from 'store/types/user';

export const login = username => ({
    type: USER_LOGIN,
    payload: username
});

export const loginAsync = username => ({
    type: USER_LOGIN_ASYNC,
    payload: username
});

export const logout = () => ({
    type: USER_LOGOUT
});

export const changeLanguage = language => ({
    type: USER_CHANGE_LANGUAGE,
    payload: language
});

export const getUserFriends = friendId => ({
    type: GET_FRIENDS,
    payload: friendId
});
