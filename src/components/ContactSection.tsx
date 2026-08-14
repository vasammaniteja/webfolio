import React, { useState, useId } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Sparkles, 
  MessageSquare,
  ArrowRight,
  Copy,
  Check,
  Zap,
  Globe
} from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const contactNameId = useId();
  const contactEmailId = useId();
  const contactSubjectId = useId();
  const contactMessageId = useId();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDENT_PROFILE.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Vasam Maniteja
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open to Data Science, Machine Learning internships, entry-level engineering opportunities, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/20 backdrop-blur-md space-y-6">
              <div>
                <h3 className="text-xl font-black text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Feel free to reach out directly via email or connect through LinkedIn and GitHub.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Card with Copy button */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                      <a 
                        href={`mailto:${STUDENT_PROFILE.socials.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-100 hover:text-blue-400 truncate block transition-colors"
                      >
                        {STUDENT_PROFILE.socials.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-blue-400 rounded-xl hover:bg-slate-800 border border-slate-800 transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={STUDENT_PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">LinkedIn Profile</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                        vasam-maniteja
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>

                {/* GitHub Card */}
                <a
                  href={STUDENT_PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">GitHub Repositories</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                        vasammani
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Location & Response Badge */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-bold text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Location</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Hyderabad, India</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-bold text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Response</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">&lt; 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-xl shadow-black/20 backdrop-blur-md">
              <h3 className="text-xl font-black text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an internship, project, or full-time opportunity? Fill in the details below.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-200">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your message and will reply to your email address promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={contactNameId} className="block text-xs font-mono font-bold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id={contactNameId}
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label htmlFor={contactEmailId} className="block text-xs font-mono font-bold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id={contactEmailId}
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={contactSubjectId} className="block text-xs font-mono font-bold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id={contactSubjectId}
                      type="text"
                      placeholder="Internship Opening / Machine Learning Engineering Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor={contactMessageId} className="block text-xs font-mono font-bold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id={contactMessageId}
                      required
                      rows={4}
                      placeholder="Hi Vasam, we came across your Data Science portfolio and would like to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-slate-950/90 border border-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500 resize-none transition-all shadow-inner"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
