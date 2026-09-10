export default function FontsBefore() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E04: الخطوط - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        خطوط غير محسنة - تحميل مباشر بدون font-display: swap.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Unoptimized Fonts</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <p style={{ color: '#cbd5e1', fontSize: 16 }}>
            هذا النص يستخدم خط Tajawal المحمل بشكل غير محسن.
          </p>
          <p style={{ color: '#cbd5e1', fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>
            خط عريض غير محسن
          </p>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشاكل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>تحميل بطيء للخطوط</li>
            <li>قد يسبب FOIT (Flash of Invisible Text)</li>
            <li>تحميل كل الأوزان</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
