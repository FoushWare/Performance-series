import Image from 'next/image';

// Pre-generated static data (no client-side generation)
const STATIC_OPTIMIZED_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  value: Math.random() * 1000,
}));

export default function WebVitalsAfter() {
  const beforeMetrics = { lcp: 4500, fid: 180, cls: 0.35 };
  const afterMetrics = { lcp: 1200, fid: 25, cls: 0.03 };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee', fontSize: 28, marginBottom: 16 }}>🟢 E01: After - الحلول</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        هذه الصفحة محسنة بالكامل - تعرض الحلول الجذرية للمشاكل الأداء في نسخة Before
      </p>

      {/* Solutions Overview */}
      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>✅ الحلول المطبقة</h2>
        <ul style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
          <li><strong>خطوط محسنة:</strong> الاعتماد على خط واحد بوزنين فقط مع استخدام النظام الأساسي لتجنب حجب العرض.</li>
          <li><strong>صور محسنة:</strong> استخدام مكون <code style={{ color: '#22d3ee' }}>next/image</code> مع تحديد الأبعاد والتحميل الكسول <code style={{ color: '#22d3ee' }}>loading="lazy"</code> وتحديد خاصية <code style={{ color: '#22d3ee' }}>sizes</code>.</li>
          <li><strong>بيانات محسنة:</strong> تقليص البيانات الثقيلة والاعتماد على 20 عنصراً ثابتاً مسبقاً في البناء.</li>
          <li><strong>Server Component:</strong> تحويل الصفحة لتكون Server Component بالكامل بدون الحاجة لحزم جافاسكريبت ضخمة على العميل.</li>
          <li><strong>قوائم محسنة:</strong> القضاء على تفكك التخطيط (CLS) وتثبيت أبعاد العناصر بدقة.</li>
        </ul>
      </div>

      {/* Before/After Comparison */}
      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>📊 Before vs After Comparison</h2>
        
        <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
          {/* LCP Comparison */}
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: '#cbd5e1', fontSize: 14 }}>LCP (Largest Contentful Paint)</span>
              <span style={{ color: '#22d3ee', fontSize: 12 }}>Target: &lt;2.5s</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#ff6b4a', fontSize: 12, marginBottom: 4 }}>Before: {beforeMetrics.lcp}ms</div>
                <div style={{ 
                  height: 8, 
                  background: '#ff6b4a', 
                  borderRadius: 4,
                  width: `${Math.min(beforeMetrics.lcp / 50, 100)}%`
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#22d3ee', fontSize: 12, marginBottom: 4 }}>After: {afterMetrics.lcp}ms</div>
                <div style={{ 
                  height: 8, 
                  background: '#22d3ee', 
                  borderRadius: 4,
                  width: `${Math.min(afterMetrics.lcp / 50, 100)}%`
                }}></div>
              </div>
            </div>
            <div style={{ marginTop: 8, color: '#5eead4', fontSize: 12 }}>
              ✅ Improvement: {((beforeMetrics.lcp - afterMetrics.lcp) / beforeMetrics.lcp * 100).toFixed(0)}% faster
            </div>
          </div>

          {/* FID Comparison */}
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: '#cbd5e1', fontSize: 14 }}>FID (First Input Delay)</span>
              <span style={{ color: '#22d3ee', fontSize: 12 }}>Target: &lt;100ms</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#ff6b4a', fontSize: 12, marginBottom: 4 }}>Before: {beforeMetrics.fid}ms</div>
                <div style={{ 
                  height: 8, 
                  background: '#ff6b4a', 
                  borderRadius: 4,
                  width: `${Math.min(beforeMetrics.fid / 2, 100)}%`
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#22d3ee', fontSize: 12, marginBottom: 4 }}>After: {afterMetrics.fid}ms</div>
                <div style={{ 
                  height: 8, 
                  background: '#22d3ee', 
                  borderRadius: 4,
                  width: `${Math.min(afterMetrics.fid / 2, 100)}%`
                }}></div>
              </div>
            </div>
            <div style={{ marginTop: 8, color: '#5eead4', fontSize: 12 }}>
              ✅ Improvement: {((beforeMetrics.fid - afterMetrics.fid) / beforeMetrics.fid * 100).toFixed(0)}% faster
            </div>
          </div>

          {/* CLS Comparison */}
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: '#cbd5e1', fontSize: 14 }}>CLS (Cumulative Layout Shift)</span>
              <span style={{ color: '#22d3ee', fontSize: 12 }}>Target: &lt;0.1</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#ff6b4a', fontSize: 12, marginBottom: 4 }}>Before: {beforeMetrics.cls}</div>
                <div style={{ 
                  height: 8, 
                  background: '#ff6b4a', 
                  borderRadius: 4,
                  width: `${Math.min(beforeMetrics.cls * 300, 100)}%`
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#22d3ee', fontSize: 12, marginBottom: 4 }}>After: {afterMetrics.cls}</div>
                <div style={{ 
                  height: 8, 
                  background: '#22d3ee', 
                  borderRadius: 4,
                  width: `${Math.min(afterMetrics.cls * 300, 100)}%`
                }}></div>
              </div>
            </div>
            <div style={{ marginTop: 8, color: '#5eead4', fontSize: 12 }}>
              ✅ Improvement: {((beforeMetrics.cls - afterMetrics.cls) / beforeMetrics.cls * 100).toFixed(0)}% better
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Images - much smaller */}
      <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
        <div style={{ position: 'relative', width: '100%', height: 200 }}>
          <Image
            src="https://picsum.photos/400/200"
            alt="Optimized image 1"
            fill
            style={{ objectFit: 'cover', borderRadius: 8 }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
        <div style={{ position: 'relative', width: '100%', height: 200 }}>
          <Image
            src="https://picsum.photos/400/200"
            alt="Optimized image 2"
            fill
            style={{ objectFit: 'cover', borderRadius: 8 }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>

      {/* Optimized Text */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 400 }}>Optimized Typography</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6 }}>
          Using system font optimization - no massive external requests or layout shifts
        </p>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 16 }}>
          Optimized font loading with minimal network requests
        </div>
      </div>

      {/* Static Comparison Metrics */}
      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>Expected Metrics (Optimized)</h2>
        <div style={{ marginTop: 16, display: 'grid', gap: 16 }}>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>LCP (Largest Contentful Paint)</div>
            <div style={{ color: '#22d3ee', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{afterMetrics.lcp}ms</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>✅ Target: &lt;2.5s</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>FID (First Input Delay)</div>
            <div style={{ color: '#22d3ee', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{afterMetrics.fid}ms</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>✅ Target: &lt;100ms</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>CLS (Cumulative Layout Shift)</div>
            <div style={{ color: '#22d3ee', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{afterMetrics.cls}</div>
            <div style={{ color: '#5eead4', fontSize: 12 }}>✅ Target: &lt;0.1</div>
          </div>
        </div>
      </div>

      {/* Optimized Data List - static, small */}
      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>Optimized Data List (20 items - Static)</h2>
        <div style={{ maxHeight: 300, overflow: 'auto' }}>
          {STATIC_OPTIMIZED_DATA.map((item) => (
            <div key={item.id} style={{ 
              padding: 12, 
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span style={{ color: '#cbd5e1' }}>{item.name}</span>
              <span style={{ color: '#22d3ee' }}>{item.value.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
          <div style={{ color: '#22d3ee', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>✅ Optimization Details:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 14, marginTop: 8, paddingLeft: 20 }}>
            <li>Reduced data from 10,000 to 20 items (99.8% reduction)</li>
            <li>Static pre-generated data (no client-side generation)</li>
            <li>Optimized image sizes (400x200 vs 1920x1080)</li>
            <li>Server component (no client JavaScript overhead)</li>
            <li>Clean typography payload with zero layout shifts</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
        <a href="/ep/01-vitals/before" style={{ color: '#ff6b4a', textDecoration: 'none', fontSize: 16 }}>← عرض المشاكل</a>
        <a href="/ep/01-vitals" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>قائمة E01</a>
      </div>
    </main>
  );
}