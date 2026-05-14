'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16 relative">
      <div className="scan-line" />
      <div className="relative w-full max-w-xl rounded-2xl border border-red-500/30 bg-red-500/5 backdrop-blur-lg p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          {t('error.title')}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">{t('error.description')}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            {t('error.retry')}
          </button>
          <Link
            href="/"
            className="px-5 py-3 rounded-lg border border-white/20 text-gray-800 dark:text-gray-200 hover:bg-white/10 transition-colors"
          >
            {t('error.backHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}
