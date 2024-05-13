import { useCallback, useEffect, useState } from "react";
import SlideItem from "./SlideItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carousel.scss"

const Carousel = ({ slides }) => {
  const [cur, setCur] = useState(0);

  const len = slides.length;

  const leftHandle = () => {
    setCur(cur - 1 < 0 ? len - 1 : cur - 1);
  };

  const rightHandle = useCallback(() => {
    setCur(cur + 1 > len - 1 ? 0 : cur + 1);
  }, [cur, len]);

  useEffect(() => {
    const interval = setTimeout(() => {
      rightHandle();
    }, 1000);
    return () => clearTimeout(interval);
  }, [rightHandle]);

  return (
    <>
      <h2> Carousel </h2>

      <FaArrowLeft className="leftBtn" onClick={leftHandle} />
      <FaArrowRight className="rightBtn" onClick={rightHandle} />

      {slides.map((slide, index) => {
        return (
          <div key={index}>{cur === index && <SlideItem slide={slide} />}</div>
        );
      })}
    </>
  );
};

export default Carousel;