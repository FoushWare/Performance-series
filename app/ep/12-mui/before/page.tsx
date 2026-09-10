'use client';

export default function MuiBefore() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E12: MUI & CSS-in-JS - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        MUI كامل بدون تحسين - bundle كبير.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Full MUI Without Optimization</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', marginBottom: 16 }}>
            محاكاة لـ MUI components غير محسنة
          </div>
          <button style={{
            padding: '12px 24px',
            borderRadius: 6,
            background: '#ff6b4a',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: 16
          }}>
            MUI Button
          </button>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشاكل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>تحميل كامل MUI library</li>
            <li>Bundle size كبير جداً</li>
            <li>بدون tree shaking</li>
            <li>بدون emotion optimization</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
