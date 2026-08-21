import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ExternalLink, Bot, ShoppingBag, Languages, CheckCircle2, ChevronRight, Layers, Cpu, Terminal, ArrowUpRight, X, ShieldAlert } from 'lucide-react';
import { Github, Linkedin, LeetCode } from '../common/Icons';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { projectsData } from '../../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projectsData.find(p => p.featured);
  const regularProjects = projectsData.filter(p => !p.featured);

  const projectIcons = {
    'ai-browser-automation-agent': Bot,
    'fit-bite-app': ShoppingBag,
    'language-detection-ml': Languages,
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Work"
          title="Engineered Projects & Systems"
          subtitle="Explore selected engineering projects featuring autonomous LLM agents, full-stack web platforms, and machine learning pipelines."
        />

        {/* 1. SPOTLIGHT HERO PROJECT: AI Browser Automation Agent */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 relative group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-primary-500/20 to-indigo-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500" />

            <div className="relative rounded-3xl bg-slate-900/90 border border-primary-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Top Banner Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-primary-500/15 text-primary-400 border border-primary-500/30 shadow-inner">
                    <Bot className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-wider bg-primary-500/10 px-2.5 py-0.5 rounded-full border border-primary-500/20">
                        ⭐ {featuredProject.badge}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Production Agent Architecture
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                      {featuredProject.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={Github}
                    href={featuredProject.github}
                    target="_blank"
                  >
                    View Code
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ChevronRight}
                    onClick={() => setSelectedProject(featuredProject)}
                  >
                    Deep Dive Specs
                  </Button>
                </div>
              </div>

              {/* Spotlight Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                
                {/* Left: Descriptions & Key Architecture */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-base text-slate-300 leading-relaxed text-pretty">
                    {featuredProject.description}
                  </p>

                  {/* Highlights Grid */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      Core Agent Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {featuredProject.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-white/[0.06] text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-primary-300 border border-primary-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Architecture Workflow Visualizer Box */}
                <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      Agent Execution Pipeline
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Autonomous Flow</span>
                  </div>

                  {/* Step Diagram */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/20 flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold">1</span>
                      <div>
                        <div className="text-white font-semibold">User Goal Ingestion</div>
                        <div className="text-[11px] text-slate-400">Natural language task parsing via LLM</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-primary-500/20 flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center text-[10px] font-bold">2</span>
                      <div>
                        <div className="text-white font-semibold">DOM Analysis & Tree Reduction</div>
                        <div className="text-[11px] text-slate-400">Semantic field extraction & Playwright hook</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/20 flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold">3</span>
                      <div>
                        <div className="text-white font-semibold">Dynamic Form & Action Execution</div>
                        <div className="text-[11px] text-slate-400">Multi-tab browsing with self-healing retry</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-500/20 flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">4</span>
                      <div>
                        <div className="text-white font-semibold">Verification & Audit Log</div>
                        <div className="text-[11px] text-slate-400">Human approval checkpoint & MySQL persist</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.08]">
                    <span>Self-Healing Engine: Active</span>
                    <span className="text-emerald-400">Zero-Failure Resiliency</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* 2. OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project, idx) => {
            const Icon = projectIcons[project.id] || Layers;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Corner Ambient Glow */}
                <div className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${project.accentColor} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all`} />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-slate-800/80 text-primary-400 border border-slate-700/60 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary-400 font-semibold uppercase tracking-wider">
                          {project.badge}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Highlights
                    </h4>
                    <div className="space-y-1.5">
                      {project.highlights.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900/80 text-slate-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between gap-3 pt-6 mt-6 border-t border-white/[0.08]">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Github}
                    href={project.github}
                    target="_blank"
                  >
                    Source Code
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    icon={ChevronRight}
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono text-primary-400 font-semibold uppercase tracking-wider">
                    {selectedProject.badge} • {selectedProject.status}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {selectedProject.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <h4 className="font-semibold text-white font-mono text-xs uppercase tracking-wider">
                  Detailed Overview
                </h4>
                <p>{selectedProject.longDescription || selectedProject.description}</p>

                <h4 className="font-semibold text-white font-mono text-xs uppercase tracking-wider pt-2">
                  Key Technical Features & Architecture
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-white font-mono text-xs uppercase tracking-wider pt-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-primary-300 border border-primary-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6 border-t border-white/10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Github}
                  href={selectedProject.github}
                  target="_blank"
                >
                  Open GitHub Repository
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
