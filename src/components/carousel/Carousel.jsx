import  { useState, useEffect } from 'react';
import './carousel.scss';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3500); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <div className="carousel-circular">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(/${image})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;