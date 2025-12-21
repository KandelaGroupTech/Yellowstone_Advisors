import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center group">
      {/* Background with Parallax and Hover Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="w-full h-full bg-geometric opacity-40 transition-transform duration-[3000ms] ease-out group-hover:scale-110 group-hover:translate-x-2"></div>
      </div>

      {/* Abstract Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-600/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-800/30 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <Reveal>
          <div className="inline-block px-3 py-1 mb-6 border border-gold-500/30 rounded-full bg-gold-900/10 backdrop-blur-sm">
            <span className="text-gold-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
              Established in Accra, Ghana
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            World-class expertise with <span className="text-gradient-gold">Ghanaian Roots</span>,<br />
            to Elevate your business.
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Expert counsel in Management, M&A, and Market Analysis for the discerning corporate entity.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-obsidian transition-all duration-200 bg-gold-500 font-sans uppercase tracking-widest hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
          >
            <span>Partner With Us</span>
            <div className="absolute inset-0 -z-10 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
          </a>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gold-500/50">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};