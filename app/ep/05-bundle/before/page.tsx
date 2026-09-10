'use client';

export default function BundleBefore() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>
        🔴 E05: Before - Bundle Size Issues
      </h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        This page demonstrates JavaScript bundle size issues.
      </p>
      <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
        <a href="/ep/05-bundle" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>
          ← العودة لقائمة E05
        </a>
        <a href="/ep/05-bundle/after" style={{ color: '#22d3ee', textDecoration: 'none', fontSize: 16 }}>
          عرض الحلول →
        </a>
      </div>
    </main>
  );
}
