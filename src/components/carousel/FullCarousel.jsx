// import { useCallback, useEffect, useState } from "react";
// import SlideItemUrl from "./SlideItemUrl";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./carousel.scss"

// const FullCarousel = ({ urlsImg }) => {
//   const [cur, setCur] = useState(0);

//   const len2 = urlsImg.length;

//   const leftHandle = () => {
//     setCur(cur - 1 < 0 ? len2 - 1 : cur - 1);
//   };

//   const rightHandle = useCallback(() => {
//     setCur(cur + 1 > len2 - 1 ? 0 : cur + 1);
//   }, [cur, len2]);

// //   useEffect(() => {
// //     const interval = setTimeout(() => {
// //       rightHandle();
// //     }, 2000);
// //     return () => clearTimeout(interval);
// //   }, [rightHandle]);

//   return (
//     <>
//       {/* <h2> Carousel </h2> */}

//       <FaArrowLeft className="leftBtn" onClick={leftHandle} />
//       <FaArrowRight className="rightBtn" onClick={rightHandle} />

//       {urlsImg.map((urlImg, index) => {
//         return (
//           <div key={index}>{cur === index && <SlideItemUrl urls={urlImg}  />}</div>
//           // <div key={index} className={slide}>{cur === index && <SlideItem   />}</div>
//         );
//       })}
//     </>
//   );
// };

// export default FullCarousel;

//ancien code

// import  { useState, useEffect } from "react";
// import { SlideImage, StyledSlider } from "./SlideImage";
// import SlideImage from "./SlideImage.jsx";

// import {
//   FaChevronRight,
//   FaChevronLeft,
// } from "react-icons/fa";

// const FullCarousel = ({ bigSlides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = bigSlides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   useEffect(() => {
//     const interval = setTimeout(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearTimeout(interval);
//   }, [nextSlide]);



//   return(
//   // <StyledSlider>
//   <div>
//   {/* <FaChevronLeft
//     className="left-arrow"
//     onClick={prevSlide}
//   />
//   <FaChevronRight
//     className="right-arrow"
//     onClick={nextSlide}
//   /> */}
//   {bigSlides.map((bigSlide, index) => {
//     return (
     
//       <div key={index}>
//         {index === current && (
//       <div className="big-carousel" id="full-carousel">
//           <img src={bigSlide.image} alt="" />
//           </div>
//         )}
//       </div>
   
//     );
//   })}
//   </div>
// // </StyledSlider>
// );
// };

// export default FullCarousel;

//fin ancien code




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