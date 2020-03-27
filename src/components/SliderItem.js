import React from 'react';
import { Link } from "react-router-dom";

const SliderItem = ({ title, src, albumId, isDarkTheme }) => {
  return (
    <div
      className="slider-item-wrap"
      data-theme-isblack={isDarkTheme.toString()}>
      <img src={src} alt={title} />
      <Link key={albumId} className='link' to={ 'albums/' + albumId }>See all photos</Link>
    </div>
  );
}

export default SliderItem;
