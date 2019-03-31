import React from 'react';

const Images = (props) => {
  const images = props.images.map((image, index) => {
    if (index === 0) {
      return <div className="carousel-item active">
        <img src={image} className="d-block w-100" alt="..." />
      </div>
    } else {
      return <div className="carousel-item ">
        <img src={image} className="d-block w-100" alt="..." />
      </div>
    }
  })
  return (
    <div className="carousel-inner">
      {images}
    </div>
  );
}

export default Images;
