import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  LineChart, 
  Cpu, 
  Server, 
  Wrench, 
  Terminal, 
  Coffee, 
  FileCode2, 
  Table, 
  Binary, 
  BarChart3, 
  LayoutDashboard, 
  PieChart, 
  TrendingUp, 
  CheckCircle2, 
  Boxes, 
  BookOpen, 
  GitBranch, 
  GitPullRequest, 
  FileSpreadsheet,
  Search,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<{ id: SkillCategory | 'All'; label: string; icon: React.ReactNode }> = [
    { id: 'All', label: 'All Skills', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'Programming', label: 'Programming', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'Data Analysis', label: 'Data Analysis', icon: <Table className="w-3.5 h-3.5" /> },
    { id: 'Data Visualization', label: 'Data Visualization', icon: <LineChart className="w-3.5 h-3.5" /> },
    { id: 'Machine Learning', label: 'Machine Learning', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'Databases', label: 'Databases', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'Tools', label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-cyan-400" />;
      case 'Table': return <Table className="w-5 h-5 text-blue-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-teal-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-orange-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-indigo-400" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5 text-amber-400" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-pink-400" />;
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-orange-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5 text-purple-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Data Science &amp; Engineering Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiency across programming languages, machine learning frameworks, analytical packages, and data visualization platforms.
          </p>
        </div>

        {/* Filter Pills and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Pill List */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, algorithm, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/20 hover:border-blue-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/40 transition-colors shadow-inner">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-950/80 text-blue-300 border border-blue-800/60">
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar & Tags */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-3">
                {/* Proficiency Meter */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-blue-400" />
                      Confidence Index
                    </span>
                    <span className="font-bold text-blue-300">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-950 border border-slate-800/60 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800/80 group-hover:border-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm bg-slate-900/40 rounded-3xl border border-slate-800">
            No skills found matching your search term "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
