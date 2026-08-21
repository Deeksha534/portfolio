import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Award, Briefcase, GraduationCap, Code2, Mail, MapPin } from 'lucide-react';
import Button from './Button';
import { personalInfo, skillsData, experienceData, educationData, achievementsData } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header / Actions Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">Deeksha_Ganiga_Resume.pdf</span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  icon={Printer}
                  onClick={handlePrint}
                  className="hidden sm:inline-flex"
                >
                  Print
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  icon={Download}
                  onClick={handlePrint}
                >
                  Save / Download PDF
                </Button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">
              
              {/* Header */}
              <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-primary-400 font-medium text-sm sm:text-base mt-1">
                    {personalInfo.degree}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {personalInfo.college} • Expected Graduation: {personalInfo.graduationYear} • <span className="text-emerald-400 font-semibold">CGPA: {personalInfo.cgpa}</span>
                  </p>
                </div>
                <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-primary-400" />
                    {personalInfo.email}
                  </span>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                    linkedin.com/in/deeksha-ganiga
                  </a>
                  <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                    github.com/Deeksha534
                  </a>
                  <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                    leetcode.com/u/Deeksha_ganiga_23
                  </a>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 text-base font-semibold text-white uppercase tracking-wider mb-4">
                  <GraduationCap className="w-5 h-5 text-primary-400" />
                  Education
                </div>
                <div className="space-y-4">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                        <div className="font-semibold text-white">{edu.degree} — <span className="text-slate-300 font-normal">{edu.institution}</span></div>
                        <div className="text-primary-400 font-mono text-xs mt-1 sm:mt-0 font-medium">{edu.duration}</div>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-emerald-400 font-semibold">
                        <span>{edu.scoreLabel}: {edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-2 text-base font-semibold text-white uppercase tracking-wider mb-4">
                  <Briefcase className="w-5 h-5 text-primary-400" />
                  Experience
                </div>
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <div className="font-semibold text-white">{exp.role} <span className="text-slate-400 font-normal">| {exp.company}</span></div>
                      <div className="text-primary-400 font-mono text-xs">{exp.duration}</div>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Technical Skills */}
              <div>
                <div className="flex items-center gap-2 text-base font-semibold text-white uppercase tracking-wider mb-4">
                  <Code2 className="w-5 h-5 text-primary-400" />
                  Technical Skills
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skillsData.map((cat, idx) => (
                    <div key={idx} className="bg-slate-800/30 p-3 rounded-lg border border-slate-800/80">
                      <span className="font-semibold text-slate-200">{cat.category}: </span>
                      <span className="text-slate-400">{cat.skills.map(s => s.name).join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Activities */}
              <div>
                <div className="flex items-center gap-2 text-base font-semibold text-white uppercase tracking-wider mb-4">
                  <Award className="w-5 h-5 text-primary-400" />
                  Achievements & Activities
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <p>• <strong>Hackathons:</strong> FSD Hackathon 2025 (CMRIT), How Gen AI Can Help Indian State Police Hackathon (Trendy Tech)</p>
                  <p>• <strong>Technical Clubs:</strong> Active Member of Innovation Club at CMRIT, Visited Atal Incubation Centre, Startup & MVP Seminar</p>
                  <p>• <strong>Certifications:</strong> Learning Java (Udemy), Introduction to HTML (Infosys Springboard), Linux for Beginners (Infosys Springboard)</p>
                  <p>• <strong>Extracurricular:</strong> Member of Arohan Club, Active Badminton Player</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
