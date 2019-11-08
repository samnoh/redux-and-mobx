import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import user from './user';
import loading from './loading';
import { userSaga } from 'actions/user';

export function* rootSaga() {
    yield all([userSaga()]);
}

const rootReducer = combineReducers({ user, loading });

export default rootReducer;
