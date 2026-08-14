import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart, Terminal } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-md shadow-blue-600/30 overflow-hidden">
              <img
                src={STUDENT_PROFILE.avatar}
                alt={STUDENT_PROFILE.name}
                className="w-full h-full rounded-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight block">
                {STUDENT_PROFILE.name}
              </span>
              <span className="text-xs font-mono text-blue-400 block -mt-0.5">
                {STUDENT_PROFILE.title} &bull; {STUDENT_PROFILE.education.institution}
              </span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={STUDENT_PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={STUDENT_PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${STUDENT_PROFILE.socials.email}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-all ml-2 cursor-pointer shadow-sm"
              aria-label="Back to Top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} {STUDENT_PROFILE.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Python &bull; Machine Learning &bull; Power BI &bull; SQL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
