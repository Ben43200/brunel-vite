import { useState, useEffect } from "react";
import "./scrolltotop.scss";

function ScrollToTop() {
  const [showButton, setShowButton] = useState("false");

  useEffect(() => {
    const handleScrollToTopButtonVisiblity = () => {
      window.scrollY > 50 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollToTopButtonVisiblity);
    return () => {
      window.removeEventListener("scroll", handleScrollToTopButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div className="scrollToTop">
          <a
            className= "scrollToTop__button"
            onClick={handleScrollToTop}
          />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;