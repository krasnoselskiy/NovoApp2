import ActionTypes from '../constants/actionTypes'

const initialState = {
  albums: [],
  loading: false,
  error: null
};

export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALBUMS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionTypes.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };

    case ActionTypes.FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        albums: []
      };

    default:
      return state;
  }
}