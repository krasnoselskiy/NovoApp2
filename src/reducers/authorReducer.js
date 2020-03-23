import ActionTypes from '../constants/actionTypes'

const initialState = {
  info: {
    name: '',
    description: '',
    photo: ''
  },
  loading: false,
  isLoaded: false,
  error: null
};

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_AUTHOR_START:
      return {
        ...state,
        loading: true,
        isLoaded: false,
        error: null
      };

    case ActionTypes.FETCH_AUTHOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        info: action.payload.info
      };

    case ActionTypes.FETCH_AUTHOR_FAILURE:
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