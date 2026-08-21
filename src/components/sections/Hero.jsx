import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Download, ExternalLink, Terminal, Brain, CheckCircle2, ChevronDown } from 'lucide-react';
import { Github, Linkedin, LeetCode } from '../common/Icons';
import Button from '../common/Button';
import { personalInfo } from '../../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Opportunity Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-inner shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Intro Greeting */}
            <div className="space-y-2">
              <span className="text-primary-400 font-mono text-sm sm:text-base tracking-wide font-medium">
                Hi, I'm {personalInfo.name}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Building <span className="text-gradient-cyan">intelligent solutions</span> with code.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl text-pretty leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto shadow-lg shadow-primary-500/25"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
              >
                Let's Connect
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={Download}
                onClick={onOpenResume}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 border-t border-white/[0.06] w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-primary-400/50 transition-all group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-primary-400 transition-colors" />
                  <span className="font-mono">GitHub</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-primary-400/50 transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-primary-400 transition-colors" />
                  <span className="font-mono">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-primary-400/50 transition-all group"
                >
                  <LeetCode className="w-4 h-4 text-slate-400 group-hover:text-primary-400 transition-colors" />
                  <span className="font-mono">LeetCode</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>9.42 CGPA @ CMRIT</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Code & Architecture Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

            <div className="relative rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-primary-400" />
                  <span>deeksha_engineer.py</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-2.5 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-purple-400">class</span> <span className="text-amber-300 font-semibold">SoftwareEngineer</span>:
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):
                  </div>
                  <div className="pl-4 space-y-1 text-slate-400">
                    <div>self.name = <span className="text-emerald-300">"{personalInfo.name}"</span></div>
                    <div>self.degree = <span className="text-emerald-300">"BE - Info Science"</span></div>
                    <div>self.college = <span className="text-emerald-300">"CMRIT, Bengaluru"</span></div>
                    <div>self.cgpa = <span className="text-cyan-300">9.42</span></div>
                    <div>self.status = <span className="text-emerald-300">"Ready to Build"</span></div>
                  </div>
                </div>

                <div className="pl-4 pt-1 space-y-1">
                  <div>
                    <span className="text-purple-400">def</span> <span className="text-blue-400">core_domains</span>(self):
                  </div>
                  <div className="pl-4 text-slate-400">
                    return [
                    <div className="pl-4 text-cyan-300">
                      "Full-Stack Web Engineering",<br />
                      "AI Browser Automation Agents",<br />
                      "Machine Learning & NLP",<br />
                      "Scalable Backend Architectures"
                    </div>
                    ]
                  </div>
                </div>

                <div className="pl-4 pt-1 space-y-1">
                  <div>
                    <span className="text-purple-400">def</span> <span className="text-blue-400">execute_mission</span>(self):
                  </div>
                  <div className="pl-4 text-slate-400">
                    return <span className="text-emerald-300">"Transforming complex challenges into clean, performant software."</span>
                  </div>
                </div>
              </div>

              {/* Live Metric Cards Footer inside Code Box */}
              <div className="p-4 bg-slate-950/90 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-white/5">
                  <div className="text-emerald-400 font-bold text-base">9.42</div>
                  <div className="text-[10px] text-slate-400">CGPA</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-white/5">
                  <div className="text-primary-400 font-bold text-base">3+</div>
                  <div className="text-[10px] text-slate-400">Projects</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-white/5">
                  <div className="text-accent-400 font-bold text-base">2027</div>
                  <div className="text-[10px] text-slate-400">Graduation</div>
                </div>
              </div>

            </div>

            {/* Subtle Floating Feature Tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-primary-500/30 p-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-primary-300 hidden sm:flex"
            >
              <Brain className="w-4 h-4 text-primary-400" />
              <span>AI Agent & ML Focused</span>
            </motion.div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-primary-400 transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="font-mono text-[11px] tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-primary-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
