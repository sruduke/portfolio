import React, { useRef, useEffect, useState } from 'react';

const SlideIn = ({ children, delay = 0, duration = 1000, direction = 'left' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(elementRef.current);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return isIntersecting ? 'translateX(0)' : 'translateX(-100%)';
      case 'right':
        return isIntersecting ? 'translateX(0)' : 'translateX(100%)';
      case 'up':
        return isIntersecting ? 'translateY(0)' : 'translateY(100%)';
      case 'down':
        return isIntersecting ? 'translateY(0)' : 'translateY(-100%)';
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transform: getTransform(),
        opacity: isIntersecting ? 1 : 0,
        transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default SlideIn;