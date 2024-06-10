import  { useState } from 'react';
import './testimonialcarousel.scss';

const testimonials = [
  { name: "Clémentine", testimonial: "Madame Brunel a enfin pu répondre à mes besoins de soins après des mois d’errance. Le diagnostic de candidose posé, sa compréhension et connaissance de la maladie a permis un accompagnement de grande qualité et une disponibilité rare. Un grand merci !" },
  { name: "Alice", testimonial: " Malade depuis plus de 3 ans et en errance médicale, Mme BRUNEL à défini un possible diagnostic qui s'est avéré exact. Elle m'a permis au bout de 6 mois de reprendre mon travail. Le chemin est encore long mais, elle est un réel soutien. Elle est disponible, bienveillante et pointue concernant ma pathologie, toujours dans une démarche de formation et de recherche pour adapter au mieux ses protocoles de soin." +
	"" +
	"Encore mille mercis, elle m'a sauvé d'un avenir qui m'aurait amené à de l'invalidité." +
	"" +
	"Je la conseille à mille pour cent !!"},
  { name: "Nassera", testimonial: 	"Madame BRUNEL est une excellente diététicienne micronutritioniste, très professionnelle, à l'écoute, disponible et de très bons conseils car se forme et s'informe continuellement." +
	"" +
	"Vous serez toujours reçu avec gentillesse et bienveillance." +
	"" +
	"MERCI pour tout Madame BRUNEL"},
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className="testimonialcarousel">
      <button onClick={prevSlide}>Prev</button>
      <div className="testimonial">
      <p>{testimonials[current].testimonial}</p>
        <h2>{testimonials[current].name}</h2>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default TestimonialCarousel;