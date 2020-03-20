import React from 'react';
import { Link } from "react-router-dom";

const SliderItem = ({ title, src, slug }) => {
  return (
    <div className="slider-item">
      <h3>{title}</h3>
      <img src={src} alt={title} />
      <Link to={'albums/' + slug }>See all photos</Link>
    </div>
  );
}

export default SliderItem;
