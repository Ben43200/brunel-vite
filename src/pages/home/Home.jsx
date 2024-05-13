import "./home.scss"
import Carousel from "../../components/carousel/Carousel.jsx";
const Home = () => {
    // const slides = ["Dehli", "Mumbai", "Pune"];
  const slides = ["circular--landscape-1", "circular--landscape-2", "circular--landscape-3"]
return(
    <main className="home-container">
        {/* <div className="circular--landscape"> */}
         <Carousel  slides={slides}   />
        {/* <Carousel  slides={slides} className={className} />  */}
        {/* <Carousel  className={className} /> */}


        {/* </div> */}
        {/* <Carousel  slides={slides} />; */}
    </main>
)
}
export default Home