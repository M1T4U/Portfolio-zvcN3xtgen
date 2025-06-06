
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import AnimatedVisibility from './AnimatedVisibility';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Get In Touch" className="bg-slate-950">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedVisibility delay="delay-0">
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            I'm always excited to discuss new projects, innovative ideas, or opportunities in the frontend and blockchain space. 
            Feel free to reach out!
          </p>
        </AnimatedVisibility>

        <AnimatedVisibility delay="delay-200">
          <div className="flex justify-center space-x-6 mb-12">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110"
              >
                {React.isValidElement(link.icon) ? React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" }) : null}
              </a>
            ))}
          </div>
        </AnimatedVisibility>
        
        <AnimatedVisibility delay="delay-400">
           <a 
             href="mailto:zvcn3xtgen@gmail.com"
             className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-sky-500/50"
           >
             Send Me An Email
           </a>
        </AnimatedVisibility>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
