import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isScrolled }) => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <div 
      className="hidden md:flex space-x-8"
      role="menubar"
      aria-label="Main menu"
    >
      {navItems.map(({ path, label }) => (
        <Link 
          key={path}
          to={path} 
          role="menuitem"
          className={`
            relative py-2 group
            transition-all duration-300 
            focus-visible:ring-2
            ${location.pathname === path 
              ? (isScrolled ? 'text-white' : 'text-[#104484]')
              : (isScrolled ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-[#104484]')
            }
          `}
          aria-current={location.pathname === path ? 'page' : undefined}
        >
          {label}
          <span 
            className={`
              absolute -bottom-0.5 left-1/2 w-0 h-0.5 rounded-full
              transform -translate-x-1/2 transition-all duration-300 ease-out
              ${location.pathname === path
                ? (isScrolled ? 'bg-white w-full' : 'bg-[#104484] w-full')
                : (isScrolled ? 'bg-white' : 'bg-[#104484]')
              }
              group-hover:w-full
            `}
          />
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;
