import React from 'react';

export function Github({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Linkedin({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCode({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .2 2.362 5.874 5.874 0 0 0 1.076 1.895l4.898 5.207a1.382 1.382 0 0 0 2.012-.022 1.382 1.382 0 0 0 .022-1.954L5.34 15.35a3.1 3.1 0 0 1-.572-.988 3.176 3.176 0 0 1-.106-1.288 3.03 3.03 0 0 1 .69-1.213L9.1 7.82l4.89-5.187a1.38 1.38 0 0 0-.507-2.633zM16.48 7.35a1.38 1.38 0 0 0-.98.404l-5.69 5.69a1.38 1.38 0 0 0 0 1.95 1.38 1.38 0 0 0 1.95 0l5.69-5.69a1.38 1.38 0 0 0-.97-2.354zm-3.69 8.2a1.38 1.38 0 0 0-1.38 1.38v.01a1.38 1.38 0 0 0 1.38 1.38h7.83a1.38 1.38 0 0 0 1.38-1.38v-.01a1.38 1.38 0 0 0-1.38-1.38h-7.83z" />
    </svg>
  );
}
