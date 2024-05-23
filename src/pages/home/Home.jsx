import "./home.scss";
import Carousel from "../../components/carousel/Carousel.jsx";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
const Home = () => {
  const slides = [
    "circular--landscape-1",
    "circular--landscape-2",
    "circular--landscape-3",
  ];

  const ImageData = [
    "images/accueil1.webp",

    "images/accueil2.webp",

    "images/accueil3.webp",
  ];

  return (
    <main className="home-container">
      <div className="little-carousel">
        <Carousel slides={slides} />
      </div>
      <div className="carousel-home-container">
        <FullCarousel images={ImageData} />
      </div>
    </main>
  );
};
export default Home;
