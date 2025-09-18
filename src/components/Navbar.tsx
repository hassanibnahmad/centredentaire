import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Nos Services' },
    { id: 'doctors', label: 'Nos Docteurs' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">3M</span>
            </div>
            <div>
              <h1 className="font-bold text-slate-800 text-lg">Centre Dentaire</h1>
              <p className="text-sm text-blue-600 font-medium">3 Mars</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                  currentPage === item.id ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+212524890021"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Prendre Rendez-vous</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg ${
                    currentPage === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4">
                <a
                  href="tel:+212524890021"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center space-x-2 shadow-lg w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>Prendre Rendez-vous</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;