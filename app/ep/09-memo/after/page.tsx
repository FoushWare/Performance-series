'use client';

import { useState, useMemo } from 'react';

export default function MemoAfter() {
  const [count, setCount] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const expensiveCalculation = useMemo<string>(() => {
    return Math.sqrt(count * 1000).toFixed(2);
  }, [count]);

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E10: Memoization - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        مع memoization - تجنب إعادة الحسابات.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>With Memoization</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', marginBottom: 16 }}>
            Result: {expensiveCalculation}
          </div>
          <button
            onClick={() => setCount(c => c + 1)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: '#5eead4',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              marginRight: 8
            }}
          >
            Increment Count ({count})
          </button>
          <button
            onClick={() => setOther(o => o + 1)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: '#a78bfa',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Increment Other ({other})
          </button>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسين:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>الحساب فقط عند تغيير count</li>
            <li>تخزين النتيجة (cache)</li>
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
