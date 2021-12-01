import {createStore} from 'redux'
import { myReducers } from "./reducers/reducers";
import { rootReducer } from './rootReducer'

export const store = createStore(rootReducer)