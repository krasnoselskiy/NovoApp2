import ActionTypes from '../constants/actionTypes'

const initialState = {
  color: null,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_THEME_COLOR:
      return {
        ...state,
        color: action.payload
      };

    default:
      return state;
  }
}