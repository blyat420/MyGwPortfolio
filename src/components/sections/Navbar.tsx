import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LiveClock } from '../ui/LiveClock';
import { JamalismLogo } from '../ui/FigmaArtworks';

interface NavbarProps {
  currentView: 'landing' | string;
  onNavigateHome: () => void;
  onSelectProject: (id: string) => void;
  onContactClick: () => void;
}

export function Navbar({ currentView, onNavigateHome }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'landing') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isProjectView = currentView !== 'landing';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080A10]/80 backdrop-blur-xl border-b border-white/[0.05] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Side: Monogram Logo + Live Makassar Clock */}
        <div className="flex items-center gap-5 sm:gap-7">
          <button
            onClick={() => {
              if (isProjectView) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Jamalism Logo"
          >
            <JamalismLogo className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>

          {/* Live Clock next to logo as in Figma */}
          <div className="border-l border-white/15 pl-4 sm:pl-6">
            <LiveClock minimal />
          </div>
        </div>

        {/* Right Side: Figma Floating Pill Navigation Container */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 px-8 py-3 rounded-2xl bg-[#121622]/70 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-neutral-300 shadow-xl">
          <button
            onClick={() => {
              if (isProjectView) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition hover:text-white cursor-pointer ${
              !isProjectView ? 'text-white font-bold' : 'text-neutral-400'
            }`}
          >
            HOME
          </button>

          <button
            onClick={() => scrollToSection('about-section')}
            className="transition hover:text-white text-neutral-400 cursor-pointer"
          >
            ABOUT
          </button>

          <button
            onClick={() => scrollToSection('projects-section')}
            className={`transition hover:text-white cursor-pointer ${
              isProjectView ? 'text-white font-bold' : 'text-neutral-400'
            }`}
          >
            PROJECTS
          </button>

          <button
            onClick={() => scrollToSection('testimonials-section')}
            className="transition hover:text-white text-neutral-400 cursor-pointer"
          >
            TESTIMONIALS
          </button>

          <button
            onClick={() => scrollToSection('contact-section')}
            className="transition hover:text-white text-neutral-400 cursor-pointer"
          >
            CONTACTS
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0A0D15]/95 px-6 py-5 space-y-4 backdrop-blur-2xl text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-white"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about-section')}
            className="block w-full text-left py-2 text-neutral-400 hover:text-white"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection('projects-section')}
            className="block w-full text-left py-2 text-neutral-400 hover:text-white"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('testimonials-section')}
            className="block w-full text-left py-2 text-neutral-400 hover:text-white"
          >
            TESTIMONIALS
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="block w-full text-left py-2 text-neutral-400 hover:text-white"
          >
            CONTACTS
          </button>
        </div>
      )}
    </header>
  );
}
