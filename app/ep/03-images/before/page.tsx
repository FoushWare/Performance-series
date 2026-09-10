export default function ImagesBefore() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E03: الصور - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        صور غير محسنة - تحميل مباشر بدون تحجيم أو ضغط.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 16 }}>Unoptimized Images</h2>
        <div style={{ marginTop: 16, display: 'grid', gap: 16 }}>
          <img
            src="https://picsum.photos/800/600"
            alt="Unoptimized image"
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            loading="lazy"
          />
          <img
            src="https://picsum.photos/800/600"
            alt="Another unoptimized image"
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            loading="lazy"
          />
          <img
            src="https://picsum.photos/800/600"
            alt="Third unoptimized image"
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            loading="lazy"
          />
        </div>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: 'rgba(255, 107, 74, 0.1)', border: '1px solid rgba(255, 107, 74, 0.3)' }}>
          <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>⚠️ المشاكل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>تحميل صور كاملة الحجم</li>
            <li>بدون WebP/AVIF</li>
            <li>بدون lazy loading حقيقي</li>
            <li>بدون responsive srcset</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
