import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col mb-12 sm:mb-16 ${alignClasses[align]} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-mono font-medium tracking-wider uppercase rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
