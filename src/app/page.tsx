'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="container mx-auto text-center max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:via-teal-500 dark:to-blue-500 dark:bg-clip-text dark:text-transparent dark:animate-gradient tracking-tight">
            João Paulo Pereira
          </h1>
          
          <motion.div
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="mb-4">{t('home.title')}</p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
              {t('home.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto mb-12 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-slate-900 dark:border-purple-500 pl-6 text-left">
              {t('home.intro.line1')}<br />
              {t('home.intro.line2')}
            </p>
            
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-left">
              {t('home.intro.description')}
            </p>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              href="/projetos"
              className="px-8 py-3 bg-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500 text-white rounded-full font-medium hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.4)] dark:hover:shadow-lg hover:scale-105 transition-all dark:cosmic-glow relative overflow-hidden group"
            >
              <span className="relative z-10">{t('home.cta.projects')}</span>
              <div className="absolute inset-0 bg-slate-800 dark:bg-gradient-to-r dark:from-purple-600 dark:to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link
              href="/sobre"
              className="px-8 py-3 border-2 border-slate-900 dark:border-purple-500 text-slate-900 dark:text-purple-500 rounded-full font-medium hover:bg-slate-900 dark:hover:bg-purple-500 hover:text-white transition-all relative overflow-hidden group glass"
            >
              <span className="relative z-10">{t('home.cta.about')}</span>
              <div className="absolute inset-0 bg-slate-900 dark:bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer" />
            </Link>
          </motion.div>

          {/* Seção de Contato */}
          <motion.div
            className="mt-20 pt-16 border-t border-slate-900/10 dark:border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500 dark:bg-clip-text dark:text-transparent tracking-tight">
              {t('home.contact.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('home.contact.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:joaopaulo.pdpc@gmail.com"
                className="px-8 py-3 bg-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500 text-white rounded-full font-medium hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.4)] dark:hover:shadow-lg hover:scale-105 transition-all dark:cosmic-glow relative overflow-hidden group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>joaopaulo.pdpc@gmail.com</span>
              </motion.a>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Joao-pdpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-slate-900/30 dark:border-purple-500/50 rounded-full hover:bg-slate-900/5 dark:hover:bg-purple-500/10 hover:border-slate-900 dark:hover:border-purple-500 transition-all glass"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 text-slate-900 dark:text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/joao-pdpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-slate-900/30 dark:border-purple-500/50 rounded-full hover:bg-slate-900/5 dark:hover:bg-purple-500/10 hover:border-slate-900 dark:hover:border-purple-500 transition-all glass"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-slate-900 dark:text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Elementos decorativos cósmicos aprimorados */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-slate-900/[0.04] dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-amber-900/[0.04] dark:bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

      </div>
    </div>
  );
}
