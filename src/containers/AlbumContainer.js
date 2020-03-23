import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAlbum } from "../actions/albumItemActions";
import styled from '@emotion/styled'


class AlbumContainer extends Component {
  componentDidMount() {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    this.props.dispatch(fetchAlbum(id));
  }

  render() {
    const { error, isLoaded, images } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    return (
      <Images>
        <div className="container flex">
          {isLoaded && images.length ?
            <div className="images">
              {images.map((image, i) => {
                let url = image.fields.imageList.fields.file.url;

                return url ? <img key={i} src={url} alt=""/> : null;
              })}
            </div> : null
          }
        </div>
      </Images>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.album.isLoaded ? state.album.images : null,
    loading: state.album.loading,
    isLoaded: state.album.isLoaded,
    error: state.album.error
  }
};

const Images = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;

  img {
    width: 100%;
    margin-bottom: 10px;
  }
`

export default connect(mapStateToProps)(AlbumContainer);
