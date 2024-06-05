import "./home.scss";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
import  { useEffect } from "react";
// import OpenMapComponent from "../../components/mapcomponent/OpenMapComponent.jsx";
// import 'leaflet/dist/leaflet.css';

// const FullCarousel = React.lazy(() => import('../../components/carousel/FullCarousel.jsx'));
const Home = () => {
  const ImageData = [
    "images/accueil1.webp",

    "images/accueil2.webp",

    "images/accueil3.webp",
  ];

  useEffect(() => {
    ImageData.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [ ImageData]);

  return (
    <main className="home-container">
      <div className="carousel-home-container">
      {/* <Suspense fallback={<div>Chargement...</div>}> */}
        <FullCarousel images={ImageData} />
        {/* </Suspense> */}
    {/* {/* <OpenMapComponent />  */}
      </div>
      <div className="home-contact-info">
        <h2>ANNE CHRISTINE BRUNEL</h2>
        <p>Diététicienne et micronutritionniste</p>
        <p>Espace Synergie / 1 allée Vanber - 26400 CREST </p>
        <p> 06 01 46 02 74</p>  
        <p>annechristine.brunel@gmail.com</p>
      </div> 
    </main>
  );
};
export default Home;
