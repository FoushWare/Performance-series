export default function LayoutThrashBefore() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E07: Layout Thrashing - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        Layout thrashing - قراءة وكتابة DOM بشكل متكرر.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Layout Thrashing Example</h2>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشكلة:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>قراءة offsetHeight ثم كتابة style</li>
            <li>إجبار المتصفح على إعادة حساب الـ layout</li>
            <li>أداء ضعيف</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
