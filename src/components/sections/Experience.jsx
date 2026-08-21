import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Work Experience"
          title="Industry Experience"
          subtitle="Hands-on software development experience building responsive, client-facing interfaces and optimizing web applications."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="relative pl-6 sm:pl-10 border-l-2 border-primary-500/30 ml-3 sm:ml-6 group"
            >
              {/* Glowing Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary-400 group-hover:bg-primary-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

              {/* Main Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl group-hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.08]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-400 font-semibold uppercase tracking-wider mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.type}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                      <Building className="w-4 h-4 text-slate-400" />
                      <span className="font-medium text-primary-300">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 font-medium inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 pl-1 sm:pl-0">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
