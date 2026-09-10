'use client';

import { useState } from 'react';

export default function DebounceThrottleBefore() {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(prev => prev + 1);
  };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E08: Debounce/Throttle - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        بدون debounce أو throttle - تنفيذ متكرر غير محسّن.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Without Debounce/Throttle</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <button
            onClick={handleClick}
            style={{
              padding: '12px 24px',
              borderRadius: 6,
              background: '#ff6b4a',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: 16
            }}
          >
            Click Me rapidly! Count: {count}
          </button>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشكلة:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>كل نقرة تنفذ فوراً</li>
            <li>ضغط على الـ CPU</li>
            <li>قد يسبب مشاكل في الأداء</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
