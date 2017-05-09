import { fetchTpye } from '../../utils/api';

export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES';
export const FETCH_TYPES_ERROR = 'FETCH_TYPES';

export function fetchTypes (){
    return async (dispatch) => {
        // dispatch({ type: FETCH_TYPES });
        try {
            const data = await fetchTpye();
            return dispatch({ type: FETCH_TYPES_SUCCESS, data });
        } catch (error) {
            return dispatch({
                type: FETCH_TYPES_ERROR,
                error,
            });
        }
    }
}