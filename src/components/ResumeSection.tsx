import React from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  Award, 
  Code2, 
  ExternalLink,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Resume &amp; Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Complete academic credentials, project portfolio, and technical proficiencies formatted for hiring teams.
          </p>
        </div>

        {/* Resume Hero Banner Card */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-blue-500/30 relative overflow-hidden backdrop-blur-xl">
          
          {/* Subtle Background Icon Glow */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <FileText className="w-80 h-80 text-blue-400" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-7 max-w-3xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-mono font-bold">
                  Class of 2026 &bull; Fresher
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Updated: {STUDENT_PROFILE.resume.lastUpdated}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                {STUDENT_PROFILE.name} &mdash; Data Science CV
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {STUDENT_PROFILE.resume.summary}
              </p>
            </div>

            {/* Quick Highlights Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                <div className="text-[11px] font-mono text-blue-400 font-bold uppercase">Degree Track</div>
                <div className="text-sm font-bold text-white mt-1">B.Tech in Data Science</div>
                <div className="text-xs text-slate-400 mt-0.5">MREC&amp;MS (2022 - 2026)</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase">Core Competencies</div>
                <div className="text-sm font-bold text-white mt-1">Python, SQL, ML, Power BI</div>
                <div className="text-xs text-slate-400 mt-0.5">Pandas, Scikit-learn, EDA</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase">Target Positions</div>
                <div className="text-sm font-bold text-white mt-1">Data Scientist / Analyst</div>
                <div className="text-xs text-slate-400 mt-0.5">Full-Time / Internship</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-lg shadow-blue-600/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Eye className="w-4 h-4 text-white" />
                <span>View Formatted Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download PDF / Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
