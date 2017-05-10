import { fetchTires } from '../../utils/api';


export const FETCH_TIRES = 'FETCH_TIRES';
export const FETCH_TIRES_SUCCESS = 'FETCH_TIRES_SUCCESS';
export const FETCH_TIRES_ERROR = 'FETCH_TIRES_ERROR';

export function fetchTire (){
    return async (dispatch) => {
        dispatch({ type: FETCH_TIRES });
        try {
            const data = await fetchTires();
            return dispatch({ type: FETCH_TIRES_SUCCESS, data });
        } catch (error) {
            return dispatch({
                type: FETCH_TIRES_ERROR,
                error,
            });
        }
    }
}