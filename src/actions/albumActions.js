import { client } from './client';
import ActionTypes from '../constants/actionTypes'

import { setThemeColor } from './themeActions';

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
    const firstAlbum = res.items.find(item => item.sys.contentType.sys.id === 'photoGallery' ? item : null);
    firstAlbum.fields.isDarkTheme ?
      dispatch(setThemeColor('black')) :
      dispatch(setThemeColor('white'));

    dispatch(fetchAlbumsSuccess(res.items));
  }).catch((err) => {
    dispatch(fetchAlbumsFailure(err))
  });
}