export default function BundleBefore() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E05: HTTP/2/3 & Bundle - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        Bundle غير محسن - تحميل مكتبات كبيرة بدون code splitting.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Unoptimized Bundle</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', fontSize: 14 }}>Bundle Size Issues:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>تحميل كامل الملف في طلب واحد</li>
            <li>بدون code splitting</li>
            <li>بدون tree shaking</li>
            <li>مكتبات ضخمة في الـ main bundle</li>
          </ul>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشاكل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>Bundle size كبير جداً</li>
            <li>تحميل بطيء للصفحة</li>
            <li>عدم استخدام HTTP/2 multiplexing</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
