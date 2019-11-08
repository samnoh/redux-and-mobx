import { START_LOADING, FINISH_LOADING } from 'store/types/loading';

const initialState = {};

const loadingReducer = (state = initialState, { type, payload, error }) => {
    const obj = { ...state };

    switch (type) {
        case START_LOADING:
            obj[payload] = true;
            return obj;
        case FINISH_LOADING:
            obj[payload] = false;
            return obj;
        default:
            return state;
    }
};

export default loadingReducer;
