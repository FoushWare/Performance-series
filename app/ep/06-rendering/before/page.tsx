'use client';

import { useState, useEffect } from 'react';

export default function RenderingBefore() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate slow data fetch - typical CSR issue
    setTimeout(() => {
      setData(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E06: أنماط الرندر - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        Client-Side Rendering - محتوى فارغ في الـ HTML الأولي
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 16 }}>🔴 Client-Side Rendering Issues</h2>
        
        {loading ? (
          <div style={{ padding: 20, borderRadius: 8, background: '#334155', textAlign: 'center' }}>
            <div style={{ color: '#ff6b4a', fontSize: 18, marginBottom: 8 }}>⏳ Loading...</div>
            <div style={{ color: '#cbd5e1', fontSize: 14 }}>جاري تحميل البيانات من السيرفر</div>
          </div>
        ) : (
          <div style={{ marginTop: 16, display: 'grid', gap: 8 }}>
            {data.map((item, index) => (
              <div key={index} style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
                <div style={{ color: '#cbd5e1', fontSize: 14 }}>{item}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: 'rgba(255, 107, 74, 0.1)', border: '1px solid rgba(255, 107, 74, 0.3)' }}>
          <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>⚠️ المشاكل:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>HTML الأولي فارغ - View Source لا يظهر المحتوى</li>
            <li>SEO سيئ - محركات البحث لا ترى المحتوى</li>
            <li>Slow TTI - ينتظر تحميل JavaScript ثم البيانات</li>
            <li>Flash of unstyled content أو blank screen</li>
            <li>تجربة مستخدم سيئة على اتصالات بطيئة</li>
            <li>JavaScript ثقيل للتنفيذ في المتصفح</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>📊 View Source Result:</div>
          <pre style={{ color: '#cbd5e1', fontSize: 12, overflow: 'auto' }}>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;...&lt;/head&gt;
&lt;body&gt;
  &lt;div id="__next"&gt;&lt;/div&gt;
  &lt;script src="/_next/static/...js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
          </pre>
          <div style={{ color: '#ff6b4a', fontSize: 12, marginTop: 8 }}>⚠️ المحتوى غير موجود في HTML - جاري تحميله بواسطة JavaScript</div>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}