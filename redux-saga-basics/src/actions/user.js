import { delay, put, takeLatest, select, throttle } from 'redux-saga/effects';

import { api, createRequestSaga } from 'utils';

export const USER_LOGIN = 'user/LOGIN';
export const USER_LOGIN_ASYNC = 'user/LOGIN_ASYNC';
export const USER_LOGOUT = 'user/LOGOUT';
export const USER_CHANGE_LANGUAGE = 'user/CHANGE_LANGUAGE';
export const GET_FRIENDS = 'user/GET_FRIENDS';
export const GET_FRIENDS_SUCCESS = 'user/GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'user/GET_FRIENDS_FAILURE';

export const login = username => ({
    type: USER_LOGIN,
    payload: username
});

function* loginSaga(action) {
    yield delay(1000);
    yield put(login(action.payload));
    yield delay(1000);
    yield put(changeLanguage('korean'));
    yield delay(1000);
    yield put(logout());
}

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

export const getUserFriends = friends => ({
    type: GET_FRIENDS,
    payload: friends
});

const getUserFriendsSaga = createRequestSaga(GET_FRIENDS, api);

export function* userSaga() {
    yield takeLatest(USER_LOGIN_ASYNC, loginSaga);
    yield takeLatest(GET_FRIENDS, getUserFriendsSaga);
}
