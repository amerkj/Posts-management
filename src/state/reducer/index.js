import {combineReducers} from 'redux'
import resourceReducer from "./resourceReducer";

const reducers= combineReducers({
    resource:resourceReducer,

})
export default reducers