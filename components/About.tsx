import React from 'react';
import { Reveal } from './Reveal';
import { Globe, Shield, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-24 bg-charcoal relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <Reveal>
              <h2 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">Our Essence</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                Global Standards,<br />
                <span className="italic text-gray-400">Local Expertise.</span>
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gray-400 leading-relaxed mb-6">
                Located in the heart of Accra, Yellowstone Advisors serves as a pivotal bridge between emerging West African markets and global financial frameworks. We understand the unique economic pulse of Ghana while adhering to the rigorous precision of international finance.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our firm is founded on the principles of integrity, foresight, and bespoke strategy. We don't just advise; we architect pathways to sustainable wealth and corporate longevity for industry leaders.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-start p-4 border-l border-gold-500/30">
                  <Globe className="text-gold-500 mb-2" size={24} />
                  <span className="text-white font-serif text-lg">Regional Authority</span>
                </div>
                <div className="flex flex-col items-start p-4 border-l border-gold-500/30">
                  <Shield className="text-gold-500 mb-2" size={24} />
                  <span className="text-white font-serif text-lg">Unwavering Trust</span>
                </div>
                <div className="flex flex-col items-start p-4 border-l border-gold-500/30">
                  <TrendingUp className="text-gold-500 mb-2" size={24} />
                  <span className="text-white font-serif text-lg">Data Driven</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image / Graphic Element */}
          <Reveal delay={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-500 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="relative aspect-[4/5] bg-gray-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out">
                {/* Using a placeholder architectural image to represent firm stability */}
                <img 
                  src="https://picsum.photos/seed/finance_building/600/800" 
                  alt="Modern Architecture in Accra" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-gold-500 font-serif text-2xl italic">"Excellence is not an act, but a habit."</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
};