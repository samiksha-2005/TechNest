import { Link } from 'react-router-dom';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email || !email.trim()) {
      return; // Don't do anything if email is empty
    }
    setIsSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="site-footer__brand gradient-text hover:scale-105 transition-transform">
              TECHNEST
            </h3>
            <p className="site-footer__copy mb-6 leading-relaxed">
              Building the future with innovative solutions
            </p>
            <div className="site-footer__social">
              {['linkedin', 'twitter', 'instagram', 'github'].map((social) => (
                <MagneticButton 
                  key={social}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all p-0"
                >
                  <i className={`fab fa-${social}`}></i>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Services', 'Portfolio'].map((link) => (
                <Link 
                  key={link}
                  to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                  className="site-footer__link"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/careers" className="site-footer__link">
                Careers
              </Link>
              <Link to="/contact" className="site-footer__link">
                Contact
              </Link>
              <a href="#privacy" className="site-footer__link">
                Privacy Policy
              </a>
              <a href="#terms" className="site-footer__link">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="site-footer__copy mb-4">Subscribe to our newsletter</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control w-full rounded-full text-sm"
              />
              <MagneticButton 
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className="px-6 py-2 rounded-full text-sm font-semibold text-white transition-all w-40 self-start" 
                style={{ 
                  background: isSubscribed 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  cursor: isSubscribed ? 'default' : 'pointer'
                }}
              >
                {isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6" style={{ borderColor: 'var(--surface-border)' }}>
        <div className="container-custom text-center text-slate-400">
          <p>&copy; {currentYear} CORPORATE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;