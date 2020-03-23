import React from 'react';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

const SliderItem = ({ title, src, albumId }) => {
  return (
    <SliderItemWrap>
      <img src={src} alt={title} />
      <Link key={albumId} className="link" to={ 'albums/' + albumId }>Go to...</Link>
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

  .link {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    z-index: 2;
    color: #000;
    padding: 12px;
    display: block;
    opacity: 0.2;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.35s;
  }

  .link:hover {
    opacity: 1;
  }
`

const Bounce = styled.div`animation: 2s ___CSS_0___ infinite`;

export default SliderItem;
