import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Sustainability Director",
      quote: "The carbon reporting platform has streamlined our entire emissions tracking process.",
      imageSrc: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      title: "ESG Manager",
      quote: "Verification process is smooth and provides credibility to our reports.",
      imageSrc: "/images/testimonial-2.jpg"
    },
    {
      name: "Emma Davis",
      title: "Operations Director",
      quote: "The analytics tools have helped us identify key areas for carbon reduction.",
      imageSrc: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;