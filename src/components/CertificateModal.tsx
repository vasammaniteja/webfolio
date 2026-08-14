import React from 'react';
import { X, Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Verified Credential</span>
              <h3 id="certificate-modal-title" className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight">
                {certificate.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Certificate Graphic Card */}
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white border border-slate-700 shadow-inner overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Award className="w-48 h-48" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                    Certificate of Completion
                  </div>
                  <div className="text-xs text-slate-300 font-mono mt-0.5">
                    Issued to: <strong className="text-white">Vasam Maniteja</strong>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="py-2">
                <h4 className="text-xl font-extrabold tracking-tight text-white font-sans">
                  {certificate.name}
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  Authorized by {certificate.issuer}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-700/80 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">ISSUED DATE</span>
                  <span className="text-slate-200 font-medium flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    {certificate.date}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">CREDENTIAL ID</span>
                  <span className="text-slate-200 font-medium mt-0.5 block">
                    {certificate.credentialId}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Competencies */}
          <div className="space-y-3">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {certificate.description}
            </p>

            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 font-mono uppercase mb-2">
                Key Competencies Validated:
              </div>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsCovered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 flex items-center justify-between">
          <a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Verify on {certificate.issuer.split('/')[0]}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
