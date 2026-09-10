import Link from 'next/link';

interface Episode {
  ep: string;
  title: string;
  before?: string;
  after?: string;
  single?: string;
}

const episodes: Episode[] = [
  { ep: 'E01', title: 'القياس (Web Vitals)', before: '/ep/01-vitals/before', after: '/ep/01-vitals/after', single: '/ep/01-vitals' },
  { ep: 'E02', title: 'الضغط (Gzip/Brotli)', single: '/ep/02-compression' },
  { ep: 'E03', title: 'الصور', before: '/ep/03-images/before', after: '/ep/03-images/after', single: '/ep/03-images' },
  { ep: 'E04', title: 'الخطوط', before: '/ep/04-fonts/before', after: '/ep/04-fonts/after', single: '/ep/04-fonts' },
  { ep: 'E05', title: 'HTTP/2/3 & Bundle', before: '/ep/05-bundle/before', after: '/ep/05-bundle/after', single: '/ep/05-bundle' },
  { ep: 'E06', title: 'أنماط الرندر', single: '/ep/06-rendering' },
  { ep: 'E07', title: 'Layout Thrashing', before: '/ep/07-layout-thrash/before', after: '/ep/07-layout-thrash/after', single: '/ep/07-layout-thrash' },
  { ep: 'E08', title: 'Debounce/Throttle', before: '/ep/08-debounce-throttle/before', after: '/ep/08-debounce-throttle/after', single: '/ep/08-debounce-throttle' },
  { ep: 'E09', title: 'Virtualization', before: '/ep/09-virtualize/before', after: '/ep/09-virtualize/after', single: '/ep/09-virtualize' },
  { ep: 'E10', title: 'Memoization', before: '/ep/09-memo/before', after: '/ep/09-memo/after', single: '/ep/09-memo' },
  { ep: 'E11', title: 'Web Worker', before: '/ep/11-worker/before', after: '/ep/11-worker/after', single: '/ep/11-worker' },
  { ep: 'E12', title: 'MUI & CSS-in-JS', before: '/ep/12-mui/before', after: '/ep/12-mui/after', single: '/ep/12-mui' },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 32, marginBottom: 16 }}>🧪 Frontend Optimization Playground</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        كل صف هنا Before/After حقيقيين — افتحهم في تابين وسجّل الاتنين، زي سيزون Critical CSS بالظبط.
      </p>
      <div style={{ display: 'grid', gap: 12, marginTop: 32 }}>
        {episodes.map((row) => (
          <Link key={row.ep} href={row.single || row.before} style={{ textDecoration: 'none' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 16, 
              padding: 20, 
              borderRadius: 12, 
              background: '#1e293b', 
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              <span style={{ 
                color: '#22d3ee', 
                fontSize: 14, 
                fontFamily: 'monospace', 
                minWidth: 40,
                fontWeight: 'bold'
              }}>{row.ep}</span>
              <span style={{ 
                flex: 1, 
                color: '#f1f5f9', 
                fontSize: 16,
                fontWeight: 500
              }}>{row.title}</span>
              {row.single ? (
                <span style={{ 
                  color: '#a78bfa', 
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: 6,
                  background: 'rgba(167, 139, 250, 0.1)',
                  border: '1px solid rgba(167, 139, 250, 0.3)'
                }}>
                  افتح
                </span>
              ) : (
                <>
                  <span style={{ 
                    color: '#ff6b4a', 
                    fontWeight: 500,
                    padding: '8px 16px',
                    borderRadius: 6,
                    background: 'rgba(255, 107, 74, 0.1)',
                    border: '1px solid rgba(255, 107, 74, 0.3)'
                  }}>
                    Before
                  </span>
                  <span style={{ 
                    color: '#22d3ee', 
                    fontWeight: 500,
                    padding: '8px 16px',
                    borderRadius: 6,
                    background: 'rgba(34, 211, 238, 0.1)',
                    border: '1px solid rgba(34, 211, 238, 0.3)'
                  }}>
                    After
                  </span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
