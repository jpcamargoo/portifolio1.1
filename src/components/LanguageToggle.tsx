'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="relative p-2 rounded-lg bg-slate-900/[0.04] dark:bg-white/5 hover:bg-slate-900/[0.08] dark:hover:bg-white/10 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={language === 'pt' ? 'Trocar idioma para inglês' : 'Switch language to portuguese'}
      aria-pressed={language === 'en'}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-slate-900/0 dark:bg-gradient-to-r dark:from-purple-500/0 dark:via-teal-500/0 dark:to-cyan-500/0 group-hover:bg-slate-900/[0.04] dark:group-hover:from-purple-500/10 dark:group-hover:via-teal-500/10 dark:group-hover:to-cyan-500/10 transition-all duration-300" />
      
      <div className="relative flex items-center gap-1.5">
        {/* Globe icon */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        {/* Language text */}
        <span className="text-xs font-bold tracking-wide">
          {language.toUpperCase()}
        </span>
      </div>
    </motion.button>
  );
}
