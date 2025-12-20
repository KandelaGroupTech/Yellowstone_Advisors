import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  // Dynamic classes based on scroll position
  const navBackground = scrollY > 50 
    ? 'bg-obsidian/90 backdrop-blur-md border-b border-white/5 py-4' 
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white group">
            Yellowstone <span className="text-gold-500 group-hover:text-gold-400 transition-colors">Advisors</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-500 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-obsidian transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold-500 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-3xl text-gray-300 hover:text-gold-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-8 py-3 bg-gold-500 text-obsidian font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
        >
          Partner With Us
        </a>
      </div>
    </nav>
  );
};