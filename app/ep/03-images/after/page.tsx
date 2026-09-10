import Image from 'next/image';

export default function ImagesAfter() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee', fontSize: 28, marginBottom: 16 }}>E03: الصور - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        صور محسنة باستخدام Next.js Image مع WebP و lazy loading.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>Optimized Images</h2>
        <div style={{ marginTop: 16, display: 'grid', gap: 16 }}>
          <div style={{ position: 'relative', width: '100%', height: 300 }}>
            <Image
              src="https://picsum.photos/800/600"
              alt="Optimized image"
              fill
              style={{ objectFit: 'cover', borderRadius: 8 }}
              loading="lazy"
            />
          </div>
          <div style={{ position: 'relative', width: '100%', height: 300 }}>
            <Image
              src="https://picsum.photos/800/600"
              alt="Another optimized image"
              fill
              style={{ objectFit: 'cover', borderRadius: 8 }}
              loading="lazy"
            />
          </div>
          <div style={{ position: 'relative', width: '100%', height: 300 }}>
            <Image
              src="https://picsum.photos/800/600"
              alt="Third optimized image"
              fill
              style={{ objectFit: 'cover', borderRadius: 8 }}
              loading="lazy"
            />
          </div>
        </div>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>✅ التحسينات:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>تحويل تلقائي إلى WebP/AVIF</li>
            <li>Lazy loading حقيقي</li>
            <li>Responsive images</li>
            <li>تحجيم حسب الشاشة</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
