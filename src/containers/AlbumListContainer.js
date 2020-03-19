import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";



import PropTypes from 'prop-types'
import ActionTypes from '../constants/actionTypes'

class AlbumListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAlbums());
  }

  componentDidUpdate() {
    const { error, loading, albums } = this.props;
  }

  render() {
    const { error, loading, albums } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <div className="container">
          <h1>Albums</h1>
          <ul>
            {albums && albums.length ? albums.map(album =>
              <li key={album.sys.id}>
                <p>{album.fields.title}</p>

                {/* album.fields.images.length ? <img src={album.fields.images[0].fields.photoю.fields.file.url} alt={album.fields.title}/> : null */}
              </li>
            ): null}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums.items,
  loading: state.albums.loading,
  error: state.albums.error
});

export default connect(mapStateToProps)(AlbumListContainer);
