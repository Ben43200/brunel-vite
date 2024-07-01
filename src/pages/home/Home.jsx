import "./home.scss";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
import { useEffect, useState } from "react";
import TestimonialCarousel from "../../components/TestimonialCarousel.jsx";
// réactiver helmet toutes pages avant nouveau build
// import { Helmet } from "react-helmet";

// const FullCarousel = React.lazy(() => import('../../components/carousel/FullCarousel.jsx'));
const Home = () => {
  const ImageDataDesktop = [
    "images/ACB-ORDI-1.jpeg",
    "images/ACB-ORDI-2.jpeg",
    "images/ACB-ORDI-3.jpeg",
  ];

  //mise en place des images pour la version mobile
  const ImageDataMobile = [
    "images/ACB-MOBILE-1.webp",
    "images/ACB-MOBILE-2.webp",
    "images/ACB-MOBILE-3.webp",
  ];

  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(
    window.innerWidth >= 600
  );
  const [ImageData, setImageData] = useState(
    isDesktopOrLaptop ? ImageDataDesktop : ImageDataMobile
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setImageData(isDesktopOrLaptop ? ImageDataDesktop : ImageDataMobile);
  }, [isDesktopOrLaptop]);

  // useEffect(() => {
  //   ImageData.forEach((image) => {
  //     const img = new Image();
  //     img.src = image;
  //   });
  // }, [ImageData]);
  useEffect(() => {
    // Précharge toutes les images pour les versions desktop et mobile
    [...ImageDataDesktop, ...ImageDataMobile].forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []); // Passer un tableau vide en dépendance pour s'assurer que cela ne s'exécute qu'au montage du composant

  return (
    <main className="home-container">
       {/* Réactiver Helmet avant nouveau build toutes pages */}
                   {/* <Helmet>
      <title>Accueil</title>
      <meta name="description" content="Accueil du site d'Anne-Christine Brunel diététicienne et micronutritionniste à Crest(26)" />
    </Helmet> */}
      <div className="carousel-home-container">
        {/* <Suspense fallback={<div>Chargement...</div>}> */}
        <FullCarousel images={ImageData} />
        {/* </Suspense> */}
      </div>

      <TestimonialCarousel />
    </main>
  );
};
export default Home;
