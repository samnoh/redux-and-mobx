import { START_LOADING, FINISH_LOADING } from 'store/types/loading';

export const startLoading = requestType => ({
    type: START_LOADING,
    payload: requestType
});

export const finishLoading = requestType => ({
    type: FINISH_LOADING,
    payload: requestType
});
