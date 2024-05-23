// import { useCallback, useEffect, useState } from "react";
// import SlideItem from "./SlideItem";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./carousel.scss"

// const Carousel = ({ slides }) => {
//   const [cur, setCur] = useState(0);

//   const len = slides.length;

//   const leftHandle = () => {
//     setCur(cur - 1 < 0 ? len - 1 : cur - 1);
//   };

//   const rightHandle = useCallback(() => {
//     setCur(cur + 1 > len - 1 ? 0 : cur + 1);
//   }, [cur, len]);

//   useEffect(() => {
//     const interval = setTimeout(() => {
//       rightHandle();
//     }, 2000);
//     return () => clearTimeout(interval);
//   }, [rightHandle]);

//   return (
//     <>
//       {/* <h2> Carousel </h2> */}

//       <FaArrowLeft className="leftBtn" onClick={leftHandle} />
//       <FaArrowRight className="rightBtn" onClick={rightHandle} />

//       {slides.map((slide, index) => {
//         return (
//           <div key={index}>{cur === index && <SlideItem slide={slide}  />}</div>
//           // <div key={index} className={slide}>{cur === index && <SlideItem   />}</div>
//         );
//       })}
//     </>
//   );
// };

// export default Carousel;






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