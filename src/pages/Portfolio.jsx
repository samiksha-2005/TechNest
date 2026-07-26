import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'web', image: '🛒', tech: 'React, Node.js, MongoDB' },
    { id: 2, title: 'Mobile Banking App', category: 'mobile', image: '💳', tech: 'React Native, Firebase' },
    { id: 3, title: 'Brand Redesign', category: 'design', image: '🎨', tech: 'Figma, Adobe XD' },
    { id: 4, title: 'SaaS Dashboard', category: 'web', image: '📊', tech: 'Next.js, PostgreSQL' },
    { id: 5, title: 'Fitness App', category: 'mobile', image: '💪', tech: 'Flutter, AWS' },
    { id: 6, title: 'Corporate Identity', category: 'design', image: '✨', tech: 'Illustrator, Photoshop' },
    { id: 7, title: 'Real Estate Portal', category: 'web', image: '🏠', tech: 'Vue.js, Django' },
    { id: 8, title: 'Food Delivery App', category: 'mobile', image: '🍕', tech: 'React Native, GraphQL' },
    { id: 9, title: 'Marketing Campaign', category: 'design', image: '📢', tech: 'After Effects, Premiere' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    gsap.from('.portfolio-header', {
      y: 100,
      opacity: 0.7,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      gsap.from('.project-card', {
        y: 50,
        opacity: 0.8,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  }, [filter, isAnimating]);

  const handleFilterChange = (newFilter) => {
    if (newFilter === filter) return;
    
    setIsAnimating(true);
    
    gsap.to('.project-card', {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        setFilter(newFilter);
        setIsAnimating(false);
      }
    });
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-15 text-center bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container-custom">
          <h1 
            className="portfolio-header text-5xl md:text-6xl lg:text-7xl font-black mb-25" 
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Showcasing our best work and success stories
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {['all', 'web', 'mobile', 'design'].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                }`}
                style={filter === category ? {
                  background: 'var(--color-primary)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                } : {}}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 card-hover cursor-pointer group"
              >
                {/* Project Image/Icon */}
                <div 
                  className="h-64 flex items-center justify-center text-8xl relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                >
                  <span className="transition-transform duration-500 group-hover:scale-110">
                    {project.image}
                  </span>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[var(--color-primary)]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="text-lg tracking-wide px-10 py-3 bg-white rounded-full font-bold transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      View Project
                    </button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {project.tech}
                  </p>
                  <span 
                    className="inline-block px-4 py-1.5 bg-slate-900 rounded-full text-sm uppercase font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-slate-400">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Project Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '250+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Industry Awards' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-900 rounded-2xl border border-slate-700">
                <h3 
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {stat.number}
                </h3>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', company: 'Tech Corp', text: 'Outstanding work! Exceeded all our expectations.' },
              { name: 'Sarah Johnson', company: 'Design Studio', text: 'Professional, creative, and delivered on time.' },
              { name: 'Mike Williams', company: 'StartUp Inc', text: 'Best decision we made for our digital presence.' },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                  >
                    👤
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;