import Link from 'next/link';

export default function Episode01() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E01: القياس (Web Vitals)</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        اختر النسخة التي تريد اختبارها ومقارنتها
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/01-vitals/before"
          style={{
            display: 'block',
            padding: 24,
            borderRadius: 12,
            background: '#1e293b',
            border: '1px solid rgba(255,255,255,0.1)',
            textDecoration: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 8 }}>🔴 Before - المشاكل</h2>
              <p style={{ color: '#cbd5e1', fontSize: 14 }}>
                عرض المشاكل الحقيقية في الأداء لفهم القياس
              </p>
            </div>
            <div style={{
              padding: '12px 24px',
              borderRadius: 8,
              background: 'rgba(255, 107, 74, 0.1)',
              border: '1px solid rgba(255, 107, 74, 0.3)',
              color: '#ff6b4a',
              fontWeight: 'bold'
            }}>
              عرض المشاكل
            </div>
          </div>
        </Link>

        <Link
          href="/ep/01-vitals/after"
          style={{
            display: 'block',
            padding: 24,
            borderRadius: 12,
            background: '#1e293b',
            border: '1px solid rgba(255,255,255,0.1)',
            textDecoration: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 8 }}>🟢 After - الحلول</h2>
              <p style={{ color: '#cbd5e1', fontSize: 14 }}>
                عرض الحلول والتحسينات مع المقارنة
              </p>
            </div>
            <div style={{
              padding: '12px 24px',
              borderRadius: 8,
              background: 'rgba(34, 211, 238, 0.1)',
              border: '1px solid rgba(34, 211, 238, 0.3)',
              color: '#22d3ee',
              fontWeight: 'bold'
            }}>
              عرض الحلول
            </div>
          </div>
        </Link>
      </div>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📋 طريقة الاختبار</h3>
        <ol style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li>افتح صفحة "Before" لرؤية المشاكل</li>
          <li>افتح صفحة "After" لرؤية الحلول</li>
          <li>شغّل Lighthouse audit على الاتنين</li>
          <li>قارن النتائج والتحسينات</li>
          <li>استخدم DevTools Performance panel للتحليل المتقدم</li>
        </ol>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
