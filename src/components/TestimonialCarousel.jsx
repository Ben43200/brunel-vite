import  { useState } from 'react';
import './testimonialcarousel.scss';

const testimonials = [
  { name: 'John Doe', testimonial: 'Great service!' },
  { name: 'Jane Doe', testimonial: 'I love this product!' },
  { name: 'Bob Smith', testimonial: 'Highly recommended!' },
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
        <h2>{testimonials[current].name}</h2>
        <p>{testimonials[current].testimonial}</p>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default TestimonialCarousel;