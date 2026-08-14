import React from 'react';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Eye 
} from 'lucide-react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Certificate } from '../types';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Glow accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Industry &amp; Academic Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified qualifications across Python, Machine Learning, Statistical Inference, SQL, and Business Intelligence.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 p-7 shadow-xl shadow-black/20 hover:border-blue-500/50 hover:-translate-y-1 transition-all flex flex-col justify-between group backdrop-blur-md"
            >
              <div className="space-y-4">
                {/* Header with Icon and Verified badge */}
                <div className="flex items-start justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-blue-400 group-hover:border-blue-500/50 group-hover:scale-105 transition-all shadow-inner">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Name & Issuer */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-1.5">
                    Issued by <strong className="text-slate-200">{cert.issuer}</strong>
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Completion: {cert.date}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skillsCovered.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800/80"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800/80">
                      +{cert.skillsCovered.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/90 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-800 hover:border-blue-500 text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Credential &amp; Verification</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
