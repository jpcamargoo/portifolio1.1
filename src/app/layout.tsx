import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicBackground from '@/components/CosmicBackground';
import ClientProviders from '@/components/ClientProviders';
import RouteTransition from '@/components/RouteTransition';

export const metadata: Metadata = {
  metadataBase: new URL('https://portifolio1-1-ten.vercel.app'),
  title: 'João Paulo Pereira — Desenvolvedor Full Stack Júnior',
  description: 'Desenvolvedor Full Stack Júnior | Node.js, TypeScript, React, SQL | Documentação-first · Automação com IA · Boas Práticas',
  keywords: ['Desenvolvedor Full Stack', 'Node.js', 'TypeScript', 'React', 'Next.js', 'SQL', 'PostgreSQL', 'MySQL', 'Express', 'Fastify', 'APIs REST', 'Automação', 'IA'],
  authors: [{ name: 'João Paulo Pereira' }],
  creator: 'João Paulo Pereira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portifolio1-1-ten.vercel.app',
    title: 'João Paulo Pereira — Desenvolvedor Full Stack Júnior',
    description: 'Desenvolvedor Full Stack Júnior especializado em Node.js, TypeScript, React e SQL. Construo aplicações completas com clareza e documentação-first.',
    siteName: 'João Paulo Pereira Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Paulo Pereira — Desenvolvedor Full Stack Júnior',
    description: 'Full Stack · Node.js · TypeScript · React · SQL · Automação com IA',
    creator: '@joao_pdpc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen transition-theme">
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        <CosmicBackground />
        <ClientProviders>
          <div className="relative z-10">
            <Header />
            <main id="main-content" className="pt-20" tabIndex={-1}>
              <RouteTransition>{children}</RouteTransition>
            </main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
