import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { user, signIn, signInWithGoogle } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      window.location.href = '/';
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(formData.email, formData.password);
      window.location.href = '/';
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      console.error('Login error:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      // OAuth will redirect, so no need to manually redirect
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Google sign-in failed';
      console.error('Google sign-in error:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-center px-[4vw] relative min-h-screen">
        {/* Logo */}
        <div className="absolute top-[3vh] left-[4vw] z-10">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <div className="relative h-[5vh] w-[12vw] min-h-[2.5rem] min-w-[9rem] max-h-[3rem] max-w-[12rem]">
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
        </div>

        <div className="w-full max-w-[90%] mx-auto flex-shrink-0 py-[8vh]" style={{ maxWidth: 'min(28rem, 90vw)' }}>
          {/* Header */}
          <div className="mb-[2vh]">
            <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold text-gray-900 mb-[1vh]">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-[clamp(0.875rem,2.5vw,1rem)]">
              Enter your email and password to access your account.
            </p>
          </div>

          {error && (
            <div className="mb-[1.5vh] p-[1.5vh] bg-red-50 border border-red-200 rounded-lg text-red-600 text-[clamp(0.75rem,2vw,0.875rem)]">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-[1.5vh]">
            <div>
              <label className="block text-[clamp(0.75rem,2vw,0.875rem)] font-medium text-gray-700 mb-[0.5vh]">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-[1vw] top-1/2 transform -translate-y-1/2 text-gray-400" size="clamp(16, 2.5vw, 20)" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-[4vw] pr-[2vw] py-[1.5vh] bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-[clamp(0.75rem,2vw,0.875rem)]"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[clamp(0.75rem,2vw,0.875rem)] font-medium text-gray-700 mb-[0.5vh]">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-[1vw] top-1/2 transform -translate-y-1/2 text-gray-400" size="clamp(16, 2.5vw, 20)" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-[4vw] pr-[5vw] py-[1.5vh] bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-[clamp(0.75rem,2vw,0.875rem)]"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[1vw] top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size="clamp(16, 2.5vw, 20)" /> : <Eye size="clamp(16, 2.5vw, 20)" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-[2vw] h-[2vw] min-w-[1rem] min-h-[1rem] max-w-[1.25rem] max-h-[1.25rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-[1vw] text-[clamp(0.75rem,2vw,0.875rem)] text-gray-600">Remember Me</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-[1.5vh] rounded-lg font-semibold text-[clamp(0.75rem,2vw,0.875rem)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? 'Please wait...' : 'Log In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-[2vh]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-[clamp(0.75rem,2vw,0.875rem)]">
              <span className="px-[2vw] bg-white text-gray-500">Or Login With</span>
            </div>
          </div>

          {/* Google OAuth Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-[2vw] py-[1.5vh] bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md mb-[2vh] text-[clamp(0.75rem,2vw,0.875rem)]"
          >
            <svg className="w-[2vw] h-[2vw] min-w-[1rem] min-h-[1rem] max-w-[1.25rem] max-h-[1.25rem] mr-[1vw]" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>

          {/* Toggle Auth Mode */}
          <div className="text-center">
            <span className="text-gray-600 text-[clamp(0.75rem,2vw,0.875rem)]">Don't Have An Account? </span>
            <a
              href="/signup"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-[clamp(0.75rem,2vw,0.875rem)]"
            >
              Register Now.
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[2vh] left-[4vw] right-[4vw] flex flex-col justify-between text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-400 space-y-[0.5vh]">
          <span>Copyright © 2025 Inflow Enterprises LTD.</span>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open('/#privacy', '_blank');
              setTimeout(() => {
                const newWindow = window.open('/#privacy', '_blank');
                if (newWindow) {
                  newWindow.addEventListener('load', () => {
                    const event = new CustomEvent('navigate', { detail: 'privacy' });
                    newWindow.dispatchEvent(event);
                  });
                }
              }, 100);
            }}
            className="hover:text-gray-600 transition-colors cursor-pointer"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Right Section - Dashboard Preview */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden min-h-screen">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500"></div>
        
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/80 via-transparent to-pink-500/60"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/40 via-transparent to-purple-700/50"></div>
        
        {/* Animated Floating Shapes */}
        <div className="absolute top-[10vh] right-[10vw] w-[20vw] h-[20vw] bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-[15vh] left-[10vw] w-[18vw] h-[18vw] bg-gradient-to-r from-cyan-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[15vw] h-[15vw] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        
        <div className="flex flex-col justify-center items-center text-center px-[3vw] relative z-10 w-full py-[4vh]">
          {/* Header Text with proper spacing */}
          <div className="mb-[3vh] flex-shrink-0">
            <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-black text-white mb-[1vh]">
              Effortlessly manage your team and operations.
            </h2>
            <p className="text-[clamp(0.875rem,2.5vw,1.125rem)] text-blue-100 max-w-[80%] leading-relaxed">
              Log in to access your CRM dashboard and manage your team.
            </p>
          </div>
          
          {/* Dashboard Preview - Redesigned and properly positioned */}
          <div className="w-full max-w-[90%] bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-[1.5vw] flex-shrink min-h-0 overflow-hidden" style={{ maxWidth: 'min(32rem, 90vw)' }}>
            <div className="space-y-[1.5vh] h-full flex flex-col">
              {/* Header Stats */}
              <div className="grid grid-cols-3 gap-[1vw]">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-[1vh] rounded-lg">
                  <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] opacity-90">Total Sales</div>
                  <div className="text-[clamp(0.875rem,2vw,1rem)] font-bold">$189,374</div>
                  <div className="text-[clamp(0.5rem,1.2vw,0.625rem)] opacity-75">+12% from last month</div>
                </div>
                <div className="bg-white border border-gray-200 p-[1vh] rounded-lg">
                  <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-600">Chat Performance</div>
                  <div className="text-[clamp(0.875rem,2vw,1rem)] font-bold text-gray-900">00:01:30</div>
                  <div className="text-[clamp(0.5rem,1.2vw,0.625rem)] text-gray-500">Avg response time</div>
                </div>
                <div className="bg-white border border-gray-200 p-[1vh] rounded-lg">
                  <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-600">Sales Overview</div>
                  <div className="text-[clamp(0.75rem,1.8vw,0.875rem)] font-semibold text-gray-900">Weekly</div>
                  <div className="text-[clamp(0.5rem,1.2vw,0.625rem)] text-gray-500">Performance</div>
                </div>
              </div>

              {/* Revenue Chart with Line Chart */}
              <div className="bg-white border border-gray-200 p-[1.5vh] rounded-lg">
                <div className="flex justify-between items-center mb-[1vh]">
                  <div>
                    <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-600">Total Profit</div>
                    <div className="text-[clamp(1rem,2.5vw,1.125rem)] font-bold text-gray-900">$25,684</div>
                  </div>
                  <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-500">Last 30 days</div>
                </div>
                <div className="h-[6vh] bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg relative overflow-hidden">
                  {/* Line Chart SVG */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10,35 Q50,25 80,30 Q120,20 160,15 Q180,10 190,8"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Data points */}
                    <circle cx="10" cy="35" r="1.5" fill="#3B82F6" />
                    <circle cx="80" cy="30" r="1.5" fill="#6366F1" />
                    <circle cx="160" cy="15" r="1.5" fill="#8B5CF6" />
                    <circle cx="190" cy="8" r="1.5" fill="#A855F7" />
                  </svg>
                </div>
              </div>

              {/* Sales Categories */}
              <div className="grid grid-cols-2 gap-[1vw]">
                <div className="bg-white border border-gray-200 p-[1vh] rounded-lg">
                  <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-600 mb-[0.5vh]">Monthly</div>
                  <div className="text-[clamp(0.75rem,1.8vw,0.875rem)] font-semibold text-gray-900">Sales Categories</div>
                  <div className="mt-[0.5vh] space-y-[0.25vh]">
                    <div className="flex justify-between text-[clamp(0.625rem,1.5vw,0.75rem)]">
                      <span className="text-gray-600">Subscriptions</span>
                      <span className="font-medium">2,448</span>
                    </div>
                    <div className="flex justify-between text-[clamp(0.625rem,1.5vw,0.75rem)]">
                      <span className="text-gray-600">Features & AI</span>
                      <span className="font-medium">1,200</span>
                    </div>
                    <div className="flex justify-between text-[clamp(0.625rem,1.5vw,0.75rem)]">
                      <span className="text-gray-600">Accessories</span>
                      <span className="font-medium">600</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-[1vh] rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-[5vw] h-[5vw] min-w-[2.5rem] min-h-[2.5rem] max-w-[3rem] max-h-[3rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-[0.5vh]">
                      <span className="text-white font-bold text-[clamp(0.625rem,1.5vw,0.75rem)]">6,248</span>
                    </div>
                    <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] text-gray-600">Total Units</div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white border border-gray-200 p-[1vh] rounded-lg flex-shrink-0">
                <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] font-medium text-gray-900 mb-[1vh]">Product Transactions</div>
                <div className="space-y-[0.5vh]">
                  {[
                    { id: 'INV-001', product: 'Apple iPad Gen 10', date: '14 Feb, 2025', amount: '$649' },
                    { id: 'INV-002', product: 'Apple iPhone 15', date: '14 Feb, 2025', amount: '$1,199' }
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center py-[0.25vh]">
                      <div className="flex-1">
                        <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] font-medium text-gray-900 truncate">{transaction.id}</div>
                        <div className="text-[clamp(0.5rem,1.2vw,0.625rem)] text-gray-600 truncate">{transaction.product}</div>
                      </div>
                      <div className="text-right ml-[1vw]">
                        <div className="text-[clamp(0.5rem,1.2vw,0.625rem)] text-gray-500">{transaction.date}</div>
                        <div className="text-[clamp(0.625rem,1.5vw,0.75rem)] font-medium text-gray-900">{transaction.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}