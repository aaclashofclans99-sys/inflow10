import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedBackground from '../components/AnimatedBackground';
import { Play, Users, Zap, Calendar, ChartBar as BarChart3, CircleCheck as CheckCircle, Star, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onScrollToVideo?: () => void;
}

export default function HomePage({ onNavigate, onScrollToVideo }: HomePageProps) {
  const { user } = useAuth();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Centralized Client Management Hub',
      description: 'Keep all your client information, interactions, and history in one organized place.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflows & Follow-ups',
      description: 'Set up smart automation to handle routine tasks and never miss important follow-ups.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Built-in Booking & Scheduling',
      description: 'Let clients book appointments directly with integrated calendar management.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Insights for Smarter Decisions',
      description: 'Get actionable insights from your business data to make informed strategic decisions.'
    }
  ];

  const stats = [
    { label: 'Customer Satisfaction', value: '100%' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Support', value: '24/7' },
  ];

  const testimonials = [
    {
      name: 'Nora Ali',
      company: 'Digital Marketing Expert',
      text: 'Inflow transformed how I used to manage clients. The automation features alone now saves me 20 hours every week.',
      rating: 5
    },
    {
      name: 'Simone Brooks',
      company: 'Real Estate Agent',
      text: 'Having all my client info in one place makes my day so much easier. Honestly, it's a game changer.',
      rating: 5
    },
    {
      name: 'Lillian Clarke',
      company: 'Nail Stylist',
      text: 'Finally, a platform that actually makes client management much more convenient. The ROI has been incredible.',
      rating: 5
    }
  ];

  const handleGetStarted = () => {
    if (user) {
      if (onNavigate) {
        onNavigate('pricing');
      } else {
        window.location.href = '/#pricing';
      }
    } else {
      window.location.href = '/login';
    }
  };

  const handleStartFreeTrial = () => {
    if (user) {
      // Redirect to Stripe checkout - replace with your actual Stripe checkout URL
      window.location.href = '/checkout';
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[12vh] bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-purple-100/30"></div>
          
          {/* Floating gradient shapes */}
          <div className="absolute top-[10vh] left-[5vw] w-[20vw] h-[20vw] bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70"></div>
          <div className="absolute top-[20vh] right-[5vw] w-[18vw] h-[18vw] bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-[15vh] left-[10vw] w-[16vw] h-[16vw] bg-gradient-to-r from-cyan-400/15 to-pink-400/15 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF4DA6%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-[3vw] text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black mb-[3vh] text-gray-900 leading-tight tracking-tight">
             Elevate Your Sales With The All-in-One CRM Platform
            </h1>       
            
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-600 mb-[5vh] leading-relaxed font-light">
              Automate client management and keep everything organized all in one place, 
              from onboarding to billing.
            </p>

            <div className="flex flex-col sm:flex-row gap-[2vw] justify-center items-center mb-[6vh]">
              <button 
                onClick={handleGetStarted}
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[5vw] py-[2vh] rounded-2xl font-bold text-[clamp(1rem,2.5vw,1.125rem)] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25"
              >
                Get Started
              </button>
              
              <button 
                onClick={onScrollToVideo}
                className="flex items-center space-x-[1vw] bg-white/80 backdrop-blur-sm text-gray-900 px-[4vw] py-[2vh] rounded-2xl font-semibold text-[clamp(1rem,2.5vw,1.125rem)] transition-all duration-300 border border-pink-200/50 hover-lift"
              >
                <Play className="w-[2.5vw] h-[2.5vw] min-w-[1.25rem] min-h-[1.25rem] max-w-[1.5rem] max-h-[1.5rem] text-pink-600 group-hover:text-white transition-colors" />
                <span>See Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[3vw] max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up bg-white/60 backdrop-blur-sm rounded-2xl p-[2vh] border border-white/50 shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-[clamp(1.5rem,4vw,2.5rem)] font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-[1vh]">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-[clamp(0.75rem,2vw,1rem)] font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[10vh] bg-white">
        <div className="container mx-auto px-[3vw]">
          <div className="text-center mb-[8vh]">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-black mb-[3vh] text-gray-900">
              All You Need to Scale
            </h2>
            <p className="text-[clamp(1rem,3vw,1.25rem)] text-gray-600 max-w-3xl mx-auto font-light">
              Powerful features designed to help you manage clients more efficiently and grow your business faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-[4vh] border border-gray-100 hover:border-pink-200 transition-all duration-300 hover-lift shadow-sm hover:shadow-lg group"
              >
                <div className="text-pink-500 mb-[3vh] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-[2vh]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[clamp(0.875rem,2.5vw,1rem)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="py-[10vh] bg-white">
        <div className="container mx-auto px-[3vw]">
          <div className="text-center mb-[6vh]">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-black mb-[3vh] text-gray-900">
              See Inflow in Action
            </h2>
            <p className="text-[clamp(1rem,3vw,1.25rem)] text-gray-600 font-light">
              Watch how easy it is to transform your business operations
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ydF-wofRmW8?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1"
                title="Inflow Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[10vh] bg-gray-50">
        <div className="container mx-auto px-[3vw]">
          <div className="text-center mb-[8vh]">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-black mb-[3vh] text-gray-900">
              Trusted With Thousands
            </h2>
            <p className="text-[clamp(1rem,3vw,1.25rem)] text-gray-600 font-light">
              See what our customers are saying about their Inflow experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-[4vh] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift group"
              >
                <div className="flex mb-[3vh]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-[2vw] h-[2vw] min-w-[1rem] min-h-[1rem] max-w-[1.25rem] max-h-[1.25rem] text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-[3vh] italic font-medium text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="text-gray-900 font-bold text-[clamp(0.875rem,2.5vw,1rem)]">{testimonial.name}</p>
                  <p className="text-pink-600 text-[clamp(0.75rem,2vw,0.875rem)] font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="logo-carousel-section w-full bg-white py-[6vh] overflow-hidden">
        <h2 className="text-[clamp(2rem,6vw,2.5rem)] font-black mb-[6vh] text-center text-gray-900">Integrate with your favorite tools</h2>
        <div className="marquee-wrapper overflow-hidden relative w-full">
          <div className="marquee-track flex items-center gap-[8vw] animate-marquee-scroll">
            {/* Full sequence (set A) */}
            <img src="/logo carousel integrations/facebook.png" alt="Facebook" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/google.png" alt="Google" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/linkedin.png" alt="LinkedIn" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/slack.png" alt="Slack" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/shippo.png" alt="Shippo" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/instagram.png" alt="Instagram" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/printful.png" alt="Printful" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/xero.png" alt="Xero" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/zapier.png" alt="Zapier" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/whatsapp.png" alt="WhatsApp" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/stripe.png" alt="Stripe" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/tiktok.png" alt="TikTok" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/shopify.png" alt="Shopify" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/quickbooks.png" alt="QuickBooks" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/clio.png" alt="Clio" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            
            {/* Duplicate sequence (set A copy) for seamless loop */}
            <img src="/logo carousel integrations/facebook.png" alt="Facebook" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/google.png" alt="Google" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/linkedin.png" alt="LinkedIn" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/slack.png" alt="Slack" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/shippo.png" alt="Shippo" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/instagram.png" alt="Instagram" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/printful.png" alt="Printful" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/xero.png" alt="Xero" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/zapier.png" alt="Zapier" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/whatsapp.png" alt="WhatsApp" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/stripe.png" alt="Stripe" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/tiktok.png" alt="TikTok" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/shopify.png" alt="Shopify" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/quickbooks.png" alt="QuickBooks" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
            <img src="/logo carousel integrations/clio.png" alt="Clio" className="h-[6vh] object-contain flex-shrink-0" style={{ minHeight: '3rem', maxHeight: '4rem' }} loading="eager" decoding="sync" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[10vh] bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-[5vh] right-[5vw] w-[15vw] h-[15vw] bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-[5vh] left-[5vw] w-[15vw] h-[15vw] bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-[3vw] text-center">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-black mb-[3vh] text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[clamp(1rem,3vw,1.25rem)] text-gray-600 mb-[4vh] font-light">
              Join thousands of successful businesses using Inflow to streamline their operations and accelerate growth.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-[6vw] py-[2.5vh] rounded-2xl font-bold text-[clamp(1rem,3vw,1.25rem)] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25"
            >
              Start Your Free Trial Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}