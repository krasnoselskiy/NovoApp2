import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";
import Slider from "react-slick";

class AlbumListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAlbums());
  }

  componentDidUpdate() {
    const { error, loading, albums } = this.props;
  }

  render() {
    const { error, loading, albums } = this.props;
    const sliderSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      fade: true,
      speed: 2500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Slider {...sliderSettings}>
          {albums && albums.length ? albums.map(album => {
            if (album.fields.photo) {
              return <img key={album.sys.id} src={album.fields.photo.fields.file.url} alt={album.fields.title} />
            }
          }) : null}
        </Slider>
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
