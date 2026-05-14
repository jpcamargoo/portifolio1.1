'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { 
      href: '/', 
      label: t('nav.home'), 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      href: '/sobre', 
      label: t('nav.about'), 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      href: '/projetos', 
      label: t('nav.projects'), 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/80 dark:bg-black/60 border-b border-slate-900/10 dark:border-purple-500/20 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)] dark:shadow-lg dark:shadow-purple-500/10' 
          : 'backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-slate-900/[0.06] dark:border-white/10'
      }`}
    >
      {/* Elementos geométricos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Linhas horizontais tech */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-900/20 dark:via-purple-500/30 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Hexágonos decorativos */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon 
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-slate-700 dark:text-teal-500"
            />
          </svg>
        </div>
        
        {/* Círculo com pulse */}
        <motion.div 
          className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-900/40 dark:bg-cyan-500/40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <nav className="container mx-auto px-6 py-3 flex items-center justify-between relative">
        <Link href="/">
          <motion.div
            className="flex items-center gap-3 relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo tech com camadas */}
            <div className="relative w-12 h-12">
              {/* Anel externo com rotação */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(20, 184, 166, 0.3))',
                  padding: '2px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-lg bg-white/80 dark:bg-black/60 backdrop-blur-sm" />
              </motion.div>
              
              {/* Conteúdo do logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-sm font-bold text-slate-900 dark:bg-gradient-to-br dark:from-purple-400 dark:via-teal-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
                    JP
                  </span>
                  <motion.div 
                    className="w-4 h-[2px] mx-auto bg-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500 mt-0.5"
                    animate={{ scaleX: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-900/0 dark:from-purple-500/0 dark:via-teal-500/0 dark:to-cyan-500/0 group-hover:from-slate-900/10 dark:group-hover:from-purple-500/20 dark:group-hover:via-teal-500/20 dark:group-hover:to-cyan-500/20 rounded-lg blur-xl transition-all duration-500 -z-10" />
            </div>
            
            <div>
              <p className="text-xl font-bold text-slate-900 dark:bg-gradient-to-r dark:from-purple-400 dark:via-teal-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent leading-tight tracking-tight">
                João Paulo Pereira
              </p>
              <p className="text-[10px] text-slate-500 dark:text-gray-400 font-mono tracking-wider">
                FULL STACK DEV
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive ? 'page' : undefined}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-lg overflow-hidden group ${
                      isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient on active */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-slate-900/[0.06] dark:bg-gradient-to-r dark:from-purple-500/20 dark:via-teal-500/20 dark:to-cyan-500/20 rounded-lg border border-slate-900/15 dark:border-purple-500/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-slate-900/0 dark:bg-gradient-to-r dark:from-purple-500/0 dark:via-teal-500/0 dark:to-cyan-500/0 group-hover:bg-slate-900/[0.04] dark:group-hover:from-purple-500/10 dark:group-hover:via-teal-500/10 dark:group-hover:to-cyan-500/10 rounded-lg transition-all duration-300" />
                    
                    <span className="relative flex items-center gap-2 text-sm font-medium">
                      {item.icon}
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions container */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          
          {/* GitHub Link */}
          <motion.a
            href="https://github.com/Joao-pdpc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900/[0.04] dark:bg-white/5 hover:bg-slate-900/[0.08] dark:hover:bg-white/10 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-slate-900/[0.04] dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/[0.08] dark:hover:bg-white/10 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-haspopup="menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 dark:bg-black/95 border-b border-slate-900/10 dark:border-purple-500/20 shadow-2xl shadow-slate-900/[0.08] dark:shadow-purple-500/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Elementos decorativos no menu mobile */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-40 h-40 bg-slate-900/[0.03] dark:bg-purple-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-900/[0.03] dark:bg-teal-500/5 rounded-full blur-3xl" />
            </div>

            <ul className="container mx-auto px-6 py-6 space-y-2 relative">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all ${
                          isActive
                            ? 'bg-slate-900/[0.06] border-slate-900/20 text-slate-900 dark:bg-gradient-to-r dark:from-purple-500/20 dark:via-teal-500/20 dark:to-cyan-500/20 dark:border-purple-500/40 dark:text-white'
                            : 'bg-slate-900/[0.03] border-slate-900/10 text-slate-700 hover:bg-slate-900/[0.06] hover:border-slate-900/20 hover:text-slate-900 dark:bg-white/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:border-purple-500/30 dark:hover:text-white'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.icon}
                        <span className="text-lg font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full bg-slate-900 dark:bg-gradient-to-r dark:from-purple-500 dark:to-teal-500"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
              
              {/* Divider */}
              <li className="list-none" aria-hidden="true">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-slate-900/20 dark:via-purple-500/30 to-transparent my-4"
                />
              </li>

              {/* Theme Toggle, Language e GitHub no mobile */}
              <li>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                  <a
                    href="https://github.com/Joao-pdpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-slate-900/[0.04] border border-slate-900/10 text-slate-700 hover:bg-slate-900/[0.08] hover:border-slate-900/20 hover:text-slate-900 dark:bg-white/5 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:border-purple-500/30 dark:hover:text-white transition-all flex items-center gap-2"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
