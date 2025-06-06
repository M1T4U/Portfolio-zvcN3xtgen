
import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NAV_LINKS, BODY_FONT } from './constants'; // Ensured relative path

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(NAV_LINKS[0]?.id || 'home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-40% 0px -60% 0px", // Adjust to make section active when it's more centered
        threshold: 0.01 // Small threshold, triggers as soon as a tiny part is visible with the rootMargin
      }
    );

    const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    // Initial check in case the top section isn't 'home' or if page loads scrolled
    const initialVisibleSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
    });
    if (initialVisibleSection) {
        setActiveSection(initialVisibleSection.id);
    }


    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <HashRouter>
      <div className={`bg-slate-950 text-slate-200 min-h-screen ${BODY_FONT} antialiased`}>
        <Navbar activeSection={activeSection} />
        <main>
          {/* Sections are direct children here, they will get their IDs from props */}
          <Hero id={NAV_LINKS[0].id} />
          <About id={NAV_LINKS[1].id} />
          <Skills id={NAV_LINKS[2].id} />
          <Projects id={NAV_LINKS[3].id} />
          <Contact id={NAV_LINKS[4].id} />
        </main>
        <footer className="text-center py-10 text-sm text-slate-500 border-t border-slate-800">
          <p>© {new Date().getFullYear()} zvcN3xtgen. All rights reserved.</p>
          <p className="mt-1">Crafted with React, TypeScript & Tailwind CSS.</p>
          <p className="mt-1 text-xs">Digital loading effects and seamless navigation inspired by modern web technologies.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
