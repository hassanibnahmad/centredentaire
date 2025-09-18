import React from 'react';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const footerLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Nos Docteurs' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/centre.dentaire3mars',
      label: 'Instagram',
      color: 'hover:bg-pink-500'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://facebook.com/centre.dentaire3mars',
      label: 'Facebook',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: 'https://wa.me/212524890021',
      label: 'WhatsApp',
      color: 'hover:bg-green-500'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      href: 'https://goo.gl/maps/centre-dentaire-3mars',
      label: 'Google Maps',
      color: 'hover:bg-red-500'
    }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">3M</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-xl">Centre Dentaire</h3>
                <p className="text-blue-600 font-medium">3 Mars</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Votre partenaire de confiance pour un sourire éclatant et une santé bucco-dentaire optimale. 
              Situé à Ouarzazate, nous offrons des soins dentaires de qualité supérieure.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+212524890021" 
                className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>+212 524 890 021</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-600">
                <MapPin className="w-5 h-5" />
                <span>Ouarzazate, Maroc</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-800 text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h4 className="font-bold text-slate-800 text-lg mb-6">Suivez-nous</h4>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-slate-50 p-3 rounded-xl ${social.color} hover:text-white transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:scale-105 transform`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <a
              href="tel:+212524890021"
              className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-600 text-sm">
              © 2024 Centre Dentaire 3 Mars. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <span>Ouarzazate, Maroc</span>
              <span>•</span>
              <span>Soins dentaires d'excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;