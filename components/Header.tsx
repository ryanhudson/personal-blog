import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Initialize theme from localStorage or default to dark
    try {
      const stored = localStorage.getItem('theme');
      return (stored === 'light' ? 'light' : 'dark');
    } catch (e) {
      return 'dark';
    }
  });
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

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
          ? 'bg-white/80 dark:bg-background/80 backdrop-blur-md border-border py-3 shadow-sm dark:shadow-none'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg border border-border bg-card group-hover:border-primary/50 transition-colors">
            <Terminal size={20} className="text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight text-main transition-colors">
            Dev<span className="text-primary">Log</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="h-6 w-px bg-border"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted hover:text-main hover:bg-card transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted hover:text-main"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="p-2 text-muted hover:text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border md:hidden animate-in slide-in-from-top-5 fade-in duration-200 shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium py-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-muted'
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