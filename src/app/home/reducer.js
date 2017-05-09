import {FETCH_TYPES, FETCH_TYPES_ERROR, FETCH_TYPES_SUCCESS} from './actions';

const INITIAL_STATE = {
    type: [],
    error: null,
    isFetched: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // case FETCH_TYPES:
        //     return state;
        case FETCH_TYPES_SUCCESS:
            return {
                ...state,
                type: action.payload,
                isFetched: true
            };
        case FETCH_TYPES_ERROR:
            return {
                ...state,
                error: action.error,
                isFetched: true
            };
        default:
            return state;
    }
}