import React from 'react';
import { ArrowRight, Award, Shield, Users, Leaf, MapPin, AlertTriangle, CheckCircle, Trophy, Target, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage'; // Import the LazyImage component
import PartnersSection from '../sections/home/PartnersSection';

const ProjectsPage = () => {
  // Scroll reveal refs
  const whyUsRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const partnersRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const cardRef = useScrollReveal();

  const projects = [
    {
      title: "ADNOC Oil Area Prefabricated Plant Project",
      location: "UAE",
      scope: "Prefabricated infrastructure, steel structure installation, and MEP work",
      challenge: "High safety and environmental standards in an oil field environment",
      solution: "Implemented modular construction techniques and rigorous safety measures",
      outcome: "Completed on time, exceeding ADNOC's expectations and safety regulations",
      image: "/project1-2.jpg"
    },
    {
      title: "Etihad Railway Project",
      location: "UAE",
      scope: "Infrastructure development for the UAE's national railway system",
      challenge: "Building complex railway infrastructure across diverse terrains",
      solution: "Designed and executed precise civil engineering and steelwork solutions",
      outcome: "Key milestone in UAE's national transportation expansion",
      image: "/project3-2.png"
    },
    {
      title: "Mohammed bin Rashid Solar Park Project",
      location: "UAE",
      scope: "Steel structures and mechanical & electrical installations for solar energy",
      challenge: "Harsh desert conditions requiring durable and sustainable construction",
      solution: "Used advanced materials and engineering techniques to withstand extreme temperatures",
      outcome: "Contributed to UAE's renewable energy goals and sustainable infrastructure",
      image: "/project2-2.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "RUIP delivered outstanding results on the Etihad Railway project. Their expertise and commitment to quality set them apart.",
      author: "Samuel Reed",
      company: "Etihad Rail, Infrastructure Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      quote: "The team at RUIP maintained exceptional safety and efficiency during our ADNOC project. A reliable and professional contractor.",
      author: "David Collins",
      company: "ADNOC, Senior Operations Supervisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    },
    {
      quote: "Their work on the Solar Park project was crucial to its success. A great partner in sustainable construction.",
      author: "Marwa Adel",
      company: "Renewable Energy Consultant",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pb-10 pt-12">
      {/* Why Our Projects Stand Out */}
      <section ref={whyUsRef} className="section-spacing bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#104484] mb-12">
            Why Our Projects Stand Out
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Trophy className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-gray-600">Delivering high-quality, large-scale projects across industries</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Award className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Engineering Excellence</h3>
              <p className="text-gray-600">Advanced construction techniques ensuring durability and precision</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client Satisfaction</h3>
              <p className="text-gray-600">Working closely with stakeholders to exceed expectations</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Shield className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safety & Sustainability</h3>
              <p className="text-gray-600">Adhering to international safety and environmental standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="pt-14 pb-4 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#104484] mb-16">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5">
                    {/* Replace background image with LazyImage */}
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-3/5 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#104484] mb-2">{project.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-5 h-5" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#104484]" />
                            Project Scope
                          </h4>
                          <p className="text-gray-600 ml-7">{project.scope}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Challenge
                          </h4>
                          <p className="text-gray-600 ml-7">{project.challenge}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#104484]" />
                            Solution
                          </h4>
                          <p className="text-gray-600 ml-7">{project.solution}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-green-600" />
                            Outcome
                          </h4>
                          <p className="text-gray-600 ml-7">{project.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Testimonials */}
      <section ref={testimonialsRef} className="pt-8 pb-24 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#104484] mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* Replace <img> with LazyImage */}
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

      {/* CTA Section */}
      <section ref={ctaRef} className="section-spacing bg-[#104484] scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8">Let's Build Something Great Together!</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#104484] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;