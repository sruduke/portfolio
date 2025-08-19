import React, { useRef, useEffect, useState } from 'react';

const FadeIn = ({ children, delay = 0, duration = 1000, direction = 'none' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current);
        }
      },
      { threshold: 0.5 }
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
    if (isVisible) {
      return 'translate(0, 0)';
    }
    switch (direction) {
      case 'left':
        return 'translate(-20px, 0)';
      case 'right':
        return 'translate(20px, 0)';
      case 'up':
        return 'translate(0, 20px)';
      case 'down':
        return 'translate(0, -20px)';
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-in-out ${delay}ms, transform ${duration}ms ease-in-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;