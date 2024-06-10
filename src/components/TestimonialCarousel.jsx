import  { useState, useEffect } from 'react';
import './testimonialcarousel.scss';

const testimonials = [
  { name: "Clémentine", testimonial: " Madame Brunel a enfin pu répondre à mes besoins de soins après des mois d’errance. Le diagnostic de candidose posé, sa compréhension et connaissance de la maladie a permis un accompagnement de grande qualité et une disponibilité rare. Un grand merci ! " },
  { name: "Christiane", testimonial: " Anne-Christine est une personne non seulement compétente mais aussi à l'écoute avec bienveillance et empathie. Les compléments alimentaires qu’elle me prescrit, sont choisis avec soin et correspondent à ma problématique. Ils m'apportent à chaque fois plus de bien-être et une meilleure santé "},
  { name: "Nassera", testimonial: " Madame BRUNEL est une excellente diététicienne micronutritioniste, très professionnelle, à l'écoute, disponible et de très bons conseils car se forme et s'informe continuellement." +
	"" +
	"Vous serez toujours reçu avec gentillesse et bienveillance." +
	"" +
	"MERCI pour tout Madame BRUNEL"},
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
//   };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => current === testimonials.length - 1 ? 0 : current + 1);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="testimonialcarousel">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`carousel__slide ${index === current ? 'carousel__slide--active' : ''}`}
        >
          <p className="testimonial">❝{testimonial.testimonial}❞</p>
          <h2 className="testimonial-author">{testimonial.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCarousel;