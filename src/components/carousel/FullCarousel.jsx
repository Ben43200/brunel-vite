import { useCallback, useEffect, useState } from "react";
import SlideItemUrl from "./SlideItemUrl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carousel.scss"

const FullCarousel = ({ urlsImg }) => {
  const [cur, setCur] = useState(0);

  const len2 = urlsImg.length;

  const leftHandle = () => {
    setCur(cur - 1 < 0 ? len2 - 1 : cur - 1);
  };

  const rightHandle = useCallback(() => {
    setCur(cur + 1 > len2 - 1 ? 0 : cur + 1);
  }, [cur, len2]);

//   useEffect(() => {
//     const interval = setTimeout(() => {
//       rightHandle();
//     }, 2000);
//     return () => clearTimeout(interval);
//   }, [rightHandle]);

  return (
    <>
      {/* <h2> Carousel </h2> */}

      <FaArrowLeft className="leftBtn" onClick={leftHandle} />
      <FaArrowRight className="rightBtn" onClick={rightHandle} />

      {urlsImg.map((urlImg, index) => {
        return (
          <div key={index}>{cur === index && <SlideItemUrl urls={urlImg}  />}</div>
          // <div key={index} className={slide}>{cur === index && <SlideItem   />}</div>
        );
      })}
    </>
  );
};

export default FullCarousel;