import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAlbum } from "../actions/albumItemActions";

import '../styles/albumGrid.css'

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
      <div className='gallery'>
        {isLoaded && images.length ?
          images.map((image, i) => {
            let url = image.fields.coverImage.fields.file.url;

            return url ?
              <figure key={image.sys.id + i} className={`gallery__item gallery__item--${++i}`}>
                <img className="gallery__img" key={i} src={url} alt="" />
              </figure> : null;
          })
        : null
      }
      </div>
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

export default connect(mapStateToProps)(AlbumContainer);
