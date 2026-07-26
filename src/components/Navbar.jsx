import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

            {/* Desktop Navigation */}
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

              {/* Hamburger Menu */}
              <button
                className="site-nav__toggle lg:hidden flex flex-col gap-1.5 w-8 z-[1001] relative"
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

      {/* Mobile Menu */}
      <div className={`site-nav__mobile fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className="text-4xl font-semibold hover:text-[var(--color-primary)] transition-colors duration-300"
            style={{
              animation: menuOpen ? `fadeInUp 0.5s ease forwards ${index * 0.1}s` : 'none',
              opacity: 0,
              fontFamily: 'var(--font-family-heading)'
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;