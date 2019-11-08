export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = requestType => ({
    type: START_LOADING,
    payload: requestType
});

export const finishLoading = requestType => ({
    type: FINISH_LOADING,
    payload: requestType
});
