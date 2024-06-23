// nouveau code
import React , { useState, useEffect, Suspense } from 'react';
import './contact.scss';
// import OpenMapComponent from '../../components/mapcomponent/OpenMapComponent.jsx';
import ContactForm from '../../components/contactform/ContactForm.jsx';

const FullCarousel = React.lazy(() => import('../../components/carousel/FullCarousel.jsx'));
const OpenMapComponent = React.lazy(() => import('../../components/mapcomponent/OpenMapComponent.jsx'));
const Contact = () => {
  const [images, setImages] = useState([]);

  const ImageContactData = [
    "images/entree.webp",
    "images/salle-attente.webp",
  ];

  
  useEffect(() => {
    ImageContactData.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => setImages((prevImages) => [...prevImages, image]); // Ajoutez l'URL de l'image, pas l'objet Image
    });
  }, []);

  return (
    <main className="main-contact-container">
      
      {/* <div className="banner-container">
        <img src="images/header-contact.webp" alt="contact" />
      </div> */}
      <div className="contact-info">
        <h2>ANNE CHRISTINE BRUNEL</h2>
        <p>Diététicienne et micronutritionniste</p>
        <p>Espace Synergie / 1 allée Vanber - 26400 CREST </p>
        <p><a href="tel:0601460274" className="contact-link"> 06 01 46 02 74</a></p>  
        <p><a href="mailto:annechristine.brunel@gmail.com" className="contact-link">annechristine.brunel@gmail.com</a></p>
        <h2 className="tarifs-title">TARIFS</h2>
        <p>1ère consultation : 80€ (1h30)</p>
        <p> 2ème consultation et suivantes : 60€ (1h)</p>
        <p> Suivi diététique : 30€ (1/2 heure)</p>
      </div> 
      <div className="full-carousel-container">
        <Suspense fallback={<div>Chargement...</div>}>
          <FullCarousel images={images} className="carousel-image"  />
        </Suspense>
      </div>
      <Suspense fallback={<div>Chargement...</div>}>
      <OpenMapComponent  />
      </Suspense>
      <ContactForm />
    </main>
  );
};

export default Contact;