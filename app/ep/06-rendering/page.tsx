import Link from 'next/link';

export default function Rendering() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 36, marginBottom: 20 }}>E06: أنماط الرندر</h1>
      <p style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.8 }}>
        مقارنة بين استراتيجيات الرندر المختلفة
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/06-rendering/before"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            padding: 24,
            borderRadius: 12,
            background: '#1e293b',
            border: '1px solid rgba(255,107,74,0.3)',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#ff6b4a', fontSize: 24, marginBottom: 10 }}>🔴 Before - المشاكل</h2>
              <p style={{ color: '#cbd5e1', fontSize: 16 }}>
                Client-Side Rendering - محتوى فارغ في الـ HTML الأولي
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
          href="/ep/06-rendering/after"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            padding: 24,
            borderRadius: 12,
            background: '#1e293b',
            border: '1px solid rgba(34,211,238,0.3)',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#22d3ee', fontSize: 24, marginBottom: 10 }}>🟢 After - الحلول</h2>
              <p style={{ color: '#cbd5e1', fontSize: 16 }}>
                Server-Side Rendering / Static Generation - محتوى جاهز في HTML
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
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📋 ما في نسخة Before</h3>
        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>HTML الأولي فارغ - View Source لا يظهر المحتوى</li>
            <li>SEO سيئ - محركات البحث لا ترى المحتوى</li>
            <li>Slow TTI - ينتظر تحميل JavaScript ثم البيانات</li>
            <li>Flash of unstyled content أو blank screen</li>
            <li>تجربة مستخدم سيئة على اتصالات بطيئة</li>
            <li>JavaScript ثقيل للتنفيذ في المتصفح</li>
            <li>يعتمد كلياً على JavaScript للعرض</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>✅ ما في نسخة After</h3>
        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>HTML الأولي يحتوي على المحتوى الكامل</li>
            <li>SEO ممتاز - محركات البحث ترى المحتوى فوراً</li>
            <li>Fast TTI - المحتوى يظهر بدون انتظار JavaScript</li>
            <li>لا flash of unstyled content</li>
            <li>تجربة مستخدم ممتازة على جميع الشبكات</li>
            <li>JavaScript أقل للتنفيذ في المتصفح</li>
            <li>يمكن استخدام SSR للبيانات المتغيرة و SSG للبيانات الثابتة</li>
            <li>Progressive Enhancement - المحتوى يعمل حتى بدون JavaScript</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📊 المقارنة المتوقعة</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 16 }}>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>First Contentful Paint</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>CSR: 2.5s</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>SSR: 0.8s</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>-68%</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>Time to Interactive</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>CSR: 4.2s</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>SSR: 1.5s</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>-64%</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>SEO Score</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>CSR: Poor</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>SSR: Excellent</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>100%</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📋 طريقة الاختبار</h3>
        <ol style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li>افتح صفحة "Before" لرؤية المشاكل</li>
          <li>افتح صفحة "After" لرؤية الحلول</li>
          <li>استخدم View Source (Ctrl+U) لمقارنة HTML</li>
          <li>شغّل Lighthouse audit على الاتنين</li>
          <li>قارن SEO Scores</li>
          <li>افحص Network tab لرؤية حجم JavaScript</li>
        </ol>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
