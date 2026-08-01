import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const MenuBar = ({ menuOpen, closeMenu, navLinks }) => {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const decorRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path, event) => {
    event.preventDefault();
    navigate(path);
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();

    gsap.to([menuRef.current, overlayRef.current], {
      opacity: [0, 0],
      x: '100%',
      duration: 0.25,
      ease: 'power2.inOut',
      onComplete: closeMenu,
    });
  };

  useEffect(() => {
    const currentMenu = menuRef.current;
    const currentOverlay = overlayRef.current;
    const currentLinks = [...linksRef.current];
    const currentDecor = decorRef.current;

    gsap.killTweensOf([currentMenu, currentOverlay, ...currentLinks, currentDecor]);

    if (menuOpen) {
      document.body.style.overflow = 'hidden';

      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(menuRef.current, { x: '100%' });
      gsap.set(decorRef.current, { scale: 0, rotation: -180, opacity: 0 });
      gsap.set(linksRef.current, { x: 0, opacity: 1 });

      const tl = gsap.timeline();

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.inOut' }
      );

      tl.fromTo(
        menuRef.current,
        { x: '100%' },
        { x: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      );

      tl.fromTo(
        decorRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.4'
      );

    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = 'unset';
          gsap.set(linksRef.current, { clearProps: 'all' });
          gsap.set(menuRef.current, { clearProps: 'transform' });
          gsap.set(overlayRef.current, { clearProps: 'opacity' });
          gsap.set(decorRef.current, { clearProps: 'all' });
        }
      });

      tl.to(linksRef.current, {
        x: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power2.in'
      });

      tl.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in'
      }, '-=0.2');

      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      }, '-=0.3');
    }

    return () => {
      gsap.killTweensOf([currentMenu, currentOverlay, ...currentLinks, currentDecor]);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      closeMenu();
    }
  }, [location.pathname, menuOpen, closeMenu]);

  return (
    <>
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-998 lg:hidden ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ opacity: 0 }}
        onClick={closeMenu}
      />

      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-full max-w-none sm:max-w-104 md:max-w-120 z-1000 lg:hidden overflow-hidden shadow-2xl"
        style={{
          transform: 'translateX(100%)',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.7)'
        }}
      >
        <button
          type="button"
          onClick={handleCloseClick}
          aria-label="Close menu"
          className="absolute top-6 right-6 z-1100 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 pointer-events-auto"
        >
          <span className="relative block h-4 w-4">
            <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
            <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
          </span>
        </button>

        <div
          ref={decorRef}
          className="absolute top-20 right-10 w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />

        <div className="relative h-full flex flex-col items-center px-6 py-16 sm:px-10 sm:py-20">
          <div className="absolute top-10 left-10">
            <h2 className="text-xl font-bold text-white tracking-wider">MENU</h2>
            <div className="w-16 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mt-2 rounded-full"></div>
          </div>

          <nav className="menu-scrollbar-hide mt-20 flex min-h-0 w-full flex-1 flex-col items-center gap-5 overflow-y-auto overscroll-contain px-2 pb-10 sm:gap-7 md:gap-8 sm:pb-14">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                ref={(el) => (linksRef.current[index] = el)}
                onClick={(event) => handleLinkClick(link.path, event)}
                className="menu-link group relative text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-family-heading)',
                  color: '#ffffff',
                  textShadow: location.pathname === link.path
                    ? '0 0 30px rgba(99, 102, 241, 0.8), 3px 3px 6px rgba(0, 0, 0, 0.5)'
                    : '3px 3px 6px rgba(0, 0, 0, 0.5)'
                }}
              >
                <span
                  className="absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-mono transition-colors duration-300"
                  style={{
                    color: location.pathname === link.path ? '#818cf8' : '#94a3b8'
                  }}
                >
                  0{index + 1}
                </span>

                <span className="relative inline-block">
                  <span className="text-white transition-opacity duration-300 group-hover:opacity-90">
                    {link.name}
                  </span>

                  <span
                    className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-500"
                    style={{
                      width: location.pathname === link.path ? '100%' : '0%',
                      background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)'
                    }}
                  />
                </span>

                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
                    zIndex: -1
                  }}
                />
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col items-center gap-4 pb-4 pt-8">
            <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-slate-500 to-transparent" />
            <p className="text-slate-300 text-sm tracking-wide font-medium">TECHNEST © 2024</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-indigo-500/40 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-purple-500/40 rounded-bl-lg" />

        <div className="absolute top-0 right-0 w-2 h-12 bg-linear-to-b from-indigo-500 to-transparent" />
        <div className="absolute top-0 right-0 w-12 h-2 bg-linear-to-l from-indigo-500 to-transparent" />
      </div>

      <style>{`
        .menu-link {
          cursor: pointer;
          user-select: none;
        }

        .menu-link:active {
          transform: scale(0.95);
        }

        .menu-link * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .menu-scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .menu-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default MenuBar;