import { combineReducers } from 'redux'
import album from "./albumReducer";
import albums from "./albumsReducer";
import author from "./authorReducer";

const rootReducer = combineReducers({
  album,
  albums,
  author,
})

export default rootReducer
