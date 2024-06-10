import "./home.scss";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
import  { useEffect } from "react";
import TestimonialCarousel from "../../components/TestimonialCarousel.jsx";
// import OpenMapComponent from "../../components/mapcomponent/OpenMapComponent.jsx";
// import 'leaflet/dist/leaflet.css';

// const FullCarousel = React.lazy(() => import('../../components/carousel/FullCarousel.jsx'));
const Home = () => {
  // const ImageData = [
  //   "images/accueil1.webp",

  //   "images/accueil2.webp",

  //   "images/accueil3.webp",
  // ];
  const ImageData = [
    "images/ACB-ORDI-1.jpeg",
    "images/ACB-ORDI-2.jpeg",
    "images/ACB-ORDI-3.jpeg",
    // "images/ACB-MOBILE-1.jpg",
    // "images/ACB-MOBILE-2.jpg",
    // "images/ACB-MOBILE-3.jpg",
  ]

  useEffect(() => {
    ImageData.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [ ImageData]);



  // const testimonials = [
  //   {
  //     name: "Client 1",
  //     testimonial: "C'était une excellente expérience !"
  //   },
  //   {
  //     name: "Client 2",
  //     testimonial: "Je recommande vivement leurs services."
  //   },
  //   // Ajoutez plus d'avis ici
  // ];



  return (
    <main className="home-container">
      <div className="carousel-home-container">
      {/* <Suspense fallback={<div>Chargement...</div>}> */}
        <FullCarousel images={ImageData} />
        {/* </Suspense> */}
        </div>

    {/* {/* <OpenMapComponent />  */}
{/* <TestimonialCarousel testimonials={testimonials} />  */}
<TestimonialCarousel />
    </main>
  );
};
export default Home;
