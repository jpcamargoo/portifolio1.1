import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'João Paulo Pereira — Desenvolvedor Full Stack Júnior';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'radial-gradient(ellipse at top left, #1e293b 0%, #0f172a 45%, #020617 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background:
                'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 700,
              color: '#0f172a',
              letterSpacing: '-1px',
            }}
          >
            JP
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#cbd5e1',
              letterSpacing: '-0.5px',
            }}
          >
            joao-paulo-pereira.dev
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: '#f8fafc',
            }}
          >
            João Paulo Pereira
          </div>
          <div
            style={{
              fontSize: '38px',
              color: '#fbbf24',
              fontWeight: 500,
              letterSpacing: '-0.5px',
            }}
          >
            Desenvolvedor Full Stack Júnior
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#94a3b8',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Node.js · TypeScript · React · SQL — Documentação-first, automação com IA e boas práticas.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '22px',
            color: '#64748b',
            borderTop: '1px solid #1e293b',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '32px' }}>
            <span>Next.js 15</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Prisma</span>
            <span>·</span>
            <span>PostgreSQL</span>
          </div>
          <div style={{ color: '#f59e0b', fontWeight: 600 }}>Portfólio</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
