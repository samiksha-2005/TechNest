import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import member1 from "../assets/members/member-1.jpg";
import member2 from "../assets/members/member-2.jpg";
import member3 from "../assets/members/member-3.jpg";
import member4 from "../assets/members/member-4.jpg";
import member5 from "../assets/members/member-5.jpg";
import member6 from "../assets/members/member-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.about-header', {
      y: 100,
      opacity: 0.7,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.timeline-item', {
      x: -100,
      opacity: 0.8,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
      },
    });

    gsap.from('.team-member', {
      y: 50,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
      },
    });
  }, []);

  const timeline = [
    { year: '2020', title: 'Foundation', desc: 'Started with a vision to revolutionize digital experiences' },
    { year: '2021', title: 'Growth', desc: 'Expanded team and delivered 100+ successful projects' },
    { year: '2022', title: 'Recognition', desc: 'Won multiple industry awards for excellence' },
    { year: '2024', title: 'Innovation', desc: 'Leading the industry with cutting-edge solutions' },
  ];

  return (
    <div className="pt-24">
      <section className="py-15 text-center bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container-custom">
          <h1 className="about-header text-5xl md:text-6xl lg:text-7xl font-black mb-25" style={{ fontFamily: 'var(--font-family-heading)' }}>
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            We are a team of passionate creators, innovators, and problem solvers
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth,
                enhance user experiences, and create lasting impact in the digital world.
              </p>
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

      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Our Journey</h2>
          <div className="timeline max-w-4xl mx-auto space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item flex items-center gap-8 md:gap-12 relative">
                <div className="text-3xl md:text-4xl font-bold min-w-[100px] relative" style={{ color: 'var(--color-primary)' }}>
                  {item.year}
                  <div 
                    className="absolute -right-7 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                    style={{ background: 'var(--color-primary)' }}
                  ></div>
                </div>
                <div className="flex-1 p-8 bg-slate-900 rounded-2xl border border-slate-700 left-10">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Meet Our Team</h2>
          <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', position: 'CEO & Founder', image: member1 },
              { name: 'Jane Smith', position: 'Creative Director', image: member2 },
              { name: 'Mike Johnson', position: 'Lead Developer', image: member3 },
              { name: 'Sarah Williams', position: 'UX Designer', image: member4 },
              { name: 'David Brown', position: 'Marketing Manager', image: member5 },
              { name: 'Emily Davis', position: 'Project Manager', image: member6 },
            ].map((member, index) => (
              <div 
                key={index} 
                className="team-member text-center p-8 rounded-3xl card-hover"
              >
                <img className="w-40 h-40 mx-auto mb-6 rounded-full object-cover"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }} src={member.image} alt="" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-slate-400">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;