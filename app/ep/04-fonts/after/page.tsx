export default function FontsAfter() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E04: الخطوط - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        خطوط محسنة مع preconnect و font-display: swap.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>Optimized Fonts</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <p style={{ color: '#cbd5e1', fontSize: 16 }}>
            هذا النص يستخدم خط Tajawal المحمل بشكل محسن.
          </p>
          <p style={{ color: '#cbd5e1', fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>
            خط عريض محسن
          </p>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسينات:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>استخدام preconnect لـ Google Fonts</li>
            <li>font-display: swap</li>
            <li>تحميل الأوزان المطلوبة فقط</li>
            <li>تحسين FOIT/FOUT</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
