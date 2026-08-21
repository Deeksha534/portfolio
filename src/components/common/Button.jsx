import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  target,
  rel,
  download,
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50 disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-primary-500 via-cyan-500 to-accent-500 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:brightness-110 border border-primary-400/30",
    secondary: "bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700/80 hover:border-slate-600 shadow-md backdrop-blur-md",
    outline: "bg-transparent text-slate-200 hover:text-white border border-slate-700 hover:border-primary-400/60 hover:bg-primary-500/10",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    glow: "bg-primary-500/10 hover:bg-primary-500/20 text-primary-300 border border-primary-500/30 hover:border-primary-400/60 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]",
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={classes}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        download={download}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  );
}
