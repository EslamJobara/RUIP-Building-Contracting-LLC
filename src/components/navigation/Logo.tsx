import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center group"
      aria-label="RUIP Building - Home"
    >
      <img 
        src={isScrolled ? "/logo-text.png" : "/logo-text-blue.png"} 
        alt="RUIP Building Logo" 
        className="h-10 transition-all duration-300 group-hover:scale-110"
      />
    </Link>
  );
};

export default Logo;
