import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before revealing to ensure proper animation
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              entry.target.classList.add('reveal');
            });
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '50px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // Reset the reveal class when the component mounts
      currentRef.classList.remove('reveal');
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return ref;
};