import  { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';

const FullCarousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index} 
          src={image} 
          className={`carousel-item ${index === activeImage ? 'show' : ''}`} 
          alt="" 
        />
      ))}
    </div>
  );
};

export default FullCarousel;