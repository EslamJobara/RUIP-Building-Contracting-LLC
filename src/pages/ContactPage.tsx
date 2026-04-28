import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();
  const mapRef = useScrollReveal();
  const officesRef = useScrollReveal();

  const offices = [
    {
      city: "Abu Dhabi",
      address: "PO Box 31455, Al Muroor Street",
      phone: "+971 50 543 6347",
      email: "info@ruipbuildingcontracting.com",
      hours: "Sun - Thu: 8:00 AM - 5:00 PM"
    },
    {
      city: "Riyadh",
      address: "King Fahd Road, Riyadh",
      phone: "+971 50 543 6347",
      email: "info@ruipbuildingcontracting.com",
      hours: "Sun - Thu: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="page-top-spacing">
      {/* Contact Information Section */}
      <section ref={infoRef} className="section-spacing bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-[#104484] mb-6">Get in Touch</h1>
            <p className="text-gray-600 text-lg">
              Whether you have a project in mind or just want to learn more about our services, 
              we're here to help. Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Phone className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">24/7 Support Available</p>
              <a href="tel:+971505436347" className="text-[#104484] hover:text-[#104484]/80 transition-colors font-medium">
                +971 50 543 6347
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Mail className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:info@ruipbuildingcontracting.com" className="text-[#104484] hover:text-[#104484]/80 transition-colors font-medium">
                info@ruipbuildingcontracting.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Building2 className="w-12 h-12 text-[#104484] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Main Office - Abu Dhabi</p>
              <p className="text-[#104484] font-medium">
                PO Box 31455, Al Muroor Street
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="pt-4 pb-8 scroll-reveal bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#104484] mb-8">Send Us a Message</h2>
              <div className="space-y-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#104484] mb-6">Why Choose RUIP?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#104484] mt-1" />
                    <span className="text-gray-600">20+ years of industry experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#104484] mt-1" />
                    <span className="text-gray-600">ISO certified for quality and safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#104484] mt-1" />
                    <span className="text-gray-600">24/7 support available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#104484] mt-1" />
                    <span className="text-gray-600">Comprehensive project management</span>
                  </li>
                </ul>
              </div>

              <div ref={mapRef} className="bg-white p-8 rounded-lg shadow-lg scroll-reveal">
                <h3 className="text-xl font-bold text-[#104484] mb-10">Find Us</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8884681379027!2d54.39101567535793!3d24.45465457819644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e427b02482471%3A0xf63db944c6ce1879!2sMuroor%20Rd%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1738303011550!5m2!1sen!2seg"
                    className="w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section ref={officesRef} className="pt-7 pb-16 bg-gray-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#104484] mb-12">Our Offices</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-center">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#104484] mt-1" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#104484] mt-1" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-[#104484] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#104484] mt-1" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-[#104484] transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#104484] mt-1" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;