
import React from 'react';
import SectionWrapper from './SectionWrapper';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="About Me" className="bg-slate-900">
      <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-sky-500 flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/zvcprofile/300/300" 
            alt="zvcN3xtgen - Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-slate-300 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm <strong className="text-sky-400">zvcN3xtgen</strong>, a dynamic Frontend Developer ignited by an insatiable curiosity for the <strong className="text-green-400">crypto and blockchain universe</strong>. My core passion is forging immersive, high-impact digital experiences that resonate.
          </p>
          <p className="mb-4">
            With a versatile toolkit featuring <strong className="text-sky-400">Flutter (Dart)</strong> for crafting sleek cross-platform mobile applications, <strong className="text-sky-400">JavaScript (React.js)</strong> for building interactive and responsive web UIs, and <strong className="text-yellow-400">Python</strong> for robust backend logic and data insights, I translate complex visions into elegant, user-centric realities.
          </p>
          <p className="mb-4">
            My enthusiasm for <strong className="text-green-400">cryptocurrency technical analysis</strong> and <strong className="text-gray-400">Solidity smart contracts</strong> constantly fuels my drive to innovate at the bleeding edge of Web3. I thrive on dissecting market trends and architecting secure, decentralized solutions.
          </p>
          <p>
            I embrace challenges as opportunities and am perpetually exploring how technology can redefine our digital interactions. Let's connect and build the next generation of the web, together!
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
