import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";
import Slider from "react-slick";
import Loader from 'react-loader-spinner'
import styled from '@emotion/styled'

import SliderItem from "../components/SliderItem";

import '../styles/slider.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class AlbumListContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAlbums());
  }

  render() {
    const { error, loading, albums } = this.props;
    const sliderSettings = {
      dots: true,
      arrows: true,
      infinite: true,
      lazyLoad: true,
      fade: true,
      speed: 2500,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (current, next) => console.log(current),
      beforeChange: (current, next) => console.log(current)
    };

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <SpinnerWrap>
              <Loader type="TailSpin" color="#000" height={100} width={100} />
            </SpinnerWrap>
    }

    return (
      <Page>
        <Slider {...sliderSettings}>
          {albums && albums.length ? albums.map(album => {
            return album.sys.contentType.sys.id === "photoGallery" ?
                    <SliderItem key={album.sys.id}
                                albumId={album.sys.id}
                                isDarkTheme={album.fields.isDarkTheme}
                                title={album.fields.title}
                                src={album.fields.images[0].fields.imageList.fields.file.url}
                                slug={album.fields.slug} /> : null;
          }) : null}
        </Slider>
      </Page>
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
  transform: translate(-50%, -50%);
`

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export default connect(mapStateToProps)(AlbumListContainer);
