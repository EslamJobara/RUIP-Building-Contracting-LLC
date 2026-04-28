import React from 'react';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading = false,
  disabled = false,
  children
}) => {
  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      className={`
        w-full flex items-center justify-center gap-2
        bg-[#104484] text-white px-8 py-3 rounded-lg
        transition-all duration-200
        ${isLoading || disabled 
          ? 'opacity-70 cursor-not-allowed' 
          : 'hover:bg-[#104484]/90 active:scale-[0.98]'}
      `}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Processing...
        </>
      ) : children}
    </button>
  );
};

export default SubmitButton;