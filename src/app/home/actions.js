import { fetchType } from "../../utils/api";

export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_ERROR = 'FETCH_TYPES_ERROR';

export function fetchTypes () {
    return async (dispatch) => {
        dispatch({type: FETCH_TYPES});
        try {
            const data = await fetchType();
            return dispatch({type: FETCH_TYPES_SUCCESS, data});
        } catch (error) {
            return dispatch({
                type: FETCH_TYPES_ERROR,
                error,
            });
        }
    }
}