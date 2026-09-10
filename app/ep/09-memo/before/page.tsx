'use client';

import { useState } from 'react';

export default function MemoBefore() {
  const [count, setCount] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const expensiveCalculation = (): string => {
    return Math.sqrt(count * 1000).toFixed(2);
  };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E10: Memoization - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        بدون memoization - إعادة حساب غير ضرورية.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Without Memoization</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <div style={{ color: '#cbd5e1', marginBottom: 16 }}>
            Result: {expensiveCalculation()}
          </div>
          <button
            onClick={() => setCount(c => c + 1)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: '#ff6b4a',
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
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشكلة:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>إعادة الحساب مع كل render</li>
            <li>حتى لو لم تتغير القيم</li>
            <li>ضغط على الـ CPU</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
