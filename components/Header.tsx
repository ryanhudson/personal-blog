import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
            <Terminal size={20} className="text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-100 group-hover:text-white transition-colors">
            Dev<span className="text-primary">Log</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 md:hidden animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium py-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;