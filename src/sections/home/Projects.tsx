import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LazyImage from '../../components/LazyImage';

const Projects = () => {
  const projectsHeadingRef = useScrollReveal();
  const projectsGridRef = useScrollReveal();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'ADNOC Oil Field Development',
      category: 'Oil & Gas',
      image:
        '/project1.jpg',
      description:
        'Complete development of oil field infrastructure including processing facilities and pipeline networks.',
    },
    {
      id: 2,
      title: 'Solar Park Installation',
      category: 'Renewable Energy',
      image:
        '/project2.jpg',
      description:
        'Installation of 50MW solar park with state-of-the-art photovoltaic systems and grid integration.',
    },
    {
      id: 3,
      title: 'Etihad Railway Bridge',
      category: 'Infrastructure',
      image:
        '/project3.jpg',
      description:
        'Construction of major railway bridge connecting key industrial zones.',
    },
    {
      id: 4,
      title: 'Explore Our Landmark Projects',
      category: 'Our Portfolio',
      image: '/project4.jpg',
      description:
        'Discover our transformative projects across energy, infrastructure, and innovation. See how we shape the future with excellence.',
    },
  ];

  const handleServiceClick = () => {
    navigate('/projects');
  };

  return (
    <section id="projects" className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={projectsHeadingRef} className="scroll-reveal">
          <h2 className="text-4xl font-bold text-center text-[#104484] mb-6 pb-10">
            Featured Projects
          </h2>
        </div>
        <div
          ref={projectsGridRef}
          className="grid md:grid-cols-2 gap-8 scroll-reveal stagger-children"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={handleServiceClick}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#104484] focus:ring-offset-2"
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#104484]/90 text-white text-sm rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
