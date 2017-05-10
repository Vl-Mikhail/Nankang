import { FETCH_TIRES, FETCH_TIRES_ERROR, FETCH_TIRES_SUCCESS } from "./actions";

const INITIAL_STATE = {
    tires: {},
    error: null,
    isFetched: false
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_TIRES:
            return state;
        case FETCH_TIRES_SUCCESS:
            return {
                ...state,
                tires: action.data,
                isFetched: true
            };
        case FETCH_TIRES_ERROR:
            return {
                ...state,
                error: action.error,
                isFetched: true
            };
        default:
            return state;
    }
}