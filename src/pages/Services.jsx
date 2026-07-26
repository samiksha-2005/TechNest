import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '💻',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Deployment', 'API Integration'],
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that users love',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive results',
      icon: '📈',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics'],
    },
    {
      title: 'Brand Identity',
      description: 'Distinctive brand identities that stand out',
      icon: '✨',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Strategy'],
    },
    {
      title: 'Consulting',
      description: 'Expert guidance for digital transformation',
      icon: '💡',
      features: ['Technology Strategy', 'Process Optimization', 'Team Training', 'Project Management'],
    },
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', desc: 'Understanding your vision and goals' },
    { number: '02', title: 'Planning', desc: 'Strategic roadmap and timeline' },
    { number: '03', title: 'Design', desc: 'Creating beautiful, functional designs' },
    { number: '04', title: 'Development', desc: 'Building with precision and care' },
    { number: '05', title: 'Launch', desc: 'Deploying and monitoring success' },
  ];

  useEffect(() => {
    gsap.from('.services-header', {
      y: 100,
      opacity: 0.7,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.service-card', {
      y: 100,
      opacity: 1,
      duration: 0.5,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      },
    });

    gsap.from('.process-step', {
      y: 50,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.process-steps',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-15 text-center bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container-custom">
          <h1 
            className="services-header text-5xl md:text-6xl lg:text-7xl font-black mb-25" 
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="service-card p-10 bg-slate-800/50 rounded-3xl border border-slate-700 card-hover relative overflow-hidden group"
              >
                {/* Top border gradient on hover */}
                <div 
                  className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
                ></div>
                
                <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-family-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                      <span className="font-bold" style={{ color: 'var(--color-primary)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <MagneticButton 
                  className="w-full bg-transparent text-slate-50 hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  style={{ border: '2px solid var(--color-primary)' }}
                >
                  Learn More
                </MagneticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Our Process
          </h2>
          <div className="process-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="process-step text-center p-8 bg-slate-900 rounded-2xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 relative"
              >
                {/* Arrow indicator (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-3xl opacity-30"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    →
                  </div>
                )}
                
                <div className="text-5xl font-black gradient-text mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Docker'].map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  💎
                </div>
                <span className="text-sm font-semibold text-slate-400 group-hover:text-[var(--color-primary)] transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-800/50 text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help bring your project to life
          </p>
          <MagneticButton 
            className="text-white text-lg px-12 py-5"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
            }}
          >
            Contact Us Today
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default Services;