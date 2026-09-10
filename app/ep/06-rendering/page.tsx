'use client';

import { useState } from 'react';

type RenderMode = 'csr' | 'ssg' | 'ssr';

export default function Rendering() {
  const [mode, setMode] = useState<RenderMode>('csr');

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E06: أنماط الرندر</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        مقارنة بين استراتيجيات الرندر المختلفة.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>Rendering Strategies</h2>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button
            onClick={() => setMode('csr')}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: mode === 'csr' ? '#ff6b4a' : '#252d3f',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            CSR
          </button>
          <button
            onClick={() => setMode('ssg')}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: mode === 'ssg' ? '#5eead4' : '#252d3f',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            SSG
          </button>
          <button
            onClick={() => setMode('ssr')}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: mode === 'ssr' ? '#a78bfa' : '#252d3f',
              color: '#fff',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            SSR
          </button>
        </div>

        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155' }}>
          {mode === 'csr' && (
            <div>
              <div style={{ color: '#ff6b4a', fontSize: 14, marginBottom: 8 }}>Client-Side Rendering</div>
              <div style={{ color: '#cbd5e1', fontSize: 12 }}>
                المحتوى يتحمل في المتصفح - View Source فاضي من المحتوى
              </div>
            </div>
          )}
          {mode === 'ssg' && (
            <div>
              <div style={{ color: '#22d3ee', fontSize: 14, marginBottom: 8 }}>Static Site Generation</div>
              <div style={{ color: '#cbd5e1', fontSize: 12 }}>
                المحتوى يُبنى وقت الـ Build - View Source فيه المحتوى
              </div>
            </div>
          )}
          {mode === 'ssr' && (
            <div>
              <div style={{ color: '#a78bfa', fontSize: 14, marginBottom: 8 }}>Server-Side Rendering</div>
              <div style={{ color: '#cbd5e1', fontSize: 12 }}>
                المحتوى يُبنى وقت الطلب - View Source فيه المحتوى
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
