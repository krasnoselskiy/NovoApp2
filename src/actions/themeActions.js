import ActionTypes from '../constants/actionTypes'

export const setThemeColor = (property) => ({
  type: ActionTypes.SET_THEME_COLOR,
  payload: property
});
