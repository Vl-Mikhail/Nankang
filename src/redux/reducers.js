import { combineReducers } from 'redux';
import {
    HomeReducer,
} from '../app';

export default combineReducers({
    home: HomeReducer
})