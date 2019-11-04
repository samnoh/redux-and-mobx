export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const login = payload => ({
    type: USER_LOGIN,
    payload
});

export const logout = () => ({
    type: USER_LOGOUT
});

export const changeLanguage = language => ({
    type: CHANGE_LANGUAGE,
    payload: language
});
