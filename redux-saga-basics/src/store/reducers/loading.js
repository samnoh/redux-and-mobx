import { START_LOADING, FINISH_LOADING } from 'store/types/loading';

const initialState = {};

const loadingReducer = (state = initialState, { type, payload, error }) => {
    switch (type) {
        case START_LOADING:
            return { ...state, [payload]: true };
        case FINISH_LOADING:
            return { ...state, [payload]: false };
        default:
            return state;
    }
};

export default loadingReducer;
