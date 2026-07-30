import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import MenuBar from './MenuBar';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.nav-link',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Close menu when screen is resized to lg or above
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen, closeMenu]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`site-nav fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled 
          ? 'site-nav--scrolled py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="site-nav__brand gradient-text hover:scale-105 transition-transform">
              TECHNEST
            </Link>

            {/* Desktop Navigation - Visible on LG and above */}
            <div className="site-nav__links hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`site-nav__link nav-link ${location.pathname === link.path ? 'site-nav__link--active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="site-nav__actions flex items-center gap-6">
              <button
                onClick={toggleTheme}
                className="site-nav__theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>

              {/* Hamburger Menu - Hidden on LG and above */}
              <button
                className="site-nav__toggle flex lg:hidden flex-col gap-1.5 w-8 z-[1001] relative"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className={`w-full h-0.5 bg-slate-50 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-slate-50 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-slate-50 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MenuBar 
        menuOpen={menuOpen} 
        closeMenu={closeMenu} 
        navLinks={navLinks} 
      />
    </>
  );
};

export default Navbar;