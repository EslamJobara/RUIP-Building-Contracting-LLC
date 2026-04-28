import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loadingHeight?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loadingHeight = '300px'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (error) {
    return (
      <div className="bg-gray-100 rounded-lg flex items-center justify-center" style={{ height: loadingHeight }}>
        <p className="text-gray-500">Failed to load image</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <SkeletonLoader
          className="w-full"
          height={loadingHeight}
        />
      )}
      {!isLoading && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default LazyImage;