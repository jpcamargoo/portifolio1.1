'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SobrePage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl relative">
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold mb-8 text-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500 dark:bg-clip-text dark:text-transparent dark:animate-gradient tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
        </motion.h1>

        {/* TOC inline */}
        <motion.nav
          aria-label={t('about.toc.label')}
          className="mb-12 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {[
            { href: '#pillars', label: t('about.toc.pillars') },
            { href: '#experience', label: t('about.toc.experience') },
            { href: '#philosophy', label: t('about.toc.philosophy') },
            { href: '#stack', label: t('about.toc.stack') },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border border-slate-900/15 dark:border-white/10 glass text-slate-600 dark:text-gray-300 hover:border-slate-900 dark:hover:border-purple-500/60 hover:text-slate-900 dark:hover:text-purple-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          className="space-y-8 text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Introdução */}
          <section className="space-y-6 relative">
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-900 via-slate-700 to-transparent dark:from-purple-500 dark:via-teal-500 dark:to-transparent opacity-30 dark:opacity-30" />
            
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {t('about.chapter.p1')}
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('about.chapter.p2')}
            </p>

            <div className="pt-4 space-y-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic border-l-4 border-slate-900/50 dark:border-purple-500/50 pl-6">
              {t('about.chapter.p3').split('\\n\\n').map((paragraph, i) => (
                <p key={i}>{paragraph.split('\\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}</p>
              ))}
            </div>
          </section>

          {/* Como Trabalho */}
          <section id="pillars" className="space-y-8 mt-24 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6 border-b-2 border-slate-900/20 dark:border-purple-500/30 pb-2 tracking-tight">
              {t('about.pillars.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="border-l-2 border-purple-500/30 pl-6 hover:border-purple-500/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-purple-400 mb-3 dark:group-hover:text-purple-300 transition-colors">{t('about.pillar.docs.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {t('about.pillar.docs.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="border-l-2 border-teal-500/30 pl-6 hover:border-teal-500/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-teal-400 mb-3 dark:group-hover:text-teal-300 transition-colors">{t('about.pillar.modular.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {t('about.pillar.modular.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="border-l-2 border-blue-500/30 pl-6 hover:border-blue-500/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-blue-400 mb-3 dark:group-hover:text-blue-300 transition-colors">{t('about.pillar.backend.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {t('about.pillar.backend.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="border-l-2 border-cyan-500/30 pl-6 hover:border-cyan-500/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-cyan-400 mb-3 dark:group-hover:text-cyan-300 transition-colors">{t('about.pillar.automation.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {t('about.pillar.automation.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="border-l-2 border-purple-500/30 pl-6 hover:border-purple-500/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-purple-400 mb-3 dark:group-hover:text-purple-300 transition-colors">{t('about.pillar.systems.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {t('about.pillar.systems.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="border-l-2 border-teal-500/30 pl-6 hover:border-teal-500/60 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-teal-400 mb-3 dark:group-hover:text-teal-300 transition-colors">{t('about.pillar.dataeng.title')}</h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {t('about.pillar.dataeng.desc').split('\\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experiência */}
          <section id="experience" className="space-y-8 mt-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-slate-900 dark:from-purple-500 to-transparent" />
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-purple-500 tracking-tight">
                {t('about.experience.title')}
              </h2>
            </div>

            <div className="border-l-2 border-slate-900/20 dark:border-purple-500/30 pl-6 py-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  {t('about.experience.position')}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-500">{t('about.experience.period')}</span>
              </div>
              <p className="text-sm text-amber-800 dark:text-purple-400 mb-4 italic">{t('about.experience.subtitle')}</p>
              
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-purple-500 mt-1">→</span>
                  <span>{t('about.experience.achievement1')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-purple-500 mt-1">→</span>
                  <span>{t('about.experience.achievement2')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-purple-500 mt-1">→</span>
                  <span>{t('about.experience.achievement3')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-purple-500 mt-1">→</span>
                  <span>{t('about.experience.achievement4')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-purple-500 mt-1">→</span>
                  <span>{t('about.experience.achievement5')}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-800 dark:text-purple-500 mt-1">→</span>
                  <span>{t('about.experience.achievement6')}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Filosofia */}
          <section id="philosophy" className="space-y-8 mt-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-slate-900 dark:from-purple-500 to-transparent" />
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-purple-500 tracking-tight">
                {t('about.philosophy.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="p-6 bg-gradient-to-br from-white via-white to-slate-50 dark:from-purple-500/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-purple-500/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-purple-500/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-purple-400 mb-3 dark:group-hover:text-purple-300 transition-colors">{t('about.philosophy.fear.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t('about.philosophy.fear.text')}
                </p>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-white via-white to-slate-50 dark:from-teal-500/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-teal-500/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-teal-500/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-teal-400 mb-3 dark:group-hover:text-teal-300 transition-colors">{t('about.philosophy.dream.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t('about.philosophy.dream.text')}
                </p>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-white via-white to-slate-50 dark:from-blue-500/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-blue-500/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-blue-500/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-blue-400 mb-3 dark:group-hover:text-blue-300 transition-colors">{t('about.philosophy.joy.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t('about.philosophy.joy.text')}
                </p>
              </motion.div>

              <motion.div 
                className="p-6 bg-gradient-to-br from-white via-white to-slate-50 dark:from-cyan-500/5 dark:via-transparent dark:to-transparent rounded-xl border border-slate-900/[0.08] dark:border-cyan-500/20 glass shadow-[-6px_6px_18px_-8px_rgba(15,23,42,0.10),0_18px_36px_-16px_rgba(15,23,42,0.14)] dark:shadow-none hover:border-slate-900/20 dark:hover:border-cyan-500/40 transition-all group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-cyan-400 mb-3 dark:group-hover:text-cyan-300 transition-colors">{t('about.philosophy.fight.title')}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t('about.philosophy.fight.text')}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stack & Ferramentas */}
          <section id="stack" className="space-y-8 mt-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-amber-800 dark:from-cyan-500 to-transparent" />
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-cyan-500 tracking-tight">
                {t('about.stack.title')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                'Node.js',
                'TypeScript',
                'JavaScript',
                'PostgreSQL',
                'MySQL',
                'Express',
                'Fastify',
                'Next.js',
                'React',
                'Git',
                'Docker',
                'Postman',
              ].map((tech) => (
                <motion.div
                  key={tech}
                  className="p-3 bg-white dark:bg-white/5 rounded-lg text-center text-slate-700 dark:text-gray-300 border border-slate-900/[0.08] dark:border-transparent shadow-[-4px_4px_12px_-6px_rgba(15,23,42,0.10)] dark:shadow-none hover:border-slate-900/20 hover:bg-slate-50 dark:hover:bg-purple-500/20 dark:hover:border-transparent transition-all dark:cosmic-glow text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Assinatura */}
          <div className="mt-24 p-8 bg-gradient-to-r from-white via-white to-slate-50 dark:from-purple-500/10 dark:via-teal-500/10 dark:to-blue-500/10 rounded-2xl border border-slate-900/[0.08] dark:border-purple-500/20 shadow-[-8px_8px_24px_-8px_rgba(15,23,42,0.12),0_24px_48px_-16px_rgba(15,23,42,0.16)] dark:shadow-none">
            <p className="text-lg font-light text-center leading-relaxed italic text-slate-700 dark:text-gray-300">
              {t('about.quote.line1')}<br />
              {t('about.quote.line2')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
