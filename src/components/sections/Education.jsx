import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education & Qualifications"
          subtitle="A consistent track record of academic distinction from foundational schooling through engineering studies."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10 border-l-2 border-primary-500/30 ml-3 sm:ml-6 group"
            >
              {/* Glowing Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary-400 group-hover:bg-primary-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

              {/* Main Education Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl group-hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary-400" />
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                    </div>
                    <div className="text-sm font-semibold text-primary-300 mt-1">
                      {edu.field}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  {/* Score & Duration Badges */}
                  <div className="flex flex-col sm:items-end gap-2 shrink-0">
                    <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-500/30 text-emerald-300 font-mono font-bold text-sm flex items-center gap-1.5 shadow-sm">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>{edu.score}</span>
                      <span className="text-[10px] text-slate-400 font-normal font-sans">({edu.scoreLabel})</span>
                    </div>

                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  <ul className="space-y-2">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
