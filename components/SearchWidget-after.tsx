/**
 * 🟢 AFTER — SearchWidget (Client Component island)
 *
 * FIX #32: this is the ONLY client-side, interactive part of the After
 * page. Typing in the search box re-renders this small island — never the
 * Server-rendered hero image, fonts, or anything else in page-after.tsx.
 * That's the real-world fix for "everything is 'use client'" (#51): make
 * the client boundary as small as possible, not the whole page.
 */
'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, memo } from 'react';

type Item = { id: string; name: string; value: number };

// FIX #28: a real Context, but its value is memoized below with useMemo —
// consumers only re-render when `selectedId` itself actually changes.
const SelectionContext = createContext<{ selectedId: string | null }>({ selectedId: null });

// FIX #30: wrapped in React.memo — with a stable `onSelect` (useCallback,
// FIX #26) and a stable `key` (FIX #31, item.id not index), this row only
// re-renders when ITS OWN props change, not on every parent re-render.
const Row = memo(function Row({ item, onSelect }: { item: Item; onSelect: (id: string) => void }) {
  const { selectedId } = useContext(SelectionContext);
  return (
    <div
      onClick={() => onSelect(item.id)}
      style={{
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        background: selectedId === item.id ? 'rgba(34,211,238,0.08)' : 'transparent',
      }}
    >
      <span style={{ color: '#cbd5e1' }}>{item.name}</span>
      <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>{item.value}</span>
    </div>
  );
});

export default function SearchWidget({ items }: { items: Item[] }) {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // FIX #25: derived data recomputed only when its real inputs change,
  // not on every render (contrast with the Before file's sort-on-every-render).
  const filtered = useMemo(
    () => items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  // FIX #26: a single stable function identity, passed to every Row —
  // combined with React.memo (#30) this actually prevents re-renders.
  const handleSelect = useCallback((id: string) => {
    setSelectedId(id); // FIX #29: one state update, not a loop of them
  }, []);

  // FIX #28: memoized context value — a plain `{ selectedId }` literal here
  // would defeat the whole point of Context, exactly like the Before file.
  const contextValue = useMemo(() => ({ selectedId }), [selectedId]);

  // FIX #33: a real effect with a real dependency array and a real cleanup —
  // no listeners left dangling after unmount, unlike the Before file.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setQuery('');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // FIX #34: NOT memoized — it's a plain string literal, recomputing it
  // costs nothing, so wrapping it in useMemo (as the Before file does)
  // would just be overhead with zero benefit.
  const resultsLabel = `${filtered.length} of ${items.length} items`;

  // FIX #27: this dataset is 15 items, so no virtualization is needed —
  // if it were 1000+ rows, this is the exact spot you'd swap `filtered.map` 
  // for react-window / @tanstack/react-virtual instead of rendering
  // every row, as the Before file does with its 2000-node list.
  return (
    <SelectionContext.Provider value={contextValue}>
      <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid rgba(255,255,255,0.15)',
            background: '#0f172a',
            color: '#f8fafc',
          }}
        />
        <span style={{ color: '#64748b', fontSize: 12, whiteSpace: 'nowrap' }}>{resultsLabel}</span>
      </div>
      <div style={{ maxHeight: 300, overflowY: 'auto' }}>
        {filtered.map((item) => (
          <Row key={item.id} item={item} onSelect={handleSelect} />
        ))}
      </div>
    </SelectionContext.Provider>
  );
}
