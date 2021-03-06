import ActionTypes from '../constants/actionTypes'

const initialState = {
  images: [],
  loading: false,
  isLoaded: false,
  error: null
};

export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALBUM_START:
      return {
        ...state,
        loading: true,
        isLoaded: false,
        error: null
      };

    case ActionTypes.FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        images: action.payload.images
      };

    case ActionTypes.FETCH_ALBUM_FAILURE:
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