import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';
import { useNewsletter } from '../hooks/useNewsletter';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { subscribe, loading, error, success, reset } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await subscribe(email);
    if (!error) {
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="font-serif text-3xl lg:text-4xl font-light mb-6 tracking-wide">
                still.
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                Quiet confidence in every thread. Timeless pieces for conscious living.
              </p>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="font-light text-lg mb-6 text-white">
                Stay Updated
              </h3>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                Subscribe for new collections and exclusive updates.
              </p>
              
              {success && (
                <div className="mb-4 p-3 bg-green-900/20 border border-green-800 text-green-400 text-sm">
                  Thank you for subscribing! You'll receive updates about our latest collections.
                </div>
              )}
              
              {error && (
                <div className="mb-4 p-3 bg-red-900/20 border border-red-800 text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={reset}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300 font-light"
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-300 font-light whitespace-nowrap"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Links */}
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light">
                Contact
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm font-light">
              © 2025 Still
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;