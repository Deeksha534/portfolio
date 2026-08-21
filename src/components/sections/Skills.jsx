import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Brain, Globe, Database, BarChart3, Wrench, Layers, Check, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    'All': Layers,
    'Programming': Terminal,
    'AI / ML': Brain,
    'Web Development': Globe,
    'Databases': Database,
    'Data & Analytics': BarChart3,
    'Tools & Environments': Wrench,
  };

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Tools & Technologies I Work With"
          subtitle="A comprehensive toolkit spanning foundational programming, applied machine learning, modern web frameworks, and data platforms."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat] || Layers;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 focus:outline-none ${
                  isSelected
                    ? 'text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-white/[0.06]'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 border border-primary-400/50 rounded-xl -z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-primary-400' : 'text-slate-500'}`} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, groupIdx) => {
              const GroupIcon = categoryIcons[group.category] || Terminal;
              
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-primary-400/30 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle Corner Glow */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          <GroupIcon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-white text-base">{group.category}</h3>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {group.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Pills / Badges */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {group.skills.map((skill, skillIdx) => (
                        <div
                          key={skillIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-white/[0.06] hover:border-primary-400/40 hover:bg-slate-800/80 transition-all group/item"
                        >
                          <div className="w-5 h-5 flex items-center justify-center shrink-0">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-4 h-4 object-contain filter group-hover/item:brightness-110"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs font-semibold text-slate-200 truncate group-hover/item:text-primary-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
