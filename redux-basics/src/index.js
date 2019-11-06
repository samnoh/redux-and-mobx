import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'reducers';
import { login, logout, changeLanguage, getUserFriends } from 'actions/user';

const logerMiddleware = store => next => action => {
    console.log('Action: ', action.type);
    next(action);
};

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const enhancer = compose(applyMiddleware(thunkMiddleware, logerMiddleware));

const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(login('user1', 1));
store.dispatch(changeLanguage('korean'));
store.dispatch(logout());
store.dispatch(getUserFriends());
