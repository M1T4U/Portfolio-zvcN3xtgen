
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SITE_TITLE_FONT, ZvcNftIcon } from '../constants'; // Ensured relative path

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Update hash in URL without causing a page reload
    if (window.location.hash !== `#${sectionId}`) {
      // Using history.pushState or history.replaceState to change hash without triggering scroll,
      // as scrollIntoView already handled it. This also plays nicer with routers if they listen to popstate.
      // For simple hash update for styling/bookmarking, direct assignment is fine too if IntersectionObserver handles active state.
      history.pushState(null, '', `#${sectionId}`);
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const navLinkClasses = (id: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
     ${activeSection === id 
       ? 'text-sky-400' 
       : 'text-slate-300 hover:text-sky-300 focus:text-sky-300'
     }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || isMobileMenuOpen ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            className={`flex items-center text-3xl font-bold ${SITE_TITLE_FONT} text-sky-400 hover:text-sky-300 transition-colors`}
            onClick={(e) => handleNavClick(e, NAV_LINKS[0].id)} // NAV_LINKS[0].id is 'home'
            aria-label="Scroll to home section"
          >
            <ZvcNftIcon className="w-7 h-7 mr-2 text-green-400" />
            zvcN3xtgen
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`} // Keep href for semantics & fallback
                  className={navLinkClasses(link.id)}
                  onClick={(e) => handleNavClick(e, link.id)}
                  aria-label={`Scroll to ${link.label} section`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-sky-300 focus:outline-none p-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`} // Keep href for semantics & fallback
                className={`${navLinkClasses(link.id)} block text-center`}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-label={`Scroll to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
