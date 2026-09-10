'use client';

import { useState, useEffect, useRef } from 'react';

export default function WorkerAfter() {
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Create Web Worker
    if (typeof window !== 'undefined') {
      workerRef.current = new Worker('/heavy-worker.js');

      workerRef.current.onmessage = (e: MessageEvent<number>) => {
        setResult(e.data);
        setLoading(false);
      };
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const handleCalculate = (): void => {
    setLoading(true);
    if (workerRef.current) {
      workerRef.current.postMessage(10000000);
    }
  };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E11: Web Worker - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        مع Web Worker - حسابات ثقيلة على thread منفصل.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>With Web Worker</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          <button
            onClick={handleCalculate}
            disabled={loading}
            style={{
              padding: '12px 24px',
              borderRadius: 6,
              background: loading ? '#8d93ac' : '#5eead4',
              color: '#fff',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: 16
            }}
          >
            {loading ? 'Calculating in Worker...' : 'Start Heavy Calculation'}
          </button>
          {result > 0 && (
            <div style={{ marginTop: 16, color: '#cbd5e1' }}>
              Result: {result.toFixed(2)}
            </div>
          )}
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسين:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>الحسابات على Web Worker</li>
            <li>UI يستجيب أثناء الحساب</li>
            <li>تجربة مستخدم محسنة</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
