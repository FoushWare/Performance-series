export default function LayoutThrashAfter() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E07: Layout Thrashing - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        حل layout thrashing - تجميع القراءات والكتابات.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>Layout Thrashing Solution</h2>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ الحل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>قراءة كل القيم أولاً</li>
            <li>الكتابة بعد ذلك</li>
            <li>استخدام requestAnimationFrame</li>
            <li>أداء محسن</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
