import React from 'react';
import { X, Download, Printer, Mail, Github, Linkedin, MapPin, GraduationCap, Code2, Award, Briefcase } from 'lucide-react';
import { STUDENT_PROFILE, SKILLS_DATA, PROJECTS_DATA, CERTIFICATES_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/90 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-slate-100">
                Curriculum Vitae / Resume Preview
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {STUDENT_PROFILE.name} &bull; {STUDENT_PROFILE.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Contact for PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {STUDENT_PROFILE.name}
              </h1>
              <p className="text-base font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                {STUDENT_PROFILE.title} &bull; Aspiring Machine Learning Engineer
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1 mt-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                Hyderabad, India &bull; Open to Relocation &amp; Remote Roles
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 text-center sm:text-right">
              <a href={`mailto:${STUDENT_PROFILE.socials.email}`} className="hover:text-blue-600 flex items-center gap-1.5 justify-center sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{STUDENT_PROFILE.socials.email}</span>
              </a>
              <a href={STUDENT_PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 justify-center sm:justify-end">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>linkedin.com/in/vasam-maniteja</span>
              </a>
              <a href={STUDENT_PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 justify-center sm:justify-end">
                <Github className="w-3.5 h-3.5 text-blue-500" />
                <span>github.com/vasammani</span>
              </a>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Career Objective &amp; Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {STUDENT_PROFILE.shortBio} {STUDENT_PROFILE.aboutParagraph} Dedicated to building reproducible data pipelines, optimizing predictive models, and delivering business value through data-driven decisions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {STUDENT_PROFILE.education.institution}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {STUDENT_PROFILE.education.degree} &mdash; {STUDENT_PROFILE.education.field}
                </p>
              </div>
              <div className="text-xs font-mono text-slate-500 sm:text-right mt-1 sm:mt-0">
                <span>{STUDENT_PROFILE.education.duration}</span> &bull; <span>{STUDENT_PROFILE.education.location}</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Key Coursework:</span> {STUDENT_PROFILE.education.coursework.join(', ')}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Technical Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Programming:</span> Python, SQL, Java, R
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Data Analysis:</span> Pandas, NumPy, Data Wrangling
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Data Visualization:</span> Matplotlib, Seaborn, Power BI, Tableau
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Machine Learning:</span> Scikit-learn, Regression, Classification, Clustering
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Databases:</span> MySQL, PostgreSQL, Relational Schema Design
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Developer Tools:</span> Jupyter Notebook, Git, GitHub, Microsoft Excel
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Featured Data Science &amp; ML Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">
                      {proj.title} <span className="font-normal text-xs text-blue-600 dark:text-blue-400 font-mono">[{proj.technologies.join(', ')}]</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{proj.category}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 mt-1 space-y-0.5">
                    {proj.keyResults.slice(0, 2).map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Key Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATES_DATA.map((c) => (
                <div key={c.id} className="flex items-start gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{c.name}</span>
                    <span className="text-slate-500 block text-[11px] font-mono">{c.issuer} &bull; {c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-800/50 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Last Updated: August 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
