import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'reducers';
import { login, logout, changeLanguage } from 'actions/user';

const middleware = store => next => action => {
    console.log('action: ', action);
    next(action);
};

const enhancer = compose(applyMiddleware(middleware));

const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(login('user1')); // { user: { username: 'user1', language: 'english' } }

store.dispatch(changeLanguage('korean')); // { user: { username: 'user1', language: 'korean' } }

store.dispatch(logout()); // { user: { username: null, language: 'korean' } }
