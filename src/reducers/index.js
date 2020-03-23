import { combineReducers } from 'redux'
import albums from "./albumReducer";
import author from "./authorReducer";

const rootReducer = combineReducers({
  albums,
  author,
})

export default rootReducer
