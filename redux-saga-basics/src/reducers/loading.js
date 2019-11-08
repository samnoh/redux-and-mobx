import { START_LOADING, FINISH_LOADING } from 'actions/loading';

const initialState = {};

const loadingReducer = (state = initialState, action) => {
    let obj = { ...state };

    switch (action.type) {
        case START_LOADING:
            obj[action.payload] = true;
            return obj;
        case FINISH_LOADING:
            obj[action.payload] = false;
            return obj;
        default:
            return state;
    }
};

export default loadingReducer;
