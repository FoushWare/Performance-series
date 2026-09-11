import Link from 'next/link';

export default function Compression() {
  // Simulate compression measurements (computed server-side)
  const originalSize: number = 1024 * 100; // 100KB
  const compressedSize: number = originalSize * 0.3; // 70% compression

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 36, marginBottom: 20 }}>E02: الضغط (Gzip/Brotli)</h1>
      <p style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.8 }}>
        مقارنة حجم الاستجابة قبل وبعد الضغط
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/02-compression/before"
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
                استجابات غير مضغوطة - حجم كبير ونقل بطيء
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
          href="/ep/02-compression/after"
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
                استجابات مضغوطة - Gzip/Brotli لتقليل حجم النقل
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
        <h3 style={{ color: '#22d3ee', fontSize: 22, marginBottom: 20 }}>📋 ما في نسخة Before</h3>
        <div style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 2 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>تحميل البيانات بحجمها الأصلي الكامل</li>
            <li>استهلاك كبير للـ bandwidth</li>
            <li>أوقات تحميل بطيئة على شبكات 3G/4G</li>
            <li>عدم استخدام gzip أو brotli</li>
            <li>Transfer Size يساوي Resource Size</li>
            <li>HTTP Response بدون Content-Encoding header</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 22, marginBottom: 20 }}>✅ ما في نسخة After</h3>
        <div style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 2 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>تفعيل gzip compression على السيرفر</li>
            <li>استخدام Brotli للضغط الأفضل (أصغر بنسبة 14-20%)</li>
            <li>ضغط HTML, CSS, JavaScript, JSON</li>
            <li>ضغط SVG وملفات النصوص</li>
            <li>Transfer Size أصغر بكثير من Resource Size</li>
            <li>تحميل أسرع على جميع الشبكات</li>
            <li>Content-Encoding: gzip أو br header</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📊 المقارنة المتوقعة</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 16 }}>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>Original Size</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: 100 KB</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: 100 KB</div>
            <div style={{ color: '#cbd5e1', fontSize: 12 }}>Resource Size</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>Transfer Size</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: 100 KB</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: 30 KB</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>-70%</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>Load Time (3G)</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: 2.5s</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: 0.8s</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>-68%</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📋 طريقة الاختبار</h3>
        <ol style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li>افتح صفحة "Before" لرؤية المشاكل</li>
          <li>افتح صفحة "After" لرؤية الحلول</li>
          <li>افتح DevTools Network tab</li>
          <li>قارن Resource Size vs Transfer Size في الاتنين</li>
          <li>تحقق من Content-Encoding header</li>
          <li>استخدم Lighthouse لرؤية تقييم الضغط</li>
        </ol>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
