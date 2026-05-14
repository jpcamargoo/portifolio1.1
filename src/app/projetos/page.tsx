'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { projetos } from '@/utils/projetos';
import { useLanguage } from '@/contexts/LanguageContext';

type Categoria = 'backend' | 'data' | 'fullstack' | 'automacao';
type Filtro = 'all' | Categoria;

export default function ProjetosPage() {
  const { t, language } = useLanguage();
  const [expandedAnalysis, setExpandedAnalysis] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filtro>('all');
  
  const categoriaConfig = {
    backend: {
      label: t('projects.category.backend'),
      badge: 'bg-purple-500/20 text-purple-700 dark:text-purple-400',
      title: 'text-slate-900 dark:text-purple-500',
      stack: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
      dot: 'bg-purple-500',
      card: 'from-white via-white to-slate-50 dark:from-purple-500/5 dark:via-transparent border-slate-900/[0.06] dark:border-purple-500/20',
      link: 'text-slate-900 hover:text-slate-700 dark:text-purple-500 dark:hover:text-purple-400',
      accent: 'via-purple-500/40',
      halo: 'bg-purple-500',
    },
    data: {
      label: t('projects.category.data'),
      badge: 'bg-teal-500/20 text-teal-700 dark:text-teal-400',
      title: 'text-slate-900 dark:text-teal-500',
      stack: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20',
      dot: 'bg-teal-500',
      card: 'from-white via-white to-slate-50 dark:from-teal-500/5 dark:via-transparent border-slate-900/[0.06] dark:border-teal-500/20',
      link: 'text-slate-900 hover:text-slate-700 dark:text-teal-500 dark:hover:text-teal-400',
      accent: 'via-teal-500/40',
      halo: 'bg-teal-500',
    },
    fullstack: {
      label: t('projects.category.fullstack'),
      badge: 'bg-blue-500/20 text-blue-700 dark:text-blue-400',
      title: 'text-slate-900 dark:text-blue-500',
      stack: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
      dot: 'bg-blue-500',
      card: 'from-white via-white to-slate-50 dark:from-blue-500/5 dark:via-transparent border-slate-900/[0.06] dark:border-blue-500/20',
      link: 'text-slate-900 hover:text-slate-700 dark:text-blue-500 dark:hover:text-blue-400',
      accent: 'via-blue-500/40',
      halo: 'bg-blue-500',
    },
    automacao: {
      label: t('projects.category.automation'),
      badge: 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-400',
      title: 'text-slate-900 dark:text-cyan-500',
      stack: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
      dot: 'bg-cyan-500',
      card: 'from-white via-white to-slate-50 dark:from-cyan-500/5 dark:via-transparent border-slate-900/[0.06] dark:border-cyan-500/20',
      link: 'text-slate-900 hover:text-slate-700 dark:text-cyan-500 dark:hover:text-cyan-400',
      accent: 'via-cyan-500/40',
      halo: 'bg-cyan-500',
    },
  };

  const filteredProjetos = useMemo(
    () => (filter === 'all' ? projetos : projetos.filter((p) => p.categoria === filter)),
    [filter]
  );

  const filterChips: { value: Filtro; label: string }[] = [
    { value: 'all', label: t('projects.filter.all') },
    { value: 'backend', label: t('projects.category.backend') },
    { value: 'data', label: t('projects.category.data') },
    { value: 'fullstack', label: t('projects.category.fullstack') },
    { value: 'automacao', label: t('projects.category.automation') },
  ];
  
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500 dark:bg-clip-text dark:text-transparent tracking-tight">
            {t('projects.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filtro de categoria */}
        <motion.div
          className="mb-12 flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          role="tablist"
        >
          {filterChips.map((chip) => {
            const active = filter === chip.value;
            return (
              <button
                key={chip.value}
                onClick={() => setFilter(chip.value)}
                role="tab"
                aria-selected={active}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border transition-colors ${
                  active
                    ? 'border-slate-900 bg-slate-900 text-white dark:border-purple-500/60 dark:bg-purple-500/10 dark:text-purple-300'
                    : 'border-slate-900/15 dark:border-white/10 glass text-slate-600 dark:text-gray-300 hover:border-slate-900 dark:hover:border-purple-500/40 hover:text-slate-900 dark:hover:text-purple-400'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </motion.div>

        <div className="space-y-12">
          {filteredProjetos.map((projeto, index) => {
            const config = categoriaConfig[projeto.categoria];
            
            return (
              <motion.article
                key={projeto.id}
                className="glass backdrop-blur-sm rounded-2xl p-8 md:p-10 bg-gradient-to-br from-white via-white to-slate-50 dark:bg-none hover:bg-white/[0.06] dark:hover:bg-white/[0.06] transition-all duration-500 border border-slate-900/[0.06] dark:border-white/10 hover:border-slate-900/[0.12] dark:hover:border-white/20 relative overflow-hidden group shadow-[-8px_8px_24px_-8px_rgba(15,23,42,0.12),0_24px_48px_-16px_rgba(15,23,42,0.18),inset_1px_0_0_0_rgba(255,255,255,0.8)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[-12px_12px_32px_-8px_rgba(15,23,42,0.18),0_32px_64px_-16px_rgba(15,23,42,0.25),inset_1px_0_0_0_rgba(255,255,255,1)] dark:hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.005,
                }}
              >
                {/* Acento superior — linha fina da cor da categoria */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${config.accent} to-transparent`}
                  aria-hidden="true"
                />

                {/* Halo ambiente — luz difusa por trás do card */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-700 ${config.halo}`}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="mb-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 ${config.badge} rounded-full text-xs font-medium uppercase tracking-wider`}>
                      {config.label}
                    </span>
                  </div>
                  
                  <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-3 ${config.title}`}>
                    {projeto.titulo[language]}
                  </h2>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {projeto.descricao[language]}
                  </p>
                </div>

                {/* Contexto */}
                <div className="mb-8 border-l-4 border-slate-900/15 dark:border-gray-600/30 pl-6 relative z-10">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    {t('projects.context')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    {projeto.contexto[language]}
                  </p>
                </div>

                {/* Stack */}
                <div className="mb-8 relative z-10">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-3">
                    {t('projects.stack')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projeto.stack.map((tech) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 ${config.stack} rounded-md text-sm border cursor-default`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Processo */}
                <div className="mb-8 relative z-10">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-4">
                    {t('projects.process')}
                  </h3>
                  <div className="space-y-3">
                    {projeto.processo.map((etapa, i) => (
                      <motion.div 
                        key={i} 
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${config.dot} flex-shrink-0`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {etapa[language]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impacto */}
                <div className={`p-5 bg-gradient-to-br ${config.card} dark:to-transparent rounded-xl border relative z-10 group/impact`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/impact:opacity-100 transition-opacity shimmer" />
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider mb-2 relative z-10">
                    {t('projects.impact')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                    {projeto.impacto[language]}
                  </p>
                </div>

                {/* Links */}
                {(projeto.link || projeto.repositorio) && (
                  <div className="mt-6 pt-6 border-t border-slate-900/10 dark:border-white/10 relative z-10">
                    <div className="flex flex-wrap gap-4">
                      {projeto.link && (
                        <a
                          href={projeto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${config.link} transition-colors font-medium hover:underline`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {t('projects.viewProject')}
                        </a>
                      )}
                      {projeto.repositorio && (
                        <a
                          href={projeto.repositorio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${config.link} transition-colors font-medium hover:underline`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {t('projects.viewCode')}
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Análise Técnica — Accordion */}
                {(projeto.dominio || projeto.decisoesTecnicas || projeto.ipo) && (
                  <div className="mt-6 relative z-10">
                    <button
                      onClick={() => setExpandedAnalysis(expandedAnalysis === projeto.id ? null : projeto.id)}
                      className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border border-slate-900/10 dark:border-white/10 bg-slate-900/[0.03] dark:bg-white/5 hover:bg-slate-900/[0.06] dark:hover:bg-white/10 transition-all text-left group/btn`}
                    >
                      <span className={`text-sm font-semibold uppercase tracking-wider ${config.title}`}>
                        {t('projects.analysis')}
                      </span>
                      <motion.svg
                        className={`w-4 h-4 ${config.title}`}
                        animate={{ rotate: expandedAnalysis === projeto.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {expandedAnalysis === projeto.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 space-y-6 px-1">

                            {/* Análise de Domínio */}
                            {projeto.dominio && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.domain')}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {projeto.dominio[language]}
                                </p>
                              </div>
                            )}

                            {/* Modelo de Domínio */}
                            {projeto.modeloDominio && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.domainModel')}
                                </h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-mono bg-slate-900/[0.04] dark:bg-white/5 rounded-lg p-3">
                                  {projeto.modeloDominio[language]}
                                </p>
                              </div>
                            )}

                            {/* Requisitos */}
                            {projeto.requisitos && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                  {t('projects.analysis.requirements')}
                                </h4>
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">{t('projects.analysis.functional')}</p>
                                    <div className="space-y-1.5">
                                      {projeto.requisitos.funcionais.map((rf, i) => (
                                        <div key={i} className="flex gap-2">
                                          <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                          <p className="text-sm text-gray-700 dark:text-gray-300">{rf[language]}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">{t('projects.analysis.nonFunctional')}</p>
                                    <div className="space-y-1.5">
                                      {projeto.requisitos.naoFuncionais.map((rnf, i) => (
                                        <div key={i} className="flex gap-2">
                                          <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                          <p className="text-sm text-gray-700 dark:text-gray-300">{rnf[language]}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Regras de Negócio */}
                            {projeto.regrasNegocio && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.businessRules')}
                                </h4>
                                <div className="space-y-1.5">
                                  {projeto.regrasNegocio.map((rn, i) => (
                                    <div key={i} className="flex gap-2">
                                      <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                      <p className="text-sm text-gray-700 dark:text-gray-300">{rn[language]}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Casos de Uso */}
                            {projeto.casosDeUso && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.useCases')}
                                </h4>
                                <div className="space-y-1.5">
                                  {projeto.casosDeUso.map((uc, i) => (
                                    <div key={i} className="flex gap-2">
                                      <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                      <p className="text-sm text-gray-700 dark:text-gray-300">{uc[language]}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Decisões Técnicas */}
                            {projeto.decisoesTecnicas && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.decisions')}
                                </h4>
                                <div className="space-y-1.5">
                                  {projeto.decisoesTecnicas.map((d, i) => (
                                    <div key={i} className="flex gap-2">
                                      <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                      <p className="text-sm text-gray-700 dark:text-gray-300">{d[language]}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Fluxo IPO */}
                            {projeto.ipo && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                                  {t('projects.analysis.ipo')}
                                </h4>
                                <div className="space-y-2">
                                  {[
                                    { label: 'Input', value: projeto.ipo.input[language], color: 'text-blue-400' },
                                    { label: 'Process', value: projeto.ipo.process[language], color: 'text-purple-400' },
                                    { label: 'Output', value: projeto.ipo.output[language], color: 'text-teal-400' },
                                  ].map(({ label, value, color }) => (
                                    <div key={label} className="flex gap-3 items-start">
                                      <span className={`text-xs font-mono font-bold ${color} w-14 flex-shrink-0 pt-0.5`}>{label}</span>
                                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{value}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Análise de Dados */}
                            {projeto.dadosAnalise && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.data')}
                                </h4>
                                <div className="space-y-1.5">
                                  {projeto.dadosAnalise.map((d, i) => (
                                    <div key={i} className="flex gap-2">
                                      <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                      <p className="text-sm text-gray-700 dark:text-gray-300">{d[language]}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Métricas */}
                            {projeto.metricas && (
                              <div className="border-l-2 border-slate-900/15 dark:border-gray-600/30 pl-5">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                  {t('projects.analysis.metrics')}
                                </h4>
                                <div className="space-y-1.5">
                                  {projeto.metricas.map((m, i) => (
                                    <div key={i} className="flex gap-2">
                                      <span className={`text-xs mt-0.5 ${config.title} flex-shrink-0`}>→</span>
                                      <p className="text-sm text-gray-700 dark:text-gray-300">{m[language]}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
