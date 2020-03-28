import { client } from './client';
import ActionTypes from '../constants/actionTypes'
import { setThemeColor } from './themeActions';

export const fetchAuthorStart = () => ({
  type: ActionTypes.FETCH_AUTHOR_START
});

export const fetchAuthorSuccess = info => ({
  type: ActionTypes.FETCH_AUTHOR_SUCCESS,
  payload: { info }
});

export const fetchAuthorFailure = error => ({
  type: ActionTypes.FETCH_AUTHOR_FAILURE,
  payload: { error }
});

const AUTHOR_ENTRY_ID = '4nUKMIa2GX30ohRtZvquT6';

export const fetchAuthor = () => dispatch => {
  dispatch(fetchAuthorStart())
  client.getEntry(AUTHOR_ENTRY_ID).then((res) => {
    dispatch(setThemeColor('white'));
    dispatch(fetchAuthorSuccess(res.fields));
  }).catch((err) => {
    dispatch(fetchAuthorFailure(err))
  });
}