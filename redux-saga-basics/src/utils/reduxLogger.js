const loggerMiddleware = store => next => action => {
    console.log('Action: ', action.type);
    next(action);
    console.log(store.getState());
};

export default loggerMiddleware;
