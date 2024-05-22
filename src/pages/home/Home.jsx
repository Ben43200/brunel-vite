import "./home.scss"
import Carousel from "../../components/carousel/Carousel.jsx";
import FullCarousel from "../../components/carousel/FullCarousel.jsx";
const Home = () => {
    // const slides = ["Dehli", "Mumbai", "Pune"];
    const slides = ["circular--landscape-1", "circular--landscape-2", "circular--landscape-3"]
   
    const ImageData = [
    
        {
          image:
            "images/accueil1.webp",
        },
        {
          image:
            "images/accueil2.webp",
        },
        {
          image:
            "images/accueil3.webp",
        },
      ];  
   
   
    // const urlsImg = ["/public/accueil1.webp", "/public/accueil2.webp", "/public/accueil3.webp"]
 
 
    return(
    <main className="home-container">
        {/* <div className="circular--landscape"> */}
         <Carousel  slides={slides}   />
         <FullCarousel bigSlides={ImageData} />
         {/* <FullCarousel  /> */}
        {/* <Carousel  slides={slides} className={className} />  */}
        {/* <Carousel  className={className} /> */}
    </main>
)
}
export default Home