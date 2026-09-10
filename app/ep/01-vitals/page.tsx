import Link from 'next/link';

export default function Episode01() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E01: القياس (Web Vitals)</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        هذه الحلقة تغطي جميع مشاكل الأداء الأساسية التي تؤثر على Core Web Vitals (LCP, FID, CLS) مع أمثلة عملية
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/01-vitals/before"
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
              <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 8 }}>🔴 Before - المشاكل</h2>
              <p style={{ color: '#cbd5e1', fontSize: 14 }}>
                صفحة تحتوي على 58 مشكلة أداء حقيقية - كل مشكلة موثقة برمز فعلي
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
            border: '1px solid rgba(34,211,238,0.3)',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 8 }}>🟢 After - الحلول</h2>
              <p style={{ color: '#cbd5e1', fontSize: 14 }}>
                صفحة محسنة بالكامل - Server Component مع كل الحلول المطبقة
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
            <li>Client Component كامل مع كل الصفحة</li>
            <li>حزمة JavaScript ثقيلة (306 kB) بسبب مكتبات MUI, lodash, moment</li>
            <li>تحميل خطوط Google عبر وسم link بدون تحسينات</li>
            <li>صور غير محسنة بدون next/image</li>
            <li>50,000 عنصر في مصفوفة حسابات ثقيلة</li>
            <li>2,000 عنصر DOM بدون virtualization</li>
            <li>Layout thrashing داخل حلقات</li>
            <li>مهمات طويلة تحجب Main thread</li>
            <li>Banner يظهر متأخراً بدون مساحة محجوزة (CLS سيئ)</li>
            <li>لا memoization, useCallback, React.memo</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>✅ ما في نسخة After</h3>
        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>Server Component كامل (Client Component صغير فقط للتفاعل)</li>
            <li>حزمة صغيرة (94.3 kB) بدون مكتبات ثقيلة</li>
            <li>next/font/google مع تحسينات كاملة</li>
            <li>next/image مع priority, sizes, fill</li>
            <li>بيانات ثابتة 15 عنصر فقط</li>
            <li>Server-side data fetching مع ISR</li>
            <li>تأثيرات CSS محسنة (transform/opacity فقط)</li>
            <li>React.memo, useCallback, useMemo مطبقة</li>
            <li>Context memoized</li>
            <li>keys ثابتة (item.id بدلاً من index)</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📊 المقارنة المتوقعة</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 16 }}>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>Page Size</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: 214 kB</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: 1.51 kB</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>-99.3%</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>First Load JS</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: 306 kB</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: 94.3 kB</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>-69.2%</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>LCP</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: Poor</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: Excellent</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>&lt; 2.5s</div>
          </div>
          <div style={{ padding: 16, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 12, marginBottom: 4 }}>CLS</div>
            <div style={{ color: '#ff6b4a', fontSize: 14, fontWeight: 'bold' }}>Before: Poor</div>
            <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 'bold' }}>After: 0.00</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>No shifts</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>📋 طريقة الاختبار</h3>
        <ol style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li>افتح صفحة "Before" لرؤية المشاكل</li>
          <li>افتح صفحة "After" لرؤية الحلول</li>
          <li>شغّل Lighthouse audit على الاتنين</li>
          <li>قارن النتائج والتحسينات</li>
          <li>استخدم DevTools Performance panel للتحليل المتقدم</li>
          <li>افحص Network tab لرؤية الفرق في حجم الحزمة</li>
        </ol>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
