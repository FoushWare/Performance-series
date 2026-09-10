'use client';

import { useEffect, useState } from 'react';

interface DataItem {
  id: number;
  value: string;
}

export default function HeavyComponent() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    // Simulate heavy computation
    const heavyData: DataItem[] = Array.from({ length: 1000 }, (_, i: number): DataItem => ({
      id: i,
      value: Math.sqrt(i * 1000).toFixed(2),
    }));
    setData(heavyData);
  }, []);

  return (
    <div style={{ padding: 16, borderRadius: 8, background: '#252d3f' }}>
      <div style={{ color: '#5eead4', fontSize: 14, marginBottom: 12 }}>
        Heavy Component (Dynamically Loaded)
      </div>
      <div style={{ maxHeight: 200, overflow: 'auto', fontSize: 12, color: '#8d93ac' }}>
        {data.slice(0, 50).map((item) => (
          <div key={item.id} style={{ padding: '4px 0' }}>
            Item {item.id}: {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
