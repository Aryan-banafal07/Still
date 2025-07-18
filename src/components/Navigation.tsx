import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

interface NavigationProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navigation = ({ onLoginClick, isLoggedIn, onLogout }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="font-serif text-2xl lg:text-3xl font-light text-black tracking-wide">
            still.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('shop')}
              className="text-sm lg:text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection('lookbook')}
              className="text-sm lg:text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
            >
              Lookbook
            </button>
            
            {/* User Menu */}
            <div className="relative">
              {isLoggedIn ? (
                <div>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    <User size={20} />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-100 py-2">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        Profile
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                        Orders
                      </button>
                      <button 
                        onClick={onLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="text-sm lg:text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('shop')}
                className="text-left text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
              >
                Shop
              </button>
              <button 
                onClick={() => scrollToSection('lookbook')}
                className="text-left text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
              >
                Lookbook
              </button>
              {isLoggedIn ? (
                <>
                  <button className="text-left text-base font-light text-gray-700 hover:text-black transition-colors duration-300">
                    Profile
                  </button>
                  <button 
                    onClick={onLogout}
                    className="text-left text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={onLoginClick}
                  className="text-left text-base font-light text-gray-700 hover:text-black transition-colors duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;