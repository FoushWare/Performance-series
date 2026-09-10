import Link from 'next/link';

export default function Episode05() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E05: Bundle Size & HTTP/2/3</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        هذه الحلقة تركز على تقليل حجم حزمة JavaScript وتحسين الشبكة
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/05-bundle/before"
          style={{
            display: 'block',
            padding: 24,
            borderRadius: 12,
            background: '#1e293b',
            border: '1px solid rgba(255,107,74,0.3)',
            textDecoration: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 8 }}>🔴 Before - المشاكل</h2>
              <p style={{ color: '#cbd5e1', fontSize: 14 }}>
                حزمة JavaScript ضخمة مع مكتبات غير ضرورية
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
          href="/ep/05-bundle/after"
          style={{
            display: 'block',
            padding: 24,
            borderRadius: 12,
            background: '#1e293b',
            border: '1px solid rgba(34,211,238,0.3)',
            textDecoration: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 8 }}>🟢 After - الحلول</h2>
              <p style={{ color: '#cbd5e1', fontSize: 14 }}>
                حزمة محسنة - code splitting, tree shaking, lazy loading
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
            <li>الحزمة الرئيسية أكبر من 300 كيلوبايت (gzip)</li>
            <li>Barrel imports من مكتبات مثل MUI</li>
            <li>استيراد مكتبة Lodash كاملة</li>
            <li>استيراد مكتبة أيقونات كاملة</li>
            <li>تحميل المكونات الثقيلة بشكل فوري Eager</li>
            <li>غياب حدود Suspense للعناصر المحملة بـ lazy</li>
            <li>استخدام مكتبة moment.js الثقيلة</li>
            <li>وجود تبعيات مكررة (Duplicate dependencies)</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>✅ ما في نسخة After</h3>
        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>Deep imports بدلاً من barrel imports</li>
            <li>Tree shaking للكود غير المستخدم</li>
            <li>Code splitting مع dynamic imports</li>
            <li>React.lazy و Suspense boundaries</li>
            <li>استخدام مكتبات بديلة خفيفة</li>
            <li>إزالة التبعيات المكررة</li>
            <li>Bundle analyzer للمراقبة</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
