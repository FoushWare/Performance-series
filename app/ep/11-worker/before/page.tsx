'use client';

import { useState } from 'react';

export default function WorkerBefore() {
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const heavyCalculation = (n: number): number => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += Math.sqrt(i);
    }
    return total;
  };

  const handleCalculate = (): void => {
    setLoading(true);
    setTimeout(() => {
      const calculatedResult = heavyCalculation(10000000);
      setResult(calculatedResult);
      setLoading(false);
    }, 100);
  };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E11: Web Worker - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        بدون Web Worker - حسابات ثقيلة على الـ main thread.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Without Web Worker</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <button
            onClick={handleCalculate}
            disabled={loading}
            style={{
              padding: '12px 24px',
              borderRadius: 6,
              background: loading ? '#8d93ac' : '#ff6b4a',
              color: '#fff',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: 16
            }}
          >
            {loading ? 'Calculating...' : 'Start Heavy Calculation'}
          </button>
          {result > 0 && (
            <div style={{ marginTop: 16, color: '#cbd5e1' }}>
              Result: {result.toFixed(2)}
            </div>
          )}
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشكلة:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>الحسابات على الـ main thread</li>
            <li>UI يتجمد أثناء الحساب</li>
            <li>تجربة مستخدم سيئة</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
