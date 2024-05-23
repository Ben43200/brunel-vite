import "./home.scss";
import Carousel from "../../components/carousel/Carousel.jsx";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
// import React, { useEffect, Suspense } from "react";
import  { useEffect } from "react";

// const FullCarousel = React.lazy(() => import('../../components/carousel/FullCarousel.jsx'));
// const Carousel = React.lazy(() => import('../../components/carousel/Carousel.jsx'));
const Home = () => {
  // const images = [
  //   "circular--landscape-1",
  //   "circular--landscape-2",
  //   "circular--landscape-3",
  // ];

  const images = [
    "images/accueil1.webp",

    "images/accueil2.webp",

    "images/accueil3.webp",
  ];

  const ImageData = [
    "images/accueil1.webp",

    "images/accueil2.webp",

    "images/accueil3.webp",
  ];

  useEffect(() => {
    images.forEach((image) => { // Ajoutez une flèche ici
      const div = document.createElement('div');
      div.style.backgroundImage = `url(${image})`;
    });
  
    ImageData.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images, ImageData]);

  return (
    <main className="home-container">
      <div className="little-carousel">
      {/* <Suspense fallback={<div>Chargement...</div>}> */}
        <Carousel images={images} />
        {/* </Suspense> */}
      </div>
      <div className="carousel-home-container">
      {/* <Suspense fallback={<div>Chargement...</div>}> */}
        <FullCarousel images={ImageData} />
        {/* </Suspense> */}
      </div>
    </main>
  );
};
export default Home;
