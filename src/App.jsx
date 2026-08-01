import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent({ theme, scrollInstance, setScrollInstance }) {
  const location = useLocation();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef.current) {
      return undefined;
    }

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    setScrollInstance(locomotiveScroll);

    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true });
        }

        return locomotiveScroll.scroll?.instance?.scroll?.y || 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: 'transform',
    });

    ScrollTrigger.defaults({ scroller: scrollContainerRef.current });

    const handleRefresh = () => {
      if (typeof locomotiveScroll.update === 'function') {
        locomotiveScroll.update();
      }
    };

    ScrollTrigger.addEventListener('refresh', handleRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener('refresh', handleRefresh);
      locomotiveScroll.destroy();
      setScrollInstance(null);
    };
  }, [setScrollInstance]);

  useEffect(() => {
    if (!scrollInstance) {
      return undefined;
    }

    const rafId = window.requestAnimationFrame(() => {
      scrollInstance.scrollTo(0, { duration: 0, disableLerp: true });
      if (typeof scrollInstance.update === 'function') {
        scrollInstance.update();
      }
      ScrollTrigger.refresh();
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [location.pathname, scrollInstance, theme]);

  return (
    <div ref={scrollContainerRef} data-scroll-container className="app-scroll-container min-h-screen">
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className="App app-shell min-h-screen overflow-hidden">
        <CustomCursor />
        <ScrollProgress scrollInstance={scrollInstance} />
        <Navbar theme={theme} toggleTheme={toggleTheme} scrollInstance={scrollInstance} />
        <AppContent
          theme={theme}
          scrollInstance={scrollInstance}
          setScrollInstance={setScrollInstance}
        />
      </div>
    </Router>
  );
}

export default App;