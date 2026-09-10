export default function BundleAfter() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E05: HTTP/2/3 & Bundle - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        Bundle محسن - code splitting و tree shaking.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>Optimized Bundle</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', fontSize: 14 }}>Bundle Optimizations:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>Code splitting مع dynamic imports</li>
            <li>Tree shaking للكود غير المستخدم</li>
            <li>HTTP/2 multiplexing</li>
            <li>Bundle analysis</li>
          </ul>
        </div>
        {/* <div style={{ marginTop: 16 }}>
          <HeavyComponent />
        </div> */}
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسينات:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>أحزم أصغر</li>
            <li>تحميل أسرع</li>
            <li>استخدام HTTP/2 multiplexing</li>
            <li>Dynamic imports للكود الثقيل</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
