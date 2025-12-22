import React, { useState, useRef } from 'react';
import { Reveal } from './Reveal';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactFormData } from '../types';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Configuration error: EmailJS keys missing.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create a superset of parameters to maximize compatibility with the template
      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        // Fallback/Common variants
        name: formData.user_name,
        email: formData.user_email,
        from_name: formData.user_name,
        from_email: formData.user_email,
        reply_to: formData.user_email,
        to_email: 'info@yellowstonegh.com', // Explicitly set recipient
        subject: formData.subject,
        message: formData.message,
        to_name: 'Yellowstone Advisors'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error Details:', error);
      if (typeof error === 'object' && error !== null && 'text' in error) {
        console.error('EmailJS Error Text:', (error as any).text);
      }
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
                      info@yellowstonegh.com
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
              <form ref={form} onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 shadow-2xl">
                {isSubmitted ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-obsidian/95 z-10 p-8 text-center animate-fade-in">
                    <div className="w-16 h-16 border-2 border-gold-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-gold-500 text-2xl">✓</span>
                    </div>
                    <h4 className="text-white font-serif text-2xl mb-2">Message Sent</h4>
                    <p className="text-gray-400 text-sm">Thank you for contacting Yellowstone Advisors. We will respond shortly.</p>
                  </div>
                ) : null}

                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-900/50 border border-red-500/50 text-red-200 text-sm rounded">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full bg-black/20 border-b border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
                      placeholder="John Mensah"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-xs uppercase tracking-widest text-gold-500 font-bold">Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      value={formData.user_email}
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