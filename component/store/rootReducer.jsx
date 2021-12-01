import { combineReducers } from "redux";
const { myReducers } = require("./reducers/reducers");

export const rootReducer = combineReducers({
    myState: myReducers
})