import { useEffect, useState } from 'react';

const ScrollProgress = ({ scrollInstance }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (scrollInstance && typeof scrollInstance.on === 'function' && typeof scrollInstance.off === 'function') {
      const handleScroll = (args) => {
        const scrollY = args?.scroll?.y ?? scrollInstance.scroll?.instance?.scroll?.y ?? 0;
        const limitY = args?.limit?.y ?? scrollInstance.scroll?.instance?.limit?.y ?? 1;
        const progress = Math.min((scrollY / Math.max(limitY, 1)) * 100, 100);
        setScrollProgress(progress);
      };

      scrollInstance.on('scroll', handleScroll);
      handleScroll();

      return () => {
        scrollInstance.off('scroll', handleScroll);
      };
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollInstance]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-1000" style={{ background: 'rgba(148, 163, 184, 0.1)' }}>
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;