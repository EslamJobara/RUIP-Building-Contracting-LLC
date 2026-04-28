import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Shield, Users, Target, Rocket, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage'; // Import the LazyImage component
import PartnersSection from '../sections/home/PartnersSection';

const AboutPage = () => {
  const storyRef = useScrollReveal();
  const achievementsRef = useScrollReveal();
  const visionRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const storyTextRef = useScrollReveal();
  const storyImageRef = useScrollReveal();
  const [counts, setCounts] = useState({
    teamMembers: 0,
    projects: 0,
    countries: 0,
    partners: 0,
    yearsOfExcellence: 0,
  });

  const achievements = [
    { key: 'teamMembers', target: 215, label: "Expert Team Members" },
    { key: 'projects', target: 50, label: "Major Projects" },
    { key: 'countries', target: 2, label: "Countries" },
    { key: 'partners', target: 15, label: "Industry Partners" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "We uphold the highest standards in engineering, construction, and project execution."
    },
    {
      icon: Rocket,
      title: "Innovation & Efficiency",
      description: "Implementing cutting-edge technologies to ensure sustainability and precision."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Understanding our clients' needs and exceeding their expectations."
    },
    {
      icon: Target,
      title: "Safety First",
      description: "Maintaining strict safety protocols for a risk-free work environment."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            achievements.forEach(({ key, target }) => {
              let startTime;
              const duration = 2000;

              function animate(currentTime) {
                if (!startTime) startTime = currentTime;
                const progress = (currentTime - startTime) / duration;

                if (progress < 1) {
                  setCounts(prev => ({
                    ...prev,
                    [key]: Math.floor(target * progress)
                  }));
                  requestAnimationFrame(animate);
                } else {
                  setCounts(prev => ({
                    ...prev,
                    [key]: target
                  }));
                }
              }
              requestAnimationFrame(animate);
            });

            // Animate "5+ Years of Excellence"
            let startTime;
            const duration = 2000;
            function animateYears(currentTime) {
              if (!startTime) startTime = currentTime;
              const progress = (currentTime - startTime) / duration;

              if (progress < 1) {
                setCounts(prev => ({
                  ...prev,
                  yearsOfExcellence: Math.floor(5 * progress)
                }));
                requestAnimationFrame(animateYears);
              } else {
                setCounts(prev => ({
                  ...prev,
                  yearsOfExcellence: 5
                }));
              }
            }
            requestAnimationFrame(animateYears);
          }
        });
      },
      { threshold: 0.5 }
    );

    const achievementsElement = document.getElementById('achievements-section');
    if (achievementsElement) {
      observer.observe(achievementsElement);
    }

    return () => {
      if (achievementsElement) {
        observer.unobserve(achievementsElement);
      }
    };
  }, []);

  return (
    <div className="py-10">
      {/* Our Story Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={storyTextRef}
              className="space-y-6 scroll-reveal"
              style={{ transitionDelay: '0.1s' }}
            >
              <h2 className="text-3xl font-bold text-[#104484]">Our Story</h2>
              <p className="text-gray-600">
                Founded with a vision for engineering precision and innovation, RUIP Building Contracting LLC has grown into a leading general contractor in the UAE and Saudi Arabia. Specializing in civil construction, steel structure installation, and mechanical & electrical works, we take pride in delivering exceptional quality projects that redefine industry standards.
              </p>
              <p className="text-gray-600">
                Since 2018, RUIP has been expanding globally, participating in high-impact infrastructure, oil industry, and sustainable energy projects. Our commitment to excellence, safety, and sustainability has earned us the trust of clients across government and private sectors.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700">Expanded into Saudi Arabia in 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700">Completed landmark projects across the region</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700">ISO certified for quality and safety</span>
                </div>
              </div>
            </div>
            <div
              ref={storyImageRef}
              className="relative scroll-reveal"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative w-full overflow-hidden rounded-lg">
                {/* Replace <img> with LazyImage */}
                <LazyImage
                  src="/aboutus.jpg"
                  alt="RUIP Team"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute bottom-2 right-0 bg-[#104484] text-white p-4 sm:p-6 rounded-l-lg shadow-lg translate-x-2 translate-y-0">
                  <p className="text-2xl sm:text-3xl font-bold">{counts.yearsOfExcellence}+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Achievements Section */}
      <section
        id="achievements-section"
        ref={achievementsRef}
        className="section-spacing bg-[#104484] text-white scroll-reveal"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.key} className="text-center">
                <p className="text-4xl font-bold mb-2">
                  {counts[achievement.key]}+
                </p>
                <p className="text-lg">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className="section-spacing bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#104484] mb-6">Our Vision</h3>
              <p className="text-gray-600">
                To be a globally recognized leader in construction and infrastructure development, delivering world-class projects that redefine excellence. We aim to shape a sustainable future through innovation, efficiency, and integrity, building resilient communities while prioritizing safety, environmental responsibility, and technological advancement.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#104484] mb-6">Our Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Delivering high-quality projects that exceed client expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Embracing modern engineering solutions for sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Ensuring safety and compliance at every level</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Building long-term partnerships based on trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Core Values Section */}
      <section ref={valuesRef} className="section-spacing scroll-reveal bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#104484] mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <value.icon className="w-12 h-12 text-[#104484] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-spacing bg-[#104484] scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future with Us?
          </h2>
          <p className="text-xl mb-8">Let's create something extraordinary together</p>
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

export default AboutPage;