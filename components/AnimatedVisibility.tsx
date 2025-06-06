
import React, { useRef, useEffect, useState } from 'react';

interface AnimatedVisibilityProps {
  children: React.ReactNode;
  className?: string;
  initialClasses?: string;
  finalClasses?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: string; // Tailwind delay class e.g. 'delay-300'
  duration?: string; // Tailwind duration class e.g. 'duration-1000'
}

const AnimatedVisibility: React.FC<AnimatedVisibilityProps> = ({
  children,
  className = '',
  initialClasses = 'opacity-0 translate-y-8 scale-95',
  finalClasses = 'opacity-100 translate-y-0 scale-100',
  threshold = 0.1,
  triggerOnce = true,
  delay = 'delay-100',
  duration = 'duration-700',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={targetRef}
      className={`${className} transition-all ease-out ${duration} ${delay} ${isVisible ? finalClasses : initialClasses}`}
    >
      {children}
    </div>
  );
};

export default AnimatedVisibility;
