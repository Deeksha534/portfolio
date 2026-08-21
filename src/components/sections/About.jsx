import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code2, Brain, Cpu, Globe, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

export default function About() {
  const iconMap = {
    Code2: Code2,
    Brain: Brain,
    Cpu: Cpu,
    Globe: Globe,
    Sparkles: Sparkles
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Bridging Engineering Rigor & Applied Intelligence"
          subtitle="A passionate Information Science Engineering student focused on building robust software, intelligent agents, and scalable web solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Natural Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-400" />
                <span>Information Science & Engineering @ CMRIT</span>
              </h3>

              {personalInfo.about.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed text-pretty">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-primary-500/10 text-primary-300 border border-primary-500/20">
                  📍 Bengaluru, Karnataka
                </span>
                <span className="px-3 py-1 rounded-lg bg-accent-500/10 text-accent-300 border border-accent-500/20">
                  🎓 B.E. ISE (2023 - 2027)
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  ⭐ 9.42 CGPA
                </span>
              </div>
            </div>

            {/* Core Focus / Interests Cards */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold pl-1">
                Core Domains of Interest
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.coreInterests.map((interest, idx) => {
                  const Icon = iconMap[interest.icon] || Code2;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-xl glass-panel glass-panel-hover"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h5 className="font-semibold text-white text-sm">{interest.title}</h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal text-pretty pl-1">
                        {interest.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Stats & Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel text-center relative overflow-hidden group hover:border-primary-400/40 transition-all"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-full blur-xl group-hover:bg-primary-500/10 transition-all" />
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* Quick Summary Highlights Card */}
            <div className="glass-panel p-6 rounded-2xl space-y-4 border border-white/10">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Academic & Engineering Excellence</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Consistently ranked top-tier with <strong>9.42 CGPA</strong> at CMR Institute of Technology.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hands-on experience in <strong>LLM browser automation</strong> and <strong>NLP language classification</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Completed industry web development internship at <strong>Intern PE</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Active participant in collegiate hackathons (FSD CMRIT 2025, Gen AI Police Tech).</span>
                </li>
              </ul>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
