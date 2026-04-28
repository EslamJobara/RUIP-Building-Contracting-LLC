import React from 'react';
import { ArrowRight, CheckCircle, Activity, Shield, Users, Cpu, Leaf, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useScrollReveal } from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage'; // Import the LazyImage component

const ServicesPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Scroll reveal refs for different sections
  const whyChooseRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const services = [
    {
      title: "Civil Construction",
      description: [
        "Residential, Commercial, and Industrial Construction",
        "Structural Engineering & Project Planning",
        "Site Development, Roads, and Bridges"
      ],
      image: "/service1.jpg"
    },
    {
      title: "Steel Structure Installation",
      description: [
        "Fabrication & Installation of Steel Frameworks",
        "High-rise, Industrial, and Commercial Steel Buildings",
        "Quality Control & Compliance with Global Safety Standards"
      ],
      image: "/service2.png"
    },
    {
      title: "Mechanical, Electrical & Instrumentation (MEI)",
      description: [
        "Mechanical Installations for Large-Scale Projects",
        "Electrical Systems Integration & Testing",
        "Instrumentation Engineering for precision control"
      ],
      image: "/service3.png"
    },
    {
      title: "MEP (Mechanical, Electrical & Plumbing)",
      description: [
        "HVAC, Fire Protection, and Water Supply Systems",
        "Electrical Panel Installation & Maintenance",
        "Sustainable, Energy-Efficient Building Solutions"
      ],
      image: "/service4.png"
    }
  ];

  const whyChooseUs = [
    { icon: Activity, title: "Proven Expertise", description: "Decades of experience in diverse construction fields" },
    { icon: Shield, title: "Certified & Trusted", description: "ISO-certified company ensuring top-tier quality" },
    { icon: Users, title: "Client-Centric Approach", description: "Tailored solutions designed to meet project needs" },
    { icon: Cpu, title: "Cutting-Edge Technology", description: "Utilizing advanced tools & techniques for efficiency" },
    { icon: Leaf, title: "Sustainability Focused", description: "Environmentally responsible engineering practices" }
  ];

  const workProcess = [
    { number: "01", title: "Consultation & Planning", description: "Understanding client needs & designing strategic solutions" },
    { number: "02", title: "Project Execution", description: "Utilizing top-tier materials & skilled workforce for seamless execution" },
    { number: "03", title: "Quality Assurance", description: "Conducting rigorous inspections to ensure the highest standards" },
    { number: "04", title: "On-Time Delivery", description: "Commitment to timely completion without compromising quality" }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "ADNOC Oil Field Development",
      category: "Oil & Gas",
      image: "/project1.jpg",
      description: "Complete development of oil field infrastructure including processing facilities and pipeline networks."
    },
    {
      id: 2,
      title: "Solar Park Installation",
      category: "Renewable Energy",
      image: "/project2.jpg",
      description: "Installation of 50MW solar park with state-of-the-art photovoltaic systems and grid integration."
    },
    {
      id: 3,
      title: "Etihad Railway Bridge",
      category: "Infrastructure",
      image: "/project3.jpg",
      description: "Construction of major railway bridge connecting key industrial zones."
    },
    {
      id: 4,
      title: "Explore Our Landmark Projects",
      category: "Our Portfolio",
      image: "/project4.jpg",
      description: "Discover our transformative projects across energy, infrastructure, and innovation. See how we shape the future with excellence."
    }
  ];

  // Handle project click
  const handleProjectClick = (projectId) => {
    navigate('/projects', { state: { scrollToProject: projectId } });
  };

  return (
    <div className="pt-16">
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whyChooseRef} className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#104484] mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We bring together expertise, innovation, and commitment to deliver excellence in every project
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => {
              const cardRef = useScrollReveal();
              return (
                <div
                  key={index}
                  ref={cardRef}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-12 h-12 text-[#104484] mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#104484] mb-16">
            Our Services
          </h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2">
                  {/* Replace <img> with LazyImage */}
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[#104484] flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#104484] mb-16">
            Our Work Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 relative">{step.title}</h3>
                <p className="text-gray-600 relative">{step.description}</p>
                {index < workProcess.length - 1 && (
                  <ChevronRight className="hidden lg:block w-8 h-8 text-[#104484] absolute -right-4 top-1/2 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="pt-10 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#104484] mb-6 pb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)} // Add onClick handler
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer" // Add cursor-pointer
              >
                {/* Replace background image with LazyImage */}
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-medium text-[#104484] bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-spacing bg-[#104484] scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Reliable Construction Services?
          </h2>
          <p className="text-xl mb-8">Let's Build Together!</p>
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

export default ServicesPage;