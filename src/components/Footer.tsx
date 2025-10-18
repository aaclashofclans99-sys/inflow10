import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', key: 'home' },
    { name: 'Features', key: 'features' },
    { name: 'Pricing', key: 'pricing' },
    { name: 'Contact', key: 'contact' },
  ];

  const companyLinks = [
    { name: 'About Us', key: 'about' },
    { name: 'Privacy Policy', key: 'privacy' },
    { name: 'Terms of Service', key: 'terms' },
    { name: 'Security', key: 'security' },
  ];

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleContactSupport = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-[10vh]">
      <div className="container mx-auto px-[3vw] py-[6vh]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[4vw]">
          {/* Logo and Email */}
          <div className="space-y-[2vh]">
            <div className="flex items-center space-x-[1vw]">
              <div className="relative h-[4vh] w-[10vw] min-h-[2rem] min-w-[7.5rem] max-h-[2.5rem] max-w-[9rem]">
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
            <div className="space-y-[1vh] pl-[5vw]">
              <p className="text-gray-600 text-[clamp(0.75rem,2vw,0.875rem)]">Email:</p>
              <a 
                href="mailto:info@inflow.com" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-[clamp(0.75rem,2vw,0.875rem)] font-medium"
              >
                info@inflow.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-[2vh] text-[clamp(0.875rem,2.5vw,1rem)]">Quick Links</h3>
            <div className="space-y-[1vh]">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavigation(link.key)}
                  className="block text-gray-600 hover:text-primary-600 transition-colors text-[clamp(0.75rem,2vw,0.875rem)]"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-[2vh] text-[clamp(0.875rem,2.5vw,1rem)]">Company</h3>
            <div className="space-y-[1vh]">
              {companyLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavigation(link.key)}
                  className="block text-gray-600 hover:text-primary-600 transition-colors text-[clamp(0.75rem,2vw,0.875rem)]"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-[2vh] text-[clamp(0.875rem,2.5vw,1rem)]">Support</h3>
            <button
              onClick={handleContactSupport}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[2vw] py-[1vh] rounded-lg font-medium transition-all duration-300 text-[clamp(0.75rem,2vw,0.875rem)] hover-lift shadow-lg hover:shadow-pink-500/25"
            >
              Contact Support
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-[4vh] pt-[4vh] text-center">
          <p className="text-gray-600 text-[clamp(0.75rem,2vw,0.875rem)]">
            © {new Date().getFullYear()} Inflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}