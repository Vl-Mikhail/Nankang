import { combineReducers } from "redux";
import { HomeReducer, TiresReducer } from "../app";

export default combineReducers({
    home: HomeReducer,
    tires: TiresReducer
})