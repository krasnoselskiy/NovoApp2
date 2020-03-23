import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";
import Slider from "react-slick";
import Loader from 'react-loader-spinner'
import styled from '@emotion/styled'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import SliderItem from "../components/SliderItem";

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
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <SpinnerWrap>
        <Loader type="MutatingDots" color="#000" timeout={3000} height={100} width={100} />
      </SpinnerWrap>
    }

    return (
      <React.Fragment>
        <Slider {...sliderSettings}>
          {albums && albums.length ? albums.map(album => {
            if (album.sys.contentType.sys.id == "photoGallery") {
              return <SliderItem key={album.sys.id}
                                albumId={album.sys.id}
                                title={album.fields.title}
                                src={album.fields.images[0].fields.imageList.fields.file.url}
                                slug={album.fields.slug} />
            }
          }) : null}
        </Slider>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.isLoaded ? state.albums.items : null,
    loading: state.albums.loading,
    isLoaded: state.albums.isLoaded,
    error: state.albums.error
  }
};

const SpinnerWrap = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%)
`

export default connect(mapStateToProps)(AlbumListContainer);
