import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian py-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="font-serif text-xl text-white mb-2">Yellowstone Advisors</h4>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Yellowstone Advisors LTD. All Rights Reserved.
            </p>
            <p className="text-gold-500 text-xs mt-1 uppercase tracking-wider">Based in Accra, Ghana</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors" aria-label="X (formerly Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};