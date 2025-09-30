import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const ScrollFadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}) => {
  const [ref, isVisible] = useScrollFadeIn({ threshold, triggerOnce });

  const directionStyles = {
    up: { transform: 'translateY(40px)' },
    down: { transform: 'translateY(-40px)' },
    left: { transform: 'translateX(40px)' },
    right: { transform: 'translateX(-40px)' },
    none: { transform: 'none' }
  };

  const initialStyle = directionStyles[direction] || directionStyles.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : initialStyle.transform,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;