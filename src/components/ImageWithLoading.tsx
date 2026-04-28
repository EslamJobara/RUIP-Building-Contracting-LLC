import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner size="md" />
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
      />

      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-red-500">Failed to load image</p>
        </div>
      )}
    </div>
  );
};

export default ImageWithLoading;