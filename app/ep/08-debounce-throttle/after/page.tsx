'use client';

import { useState, useCallback } from 'react';

export default function DebounceThrottleAfter() {
  const [count, setCount] = useState<number>(0);

  // Debounced function
  const debounce = <T extends (...args: any[]) => any>(func: T, delay: number): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<T>) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleClick = useCallback(
    debounce(() => {
      setCount(prev => prev + 1);
    }, 300),
    []
  );

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E08: Debounce/Throttle - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        مع debounce - تنفيذ محسّن.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>With Debounce</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <button
            onClick={handleClick}
            style={{
              padding: '12px 24px',
              borderRadius: 6,
              background: '#5eead4',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: 16
            }}
          >
            Click Me rapidly! Count: {count}
          </button>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسين:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>Debounce - ينتظر التوقف عن النقر</li>
            <li>تقليل الضغط على الـ CPU</li>
            <li>أداء محسن</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
