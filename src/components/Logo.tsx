import { motion } from 'framer-motion';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: -8, scale: 0.96 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect rx="14" ry="14" width="64" height="64" fill="url(#logoGrad)" filter="url(#softShadow)" />
      <g transform="translate(12,12)">
        <path
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20c6.627 0 12.545-3.215 16.125-8.125l-6.25-3.125C27.34 31.48 23.927 33 20 33 12.82 33 7 27.18 7 20S12.82 7 20 7c3.927 0 7.34 1.52 9.875 4.25l6.25-3.125C32.545 3.215 26.627 0 20 0z"
          fill="#ffffff"
          fillOpacity="0.25"
        />
        <path
          d="M30.5 9l-2.3 4.2c2.8 2.2 4.6 5.6 4.6 9.4 0 3.8-1.8 7.2-4.6 9.4L30.5 36C35.1 32.6 38 26.7 38 22.6 38 17.3 35.1 13.4 30.5 9z"
          fill="#ffffff"
        />
        <path
          d="M10 22h8.5c1.4 0 2.5 1.1 2.5 2.5S19.9 27 18.5 27H10c-1.4 0-2.5-1.1-2.5-2.5S8.6 22 10 22z"
          fill="#06121d"
          fillOpacity="0.9"
        />
        <path
          d="M13 10h7c1.7 0 3 1.3 3 3s-1.3 3-3 3h-7c-1.7 0-3-1.3-3-3s1.3-3 3-3z"
          fill="#06121d"
          fillOpacity="0.9"
        />
      </g>
    </motion.svg>
  );
}


