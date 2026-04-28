import React from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LazyImage from '../../components/LazyImage';

const testimonials = [
  {
    quote: "RUIP delivered outstanding results on the Etihad Railway project. Their expertise and commitment to quality set them apart.",
    author: "Samuel Reed",
    company: "Etihad Rail, Infrastructure Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    quote: "The team at RUIP maintained exceptional safety and efficiency. A reliable and professional contractor.",
    author: "David Collins",
    company: "MAS, Senior Operations Supervisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  },
  {
    quote: "Their work on the Solar Park project was crucial to its success. A great partner in sustainable construction.",
    author: "Nour Hassan",
    company: "Renewable Energy Consultant",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  }
];

const TestimonialsSection = () => {
  const testimonialsRef = useScrollReveal();

  return (
    <section ref={testimonialsRef} className="pt-4 pb-24 bg-gray-50 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#104484] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <LazyImage
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;