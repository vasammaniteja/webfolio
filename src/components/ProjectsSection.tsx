import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  Play, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sliders, 
  TrendingUp,
  Tag,
  Search,
  ArrowUpRight,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenLiveDemo: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenLiveDemo }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Machine Learning', 'Data Analytics & BI', 'Unsupervised Learning', 'Recommender Systems', 'Predictive Modeling'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory = filterCategory === 'All' || proj.category === filterCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Data Science &amp; ML Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            End-to-end applications demonstrating data wrangling, exploratory data analysis, algorithmic modeling, and interactive evaluation.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, tools, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/30 hover:border-blue-500/50 hover:shadow-blue-950/40 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-md"
            >
              {/* Card Image / Visualization Preview */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30 shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Pill Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
                  {project.highlightedMetrics.map((m, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold backdrop-blur-md border ${
                        m.positive 
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60' 
                          : 'bg-blue-950/80 text-blue-300 border-blue-700/60'
                      }`}
                    >
                      {m.label}: {m.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      "{project.description}"
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-slate-400 block mb-2">
                      Core Stack &amp; Libraries:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 text-blue-300 border border-blue-900/60 text-xs font-mono font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Problem Statement Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
                    <span className="font-bold text-slate-200 block font-mono text-[11px] uppercase tracking-wider text-blue-400">
                      Problem Context:
                    </span>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* Key Results Checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-300 block font-mono uppercase tracking-wider">
                      Key Results &amp; Discoveries:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.keyResults.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-700 bg-slate-950/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-sm group/btn"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => onOpenLiveDemo(project)}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Interactive Sandbox</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm bg-slate-900/40 rounded-3xl border border-slate-800">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
};
