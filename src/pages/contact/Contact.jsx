// nouveau code
import React , { useState, useEffect, Suspense } from 'react';
import './contact.scss';
import OpenMapComponent from '../../components/mapcomponent/OpenMapComponent.jsx';
import ContactForm from '../../components/contactform/ContactForm.jsx';

const FullCarousel = React.lazy(() => import('../../components/carousel/FullCarousel.jsx'));

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
      <div className="banner-container">
        <img src="images/header-contact.webp" alt="contact" />
      </div>
      <div className="contact-info">
        <h2>ANNE CHRISTINE BRUNEL</h2>
        <p>Diététicienne et micronutritionniste</p>
      </div> 
      <div className="full-carousel-container">
        <Suspense fallback={<div>Chargement...</div>}>
          <FullCarousel images={images} className="carousel-image"  />
        </Suspense>
      </div>
      <h1>Contact</h1>
      <OpenMapComponent />
      <ContactForm />
    </main>
  );
};

export default Contact;