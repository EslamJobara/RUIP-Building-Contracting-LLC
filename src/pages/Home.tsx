import React from 'react';
import Hero from '../sections/home/Hero.tsx';
import AboutSection from '../sections/home/AboutSection';
import PartnersSection from '../sections/home/PartnersSection';
import WhyChooseSection from '../sections/home/WhyChooseSection';
import Services from '../sections/home/Services';
import Projects from '../sections/home/Projects.tsx';
import TestimonialsSection from '../sections/home/TestimonialsSection';

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PartnersSection />
      <WhyChooseSection />
      <Services />
      <Projects />
      <TestimonialsSection />
    </div>
  );
}

export default Home;