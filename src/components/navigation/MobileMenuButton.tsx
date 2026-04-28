import React from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  isScrolled: boolean;
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isScrolled,
  isOpen,
  onClick
}) => {
  return (
    <button
      type="button"
      className="md:hidden transform transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:ring-2"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Menu 
        className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-[#104484]'}`} 
        aria-hidden="true" 
      />
    </button>
  );
};

export default MobileMenuButton;