import React from 'react';
import { 
  GraduationCap, 
  Target, 
  HeartHandshake, 
  Brain, 
  TrendingUp, 
  Code2, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  BookOpen,
  Compass,
  Calendar,
  MapPin,
  Award
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const strengthIcons: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-5 h-5 text-blue-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-amber-400" />,
    Zap: <Zap className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow points */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Profile &amp; Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Vasam Maniteja
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging theoretical statistics, computational machine learning, and actionable business intelligence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Professional Story & Approach (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Story Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/20 backdrop-blur-md space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span>Professional Summary</span>
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 text-xs font-mono font-semibold">
                  Fresher / Ready to Join
                </span>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {STUDENT_PROFILE.aboutParagraph}
              </p>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Technical Foundation
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Extensive end-to-end hands-on practice in Exploratory Data Analysis (EDA), regression, classification, unsupervised clustering, SQL schema query optimization, and Power BI dashboards.
                </p>
              </div>
            </div>

            {/* Higher Education Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/20 backdrop-blur-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white">
                      {STUDENT_PROFILE.education.institution}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {STUDENT_PROFILE.education.degree} &bull; <span className="text-blue-300 font-semibold">{STUDENT_PROFILE.education.field}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {STUDENT_PROFILE.education.duration}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {STUDENT_PROFILE.education.location}
                  </span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Key Academic Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {STUDENT_PROFILE.education.coursework.map((course, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-200 font-medium border border-slate-700/70 hover:border-blue-500/50 hover:bg-slate-800 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Career Goal & Core Interests (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Career Goal High-Impact Gradient Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 border border-blue-500/30 text-white shadow-xl shadow-blue-950/40 relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono uppercase font-bold backdrop-blur-md">
                <Target className="w-3.5 h-3.5 text-cyan-300" />
                <span>Primary Career Goal</span>
              </div>
              
              <h3 className="text-2xl font-black tracking-tight leading-snug">
                {STUDENT_PROFILE.careerGoal}
              </h3>
              
              <p className="text-sm text-blue-100 leading-relaxed font-normal">
                Committed to delivering impactful predictive machine learning pipelines, scalable data transformations, and executive dashboards that accelerate data-informed decisions.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-300" />
                <span>Available for Summer / Immediate Entry</span>
              </div>
            </div>

            {/* Core Focus & Interests Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/20 backdrop-blur-md space-y-4 flex-1">
              <h3 className="text-base font-bold font-mono uppercase tracking-wider text-white flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span>Areas of Passion &amp; Focus</span>
              </h3>

              <div className="space-y-2.5 pt-1">
                {STUDENT_PROFILE.interests.map((interest, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                        {interest}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                      Core Track
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Core Strengths Strip */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="text-2xl font-black text-white">
                Core Strengths &amp; Soft Skills
              </h3>
              <p className="text-sm text-slate-400">
                Analytical rigor and communication agility for cross-functional engineering environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STUDENT_PROFILE.strengths.map((strength, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/40 shadow-lg shadow-black/20 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 w-fit mb-4 group-hover:scale-110 group-hover:border-blue-500/50 transition-all shadow-inner">
                    {strengthIcons[strength.icon] || <Brain className="w-5 h-5 text-blue-400" />}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
