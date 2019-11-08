const logerMiddleware = store => next => action => {
    console.log('Action: ', action.type);
    next(action);
};

export default logerMiddleware;
