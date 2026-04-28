import React from 'react';
import { Award, Shield, Users } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LazyImage from '../../components/LazyImage';

const WhyChooseSection = () => {
  const whyChooseRef = useScrollReveal();

  return (
    <section ref={whyChooseRef} className="pt-8 pb-16 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <LazyImage
              src="/welcome.jpg"
              alt="Construction Site"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#104484] mb-8">
              Why Choose RUIP?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#104484] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expertise & Experience</h3>
                  <p className="text-gray-600">Decades of hands-on experience in complex projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[#104484] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certified & Trusted</h3>
                  <p className="text-gray-600">Holding globally recognized certifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-[#104484] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Partnership-Driven</h3>
                  <p className="text-gray-600">A client-centric approach ensuring seamless collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;