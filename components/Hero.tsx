import React from 'react';
import AnimatedVisibility from './AnimatedVisibility';
import { SITE_TITLE_FONT } from '../constants';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900/30 px-4 relative overflow-hidden">
       {/* Subtle background pattern - optional */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <AnimatedVisibility delay="delay-100">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold ${SITE_TITLE_FONT} mb-6`}>
            <span className="text-slate-100">zvc</span><span className="text-sky-400">N3xt</span><span className="text-slate-100">gen</span>
          </h1>
        </AnimatedVisibility>
        <AnimatedVisibility delay="delay-300">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4">
            Frontend Developer <span className="text-sky-500">|</span> Crypto Technical Analyst <span className="text-sky-500">|</span> Solidity Specialist
          </p>
        </AnimatedVisibility>
        <AnimatedVisibility delay="delay-500">
          <p className="text-md sm:text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Crafting innovative digital experiences at the intersection of cutting-edge web technologies and the decentralized future.
          </p>
        </AnimatedVisibility>
        <AnimatedVisibility delay="delay-700">
          <a
            href="https://github.com/M1T4U"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            <span className="animate-blink-text">Explore My GitHub</span>
          </a>
        </AnimatedVisibility>
      </div>
    </section>
  );
};

export default Hero;