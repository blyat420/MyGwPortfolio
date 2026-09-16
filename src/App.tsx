import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ProjectShowcase } from './components/sections/ProjectShowcase';
import { ToolsUsedSection } from './components/sections/ToolsUsedSection';
import { AboutSection } from './components/sections/AboutSection';
import { TestimonialsCarousel } from './components/sections/TestimonialsCarousel';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ProjectDetailView } from './components/project/ProjectDetailView';
import { Lightbox } from './components/ui/Lightbox';
import { BackToTop } from './components/ui/BackToTop';
import { HomeBackground } from './components/ui/HomeBackground';
import { PROJECTS } from './data/projectsData';
import { ProjectMedia } from './types';

export default function App() {
  // State for current view: 'landing' or project ID ('p1', 'p2', 'p3', 'p4', 'p5')
  const [currentView, setCurrentView] = useState<'landing' | string>('landing');

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    mediaList: ProjectMedia[];
    initialIndex: number;
  }>({
    isOpen: false,
    mediaList: [],
    initialIndex: 0,
  });

  // Sync with URL hash for browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'].includes(hash)) {
        setCurrentView(hash);
      } else if (hash === 'jamalpos') {
        setCurrentView('p1');
      } else if (hash === 'reed') {
        setCurrentView('p2');
      } else if (hash === 'festika-8' || hash === 'festika') {
        setCurrentView('p3');
      } else if (hash === 'bengi') {
        setCurrentView('p4');
      } else if (hash === 'echo' || hash === 'echo-of-the-hollow') {
        setCurrentView('p5');
      } else if (hash === 'lerna') {
        setCurrentView('p6');
      } else if (hash === 'jourmalism' || hash === 'journ') {
        setCurrentView('p7');
      } else if (hash === 'dapur-ibu-hilmi' || hash === 'buhilmi') {
        setCurrentView('p8');
      } else if (hash === 'projects-section' || hash === 'projects') {
        setCurrentView('landing');
        setTimeout(() => {
          document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProject = (id: string) => {
    setCurrentView(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    setCurrentView('landing');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProjects = () => {
    setCurrentView('landing');
    window.location.hash = 'projects-section';
    setTimeout(() => {
      document.getElementById('projects-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 450);
  };

  const openLightbox = (mediaList: ProjectMedia[], initialIndex = 0) => {
    setLightboxState({
      isOpen: true,
      mediaList,
      initialIndex,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const selectedProject = PROJECTS.find((p) => p.id === currentView);

  return (
    <div className="min-h-screen home-bg-theme text-[#E4E7EC] font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative">
      {/* Custom home.png Dark Aesthetic Background */}
      <HomeBackground />

      {/* Universal Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigateHome={navigateHome}
        onSelectProject={navigateToProject}
        onContactClick={() => {
          if (currentView !== 'landing') {
            navigateHome();
            setTimeout(() => {
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          } else {
            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main View Router with Fluid Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentView === 'landing' || !selectedProject ? (
            <motion.div
              key="landing-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <Hero
                onExploreClick={() => {
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onOpenProject={navigateToProject}
                onContactClick={() => {
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* About ME Section */}
              <AboutSection />

              {/* MY PROJECTS. Section */}
              <ProjectShowcase
                projects={PROJECTS}
                onSelectProject={navigateToProject}
                onOpenLightbox={openLightbox}
              />

              {/* TOOLS yond i hath used Section */}
              <ToolsUsedSection />

              {/* WHAT DOES MY CLIENT SAY? Section */}
              <TestimonialsCarousel />

              {/* Get in TOUCH WITH ME Section */}
              <ContactSection />
            </motion.div>
          ) : (
            <motion.div
              key={`project-${selectedProject.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectDetailView
                project={selectedProject}
                allProjects={PROJECTS}
                onBack={navigateToProjects}
                onSelectProject={navigateToProject}
                onOpenLightbox={openLightbox}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Footer */}
      <Footer onSelectProject={navigateToProject} onNavigateHome={navigateHome} />

      {/* Global Image Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        mediaList={lightboxState.mediaList}
        initialIndex={lightboxState.initialIndex}
      />

      {/* Floating Back to Top Button (Bottom-Right) */}
      <BackToTop />
    </div>
  );
}
