import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const jobs = [
    { 
      title: 'Senior Frontend Developer', 
      location: 'Remote', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Build amazing user interfaces with React and modern technologies'
    },
    { 
      title: 'UI/UX Designer', 
      location: 'New York', 
      type: 'Full-time', 
      department: 'Design',
      description: 'Create beautiful and intuitive user experiences'
    },
    { 
      title: 'Product Manager', 
      location: 'San Francisco', 
      type: 'Full-time', 
      department: 'Product',
      description: 'Lead product strategy and development initiatives'
    },
    { 
      title: 'DevOps Engineer', 
      location: 'Remote', 
      type: 'Full-time', 
      department: 'Engineering',
      description: 'Manage cloud infrastructure and deployment pipelines'
    },
    { 
      title: 'Content Writer', 
      location: 'Remote', 
      type: 'Part-time', 
      department: 'Marketing',
      description: 'Create engaging content for our digital platforms'
    },
  ];

  const benefits = [
    { icon: '🚀', title: 'Growth Opportunities', desc: 'Continuous learning and career advancement' },
    { icon: '💼', title: 'Competitive Pay', desc: 'Industry-leading compensation packages' },
    { icon: '🏖️', title: 'Work-Life Balance', desc: 'Flexible hours and remote work options' },
    { icon: '🎯', title: 'Innovative Projects', desc: 'Work on cutting-edge technologies' },
    { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive health and wellness coverage' },
    { icon: '📚', title: 'Learning Budget', desc: 'Annual budget for courses and conferences' },
    { icon: '🎉', title: 'Team Events', desc: 'Regular team building and social activities' },
    { icon: '🌍', title: 'Global Team', desc: 'Work with talented people from around the world' },
  ];

  const perks = [
    '🏠 Remote-first culture',
    '💻 Latest tech equipment',
    '☕ Unlimited coffee & snacks',
    '🎮 Game room & relaxation area',
    '🚴 Gym membership',
    '🌴 Generous vacation policy',
  ];

  useEffect(() => {
    gsap.from('.careers-header', {
      y: 100,
      opacity: 0.7,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.benefit-card', {
      y: 50,
      opacity: 0.8,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 80%',
      },
    });

    gsap.from('.job-card', {
      x: -50,
      opacity: 0.9,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.jobs-list',
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
            className="careers-header text-5xl md:text-6xl lg:text-7xl font-black mb-25" 
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Build your career with us and make an impact
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Why Work With Us
          </h2>
          <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card p-8 bg-slate-800/50 rounded-3xl border border-slate-700 card-hover text-center group"
              >
                <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Our Culture
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We believe in creating an environment where creativity thrives, innovation is encouraged, 
                and every team member has the opportunity to grow and make a meaningful impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300"
                  >
                    <span className="text-sm">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="h-96 rounded-3xl flex items-center justify-center text-6xl"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              🎯
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Open Positions
          </h2>
          <div className="jobs-list max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="job-card p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300 hover:translate-x-2 group"
                style={{ boxShadow: '0 0 0 rgba(99, 102, 241, 0)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(99, 102, 241, 0)';
                }}
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      {job.title}
                    </h3>
                    <p className="text-slate-400 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                      <span className="flex items-center gap-2">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        ⏰ {job.type}
                      </span>
                      <span className="flex items-center gap-2">
                        🏢 {job.department}
                      </span>
                    </div>
                  </div>
                  <MagneticButton 
                    className="text-white whitespace-nowrap transition-all"
                    style={{ background: 'var(--color-primary)' }}
                  >
                    Apply Now
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Our Hiring Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your application and resume' },
              { step: '02', title: 'Screen', desc: 'Initial review and phone screening' },
              { step: '03', title: 'Interview', desc: 'Technical and cultural fit interviews' },
              { step: '04', title: 'Offer', desc: 'Receive and accept your offer' },
            ].map((stage, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-black text-white"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                >
                  {stage.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                <p className="text-slate-400 text-sm">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Send us your resume anyway! We're always looking for talented people.
          </p>
          <MagneticButton 
            className="text-white text-lg px-12 py-5"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
            }}
          >
            Send Your Resume
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default Careers;