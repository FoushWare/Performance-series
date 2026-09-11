export default function CompressionBefore() {
  // Simulate uncompressed data - large JSON payload
  const uncompressedData = {
    data: Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      description: 'This is a very long description that takes up space in the uncompressed response',
      metadata: {
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        author: 'System',
        version: '1.0.0',
        tags: ['uncompressed', 'large', 'payload']
      }
    }))
  };

  const uncompressedSize = JSON.stringify(uncompressedData).length;
  const uncompressedSizeKB = (uncompressedSize / 1024).toFixed(1);

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E02: الضغط - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        استجابات غير مضغوطة - حجم كبير ونقل بطيء
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 16 }}>🔴 Uncompressed Response</h2>
        
        <div style={{ marginTop: 16, padding: 20, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>Response Size (Uncompressed)</div>
          <div style={{ color: '#ff6b4a', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{uncompressedSizeKB} KB</div>
          <div style={{ color: '#f87171', fontSize: 12 }}>تحميل كامل بدون ضغط</div>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: 'rgba(255, 107, 74, 0.1)', border: '1px solid rgba(255, 107, 74, 0.3)' }}>
          <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>⚠️ المشاكل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>تحميل البيانات بحجمها الأصلي الكامل</li>
            <li>استهلاك كبير للـ bandwidth</li>
            <li>أوقات تحميل بطيئة على شبكات 3G/4G</li>
            <li>عدم استخدام gzip أو brotli</li>
            <li>Transfer Size يساوي Resource Size</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>📊 Sample Data Structure:</div>
          <pre style={{ color: '#cbd5e1', fontSize: 12, overflow: 'auto', maxHeight: 200 }}>
{JSON.stringify(uncompressedData.data.slice(0, 2), null, 2)}
          </pre>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}