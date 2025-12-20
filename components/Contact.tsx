import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Construct mailto link as fallback/feature
      const mailtoLink = `mailto:info@yellowstoneadvisors.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="py-24 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <Reveal>
              <h2 className="text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">Get in Touch</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-8">Begin the Conversation</h3>
              <p className="text-gray-400 mb-12 max-w-md">
                Reach out to our team in Accra to discuss how we can elevate your financial trajectory.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-gold-500 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-serif text-lg mb-1">Headquarters</h4>
                    <p className="text-gray-400 text-sm">
                      95 Osu Badu Crescent<br />
                      Airport West Residential, Accra<br />
                      Ghana, West Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-gold-500 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-serif text-lg mb-1">Email Us</h4>
                    <p className="text-gray-400 text-sm">
                      inquiry@yellowstoneadvisors.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-gold-500 mt-1 mr-4" size={24} />
                  <div>
                    <h4 className="text-white font-serif text-lg mb-1">Call Us</h4>
                    <p className="text-gray-400 text-sm">
                      +233 (0) 20 421 0780
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <Reveal delay={0.4}>
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 shadow-2xl">
                {isSubmitted ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-obsidian/95 z-10 p-8 text-center animate-fade-in">
                    <div className="w-16 h-16 border-2 border-gold-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-gold-500 text-2xl">✓</span>
                    </div>
                    <h4 className="text-white font-serif text-2xl mb-2">Message Sent</h4>
                    <p className="text-gray-400 text-sm">Thank you for contacting Yellowstone Advisors. We will respond shortly.</p>
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/20 border-b border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                      placeholder="John Mensah"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/20 border-b border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/20 border-b border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                  >
                    <option value="" className="bg-obsidian">Select an inquiry type</option>
                    <option value="Commercial Strategy" className="bg-obsidian">Commercial Strategy</option>
                    <option value="Transaction Support" className="bg-obsidian">Transaction Support</option>
                    <option value="Market Intelligence" className="bg-obsidian">Market Intelligence</option>
                    <option value="Other" className="bg-obsidian">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/20 border-b border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 text-obsidian font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};