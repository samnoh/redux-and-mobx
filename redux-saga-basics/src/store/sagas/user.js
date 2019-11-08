import { delay, put, takeLatest, call, throttle } from 'redux-saga/effects';

import { api } from 'utils';
import { startLoading, finishLoading } from 'store/actions/loading';
import { login, changeLanguage, logout } from 'store/actions/user';
import {
    USER_LOGIN_ASYNC,
    GET_FRIENDS,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE
} from 'store/types/user';

function* loginSaga(action) {
    yield delay(1000);
    yield put(login(action.payload)); // login(username)
    yield delay(1000);
    yield put(changeLanguage('korean'));
    yield delay(1000);
    yield put(logout());
}

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

export default function* userSaga() {
    yield throttle(3000, USER_LOGIN_ASYNC, loginSaga);
    yield takeLatest(GET_FRIENDS, getUserFriendsSaga);
}
