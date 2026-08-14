import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  FileText, 
  Sparkles, 
  Database, 
  Binary, 
  LineChart, 
  CheckCircle2, 
  Cpu,
  Code2,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { DataScienceCanvas } from './DataScienceCanvas';

interface HeroSectionProps {
  isDarkMode: boolean;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  isDarkMode, 
  onOpenResumeModal 
}) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background Interactive Data Science Network Canvas */}
      <DataScienceCanvas isDarkMode={isDarkMode} />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-1" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-1" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none -z-1" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-mono text-blue-300 shadow-lg shadow-blue-950/40 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-200 tracking-wide">
                Class of 2026 &bull; Open for Data Science &amp; ML Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 drop-shadow-sm">
                  {STUDENT_PROFILE.name}
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-blue-950/70 border border-blue-800/50 text-blue-300 font-mono text-sm sm:text-base font-semibold">
                  {STUDENT_PROFILE.title}
                </span>
                <span className="text-slate-500 font-mono hidden sm:inline">&bull;</span>
                <span className="text-slate-300 font-mono text-xs sm:text-sm font-medium">
                  {STUDENT_PROFILE.education.institution}
                </span>
              </div>
            </div>

            {/* Short Bio Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              "{STUDENT_PROFILE.shortBio}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Explore Projects &amp; Demos</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 text-sm font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View &amp; Download Resume</span>
              </button>

              <button
                onClick={scrollToContact}
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Social Links & Quick Telemetry */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
                <a
                  href={STUDENT_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={STUDENT_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${STUDENT_PROFILE.socials.email}`}
                  className="p-2.5 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 transition-all"
                  aria-label="Email Vasam Maniteja"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <strong>Python &bull; ML &bull; SQL</strong>
                </span>
              </div>
            </div>

            {/* Quick Metrics Ticker */}
            <div className="pt-2 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-center backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
                  5+
                </div>
                <div className="text-[11px] text-slate-400 font-medium">ML Projects</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-center backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-mono">
                  5
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Verified Certs</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800/80 text-center backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
                  2026
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Class of B.Tech</div>
              </div>
            </div>
          </div>

          {/* Right Hero: Modern CIRCLE IMAGE with Glowing Cyber Rings & Orbiting Tech Pills */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative flex items-center justify-center p-8">
              
              {/* Animated Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow scale-110 pointer-events-none" />
              <div className="absolute inset-2 rounded-full border border-dashed border-indigo-500/30 scale-105 pointer-events-none" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-400/20 blur-2xl -z-1" />

              {/* Orbiting Tech Badges */}
              {/* Badge 1: Top Right - Python */}
              <div className="absolute -top-1 right-2 sm:right-6 z-20 animate-float-slow">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/50 shadow-lg shadow-blue-950/80 text-xs font-mono text-blue-300 backdrop-blur-md">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-bold">Python / Pandas</span>
                </div>
              </div>

              {/* Badge 2: Bottom Left - Machine Learning */}
              <div className="absolute -bottom-2 left-0 sm:left-4 z-20 animate-float-reverse">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/50 shadow-lg shadow-indigo-950/80 text-xs font-mono text-indigo-300 backdrop-blur-md">
                  <Binary className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-bold">Scikit-learn &bull; ML</span>
                </div>
              </div>

              {/* Badge 3: Mid Right - Power BI / SQL */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-20 animate-float-slow hidden sm:block">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/50 shadow-lg shadow-cyan-950/80 text-xs font-mono text-cyan-300 backdrop-blur-md">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-bold">SQL &amp; Power BI</span>
                </div>
              </div>

              {/* Main Circular Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_0_60px_rgba(59,130,246,0.35)] group">
                
                {/* Inner Ring with Subtle Dark Border */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 relative">
                  <img
                    src={STUDENT_PROFILE.avatar}
                    alt={STUDENT_PROFILE.name}
                    className="w-full h-full object-cover object-center filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Shade on bottom of Circle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Name overlay badge inside circle bottom */}
                  <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-blue-500/30 text-[11px] font-mono text-blue-200 font-bold backdrop-blur-md">
                      {STUDENT_PROFILE.name}
                    </span>
                  </div>
                </div>

                {/* Pulsing Verified / Active Dot on Circle Edge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-slate-950 items-center justify-center text-[9px] text-white font-bold">
                      ✓
                    </span>
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
