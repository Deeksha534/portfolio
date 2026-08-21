import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Left Cyan Glow */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-slow" 
      />

      {/* Center Right Indigo/Violet Glow */}
      <div 
        className="absolute top-1/3 -right-40 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-slow" 
        style={{ animationDelay: '2s' }}
      />

      {/* Bottom Left Emerald Glow */}
      <div 
        className="absolute top-2/3 -left-20 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-emerald-500/8 blur-[100px] animate-pulse-slow" 
        style={{ animationDelay: '4s' }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
