import Link from 'next/link';

export default function Episode12() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E12: MUI & CSS-in-JS</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        هذه الحلقة تركز على تحسين استخدام مكتبات UI و CSS-in-JS
      </p>

      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <Link
          href="/ep/12-mui/before"
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
                استخدام غير محسسّن لمكتبات UI و CSS-in-JS
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
          href="/ep/12-mui/after"
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
                تحسين استخدام المكونات وتقليل حجم الحزمة
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
            <li>عمليات استيراد متفرقة ومباشرة لـ MUI تؤثر على الحجم</li>
            <li>سلاسل تنسيق styled() متداخلة بعمق شديد</li>
            <li>استخدام styled المخصص للعناصر البسيطة بدلاً من أصناف CSS العادية</li>
            <li>تكلفة تشغيل وقت التشغيل لـ Emotion runtime في مصفوفة القياس</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: '#22d3ee', fontSize: 18, marginBottom: 16 }}>✅ ما في نسخة After</h3>
        <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>Deep imports بدلاً من barrel imports</li>
            <li>تجنب nested styled</li>
            <li>استخدام CSS عادية للعناصر البسيطة</li>
            <li>تحسين config لإزالة unused components</li>
            <li>استخدام server components للمكونات الثابتة</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
