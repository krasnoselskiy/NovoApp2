import React from 'react';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const SliderItem = ({ title, src, albumId, isDarkTheme }) => {
  return (
    <SliderItemWrap>
      <img src={src} alt={title} />
      <Link key={albumId} className={`link ${isDarkTheme ? "dark" : "white"}`} to={ 'albums/' + albumId }>See all photos</Link>
    </SliderItemWrap>
  );
}

const SliderItemWrap = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    object-fit: cover;
    width: 100%;
  }
`

export default SliderItem;
