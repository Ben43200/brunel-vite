import  { useState, useEffect } from 'react';
import './testimonialcarousel.scss';

const testimonials = [
  { name: "Clémentine", testimonial: " Madame Brunel a enfin pu répondre à mes besoins de soins après des mois d’errance. Le diagnostic de candidose posé, sa compréhension et connaissance de la maladie a permis un accompagnement de grande qualité et une disponibilité rare. Un grand merci !" },
  { name: "Christiane", testimonial: " Anne-Christine est une personne non seulement compétente mais aussi à l'écoute avec bienveillance et empathie. Les compléments alimentaires qu’elle me prescrit, sont choisis avec soin et correspondent à ma problématique. Ils m'apportent à chaque fois plus de bien-être et une meilleure santé. "},
  { name: "Nassera", testimonial: " Madame BRUNEL est une excellente diététicienne micronutritioniste, très professionnelle, à l'écoute, disponible et de très bons conseils car se forme et s'informe continuellement." +
	"" +
	"Vous serez toujours reçu avec gentillesse et bienveillance." +
	"" +
	"MERCI pour tout Madame BRUNEL."},
{name: "Priscilla", testimonial: " Une superbe professionnelle ! Anne Christine est très à l’écoute et a su m’apporter ce dont j’avais besoin lors de ma grossesse et encore aujourd’hui … elle est de très bon conseil, je la recommande à 3000%"},
{name: "Hilario", testimonial:" Depuis plusieurs années Madame Anne Christine Brunel nous prodigue les meilleurs conseils. Ses connaissances et ses explications des analyses médicales nous rassurent"},
{name: "Florence", testimonial: "Je remercie énormément madame Brunel pour son aide si précieuse pour ses conseils. Depuis 3 ans elle est devenue pour moi une référence. Je la recommande sans hésitation, très bon suivi. Au-delà de la compétence professionnelle que l’on trouve peu actuellement, c’est une personne très à l’écoute, bienveillante et disponible.  Merci beaucoup"},
{name: "Lila", testimonial: "Madame Brunel est une professionnelle de qualité, très aimable, efficace, et disponible et qui s’assure du suivi de ses patients. Sa connaissance en micronutrition a permis de guérir plusieurs maux, elle assure un suivi qui permet d’adapter les traitements et donc de garantir un résultat optimal ! Je la recommande fortement "},
{name: "Dorine", testimonial: "Je suis ravie d'avoir découvert Anne-Christine. Elle est toujours à l'écoute et disponible." +
	"" +
	"Elle saura vous accompagner dans vos problématiques avec volonté et persévérance pour vous trouver une solution. Et ainsi rendre votre vie plus agréable. Je ne peux que vous la recommander 🙂"},
{name: "Robert", testimonial: " L'accompagnement de Madame Brunel est précieux car rien n'est laissé au hasard. Je peux me reposer en toute confiance sur son diagnostic étant donnés les résultats obtenus"},
{name: "Lamiel", testimonial: "Merci à Anne-Christine pour son professionnalisme "}];

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
          <p className="testimonial">❝ {testimonial.testimonial} ❞ {testimonial.name}</p>
          {/* <h2 className="testimonial-author">{testimonial.name}</h2> */}
        </div>
      ))}
    </div>
  );
}

export default TestimonialCarousel;