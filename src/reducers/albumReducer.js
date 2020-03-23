import ActionTypes from '../constants/actionTypes'

const initialState = {
  items: [],
  loading: false,
  isLoaded: false,
  error: null
};

export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALBUMS_START:
      return {
        ...state,
        loading: true,
        isLoaded: false,
        error: null
      };

    case ActionTypes.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        items: action.payload.items
      };

    case ActionTypes.FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        isLoaded: false,
        error: action.payload.error,
        albums: []
      };

    default:
      return state;
  }
}