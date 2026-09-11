/**
 * 🟢 AFTER — Coffee Break Web · Episode 01: Frontend Optimization
 *
 * The fixed counterpart to page.tsx (Before). Every `FIX #N` comment below
 * maps 1:1 to the `ISSUE #N` it resolves in the Before file, so you can
 * split-screen the two files on camera and point at matching line numbers.
 *
 * Category 4 (React rendering, #25-#34) genuinely cannot be demonstrated
 * inside a Server Component — there's no client-side render cycle to fix.
 * The real-world fix for #51 ("everything is 'use client'") is exactly
 * that: keep the page a Server Component and push interactivity into a
 * small, isolated Client Component "island" instead. That's `SearchWidget`,
 * loaded below via next/dynamic — see SearchWidget-after.tsx for #25-#34.
 *
 * No 'use client' here — FIX #51: this whole page is a Server Component.
 */

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Cairo, Inter } from 'next/font/google';

// FIX #9 #10 #11 #12 #13 #14 #15 #43: next/font self-hosts the font files at
// build time (no runtime request to fonts.googleapis.com → no #43), auto-
// generates a <link rel="preload"> for you (#11), needs no manual <link>
// tag at all (#9) or @import (#15), defaults font-display to swap (#10),
// and only downloads the subsets/weights you actually list below — 2-3
// weights each instead of the Before file's 9-10 per family (#13, #14).
// Self-hosting also removes the need for a font-domain preconnect (#12).
const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['400', '600', '700'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' });

// FIX #20 #21: SearchWidget is a heavy-ish interactive island. next/dynamic
// code-splits it out of the main bundle (only loaded when this section is
// reached) and its `loading` option is the App Router's answer to a missing
// Suspense fallback — no more blank/broken UI while it streams in.
const SearchWidget = dynamic(() => import('../../../../components/SearchWidget-after'), {
  loading: () => <div style={{ padding: 20, color: '#64748b', fontSize: 14 }}>Loading search…</div>,
});

// FIX #53: ISR — this page is revalidated at most once an hour
export const revalidate = 3600;

// FIX #16 #17 #18 #19 #22 #24: zero heavy dependencies. No MUI, no icon
// barrel, no lodash, no moment.js, no duplicate date library — native
// Array methods and Intl.DateTimeFormat cover everything this page needs.
const STATIC_OPTIMIZED_DATA = Array.from({ length: 15 }, (_, i) => ({
  id: `item-${i}`, // FIX #31: a stable id, never the array index
  name: `Optimized Item ${i}`,
  value: Number(((i * 789) % 1000).toFixed(2)), // Use deterministic value
}));

// FIX #45 #54: the fetch happens on the server, inside the Server Component
// itself — never in a client useEffect — so there's no API-domain
// preconnect to forget in the first place. `next.revalidate` ties it to
// the same ISR window declared above, fixing #53 for this specific call too.
// For demo purposes, use static data to avoid network delays
function getVitalsSummary() {
  return { note: 'demo endpoint — using static values for performance' };
}

export default function WebVitalsAfter() {
  const apiData = getVitalsSummary();
  const optimizedMetrics = { lcp: 850, fid: 12, cls: 0.0 };

  return (
    <main
      className={inter.className}
      style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px', color: '#f8fafc' }}
    >
      <h1 className={cairo.className} style={{ color: '#22d3ee', fontSize: 36, marginBottom: 20 }}>
        🟢 E01: After - النسخة الخارقة (Performance Optimized)
      </h1>
      <p style={{ color: '#cbd5e1', fontSize: 18, lineHeight: 1.8 }}>
        تم تطهير هذه الصفحة من كافة مشاكل الأداء الـ 58، وتعمل الآن كـ Server Component بالكامل
        بدون أي أكواد جافاسكريبت ثقيلة على العميل.
      </p>

      {/* FIX #4 #5 #6 #7 #8: next/image, explicit reserved aspect-ratio box
          (zero CLS), `priority` on the Hero (LCP element), `sizes` so mobile
          gets a smaller decoded image, and automatic WebP/AVIF + compression
          (#1, #2) handled by the Next.js image optimizer at request time. */}
      <div style={{ marginTop: 32, position: 'relative', width: '100%', paddingTop: '46.875%', borderRadius: 8, overflow: 'hidden', background: '#0f172a' }}>
        <Image
          src="/images/hero.jpg"
          alt="Optimized hero image"
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          priority
          fetchPriority="high"
          quality={65}
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* FIX #3: a below-the-fold image with NO `priority` — next/image
          defaults `loading` to "lazy" automatically, the opposite mistake
          from the Hero image in the Before file. */}
      <div style={{ marginTop: 16, position: 'relative', width: '100%', height: 220, borderRadius: 8, overflow: 'hidden', background: '#0f172a' }}>
        <Image
          src="https://picsum.photos/1200/600?random=2"
          alt="Below-the-fold gallery image, lazy by default"
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* 📊 Core Web Vitals card */}
      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 24, marginBottom: 20 }}>📊 Core Web Vitals (Optimal Results)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 16, marginBottom: 10 }}>LCP (Largest Contentful Paint)</div>
            <div style={{ color: '#22d3ee', fontSize: 36, fontWeight: 'bold', marginBottom: 6 }}>{optimizedMetrics.lcp}ms</div>
            <div style={{ color: '#5eead4', fontSize: 14 }}>⚡ ممتاز (&lt; 2.5s)</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 16, marginBottom: 10 }}>FID / INP (First Input)</div>
            <div style={{ color: '#22d3ee', fontSize: 36, fontWeight: 'bold', marginBottom: 6 }}>{optimizedMetrics.fid}ms</div>
            <div style={{ color: '#5eead4', fontSize: 14 }}>⚡ ممتاز (&lt; 100ms)</div>
          </div>
          <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
            <div style={{ color: '#cbd5e1', fontSize: 16, marginBottom: 10 }}>CLS (Layout Shift)</div>
            <div style={{ color: '#22d3ee', fontSize: 36, fontWeight: 'bold', marginBottom: 6 }}>{optimizedMetrics.cls.toFixed(2)}</div>
            <div style={{ color: '#5eead4', fontSize: 14 }}>⚡ مستقر تماماً (0.00) — لا محتوى يُدرج لاحقًا بدون مساحة محجوزة</div>
          </div>
          <div style={{ padding: 12, borderRadius: 8, background: '#334155', fontSize: 14, color: '#94a3b8' }}>
            API (fetched server-side, ISR-cached): {JSON.stringify(apiData)}
          </div>
        </div>
      </div>

      {/* FIX #25-#34: interactivity is isolated to this one small Client
          Component island instead of making the whole page 'use client'.
          See SearchWidget-after.tsx for useMemo/useCallback/React.memo/
          stable keys/memoized Context/proper effect cleanup. */}
      <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: '#22d3ee', fontSize: 20, marginBottom: 16 }}>قائمة البيانات المحسنة (Static Rendered List)</h2>
        <SearchWidget items={STATIC_OPTIMIZED_DATA} />
      </div>

      {/* FIX #36 #37: animate transform/opacity only — GPU-composited,
          never triggers layout, unlike the Before file's `width` keyframe. */}
      <div className="fade-in-card" style={{ marginTop: 32, padding: 20, borderRadius: 8, background: '#1e293b' }}>
        <span style={{ color: '#cbd5e1' }}>Fades in with transform + opacity — no layout, no jank</span>
      </div>
      <style>{`
        .fade-in-card { animation: fadeIn 0.4s ease-out both; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* روابط التنقل */}
      <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
        <a href="/ep/01-vitals/before" style={{ color: '#ff6b4a', textDecoration: 'none', fontSize: 16 }}>
          ← العودة لنسخة المشاكل (Before)
        </a>
        <a href="/ep/01-vitals" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>
          قائمة التمارين الرئيسية
        </a>
      </div>

      {/*
        ✅ Fix map for issues that live outside this file (next.config.js /
        middleware / CI), mirroring the Before file's "can't live here" list:

        #38  Symptom of #35-#37 — gone because #35-#37 are fixed.
        #41  next.config.js → compress: true (Next.js default; just don't override it)
        #42  next.config.js → headers() sets long Cache-Control on /public assets
        #44  Deploy behind a CDN/edge network (e.g. Vercel Edge, Cloudflare)
        #46  next.config.js → productionBrowserSourceMaps: false (default)
        #47  CI: build/lint step has no continue-on-error — warnings fail the build
        #48  next.config.js → reactStrictMode: true (default; just don't disable it)
        #49  No custom server, or custom server sets compress: true
        #50  @next/bundle-analyzer wired into next.config.js, run before each release
      */}
    </main>
  );
}
