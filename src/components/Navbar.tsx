import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  Code2, 
  User, 
  Layers, 
  FolderGit2, 
  Award, 
  Mail, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  onToggleTheme,
  onOpenResumeModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Sparkles },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Layers },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Resume', href: '#resume', id: 'resume', icon: FileText },
    { name: 'Certificates', href: '#certificates', id: 'certificates', icon: Award },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-slate-800/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Monogram & glowing ring */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 group-hover:scale-105 transition-transform shadow-md shadow-blue-500/20 overflow-hidden">
              <img 
                src={STUDENT_PROFILE.avatar} 
                alt={STUDENT_PROFILE.name} 
                className="w-full h-full rounded-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
          </div>
          <div>
            <span className="font-extrabold text-white text-sm sm:text-base tracking-tight block group-hover:text-blue-400 transition-colors">
              {STUDENT_PROFILE.name}
            </span>
            <span className="text-[11px] font-mono text-blue-400/90 block -mt-0.5">
              Data Science Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links Pill Container */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/90 backdrop-blur-md shadow-inner text-xs font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-sm shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme Controls */}
        <div className="flex items-center gap-2.5">
          {/* Quick Resume View Button */}
          <button
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 text-xs font-bold transition-all shadow-sm cursor-pointer hover:border-blue-400"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV / Resume</span>
          </button>

          {/* Theme Toggle (supports toggle with dark mode default) */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 space-y-1.5 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <link.icon className={`w-4 h-4 ${activeSection === link.id ? 'text-white' : 'text-blue-400'}`} />
              <span>{link.name}</span>
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
