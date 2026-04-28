import React from 'react';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/logo-mini-blue.png" 
          alt="Loading Logo" 
          className="w-16 h-16 mx-auto animate-bounce"
        />
        
        {/* Loading bar */}
        <div className="mt-4 relative w-24 h-1 mx-auto bg-gray-200 rounded overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-[#104484] w-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
