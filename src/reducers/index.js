import { combineReducers } from 'redux'
import albums from "./albumReducer";

const rootReducer = combineReducers({
  albums,
})

export default rootReducer
