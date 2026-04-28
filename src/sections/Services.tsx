import React from 'react';
import { Building2, Wrench, Cog, Droplets } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const headingRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const whyChooseRef = useScrollReveal();

  const services = [
    {
      icon: Building2,
      title: "Civil Construction",
      description: "From residential complexes to commercial buildings, we deliver excellence in every project with cutting-edge construction techniques."
    },
    {
      icon: Wrench,
      title: "Steel Structure",
      description: "Specialized in designing and installing robust steel structures for industrial facilities and infrastructure projects."
    },
    {
      icon: Cog,
      title: "MEI Installations",
      description: "Complete mechanical, electrical, and instrumentation solutions for complex industrial environments."
    },
    {
      icon: Droplets,
      title: "MEP Systems",
      description: "State-of-the-art mechanical, electrical, and plumbing systems for modern buildings and facilities."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center text-[#104484] mb-16 scroll-reveal"
        >
          Our Services
        </h2>
        
        <div 
          ref={servicesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-children scroll-reveal"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#104484]/5"
            >
              <service.icon className="w-12 h-12 text-[#104484] mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-[#104484]">
                {service.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
                {service.description}
              </p>
              <div className="h-1 w-0 bg-[#104484] mt-4 transition-all duration-500 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

       


      </div>
    </section>
  );
};

export default Services;