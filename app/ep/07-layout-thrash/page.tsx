import Link from 'next/link';

export default function Episode07() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E07: Layout Thrashing</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        هذه الحلقة تركز على مشاكل layout thrashing وتأثيرها على الأداء
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/07-layout-thrash/before"
          target="_blank"
          rel="noopener noreferrer"
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
                قراءة offsetHeight داخل حلقات تسبب layout thrashing
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
          href="/ep/07-layout-thrash/after"
          target="_blank"
          rel="noopener noreferrer"
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
                تجنب قراءة layout داخل حلقات - استخدام CSS فقط
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
            <li>قراءة offsetHeight أو getBoundingClientRect داخل الحلقات</li>
            <li>تحريك خصائص مثل left / top / width بدلاً من transform</li>
            <li>تشغيل تأثيرات حركية CSS على خصائص غير مدعومة بالـ GPU</li>
            <li>مهمات طويلة Long tasks تتجاوز 50 ميلي ثانية</li>
            <li>عمليات ثقيلة متزامنة داخل useEffect</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>✅ ما في نسخة After</h3>
        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>تجنب قراءة layout داخل حلقات</li>
            <li>استخدام transform/opacity بدلاً من width/height</li>
            <li>تأثيرات CSS على خصائص مدعومة بالـ GPU</li>
            <li>تقسيم المهام الطويلة إلى chunks صغيرة</li>
            <li>استخدام requestAnimationFrame</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
