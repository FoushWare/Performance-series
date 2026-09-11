// Server Component - demonstrates SSR/SSG benefits
const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export default function RenderingAfter() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee', fontSize: 28, marginBottom: 16 }}>E06: أنماط الرندر - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        Server-Side Rendering / Static Generation - محتوى جاهز في HTML
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>🟢 Server-Side Rendering Benefits</h2>
        
        <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
          {data.map((item, index) => (
            <div key={index} style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
              <div style={{ color: '#cbd5e1', fontSize: 14 }}>{item}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>✅ الحلول:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>HTML الأولي يحتوي على المحتوى الكامل</li>
            <li>SEO ممتاز - محركات البحث ترى المحتوى فوراً</li>
            <li>Fast TTI - المحتوى يظهر بدون انتظار JavaScript</li>
            <li>لا flash of unstyled content</li>
            <li>تجربة مستخدم ممتازة على جميع الشبكات</li>
            <li>JavaScript أقل للتنفيذ في المتصفح</li>
            <li>يمكن استخدام SSR للبيانات المتغيرة و SSG للبيانات الثابتة</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>📊 View Source Result:</div>
          <pre style={{ color: '#cbd5e1', fontSize: 12, overflow: 'auto' }}>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;
  &lt;div&gt;
    &lt;h1&gt;E06: أنماط الرندر - After&lt;/h1&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
    &lt;div&gt;Item 3&lt;/div&gt;
    &lt;div&gt;Item 4&lt;/div&gt;
    &lt;div&gt;Item 5&lt;/div&gt;
  &lt;/div&gt;
  &lt;script src="/_next/static/...js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
          </pre>
          <div style={{ color: '#22d3ee', fontSize: 12, marginTop: 8 }}>✅ المحتوى موجود في HTML - جاهز فوراً للعرض</div>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>🚀 Performance Comparison:</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 8 }}>
            <div style={{ padding: 12, borderRadius: 6, background: '#475569' }}>
              <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>First Contentful Paint</div>
              <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>CSR: 2.5s</div>
              <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>SSR: 0.8s</div>
            </div>
            <div style={{ padding: 12, borderRadius: 6, background: '#475569' }}>
              <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>Time to Interactive</div>
              <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>CSR: 4.2s</div>
              <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>SSR: 1.5s</div>
            </div>
            <div style={{ padding: 12, borderRadius: 6, background: '#475569' }}>
              <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>SEO Score</div>
              <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>CSR: Poor</div>
              <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>SSR: Excellent</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}