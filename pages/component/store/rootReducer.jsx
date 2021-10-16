import { combineReducers } from "redux";
const { myReducers } = require("./reducers/reducers");
console.log(myReducers)
export const rootReducer = combineReducers({
    myState: myReducers
})