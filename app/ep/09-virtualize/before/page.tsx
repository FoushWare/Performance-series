'use client';

import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  value: number;
}

export default function VirtualizeBefore() {
  const [items] = useState<Item[]>(Array.from({ length: 10000 }, (_, i: number): Item => ({
    id: i,
    name: `Item ${i}`,
    value: Math.random() * 100
  })));

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16 }}>E09: Virtualization - Before</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        بدون virtualization - render كل العناصر.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: '#ff6b4a' }}>Without Virtualization</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155', maxHeight: 400, overflow: 'auto' }}>
          {items.map((item) => (
            <div key={item.id} style={{ padding: 8, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {item.name} - {item.value.toFixed(2)}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(255, 107, 74, 0.1)", border: "1px solid rgba(255, 107, 74, 0.3)" }}>
          <div style={{ color: '#ff6b4a', fontSize: 12 }}>⚠️ المشكلة:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>Render كل 10,000 عنصر</li>
            <li>استهلاك عالي للذاكرة</li>
            <li>أداء ضعيف</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
