'use client';

// ISSUE #21: lazy-loaded component with NO <Suspense> boundary around its usage below
// This simulates a heavy rich text editor component

export default function HeavyEditor() {
  // ISSUE #21: Heavy computation during render for the editor
  const editorState = () => {
    const state = {
      content: '',
      history: [],
      selection: { start: 0, end: 0 }
    };
    
    // Simulate expensive editor initialization
    for (let i = 0; i < 5000; i++) {
      state.history.push({
        content: `Change ${i}`,
        timestamp: Date.now()
      });
    }
    
    return state;
  };

  const state = editorState();

  return (
    <div style={{ 
      marginTop: 32, 
      padding: 24, 
      borderRadius: 12, 
      background: '#1e293b', 
      border: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <h3 style={{ color: '#ff6b4a', fontSize: 18, marginBottom: 16 }}>
        Heavy Editor Component (Lazy Load without Suspense)
      </h3>
      <textarea
        style={{ 
          width: '100%', 
          height: 120, 
          background: '#0f172a', 
          color: '#cbd5e1', 
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8,
          padding: 12
        }}
        placeholder="Heavy rich text editor placeholder..."
      />
      <div style={{ marginTop: 16, fontSize: 12, color: '#94a3b8' }}>
        Editor history size: {state.history.length} changes
      </div>
    </div>
  );
}
