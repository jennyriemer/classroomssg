import React, { useState } from 'react';
import { Phone, MapPin, ShieldCheck, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { CLASS_OFFERINGS } from './constants';
import ClassCard from './components/ClassCard';
import HeroSlider from './components/HeroSlider';
import ClassDetailModal from './components/ClassDetailModal';
import ComingSoonSection from './components/ComingSoonSection';
import { ClassOffering } from './types';

const HERO_IMAGES = ['/images/newheader.jpg'];

const App: React.FC = () => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState<ClassOffering | null>(null);
  const openDetail = (off: ClassOffering) => { setSelected(off); setDetailOpen(true); };
  const closeDetail = () => setDetailOpen(false);
  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* Header Section */}
      <header className="relative bg-brand-dark text-white py-24 md:py-32 flex items-center justify-center hero-parallax">
        <HeroSlider images={HERO_IMAGES} />
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">

          <h1 className="anim-fade-scale text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Classroom at Scottish Stained Glass
          </h1>
          <p className="anim-slide-up delay-300 text-lg md:text-2xl text-white leading-relaxed max-w-3xl mx-auto mb-10 font-semibold header-shadow-glow">
            Discover the ancient art of stained glass in our intimate, hands-on workshops. 
            Learn directly from experienced artisans in the heart of Colorado, continuing 
            a tradition of craftsmanship with small class sizes tailored for personal instruction.
          </p>
          
          <div className="anim-slide-up delay-600 flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
             <div className="reveal-up is-visible flex items-center gap-2 bg-white text-brand-dark px-6 py-2.5 rounded-full shadow-lg border-2 border-brand-green/20 transform hover:-translate-y-0.5 transition-transform duration-300">
                <MapPin size={20} className="text-brand-green" />
                <span className="font-semibold">Colorado Based</span>
             </div>
             <div className="flex items-center gap-2 bg-white text-brand-dark px-6 py-2.5 rounded-full shadow-lg border-2 border-brand-green/20 transform hover:-translate-y-0.5 transition-transform duration-300">
                <ShieldCheck size={20} className="text-brand-green" />
                <span className="font-semibold">Expert Artisans</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow bg-brand-light py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Start Your Stained Glass Journey</h2>
            <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you're crafting your very first suncatcher or mastering the flowing curves of Art Nouveau, there's a place for you in our studio. Pick your adventure below—from Saturday morning sessions to month-long deep dives into the craft. We'll provide all the glass, tools, and guidance you need. You just bring the creativity.
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLASS_OFFERINGS.map((offering) => (
              <ClassCard key={offering.id} offering={offering} onOpen={openDetail} />
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-white px-8 py-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-500 italic text-sm md:text-base">
                * Classes are filled on a first-come, first-served basis. Payment is required to secure your spot.
              </p>
            </div>
          </div>
        </div>
        {/* Coming Soon Section placed below current offerings with ample spacing */}
        <ComingSoonSection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-green text-white py-12 md:py-16 border-t border-white/20">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Left Column - Contact Information */}
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <h3 className="text-2xl font-bold font-serif border-b border-white/30 pb-2 inline-block w-full md:w-auto min-w-[200px]">Contact</h3>
              
              <div className="flex flex-col gap-4 text-base md:text-lg">
                <a 
                  href="tel:+18668465758" 
                  className="flex items-center gap-3 hover:text-brand-light transition-colors duration-300 group"
                >
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                    <Phone size={20} className="text-white" />
                  </div>
                  <span>1-866-846-5758</span>
                </a>
                
                <a 
                  href="mailto:contact@scottishstainedglass.com" 
                  className="flex items-center gap-3 hover:text-brand-light transition-colors duration-300 group"
                >
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                    <Mail size={20} className="text-white" />
                  </div>
                  <span>contact@scottishstainedglass.com</span>
                </a>
                
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=7075+S+Alton+Way+Centennial+CO+80112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-light transition-colors duration-300 group text-left"
                >
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors mt-0.5">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <span className="leading-relaxed">
                    7075 S Alton Way<br />
                    Centennial, Colorado 80112
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Social Media */}
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <h3 className="text-2xl font-bold font-serif border-b border-white/30 pb-2 inline-block w-full md:w-auto min-w-[200px]">Follow Us</h3>
              
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.facebook.com/scottishstainedglass" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-light hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={32} />
                </a>
                
                <a 
                  href="https://www.instagram.com/scottish.stained.glass/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-light hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={32} />
                </a>
                
                <a 
                  href="https://www.youtube.com/channel/UCTgAcc2VVnRz1m3Jh-D7wbQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-light hover:scale-110 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={32} />
                </a>
                
                <a 
                  href="https://www.tiktok.com/@scottishstainedglass" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-light hover:scale-110 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm font-light text-white/80">
            <p className="mb-2">&copy; 2024 Scottish Stained Glass. All rights reserved.</p>
            <a 
              href="https://scottishstainedglass.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-brand-light hover:underline transition-colors"
            >
              Visit our main website
            </a>
          </div>
        </div>
      </footer>
      <ClassDetailModal open={detailOpen} offering={selected} onClose={closeDetail} />
    </div>
  );
};

export default App;
