import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }, 1500);
  };

  useEffect(() => {
    gsap.from('.contact-header', {
      y: 100,
      opacity: 0.7,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.from('.form-group', {
      x: -50,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
      },
    });

    gsap.from('.contact-info-card', {
      y: 50,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
      },
    });
  }, []);

  const contactInfo = [
    { icon: '📧', title: 'Email', info: 'contact@corporate.com', link: 'mailto:contact@corporate.com' },
    { icon: '📱', title: 'Phone', info: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: '📍', title: 'Office', info: '123 Business St, Suite 100\nNew York, NY 10001', link: null },
    { icon: '⏰', title: 'Hours', info: 'Mon - Fri: 9:00 AM - 6:00 PM', link: null },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#', color: '#0077b5' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#', color: '#1da1f2' },
    { name: 'Facebook', icon: 'fab fa-facebook', url: '#', color: '#1877f2' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#', color: '#e4405f' },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-15 text-center bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10">
        <div className="container-custom">
          <h1 
            className="contact-header text-5xl md:text-6xl lg:text-7xl font-black mb-25" 
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Let's discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="contact-form bg-slate-800/50 p-10 ml-5 rounded-3xl border border-slate-700">
                <div className="form-group mb-6 pl-15">
                  <label htmlFor="name" className="block mb-3 pl-3 font-semibold">Name </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-50 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group mb-6 pl-15">
                  <label htmlFor="email" className="block mb-3 pl-3 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-50 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group mb-6 pl-15">
                  <label htmlFor="subject" className="block mb-3 pl-3 font-semibold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-50 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="form-group mb-8 pl-15">
                  <label htmlFor="message" className="block mb-3 pl-3 font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-50 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <div 
                    className="mb-6 p-4 rounded-xl text-center font-semibold"
                    style={{ background: 'var(--color-primary)', color: 'white' }}
                  >
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <MagneticButton 
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full text-white text-lg"
                  style={{ 
                    background: formStatus.submitting 
                      ? 'var(--color-secondary)' 
                      : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                    opacity: formStatus.submitting ? 0.7 : 1,
                    cursor: formStatus.submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </MagneticButton>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="contact-info-card p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  style={{ boxShadow: '0 0 0 rgba(99, 102, 241, 0)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(99, 102, 241, 0)';
                  }}
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-400 whitespace-pre-line">
                    {item.info}
                  </p>
                </div>
              ))}

              {/* Social Links */}
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-family-heading)' }}>
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      style={{
                        color: 'white',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '';
                      }}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-custom">
          <div 
            className="h-96 rounded-3xl flex flex-col items-center justify-center text-6xl relative overflow-hidden group cursor-pointer"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
          >
            <span className="mb-4 transition-transform duration-300 group-hover:scale-110">🗺️</span>
            <span className="text-lg text-white/90">Interactive Map Coming Soon</span>
            {/* You can integrate Google Maps or Mapbox here */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope, but most projects take 4-12 weeks from start to finish.' },
              { q: 'Do you offer ongoing support?', a: 'Yes! We provide various support and maintenance packages to ensure your project continues to run smoothly.' },
              { q: 'What industries do you work with?', a: 'We work with clients across all industries including tech, healthcare, finance, retail, and more.' },
              { q: 'How do you handle project communication?', a: 'We use modern project management tools and maintain regular communication through your preferred channels.' },
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-900 rounded-2xl border border-slate-700 hover:border-[var(--color-primary)] transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-family-heading)' }}>
                  {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;