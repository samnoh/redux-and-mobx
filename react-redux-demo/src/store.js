import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from 'reducers/index';

const reduxLogger = store => next => action => {
    console.log('Action:', action.type);
    next(action);
};

const thunkMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState); // custom
    }
    return next(action);
};

const enhancer = compose(applyMiddleware(thunkMiddleware, reduxLogger));

const store = createStore(rootReducer, enhancer);

export default store;
