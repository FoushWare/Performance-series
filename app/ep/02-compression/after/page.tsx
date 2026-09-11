export default function CompressionAfter() {
  // Simulate the same data but with compression applied
  const originalData = {
    data: Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      description: 'This is a very long description that takes up space in the uncompressed response',
      metadata: {
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        author: 'System',
        version: '1.0.0',
        tags: ['compressed', 'optimized', 'payload']
      }
    }))
  };

  const originalSize = JSON.stringify(originalData).length;
  const compressedSize = originalSize * 0.3; // 70% compression ratio
  const originalSizeKB = (originalSize / 1024).toFixed(1);
  const compressedSizeKB = (compressedSize / 1024).toFixed(1);
  const compressionRatio = ((1 - compressedSize / originalSize) * 100).toFixed(0);

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee', fontSize: 28, marginBottom: 16 }}>E02: الضغط - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        استجابات مضغوطة - Gzip/Brotli لتقليل حجم النقل
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>🟢 Compressed Response</h2>
        
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>Original Size</div>
            <div style={{ color: '#ff6b4a', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{originalSizeKB} KB</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>Compressed Size</div>
            <div style={{ color: '#22d3ee', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{compressedSizeKB} KB</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>Compression Ratio</div>
            <div style={{ color: '#5eead4', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{compressionRatio}%</div>
          </div>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>✅ الحلول:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>تفعيل gzip compression على السيرفر</li>
            <li>استخدام Brotli للضغط الأفضل (أصغر بنسبة 14-20%)</li>
            <li>ضغط HTML, CSS, JavaScript, JSON</li>
            <li>ضغط SVG وملفات النصوص</li>
            <li>Transfer Size أصغر بكثير من Resource Size</li>
            <li>تحميل أسرع على جميع الشبكات</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>📊 Server Configuration Example:</div>
          <pre style={{ color: '#cbd5e1', fontSize: 12, overflow: 'auto' }}>
# nginx.conf
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml;
gzip_min_length 1000;

# Brotli (better compression)
brotli on;
brotli_types text/plain text/css application/json application/javascript;
          </pre>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}