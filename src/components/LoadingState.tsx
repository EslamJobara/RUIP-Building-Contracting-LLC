import React from 'react';
import SkeletonLoader from './SkeletonLoader';

interface LoadingStateProps {
  type: 'card' | 'list' | 'text';
  count?: number;
}

const LoadingState: React.FC<LoadingStateProps> = ({ type, count = 1 }) => {
  const renderCardSkeleton = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <SkeletonLoader className="w-16 h-16 mb-4" variant="circular" />
      <SkeletonLoader className="w-3/4 h-6 mb-3" variant="text" />
      <SkeletonLoader className="w-full h-4 mb-2" variant="text" />
      <SkeletonLoader className="w-5/6 h-4" variant="text" />
    </div>
  );

  const renderListSkeleton = () => (
    <div className="flex items-center space-x-4 p-4">
      <SkeletonLoader className="w-12 h-12" variant="circular" />
      <div className="flex-1">
        <SkeletonLoader className="w-3/4 h-4 mb-2" variant="text" />
        <SkeletonLoader className="w-1/2 h-3" variant="text" />
      </div>
    </div>
  );

  const renderTextSkeleton = () => (
    <div className="space-y-2">
      <SkeletonLoader className="w-full h-4" variant="text" />
      <SkeletonLoader className="w-5/6 h-4" variant="text" />
      <SkeletonLoader className="w-4/6 h-4" variant="text" />
    </div>
  );

  const skeletonMap = {
    card: renderCardSkeleton,
    list: renderListSkeleton,
    text: renderTextSkeleton
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{skeletonMap[type]()}</div>
      ))}
    </div>
  );
};

export default LoadingState;