import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = ''
}) {
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm'
  };

  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    primary: 'bg-primary-500/10 text-primary-300 border border-primary-500/25',
    accent: 'bg-accent-500/10 text-accent-300 border border-accent-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    gradient: 'bg-gradient-to-r from-primary-500/15 to-accent-500/15 text-slate-100 border border-primary-400/30'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-lg backdrop-blur-sm transition-all ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
