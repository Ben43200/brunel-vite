import FullCarousel from "../../components/carousel/FullCarousel.jsx";
import "./contact.scss";
import { useEffect,Suspense } from "react";
const Contact = () => {
    
    const ImageContactData = [
    
     
            "images/entree.webp",
     
            "images/salle-attente.webp",
   
      ];
      useEffect(() => {
        ImageContactData.forEach((image) => {
          const img = new Image();
          img.src = image;
        });
      }, []);  
    return (
        <main className="main-contact-container">
            <div className="banner-container">
                <img src="images/header-contact.webp" alt="contact" />
                </div>
                <div className="contact-info">
                    <h2>ANNE CHRISTINE BRUNEL</h2>
                    <p>Diététicienne et micronutritionniste</p>
                      </div> 
                      <div className="full-carousel-container">
                      <Suspense fallback={<div>Chargement...</div>}>
                <FullCarousel images={ImageContactData} className="carousel-image"  />
                </Suspense>
                </div>
        <h1>Contact</h1>
        </main>
    );
    };
    export default Contact;