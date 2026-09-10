export default function Compression() {
  // Simulate compression measurements (computed server-side)
  const originalSize: number = 1024 * 100; // 100KB
  const compressedSize: number = originalSize * 0.3; // 70% compression

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E02: الضغط (Gzip/Brotli)</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        مقارنة حجم الاستجابة قبل وبعد الضغط.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>Compression Impact</h2>
        <div style={{ marginTop: 16, display: 'grid', gap: 16 }}>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>Without Compression</div>
            <div style={{ color: '#ff6b4a', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{(originalSize / 1024).toFixed(1)} KB</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>With Gzip/Brotli</div>
            <div style={{ color: '#22d3ee', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{(compressedSize / 1024).toFixed(1)} KB</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>Compression Ratio</div>
            <div style={{ color: '#a78bfa', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>
              {((1 - compressedSize / originalSize) * 100).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
