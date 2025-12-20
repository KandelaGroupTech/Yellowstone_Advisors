import React from 'react';
import { Reveal } from './Reveal';
import { BarChart2, Briefcase, Layers } from 'lucide-react';
import { Service } from '../types';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Commercial Strategy",
      description: "Tailored advisory in commercial strategy and operations optimization. We empower SMEs to navigate diverse regulatory environments and infrastructure challenges to thrive within the vibrant economic markets of West Africa.",
      icon: <Layers size={40} className="text-gold-500" />,
    },
    {
      id: 2,
      title: "Transaction Support",
      description: "Expert guidance on IPOs, syndicated financings, and M&A. Our team boasts broad expertise across equity and debt markets, delivering actionable insights and measurable results for complex transactions.",
      icon: <Briefcase size={40} className="text-gold-500" />,
    },
    {
      id: 3,
      title: "Market Intelligence",
      description: "Deep local market knowledge combined with global financial expertise. We provide strategic insight into the region's expanding middle class and burgeoning entrepreneurial ecosystem to identify compelling growth opportunities.",
      icon: <BarChart2 size={40} className="text-gold-500" />,
    },
  ];

  return (
    <div className="py-24 bg-obsidian relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gray-900 to-transparent opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">Our Capabilities</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">Strategic Expertise for<br/>West African Growth</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Yellowstone Advisors is poised to revolutionize how enterprises navigate and thrive within the vibrant economic markets of Ghana and West Africa. We differentiate ourselves through a client-centric approach, fostering long-term relationships and mutual success.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.2}>
              <div className="group relative h-full">
                {/* Glassmorphism Card */}
                <div className="h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold-500 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)] transition-all duration-500 flex flex-col items-start">
                  
                  <div className="mb-6 p-4 bg-obsidian border border-gold-500/30 rounded-full group-hover:bg-gold-500 group-hover:text-obsidian transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    <div className="text-gold-500 group-hover:text-obsidian transition-colors">
                      {service.icon}
                    </div>
                  </div>

                  <h4 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-500 transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="mt-8 pt-6 w-full border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Learn More</span>
                    <span className="text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-white/10 pt-16">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="pt-8 md:pt-0">
                  <div className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">$15Bn+</div>
                  <div className="text-white uppercase tracking-widest text-xs font-bold">Combined Transactions Closed</div>
                  <p className="text-gray-500 text-sm mt-2 italic">Across Equity, Debt & M&A</p>
                </div>
                <div className="pt-8 md:pt-0">
                  <div className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">50+</div>
                  <div className="text-white uppercase tracking-widest text-xs font-bold">M&A Deals Executed</div>
                  <p className="text-gray-500 text-sm mt-2 italic">Global Track Record</p>
                </div>
                <div className="pt-8 md:pt-0">
                  <div className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">4</div>
                  <div className="text-white uppercase tracking-widest text-xs font-bold">Continents Covered</div>
                  <p className="text-gray-500 text-sm mt-2 italic">International Experience</p>
                </div>
              </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
};