import FullCarousel from "../../components/carousel/FullCarousel.jsx";
import "./contact.scss";
const Contact = () => {
    
    const ImageContactData = [
    
     
            "images/entree.webp",
     
            "images/salle-attente.webp",
   
      ];  
    return (
        <main>
            <div className="banner-container">
                <img src="images/header-contact.webp" alt="contact" />
                </div>
                <div className="contact-info">
                    <h2>ANNE CHRISTINE BRUNEL</h2>
                    <p>Diététicienne et micronutritionniste</p>
                      </div> 
                      <div className="full-carousel-container">
                {/* <FullCarousel images={ImageContactData} className="carousel-image"  /> */}
                </div>
        <h1>Contact</h1>
        </main>
    );
    };
    export default Contact;