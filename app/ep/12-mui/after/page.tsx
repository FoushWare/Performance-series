'use client';

export default function MuiAfter() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E12: MUI & CSS-in-JS - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        MUI محسّن - bundle أصغر مع tree shaking.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>Optimized MUI Usage</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', marginBottom: 16 }}>
            استخدام MUI components محسّن
          </div>
          <button style={{
            padding: '12px 24px',
            borderRadius: 6,
            background: '#5eead4',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: 16
          }}>
            Optimized Button
          </button>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسينات:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>Import من @mui/material فقط المطلوب</li>
            <li>Tree shaking فعال</li>
            <li>Emotion cache optimization</li>
            <li>Bundle size أصغر بكثير</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
