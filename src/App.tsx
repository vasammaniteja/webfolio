import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LiveDemoModal } from './components/LiveDemoModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { Certificate, Project } from './types';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return true; // Default to dark mode as requested
    }
    return true;
  });

  const [activeLiveDemoProject, setActiveLiveDemoProject] = useState<Project | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleTheme={toggleTheme} 
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home / Hero Section */}
        <HeroSection 
          isDarkMode={isDarkMode}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Technical Skills Section */}
        <SkillsSection />

        {/* 4. Projects Section */}
        <ProjectsSection 
          onOpenLiveDemo={(project) => setActiveLiveDemoProject(project)}
        />

        {/* 5. Dedicated Resume Section */}
        <ResumeSection 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 6. Certificates Section */}
        <CertificatesSection 
          onSelectCertificate={(cert) => setActiveCertificate(cert)}
        />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <LiveDemoModal 
        project={activeLiveDemoProject} 
        onClose={() => setActiveLiveDemoProject(null)} 
      />

      <CertificateModal 
        certificate={activeCertificate} 
        onClose={() => setActiveCertificate(null)} 
      />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
