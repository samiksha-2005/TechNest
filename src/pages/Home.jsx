import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.hero-title', {
      y: 100,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
    })
      .from('.hero-subtitle', {
        y: 50,
        opacity: 0.5,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-cta', {
        y: 30,
        opacity: 1,
        duration: 0.6,
      }, '-=0.3');

    gsap.utils.toArray('.gradient-orb').forEach((orb) => {
      gsap.to(orb, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    gsap.from('.feature-card', {
      y: 100,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 80%',
      },
    });

    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target'));
      gsap.to(stat, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
        },
        onUpdate: function() {
          stat.innerText = Math.ceil(stat.innerText);
        }
      });
    });
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20"></div>
          <div className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
          <div className="gradient-orb absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" style={{ animationDelay: '-10s' }}></div>
        </div>

        <div className="container-custom text-center z-10 px-4">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-family-heading)' }}>
            We Create
            <br />
            <span className="gradient-text">Digital Excellence</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-slate-400 mb-12 mt-10 max-w-2xl mx-auto">
            Transforming ideas into innovative digital experiences
          </p>
          <div className="hero-cta flex gap-6 justify-center flex-wrap">
            <Link to="/contact">
              <MagneticButton 
                className="text-white shadow-lg transition-all hover:-translate-y-1"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                }}
              >
                Get Started
              </MagneticButton>
            </Link>
            <Link to="/portfolio">
              <MagneticButton 
                className="bg-transparent text-slate-50 hover:bg-[var(--color-primary)] hover:text-white transition-all"
                style={{ border: '2px solid var(--color-primary)' }}
              >
                View Work
              </MagneticButton>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-400 text-sm tracking-widest">
          <span>SCROLL</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--color-primary)] to-transparent animate-scroll"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding bg-slate-800/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-0 gradient-text">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎨', title: 'Design', desc: 'Creating stunning visual experiences that captivate and engage' },
              { icon: '💻', title: 'Development', desc: 'Building robust, scalable solutions with cutting-edge technology' },
              { icon: '🚀', title: 'Strategy', desc: 'Crafting data-driven strategies for digital success' },
              { icon: '📱', title: 'Mobile', desc: 'Developing seamless mobile experiences for iOS and Android' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="feature-card p-8 bg-slate-900 rounded-3xl border border-slate-700 card-hover cursor-pointer group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="section-padding mt-10"
        style={{ background: 'linear-gradient(135deg, rgba(70, 119, 225, 0.72) 45%, rgb(113, 83, 167))'}}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 500, label: 'Projects Completed' },
              { number: 300, label: 'Happy Clients' },
              { number: 50, label: 'Team Members' },
              { number: 15, label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="stat-number text-5xl md:text-6xl font-black text-white mb-2" data-target={stat.number}>
                  0
                </h3>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-800/50 text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-400 mb-12">Let's create something amazing together</p>
          <Link to="/contact">
            <MagneticButton 
              className="text-white text-lg px-12 py-5"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
              }}
            >
              Contact Us
            </MagneticButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;