import { client } from './client';
import ActionTypes from '../constants/actionTypes'

export const fetchAlbumStart = () => ({
  type: ActionTypes.FETCH_ALBUM_START
});

export const fetchAlbumSuccess = images => ({
  type: ActionTypes.FETCH_ALBUM_SUCCESS,
  payload: { images }
});

export const fetchAlbumFailure = error => ({
  type: ActionTypes.FETCH_ALBUM_FAILURE,
  payload: { error }
});

export const fetchAlbum = (id) => dispatch => {
  dispatch(fetchAlbumStart())

  client.getEntry(id).then((res) => {
    dispatch(fetchAlbumSuccess(res.fields.images))
  }).catch((err) => {
    dispatch(fetchAlbumFailure(err))
  });
}
