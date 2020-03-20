import { ContentfulClient } from 'react-contentful';

export const FETCH_ALBUMS_START = 'FETCH_ALBUMS_START';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

const client = new ContentfulClient({
  accessToken: 'VyKxsscgd5-sp5Cwf3rFzbKjNx4im1t4cmewBJXC-kw',
  space: 'po8v2ttqiqbn',
});

export const fetchAlbumsStart = () => ({
  type: FETCH_ALBUMS_START
});

export const fetchAlbumsSuccess = items => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: { items }
});

export const fetchAlbumsFailure = error => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: { error }
});

export const fetchAlbums = () => dispatch => {
  dispatch(fetchAlbumsStart())

  client.getEntries({

  }).then((res) => {
    dispatch(fetchAlbumsSuccess(res.items))
  }).catch((err) => {
    dispatch(fetchAlbumsFailure(err))
  });
}