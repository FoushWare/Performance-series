'use client';

import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  value: number;
}

interface VisibleRange {
  start: number;
  end: number;
}

export default function VirtualizeAfter() {
  const [items] = useState<Item[]>(Array.from({ length: 10000 }, (_, i: number): Item => ({
    id: i,
    name: `Item ${i}`,
    value: Math.random() * 100
  })));
  const [visibleRange, setVisibleRange] = useState<VisibleRange>({ start: 0, end: 20 });

  // Simulated virtualization - only render visible items
  const visibleItems = items.slice(visibleRange.start, visibleRange.end);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const scrollTop = e.currentTarget.scrollTop;
    const itemHeight = 40;
    const start = Math.floor(scrollTop / itemHeight);
    const end = start + 20;
    setVisibleRange({ start, end });
  };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ color: '#22d3ee' }}>E09: Virtualization - After</h1>
      <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
        مع virtualization - render العناصر المرئية فقط.
      </p>

      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,.09)' }}>
        <h2 style={{ color: "#22d3ee", fontSize: 20, marginBottom: 16 }}>With Virtualization</h2>
        <div style={{ marginTop: 16, padding: 16, borderRadius: 8, background: '#334155', maxHeight: 400, overflow: 'auto' }} onScroll={handleScroll}>
          <div style={{ height: items.length * 40 }}>
            {visibleItems.map((item) => (
              <div key={item.id} style={{ padding: 8, borderBottom: '1px solid rgba(255,255,255,0.1)', height: 40 }}>
                {item.name} - {item.value.toFixed(2)}
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.3)" }}>
          <div style={{ color: '#22d3ee', fontSize: 12 }}>✅ التحسين:</div>
          <ul style={{ color: '#cbd5e1', fontSize: 12, marginTop: 8 }}>
            <li>Render فقط 20 عنصر مرئي</li>
            <li>استهلاك منخفض للذاكرة</li>
            <li>أداء ممتاز</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ color: "#a78bfa", textDecoration: "none", fontSize: 16 }}>← العودة للرئيسية</a>
      </div>
    </main>
  );
}
