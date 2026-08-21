import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Users, BookCheck, ShieldCheck, Activity, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { achievementsData } from '../../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Beyond Academics"
          title="Hackathons, Leadership & Certifications"
          subtitle="Active engagement in tech sprints, collegiate innovation communities, skill development courses, and sports."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1: Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Trophy className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base">Hackathons</h3>
              </div>

              <div className="mt-4 space-y-4">
                {achievementsData.hackathons.map((hack, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-1">
                    <div className="text-xs font-bold text-slate-100">{hack.title}</div>
                    <div className="text-[11px] font-mono text-primary-400">{hack.organizer} • {hack.year}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {hack.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] font-mono text-amber-400/90 pt-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Gen AI & FSD Innovations
            </div>
          </motion.div>

          {/* Column 2: Technical & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base">Innovation & Labs</h3>
              </div>

              <div className="mt-4 space-y-3">
                {achievementsData.technical.map((tech, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-1">
                    <div className="text-xs font-bold text-slate-100">{tech.title}</div>
                    <div className="text-[11px] font-mono text-cyan-400">{tech.organization}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] font-mono text-cyan-400/90 pt-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Prototyping & Incubation
            </div>
          </motion.div>

          {/* Column 3: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <BookCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base">Certifications</h3>
              </div>

              <div className="mt-4 space-y-3">
                {achievementsData.courses.map((course, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">{course.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {course.badge}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400">{course.platform}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400/90 pt-2 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verified Coursework
            </div>
          </motion.div>

          {/* Column 4: Clubs & Sports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base">Extracurriculars</h3>
              </div>

              <div className="mt-4 space-y-4">
                {achievementsData.other.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-1">
                    <div className="text-xs font-bold text-slate-100">{item.title}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] font-mono text-purple-400/90 pt-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Teamwork & Agility
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
