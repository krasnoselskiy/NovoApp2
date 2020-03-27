import { combineReducers } from 'redux'
import album from "./albumReducer";
import albums from "./albumsReducer";
import author from "./authorReducer";
import theme from "./themeReducer";

const rootReducer = combineReducers({
  album,
  albums,
  author,
  theme,
})

export default rootReducer
