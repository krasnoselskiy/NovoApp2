import { client } from './client';
import ActionTypes from '../constants/actionTypes'

export const fetchAlbumsStart = () => ({
  type: ActionTypes.FETCH_ALBUMS_START
});

export const fetchAlbumsSuccess = items => ({
  type: ActionTypes.FETCH_ALBUMS_SUCCESS,
  payload: { items }
});

export const fetchAlbumsFailure = error => ({
  type: ActionTypes.FETCH_ALBUMS_FAILURE,
  payload: { error }
});

export const fetchAlbums = () => dispatch => {
  dispatch(fetchAlbumsStart())

  client.getEntries().then((res) => {
    dispatch(fetchAlbumsSuccess(res.items))
  }).catch((err) => {
    dispatch(fetchAlbumsFailure(err))
  });
}