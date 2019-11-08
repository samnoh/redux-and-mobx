import { delay, put, takeLatest, call, throttle } from 'redux-saga/effects';
import { startLoading, finishLoading } from 'actions/loading';

import { api } from 'utils';

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
    yield put(login(action.payload)); // login(username)
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

function* getUserFriendsSaga(action) {
    yield put(startLoading(GET_FRIENDS));
    try {
        const res = yield call(api, action.payload);

        yield put({
            type: GET_FRIENDS_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        yield put({
            type: GET_FRIENDS_FAILURE,
            payload: e,
            error: true
        });
    }
    yield put(finishLoading(GET_FRIENDS));
}

export function* userSaga() {
    yield throttle(3000, USER_LOGIN_ASYNC, loginSaga);
    yield takeLatest(GET_FRIENDS, getUserFriendsSaga);
}
