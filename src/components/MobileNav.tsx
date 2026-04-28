import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle pull-to-refresh
  useEffect(() => {
    let touchStart = 0;
    let touchEnd = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEnd = e.touches[0].clientY;
      
      // If pulling down at the top of the content
      if (window.scrollY === 0 && touchEnd > touchStart) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      const pullDistance = touchEnd - touchStart;
      if (pullDistance > 100 && window.scrollY === 0) {
        window.location.reload();
      }
    };

    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop with improved touch feedback */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu with enhanced animations */}
      <div 
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0 shadow-xl' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-all duration-300 active:scale-95"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="mt-12">
            <ul className="space-y-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact Us" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    onClick={onClose}
                    className="block w-full py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 active:scale-98"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-6">
            <a 
              href="tel:+97121234567"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 active:scale-98"
            >
              <Phone className="w-5 h-5 text-[#104484]" />
              <span>+971 50 543 6347</span>
            </a>
            <a 
              href="mailto:info@ruipbuilding.com"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 active:scale-98"
            >
              <Mail className="w-5 h-5 text-[#104484]" />
              <span>info@ruipbuildingcontracting.com</span>
            </a>
            <div className="flex items-start gap-3 p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-[#104484] flex-shrink-0 mt-1" />
              <span>PO Box 31455, Al Muroor Street, Abu Dhabi, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;