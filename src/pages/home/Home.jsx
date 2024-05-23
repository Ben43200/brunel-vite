import "./home.scss";
import Carousel from "../../components/carousel/Carousel.jsx";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
import { useEffect } from "react";
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
        <Carousel images={images} />
      </div>
      <div className="carousel-home-container">
        <FullCarousel images={ImageData} />
      </div>
    </main>
  );
};
export default Home;
