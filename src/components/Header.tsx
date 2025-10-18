import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'Features', key: 'features' },
    { name: 'Pricing', key: 'pricing' },
    { name: 'FAQs', key: 'faqs' },
    { name: 'Contact', key: 'contact' },
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const handleAuthAction = () => {
    if (user) {
      // Call signOut and handle any errors
      signOut().catch(error => {
        console.error('Sign out failed:', error);
        // Force redirect even if sign out fails
        window.location.replace('/');
      });
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <>
      {/* Dynamic Island Style Header */}
      <header className="fixed top-[2vh] left-[2vw] right-[2vw] z-50">
        <nav className="bg-white rounded-full px-[4vw] py-[1.5vh] shadow-2xl border border-gray-100/50 backdrop-blur-sm w-full">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              <div className="relative h-[4vh] w-[8vw] min-h-[2rem] min-w-[6rem] max-h-[2.5rem] max-w-[8rem]">
                <div className="h-full w-full bg-gradient-to-r from-[#FF4DA6] to-[#7C3AED]"
                  style={{
                    WebkitMaskImage: "url('/dffdf.png')",
                    maskImage: "url('/dffdf.png')",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }} />
                <img src="/dffdf.png" alt="Inflow Logo" className="h-full w-auto opacity-0" />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-[3vw] flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className={`text-[clamp(0.75rem,1.8vw,0.875rem)] font-medium transition-colors duration-300 hover:text-pink-600 ${
                    currentPage === item.key ? 'text-pink-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-[1.5vw]">
              {user ? (
                <button
                  onClick={handleAuthAction}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[2.5vw] py-[1vh] rounded-full font-medium text-[clamp(0.75rem,1.8vw,0.875rem)] transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => window.location.href = '/login'}
                    className="text-gray-700 hover:text-pink-600 border border-gray-300 hover:border-pink-600 px-[2.5vw] py-[1vh] rounded-full font-medium text-[clamp(0.75rem,1.8vw,0.875rem)] transition-all duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => window.location.href = '/signup'}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[2.5vw] py-[1vh] rounded-full font-medium text-[clamp(0.75rem,1.8vw,0.875rem)] transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Mobile Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              <div className="relative h-[3vh] w-[12vw] min-h-[1.5rem] min-w-[5rem] max-h-[2rem] max-w-[6rem]">
                <div className="h-full w-full bg-gradient-to-r from-[#FF4DA6] to-[#7C3AED]"
                  style={{
                    WebkitMaskImage: "url('/dffdf.png')",
                    maskImage: "url('/dffdf.png')",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }} />
                <img src="/dffdf.png" alt="Inflow Logo" className="h-full w-auto opacity-0" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300 p-[0.5vh]"
            >
              {isMenuOpen ? <X size="clamp(18, 3vw, 24)" /> : <Menu size="clamp(18, 3vw, 24)" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-[1vh] bg-white rounded-2xl shadow-2xl border border-gray-100/50 backdrop-blur-sm p-[2vh]">
            <div className="flex flex-col space-y-[1.5vh]">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className={`text-left text-[clamp(0.875rem,3vw,1rem)] font-medium transition-colors duration-300 hover:text-pink-600 py-[1vh] ${
                    currentPage === item.key ? 'text-pink-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="border-t border-gray-200 pt-[1.5vh] mt-[1.5vh]">
                {user ? (
                  <button
                    onClick={handleAuthAction}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[2vw] py-[1vh] rounded-full font-medium text-[clamp(0.875rem,3vw,1rem)] transition-all duration-300 w-full shadow-lg hover:shadow-pink-500/25"
                  >
                    Sign Out
                  </button>
                ) : (
                  <div className="space-y-[1vh]">
                    <button
                      onClick={() => window.location.href = '/login'}
                      className="text-gray-700 hover:text-pink-600 border border-gray-300 hover:border-pink-600 px-[2vw] py-[1vh] rounded-full font-medium text-[clamp(0.875rem,3vw,1rem)] transition-all duration-300 w-full"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => window.location.href = '/signup'}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[2vw] py-[1vh] rounded-full font-medium text-[clamp(0.875rem,3vw,1rem)] transition-all duration-300 w-full shadow-lg hover:shadow-pink-500/25"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}