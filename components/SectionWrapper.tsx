
import React from 'react';
import AnimatedVisibility from './AnimatedVisibility';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  title,
  titleClassName = 'text-sky-400',
  contentClassName = ''
}) => {
  return (
    // Added an invisible element with the ID for IntersectionObserver to target accurately for navigation,
    // separate from the visible section content that might have its own padding.
    // The section itself has the padding for visual spacing.
    <div id={id} className="relative"> {/* Anchor point for navigation */}
      <section className={`min-h-screen flex flex-col items-center justify-center py-20 md:py-28 ${className}`}> {/* Removed overflow-hidden */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-5xl">
          <AnimatedVisibility className="w-full">
            {title && (
              <h2 className={`text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center ${titleClassName}`}>
                {title}
                <span className="block w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></span>
              </h2>
            )}
            <div className={contentClassName}>
              {children}
            </div>
          </AnimatedVisibility>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper;
