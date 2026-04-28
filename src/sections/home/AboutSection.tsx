import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LazyImage from '../../components/LazyImage';

const AboutSection = () => {
  const [teamCount, setTeamCount] = useState(0);
  const countRef = useRef(null);
  const aboutContentRef = useScrollReveal();
  const aboutImageRef = useScrollReveal();
  const aboutStatsRef = useScrollReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            const interval = setInterval(() => {
              count += 1;
              if (count <= 215) {
                setTeamCount(count);
              } else {
                clearInterval(interval);
              }
            }, 10);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={aboutContentRef} className="space-y-6 scroll-reveal">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to RUIP Building Contracting LLC
            </h2>
            <p className="text-gray-600">
              We don't just build structures—we create the foundations for the future. As a trusted general contractor in the UAE and Saudi Arabia, we bring expertise, innovation, and precision to every project.
            </p>
            <div ref={aboutStatsRef} className="space-y-4 scroll-reveal">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">20+ Landmark Projects Completed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">ISO certified for quality and safety</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#104484] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">Trusted by Industry Leaders</span>
              </div>
            </div>
          </div>
          <div ref={aboutImageRef} className="relative scroll-reveal">
            <div className="relative w-full overflow-hidden">
              <LazyImage
                src="/welcome2.jpg"
                alt="Construction Team"
                className="w-full rounded-lg shadow-xl"
              />
              <div 
                ref={countRef}
                className="absolute bottom-4 right-0 bg-[#104484] text-white p-4 sm:p-6 rounded-lg shadow-lg transform translate-y-0 translate-x-2"
              >
                <p className="text-2xl sm:text-3xl font-bold">{teamCount}+</p>
                <p className="text-sm">Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;