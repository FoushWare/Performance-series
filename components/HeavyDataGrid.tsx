'use client';

// ISSUE #20: heavy component imported eagerly at the top of the module
// This simulates a complex data grid component with heavy rendering

interface Row {
  id: number;
  name: string;
  value: number;
}

export default function HeavyDataGrid({ rows }: { rows: Row[] }) {
  // ISSUE #20: Heavy computation during render
  const heavyComputation = () => {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += Math.sqrt(i * Math.random());
    }
    return result;
  };

  const computed = heavyComputation();

  return (
    <div style={{ 
      marginTop: 32, 
      padding: 24, 
      borderRadius: 12, 
      background: '#1e293b', 
      border: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <h3 style={{ color: '#ff6b4a', fontSize: 18, marginBottom: 16 }}>
        Heavy Data Grid Component (Eager Load)
      </h3>
      <div style={{ maxHeight: 300, overflow: 'auto' }}>
        {rows.map((row) => (
          <div 
            key={row.id}
            style={{ 
              padding: 8, 
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span style={{ color: '#cbd5e1' }}>{row.name}</span>
            <span style={{ color: '#22d3ee' }}>{row.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, fontSize: 12, color: '#94a3b8' }}>
        Heavy computation result: {computed.toFixed(2)}
      </div>
    </div>
  );
}
