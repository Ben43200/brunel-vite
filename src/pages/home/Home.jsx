import "./home.scss"
import Carousel from "../../components/carousel/Carousel.jsx";
const Home = () => {
    const slides = ["Dehli", "Mumbai", "Pune"];
return(
    <main className="home-container">
        <div className="circular--landscape">
        </div>
        {/* <Carousel  slides={slides} />; */}
    </main>
)
}
export default Home