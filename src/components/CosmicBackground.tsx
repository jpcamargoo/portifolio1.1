'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

export default function CosmicBackground() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: number; delay: number; duration: number }>>([]);
  const [particles, setParticles] = useState<Array<{ top: string; left: string; delay: number; duration: number; driftX: number }>>([]);

  const shouldSimplify = isMobile || !!prefersReducedMotion;

  useEffect(() => {
    setMounted(true);
    
    // Detectar dispositivos móveis
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const mobileViewport = window.innerWidth < 768;
    const lowPowerMode = mobileViewport || !!prefersReducedMotion;

    // Reduzir elementos animados em dispositivos móveis/reduced motion
    const starCount = lowPowerMode ? 16 : 80;
    const particleCount = lowPowerMode ? 4 : 20;
    
    // Estrelas com tamanhos variados
    setStars(
      Array.from({ length: starCount }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 2,
      }))
    );
    // Partículas flutuantes
    setParticles(
      Array.from({ length: particleCount }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: 15 + Math.random() * 10,
        driftX: Math.sin(Math.random() * Math.PI * 2) * 30,
      }))
    );
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" suppressHydrationWarning>
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: isLight
            ? 'linear-gradient(rgba(15,23,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.4) 1px, transparent 1px)'
            : 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Planetas maiores e mais vibrantes */}
      
      {/* Planeta 1 - Roxo Grande */}
      {!isMobile && (
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{ 
            top: '5%', 
            left: '0%',
            background: isLight
              ? 'radial-gradient(circle at 30% 30%, rgba(15, 23, 42, 0.07), rgba(15, 23, 42, 0.03), transparent)'
              : 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.2), transparent)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Planeta 2 - Rosa Intenso */}
      {!shouldSimplify && (
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{ 
            top: '60%', 
            right: '5%',
            background: isLight
              ? 'radial-gradient(circle at 30% 30%, rgba(23, 37, 84, 0.07), rgba(23, 37, 84, 0.03), transparent)'
              : 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.5), rgba(219, 39, 119, 0.2), transparent)',
            filter: 'blur(50px)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      )}

      {/* Planeta 3 - Azul Elétrico */}
      {!isMobile && (
        <motion.div
          className="absolute w-72 h-72 rounded-full"
          style={{ 
            bottom: '15%', 
            left: '10%',
            background: isLight
              ? 'radial-gradient(circle at 30% 30%, rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.02), transparent)'
              : 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.5), rgba(37, 99, 235, 0.2), transparent)',
            filter: 'blur(55px)'
          }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      )}

      {/* Planeta 4 - Ciano */}
      {!shouldSimplify && (
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{ 
            top: '35%', 
            left: '65%',
            background: isLight
              ? 'radial-gradient(circle at 30% 30%, rgba(23, 37, 84, 0.05), rgba(23, 37, 84, 0.02), transparent)'
              : 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.4), rgba(6, 182, 212, 0.2), transparent)',
            filter: 'blur(45px)'
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -25, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      )}

      {/* Planeta 5 - Âmbar */}
      {!isMobile && (
        <motion.div
          className="absolute w-56 h-56 rounded-full"
          style={{ 
            top: '10%', 
            right: '20%',
            background: isLight
              ? 'radial-gradient(circle at 30% 30%, rgba(120, 53, 15, 0.06), rgba(120, 53, 15, 0.02), transparent)'
              : 'radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.15), transparent)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />
      )}

      {/* Raios de luz dinâmicos */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-0 left-1/4 w-1 h-full opacity-10"
            style={{
              background: isLight
                ? 'linear-gradient(180deg, transparent, rgba(15,23,42,0.5), transparent)'
                : 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
              transform: 'rotate(15deg)',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-0 right-1/3 w-1 h-full opacity-10"
            style={{
              background: isLight
                ? 'linear-gradient(180deg, transparent, rgba(180,83,9,0.4), transparent)'
                : 'linear-gradient(180deg, transparent, rgba(236, 72, 153, 0.5), transparent)',
              transform: 'rotate(-20deg)',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </>
      )}

      {/* Estrelas cintilantes */}
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-slate-900/40 dark:bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Partículas flutuantes com trail */}
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.driftX, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          <div className="w-1 h-1 rounded-full bg-gradient-to-b from-slate-800 via-amber-800 to-transparent dark:from-purple-400 dark:via-teal-400 dark:to-transparent" />
        </motion.div>
      ))}

      {/* Ondas de energia */}
      {!shouldSimplify && (
        <>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-slate-800/15 dark:border-purple-500/20"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-amber-800/15 dark:border-teal-500/20"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Gradientes de canto */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-slate-900/[0.04] dark:from-purple-500/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-slate-900/[0.04] dark:from-teal-500/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-slate-900/[0.03] dark:from-blue-500/15 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-amber-900/[0.03] dark:from-cyan-500/15 via-transparent to-transparent blur-3xl" />

      {/* Arquitetura de Software - Componentes e Conexões */}
      {!isMobile && (
        <>
          {/* Camada de Microserviços - Superior Esquerda */}
          <motion.div
            className="absolute top-[15%] left-[8%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            {/* Serviço 1 */}
            <motion.div
              className="relative"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="w-16 h-16 border-2 border-slate-800/25 dark:border-purple-500/30 rounded-lg backdrop-blur-sm bg-slate-800/[0.03] dark:bg-purple-500/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-700 dark:bg-purple-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Conexão horizontal */}
            <div className="absolute top-8 left-16 w-12 h-0.5 bg-gradient-to-r from-slate-800/35 to-amber-800/30 dark:from-purple-500/30 dark:to-teal-500/30" />
            
            {/* Serviço 2 */}
            <motion.div
              className="absolute top-0 left-28"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            >
              <div className="w-16 h-16 border-2 border-slate-800/25 dark:border-teal-500/30 rounded-lg backdrop-blur-sm bg-slate-800/[0.03] dark:bg-teal-500/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-700 dark:bg-teal-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Conexão vertical para camada inferior */}
            <div className="absolute top-16 left-8 w-0.5 h-12 bg-gradient-to-b from-slate-800/30 to-transparent dark:from-purple-500/30 dark:to-transparent" />
            <div className="absolute top-16 left-36 w-0.5 h-12 bg-gradient-to-b from-slate-800/30 to-transparent dark:from-teal-500/30 dark:to-transparent" />
          </motion.div>

          {/* Camada de Backend - Centro */}
          <motion.div
            className="absolute top-[35%] left-[10%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          >
            {/* API Gateway */}
            <div className="relative">
              <motion.div
                className="w-24 h-16 border-2 border-slate-800/30 dark:border-blue-500/40 rounded-xl backdrop-blur-sm bg-slate-800/[0.04] dark:bg-blue-500/10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-amber-800 dark:text-blue-400 text-xs font-mono opacity-60 dark:opacity-50">
                  API
                </div>
              </motion.div>
              
              {/* Conexão para banco de dados */}
              <div className="absolute top-8 left-24 w-16 h-0.5 bg-gradient-to-r from-slate-800/35 to-amber-800/30 dark:from-blue-500/40 dark:to-cyan-500/40" />
              
              {/* Database Icon */}
              <motion.div
                className="absolute top-2 left-40"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 border-2 border-amber-800/40 dark:border-cyan-500/40 rounded-full backdrop-blur-sm bg-amber-800/[0.05] dark:bg-cyan-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 border border-amber-800/50 dark:border-cyan-400/50 rounded-full" />
                  <div className="absolute w-4 h-0.5 bg-amber-800/50 dark:bg-cyan-400/50 rotate-45" />
                  <div className="absolute w-4 h-0.5 bg-amber-800/50 dark:bg-cyan-400/50 -rotate-45" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Arquitetura em Camadas - Direita */}
          <motion.div
            className="absolute top-[20%] right-[12%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          >
            {/* Presentation Layer */}
            <motion.div
              className="w-32 h-10 border border-slate-800/25 dark:border-purple-500/30 rounded bg-slate-800/[0.03] dark:bg-purple-500/5 backdrop-blur-sm mb-2"
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div className="h-full flex items-center justify-center text-slate-800 dark:text-purple-400 text-[10px] font-mono opacity-50 dark:opacity-40">
                PRESENTATION
              </div>
            </motion.div>

            {/* Connection */}
            <div className="w-0.5 h-3 bg-gradient-to-b from-slate-800/30 to-slate-800/25 dark:from-purple-500/30 dark:to-teal-500/30 mx-auto" />

            {/* Business Layer */}
            <motion.div
              className="w-32 h-10 border border-slate-800/25 dark:border-teal-500/30 rounded bg-slate-800/[0.03] dark:bg-teal-500/5 backdrop-blur-sm mb-2"
              animate={{ x: [3, -3, 3] }}
              transition={{ duration: 9, repeat: Infinity, delay: 0.5 }}
            >
              <div className="h-full flex items-center justify-center text-slate-800 dark:text-teal-400 text-[10px] font-mono opacity-50 dark:opacity-40">
                BUSINESS
              </div>
            </motion.div>

            {/* Connection */}
            <div className="w-0.5 h-3 bg-gradient-to-b from-slate-800/25 to-amber-800/30 dark:from-teal-500/30 dark:to-blue-500/30 mx-auto" />

            {/* Data Layer */}
            <motion.div
              className="w-32 h-10 border border-amber-800/35 dark:border-blue-500/30 rounded bg-amber-800/[0.04] dark:bg-blue-500/5 backdrop-blur-sm"
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
              <div className="h-full flex items-center justify-center text-amber-800 dark:text-blue-400 text-[10px] font-mono opacity-60 dark:opacity-40">
                DATA
              </div>
            </motion.div>
          </motion.div>

          {/* Padrão de Eventos/Mensageria - Inferior */}
          <motion.div
            className="absolute bottom-[20%] left-[15%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          >
            {/* Event Bus */}
            <div className="relative flex items-center gap-8">
              {/* Publisher */}
              <motion.div
                className="w-14 h-14 border-2 border-slate-800/25 dark:border-purple-500/30 rounded-full backdrop-blur-sm bg-slate-800/[0.03] dark:bg-purple-500/5 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-slate-700 dark:bg-purple-400 rounded-full" />
              </motion.div>

              {/* Message Flow */}
              <motion.div
                className="absolute left-14 top-1/2 w-20"
                animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="h-0.5 bg-gradient-to-r from-slate-800/35 via-slate-800/30 to-amber-800/35 dark:from-purple-500/40 dark:via-teal-500/40 dark:to-cyan-500/40" />
                <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-amber-800/40 dark:border-cyan-500/40 rotate-45" />
              </motion.div>

              {/* Subscriber */}
              <motion.div
                className="w-14 h-14 border-2 border-amber-800/35 dark:border-cyan-500/30 rounded-full backdrop-blur-sm bg-amber-800/[0.04] dark:bg-cyan-500/5 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="w-3 h-3 bg-amber-700 dark:bg-cyan-400 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Estrutura de Rede Hexagonal - Inferior Direita */}
          <motion.div
            className="absolute bottom-[25%] right-[15%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          >
            <div className="relative w-32 h-32">
              {/* Hexágono Central */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                    fill="none"
                    stroke={isLight ? 'rgba(180,83,9,0.4)' : 'rgba(139, 92, 246, 0.3)'}
                    strokeWidth="2"
                  />
                  <circle cx="50" cy="50" r="8" fill={isLight ? 'rgba(180,83,9,0.5)' : 'rgba(139, 92, 246, 0.5)'} />
                </svg>
              </motion.div>

              {/* Hexágonos Satélites */}
              {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                <motion.div
                  key={angle}
                  className="absolute top-1/2 left-1/2 w-8 h-8"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-32px)`,
                  }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, delay: idx * 0.3 }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50,10 85,30 85,70 50,90 15,70 15,30"
                      fill="none"
                      stroke={isLight ? 'rgba(15,23,42,0.35)' : 'rgba(236, 72, 153, 0.3)'}
                      strokeWidth="3"
                    />
                  </svg>
                </motion.div>
              ))}

              {/* Linhas de Conexão */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
                {[0, 60, 120, 180, 240, 300].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 64 + Math.cos(rad) * 32;
                  const y = 64 + Math.sin(rad) * 32;
                  return (
                    <line
                      key={angle}
                      x1="64"
                      y1="64"
                      x2={x}
                      y2={y}
                      stroke={isLight ? 'rgba(15,23,42,0.2)' : 'rgba(139, 92, 246, 0.15)'}
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Fluxo de Pipeline CI/CD - Superior Direita */}
          <motion.div
            className="absolute top-[12%] right-[20%] flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, delay: 4 }}
          >
            {['BUILD', 'TEST', 'DEPLOY'].map((stage, idx) => (
              <motion.div
                key={stage}
                className="relative"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 5 + idx, repeat: Infinity, delay: idx * 0.5 }}
              >
                <div className={`w-16 h-12 border ${stage === 'DEPLOY' ? 'border-amber-800/35 dark:border-blue-500/30 bg-amber-800/[0.04] dark:bg-blue-500/5' : 'border-slate-800/25 dark:border-blue-500/30 bg-slate-800/[0.03] dark:bg-blue-500/5'} rounded backdrop-blur-sm flex items-center justify-center`}>
                  <span className={`text-[8px] font-mono ${stage === 'DEPLOY' ? 'text-amber-800 dark:text-blue-400/40' : 'text-slate-800 dark:text-blue-400/40'} opacity-60 dark:opacity-100`}>{stage}</span>
                </div>
                {idx < 2 && (
                  <motion.div
                    className="absolute left-16 top-1/2 w-3 h-0.5 bg-gradient-to-r from-slate-800/35 to-transparent dark:from-blue-500/40 dark:to-transparent"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.7 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

