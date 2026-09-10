/**
 * ⚠️ BEFORE — Coffee Break Web · Episode 01: Frontend Optimization
 *
 * Every one of the 58 issues below is now ACTUALLY reproduced in code
 * (not just described in the on-page list), tagged `ISSUE #N` at the
 * exact line that causes it, so you can point to it live while recording.
 *
 * Issues #41 #42 #44 #46 #47 #48 #49 #50 (server / CI / build config) and
 * #38 (a DevTools *symptom* of #35-#40, not something you write) cannot
 * physically live inside a page component — they belong in next.config.js,
 * a custom server, or CI. They're called out in a comment block at the
 * bottom so the episode still covers all 58, with a note on where each
 * one actually lives in a real project.
 */

'use client';

// ISSUE #52: force-dynamic on a page with no actual per-request need for it
export const dynamic = 'force-dynamic';

import { useEffect, useState, useRef, useMemo, useCallback, createContext, useContext, lazy } from 'react';
import Image from 'next/image';

// ISSUE #17 + #55: barrel import from MUI instead of deep imports
import { Button, TextField, Chip, Avatar } from '@mui/material';
// ISSUE #19: importing an entire icon library instead of per-icon imports
import * as MuiIcons from '@mui/icons-material';
// ISSUE #18: importing the entire Lodash library instead of lodash-es / per-function
import _ from 'lodash';
// ISSUE #22: heavy moment.js for a task date-fns/Intl could do in a fraction of the size
import moment from 'moment';
// ISSUE #24: a second, overlapping date library alongside moment = duplicate dependency
import { format } from 'date-fns';
// ISSUE #16: recharts pulled in eagerly, adding real weight to the main bundle
import { LineChart, Line, XAxis, YAxis } from 'recharts';
// ISSUE #55/#58: Emotion CSS-in-JS (runtime style-injection overhead)
import styled from '@emotion/styled';

// ISSUE #23: dev-only debug helper with no NODE_ENV guard — ships straight to prod
import debugLogger from '../../../components/debug-logger';

// ISSUE #20: heavy component imported eagerly at the top of the module
import HeavyDataGrid from '../../../components/HeavyDataGrid';

// ISSUE #21: lazy-loaded component with NO <Suspense> boundary around its usage below
const HeavyEditor = lazy(() => import('../../../components/HeavyEditor'));

// ISSUE #56/#57: deeply nested styled() chain, used for elements plain CSS classes
// would have handled just as well
const Box1 = styled.div`padding: 4px;`;
const Box2 = styled(Box1)`border-radius: 4px;`;
const Box3 = styled(Box2)`background: #1e293b;`;
const Box4 = styled(Box3)`box-shadow: 0 1px 2px rgba(0,0,0,0.4);`; // 4 levels deep for one <div>

// ISSUE #28: Context created here; its value is rebuilt as a fresh object every
// render (see `contextValue` below) instead of being memoized
const VitalsContext = createContext<{ tick: number; heavyCount: number }>({
  tick: 0,
  heavyCount: 0,
});

// ISSUE #30: not wrapped in React.memo — re-renders every time the parent renders,
// even though its props rarely change
function ListItemRow({
  name,
  value,
  onSelect,
}: {
  name: string;
  value: number;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      style={{
        padding: 12,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ color: '#cbd5e1' }}>{name}</span>
      <span style={{ color: '#22d3ee' }}>{value.toFixed(2)}</span>
    </div>
  );
}

// ❌ Heavy computation at module level — runs on every import, blocks parsing
const MODULE_LEVEL_HEAVY_ARRAY = (() => {
  const arr = [];
  for (let i = 0; i < 50000; i++) {
    arr.push({
      id: i,
      name: `Item ${i}`,
      value: Math.random() * 1000,
      description: 'This is a long description that adds to the bundle size and memory usage',
      extra: 'Additional data to make the objects larger',
    });
  }
  return arr;
})();

// ❌ Giant base64 inline image — blocks HTML parsing (~50KB+)
const TINY_IMAGE_AS_BASE64 =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMjE1MWYiLz48L3N2Zz4=';

export default function WebVitalsBefore() {
  const [vitals, setVitals] = useState({ lcp: 0, fid: 0, cls: 0 });
  const [heavyData, setHeavyData] = useState<any[]>([]);
  const [tick, setTick] = useState(0);
  const [apiData, setApiData] = useState<any>(null);
  // ISSUE #32: a single controlled input's state lives at the top of the tree,
  // so every keystroke re-renders the whole page, including the 2000-row list
  // and the chart below, since nothing here is memoized
  const [searchText, setSearchText] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  // ISSUE #25: heavy computation repeated on every render, no useMemo
  const sortedEveryRender = [...MODULE_LEVEL_HEAVY_ARRAY]
    .sort((a, b) => a.value - b.value)
    .slice(0, 2000);

  const processedNames = sortedEveryRender.map(
    (item) => item.name.toUpperCase() + ' — ' + item.description.slice(0, 20)
  );

  // ISSUE #34: trivial, never-changing value wrapped in useMemo for no real benefit
  const staticLabel = useMemo(() => 'Core Web Vitals Measurements (Poor)', []);

  // ISSUE #28: fresh object literal every render — no useMemo — so every consumer
  // of VitalsContext re-renders even when tick/heavyData.length haven't changed
  const contextValue = { tick, heavyCount: heavyData.length };

  // ISSUE #26: new inline arrow function passed as a prop on every render,
  // defeating any memoization on the child (compounded by #30 above)
  const handleSelect = () => setTick((t) => t + 1);

  useEffect(() => {
    // ISSUE #39 + #40: long, synchronous blocking task inside useEffect (>50ms)
    const blockingStart = performance.now();
    while (performance.now() - blockingStart < 180) {
      Math.sqrt(Math.random() * 999999);
    }

    const measureVitals = () => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setVitals((prev) => ({ ...prev, lcp: Math.round(lcp.startTime) }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      setTimeout(() => {
        setVitals((prev) => ({ ...prev, fid: Math.round(Math.random() * 150 + 50) }));
      }, 2000);

      setTimeout(() => {
        setVitals((prev) => ({ ...prev, cls: Number((Math.random() * 0.3 + 0.15).toFixed(3)) }));
      }, 1000);
    };
    measureVitals();

    // ISSUE #29: setState called directly inside a loop — one commit per iteration
    for (let i = 0; i < 20; i++) {
      setTick((t) => t + 1);
    }

    const generateHeavyData = () => {
      const data = [];
      for (let i = 0; i < 10000; i++) {
        data.push({
          id: i,
          name: `Item ${i}`,
          value: Math.random() * 1000,
          description: 'This is a long description that adds to the bundle size and memory usage',
          extra: 'Additional data to make the objects larger and cause more memory pressure',
        });
      }
      setHeavyData(data);
    };
    setTimeout(generateHeavyData, 500);

    // ISSUE #45 + #53 + #54: client-side fetch to an API domain with no
    // <link rel="preconnect"> anywhere on the page, and no revalidate/cache
    // hint even though this data barely changes (semi-static)
    fetch('https://api.example.com/vitals-summary')
      .then((res) => res.json())
      .then(setApiData)
      .catch(() => setApiData({ note: 'demo endpoint, network disabled in this env' }));

    // ISSUE #23: dev-only logger fired unconditionally, ships to production
    debugLogger.trace('mounted WebVitalsBefore', { heavyArrayLen: MODULE_LEVEL_HEAVY_ARRAY.length });

    // ISSUE #18 / #22 / #24: gratuitous use of lodash + moment + date-fns for
    // something a couple of native lines could do, justifying three heavy deps
    const chunked = _.chunk(sortedEveryRender.map((i) => i.value), 500);
    void chunked;
    console.log('moment:', moment().format('YYYY-MM-DD HH:mm'));
    console.log('date-fns:', format(new Date(), 'yyyy-MM-dd HH:mm'));

    // ISSUE #35: reading offsetHeight/offsetWidth inside a loop, forcing
    // synchronous layout recalculation on every iteration (layout thrashing)
    const list = listRef.current;
    if (list && list.children.length) {
      const children = Array.from(list.children) as HTMLElement[];
      children.forEach((child) => {
        const h = child.offsetHeight;
        child.style.paddingBottom = h / 3 + 'px';
        const w = child.offsetWidth;
        child.style.paddingTop = w / 12 + 'px';
      });
    }

    // ISSUE #40 (cont'd): heavy synchronous work repeating inside an interval
    const interval = setInterval(() => {
      for (let i = 0; i < 5000; i++) {
        Math.sqrt(i * Math.random());
      }
    }, 16);

    // ISSUE #33: event listeners attached with an empty dependency array and
    // NEVER removed in the cleanup function — a classic uncontrolled effect
    window.addEventListener('scroll', () => {
      const dummy = document.body.offsetHeight; // also re-triggers #35 on scroll
      void dummy;
    });
    window.addEventListener('resize', () => {
      const dummy = document.body.offsetWidth;
      void dummy;
    });
    window.addEventListener('mousemove', (e) => {
      const el = document.querySelector('.heavy-styling');
      if (el) {
        const rect = el.getBoundingClientRect(); // #35 again, on every mouse move
        void rect;
      }
      void e;
    });

    return () => {
      clearInterval(interval);
      // scroll / resize / mousemove listeners intentionally NOT removed — issue #33
    };
  }, []);

  return (
    <VitalsContext.Provider value={contextValue}>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
        {/* ISSUE #9 + #11 + #12 + #13 + #14: Google Fonts via <link>, no preload,
            no preconnect, no subsetting, 10 weights on one family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Open+Sans:wght@300;400;600;700;800&family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* ISSUE #10: a second font link with NO &display=swap — causes FOIT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700"
          rel="stylesheet"
        />

        <h1 style={{ color: '#ff6b4a', fontSize: 28, marginBottom: 16, fontFamily: 'Merriweather, serif' }}>
          🔴 E01: Before - المشاكل الشاملة (58 مشكلة أداء)
        </h1>

        <p style={{ color: '#cbd5e1', fontSize: 16, lineHeight: 1.6 }}>
          هذه الصفحة تحاكي جميع مشاكل الأداء في Lighthouse و Performance Tab و GTmetrix.
        </p>

        <img src={TINY_IMAGE_AS_BASE64} alt="Inline base64" style={{ width: '100%', height: 'auto', marginTop: 24 }} />

        {/* ISSUE #4 + #7: next/image IS used for the Hero, but with loading="lazy"
            (the single worst image to lazy-load) and no `priority` */}
        <Image
          src="https://picsum.photos/1920/1080?random=99"
          alt="Hero image"
          width={1920}
          height={1080}
          loading="lazy"
          style={{ width: '100%', height: 'auto', marginTop: 24, borderRadius: 8 }}
        />

        {/* Issues Overview - 58 Comprehensive Performance Problems (reference list) */}
        <div
          style={{
            marginTop: 32,
            padding: 24,
            borderRadius: 12,
            background: 'rgba(255, 107, 74, 0.1)',
            border: '1px solid rgba(255, 107, 74, 0.3)',
          }}
        >
          <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 16 }}>
            ⚠️ قائمة الـ 58 مشكلة أداء الموجودة في التطبيق
          </h2>

          <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.8 }}>
            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>1. IMAGES — الصور</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>1. استخدام .png / .jpg بدلاً من WebP أو AVIF</li>
              <li>2. صور بحجم أكبر من 200 كيلوبايت بدون ضغط</li>
              <li>3. غياب loading="lazy" للعناصر أسفل الـ fold</li>
              <li>4. وضع loading="lazy" على صورة الـ Hero الرئيسية</li>
              <li>5. صور بدون width و height تسبب CLS</li>
              <li>6. عدم استخدام next/image واستخدام '&lt;img&gt;العادية</li>
              <li>7. استخدام next/image بدون priority لصورة الـ Hero</li>
              <li>8. عدم استخدام sizes وخدمة الأحجام الأصلية للموبايل</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>2. FONTS — الخطوط</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>9. تحميل Google Fonts عبر وسم link في HTML</li>
              <li>10. خطوط بدون font-display: swap</li>
              <li>11. غياب preload للخط الأساسي</li>
              <li>12. غياب preconnect لنطاق الخطوط</li>
              <li>13. تحميل ملفات خطوط كاملة (Arabic + Latin) بدون Subset</li>
              <li>14. تحميل أكثر من 4 أوزان خطوط</li>
              <li>15. استخدام @import url داخل ملفات الـ CSS</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>3. JAVASCRIPT BUNDLE — حزمة الجافاسكريبت</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>16. الحزمة الرئيسية أكبر من 300 كيلوبايت (gzip)</li>
              <li>17. Barrel imports من مكتبات مثل MUI</li>
              <li>18. استيراد مكتبة Lodash كاملة</li>
              <li>19. استيراد مكتبة أيقونات كاملة</li>
              <li>20. تحميل المكونات الثقيلة (Charts, Editors, Modals) بشكل فوري Eager</li>
              <li>21. غياب حدود Suspense للعناصر المحملة بـ lazy</li>
              <li>22. استخدام مكتبة moment.js الثقيلة</li>
              <li>23. وجود كود خاص بالمطورين (Dev-only) في حزمة الإنتاج</li>
              <li>24. وجود تبعيات مكررة (Duplicate dependencies)</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>4. REACT RENDER ISSUES — مشاكل رندر ريأكت</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>25. حسابات ثقيلة تتكرر مع كل عملية رندر بدون useMemo</li>
              <li>26. تمرير دوال جديدة inline للمكونات الابنة بدون useCallback</li>
              <li>27. عرض قوائم ضخمة بالكامل (1000+ عنصر) بدون Virtualization</li>
              <li>28. إعادة إنشاء كائن الـ Context في كل رندر بدون useMemo</li>
              <li>29. تحديثات الحالة setState داخل الحلقات (Loops)</li>
              <li>30. مكونات غير مخزنة بـ React.memo وتعيد الرسم بلا داعٍ</li>
              <li>31. استخدام key=index في القوائم القابلة لإعادة الترتيب</li>
              <li>32. إعادة رندر الشجرة كاملة عند تغيير حقل إدخال واحد</li>
              <li>33. تأثيرات useEffect تعمل بأسلوب خاطئ أو تبعيات غير منضبطة</li>
              <li>34. الإفراط في الـ Memoization بلا فائدة حقيقية</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>5. RENDERING & LAYOUT — الرسم والتخطيط</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>35. قراءة offsetHeight أو getBoundingClientRect داخل الحلقات</li>
              <li>36. تحريك خصائص مثل left / top / width بدلاً من transform</li>
              <li>37. تشغيل تأثيرات حركية CSS على خصائص غير مدعومة بالـ GPU</li>
              <li>38. حدوث Layout Thrashing وتحذيرات الأداء في DevTools</li>
              <li>39. مهام طويلة Long tasks تتجاوز 50 ميلي ثانية</li>
              <li>40. عمليات ثقيلة متزامنة داخل useEffect</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>6. NETWORK / HEADERS — الشبكة والرؤوس</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>41. غياب ضغط Gzip أو Brotli على الخادم</li>
              <li>42. غياب ترويسات التخزين المؤقت Cache-Control على الأصول الثابتة</li>
              <li>43. تقديم الخطوط من جهات خارجية ثالثة</li>
              <li>44. غياب شبكة توزيع محتوى CDN</li>
              <li>45. غياب وسم Preconnect لنطاق الـ API</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>7. BUILD & CONFIG — إعدادات البناء</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>46. إتاحة Source maps للعامة في بيئة الإنتاج</li>
              <li>47. تجاهل تحذيرات بناء الـ CI</li>
              <li>48. تعطيل StrictMode في Next.js</li>
              <li>49. ضبط compress على false في الخادم المخصص</li>
              <li>50. عدم استخدام أداة تحليل الحزم Bundle Analyzer</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>8. RENDERING MODE — نمط الرندر (Next.js)</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>51. جعل كل شيء يتبع نمط 'use client'</li>
              <li>52. استخدام force-dynamic في صفحات ثابتة بلا مبرر</li>
              <li>53. غياب revalidate للبيانات شبه الثابتة</li>
              <li>54. جلب البيانات من جهة العميل (Client-side) لبيانات ثابتة</li>
            </ul>

            <h3 style={{ color: '#ff6b4a', marginTop: 12 }}>9. CSS-IN-JS — التنسيق الديناميكي</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>55. عمليات استيراد متفرقة ومباشرة لـ MUI تؤثر على الحجم</li>
              <li>56. سلاسل تنسيق styled() متداخلة بعمق شديد</li>
              <li>57. استخدام styled المخصص للعناصر البسيطة بدلاً من أصناف CSS العادية</li>
              <li>58. تكلفة تشغيل وقت التشغيل لـ Emotion runtime في مصفوفة القياس</li>
            </ul>
          </div>
        </div>

        {/* ISSUE #1 + #2 + #3 + #5 + #6 + #8: plain <img>, no lazy on below-fold
            images, no width/height (CLS), full 1920x1080 served to every device,
            no sizes, JPEG instead of WebP/AVIF */}
        <div style={{ marginTop: 32, display: 'grid', gap: 16 }}>
          <img src="https://picsum.photos/1920/1080?random=1" alt="Heavy unoptimized image 1" style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
          <img src="https://picsum.photos/1920/1080?random=2" alt="Heavy unoptimized image 2" style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
          <img src="https://picsum.photos/1920/1080?random=3" alt="Heavy unoptimized image 3" style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
        </div>

        <div style={{ marginTop: 32, fontFamily: 'Roboto, sans-serif' }}>
          <h2 style={{ fontSize: 24, fontWeight: 300 }}>Roboto Light Text</h2>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 16 }}>
            This text uses Open Sans font without font-display: swap, causing FOIT
          </p>
          <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 18, fontWeight: 700 }}>Heavy Lato Bold Text that causes layout shift</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 20, fontWeight: 800 }}>Extra Bold Montserrat with multiple weights loaded</div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 900 }}>Heavy Playfair Display serif font</div>
          <div style={{ fontFamily: 'Merriweather, serif', fontSize: 18, fontWeight: 700 }}>Merriweather adds yet another family download</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 500 }}>Inter with 9 weights loaded</div>
        </div>

        {/* ISSUE #17 + #19 + #55: barrel-imported MUI components and full icon set */}
        <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained">MUI Button (barrel import)</Button>
          <Chip icon={<MuiIcons.Star />} label="Full icon barrel" />
          <Avatar>{MuiIcons.Home ? <MuiIcons.Home /> : 'A'}</Avatar>
          {/* ISSUE #32: this single field's state is lifted to the top of the whole
              page component, so every keystroke re-renders the 2000-row list and
              the chart further down */}
          <TextField
            size="small"
            label="Search (re-renders everything)"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* ISSUE #20: heavy chart rendered eagerly, above the fold or not */}
        <div style={{ marginTop: 32 }}>
          <LineChart width={600} height={200} data={sortedEveryRender.slice(0, 50)}>
            <XAxis dataKey="id" />
            <YAxis />
            <Line type="monotone" dataKey="value" stroke="#ff6b4a" dot={false} />
          </LineChart>
        </div>

        {/* ISSUE #20 (cont'd): another heavy component imported eagerly at module scope */}
        <HeavyDataGrid rows={heavyData.slice(0, 100)} />

        {/* ISSUE #21: lazy-loaded component rendered with NO <Suspense> wrapper —
            will throw/blank on slow connections instead of showing a fallback */}
        <HeavyEditor />

        <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 16 }}>{staticLabel}</h2>
          <div style={{ marginTop: 16, display: 'grid', gap: 16 }}>
            <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
              <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>LCP (Largest Contentful Paint)</div>
              <div style={{ color: '#ff6b4a', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{vitals.lcp}ms</div>
              <div style={{ color: '#ff6b4a', fontSize: 12 }}>❌ Poor (Target: &lt;2.5s)</div>
            </div>
            <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
              <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>FID (First Input Delay)</div>
              <div style={{ color: '#ff6b4a', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{vitals.fid}ms</div>
              <div style={{ color: '#ff6b4a', fontSize: 12 }}>❌ Poor (Target: &lt;100ms)</div>
            </div>
            <div style={{ padding: 20, borderRadius: 8, background: '#334155' }}>
              <div style={{ color: '#cbd5e1', fontSize: 14, marginBottom: 8 }}>CLS (Cumulative Layout Shift)</div>
              <div style={{ color: '#ff6b4a', fontSize: 32, fontWeight: 'bold', marginBottom: 4 }}>{vitals.cls}</div>
              <div style={{ color: '#ff6b4a', fontSize: 12 }}>❌ Poor (Target: &lt;0.1)</div>
            </div>
            {apiData && (
              <div style={{ padding: 12, borderRadius: 8, background: '#334155', fontSize: 12, color: '#94a3b8' }}>
                API (no preconnect, no revalidate): {JSON.stringify(apiData)}
              </div>
            )}
          </div>
        </div>

        {/* ISSUE #27 + #31: 2000 DOM nodes with no virtualization, key={index}
            on a list whose order can change; each row is #30 (not memoized)
            and receives #26 (a fresh inline function every render) */}
        <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ color: '#ff6b4a', fontSize: 20, marginBottom: 16 }}>Heavy Data List — 2000 DOM nodes (Causes Jank)</h2>
          <div ref={listRef} style={{ maxHeight: 400, overflow: 'auto' }} suppressHydrationWarning>
            {processedNames.map((name, index) => {
              const item = sortedEveryRender[index];
              return (
                <ListItemRow key={index} name={name} value={item.value} onSelect={handleSelect} />
              );
            })}
          </div>
        </div>

        {/* ISSUE #15 + #36 + #37: @import inside CSS, animating `width` instead
            of `transform` (forces layout, not GPU-composited) */}
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

          .heavy-styling {
            background: linear-gradient(45deg, #ff6b4a, #22d3ee, #a78bfa);
            padding: 20px;
            border-radius: 8px;
            margin-top: 32px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            font-family: 'Poppins', sans-serif;
            width: 100%;
            animation: badPulse 2s infinite;
          }

          @keyframes badPulse {
            0%, 100% { width: 100%; }
            50% { width: 99%; }
          }

          .heavy-text {
            font-size: 18px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            font-weight: 700;
          }
        `}</style>

        <div className="heavy-styling">
          <div className="heavy-text">This component uses @import CSS which blocks rendering and increases bundle size</div>
        </div>

        {/* ISSUE #56 + #57 + #58: 4-level-deep styled() chain for what is
            functionally a single <div> — plus Emotion's runtime style
            injection cost on every mount */}
        <Box4 style={{ marginTop: 32 }}>
          <span style={{ color: '#cbd5e1' }}>Deeply nested styled() chain (Box1 → Box2 → Box3 → Box4)</span>
        </Box4>

        {/* ISSUE #43: fonts served straight from a third-party domain */}
        <div style={{ marginTop: 32 }}>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 18 }}>Additional Nunito font loaded without preconnect optimization</div>
          <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: 16, marginTop: 16 }}>Extra Raleway font weights causing network congestion</div>
        </div>

        <div style={{ display: 'none' }} aria-hidden="true">
          {Array.from({ length: 500 }).map((_, i) => (
            <div key={i}>Hidden filler {i}</div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
          <a href="/ep/01-vitals" style={{ color: '#a78bfa', textDecoration: 'none', fontSize: 16 }}>← العودة لقائمة E01</a>
          <a href="/ep/01-vitals/after" style={{ color: '#22d3ee', textDecoration: 'none', fontSize: 16 }}>عرض الحلول →</a>
        </div>

        {/*
          Issues that cannot live inside a page component — shown here for
          completeness, since a real project would fix these in next.config.js /
          middleware / CI rather than in page.tsx:

          #38  Layout Thrashing warnings in DevTools — this is the *symptom* you'll
               SEE in the Performance tab as a direct result of #35-#37 above.
          #41  next.config.js has no `compress: true` (or a custom server disables it)
          #42  No Cache-Control headers set for /public assets (next.config.js headers())
          #44  No CDN in front of the deployment (e.g. no Vercel Edge/Cloudflare)
          #46  next.config.js: productionBrowserSourceMaps: true (exposes maps publicly)
          #47  CI pipeline has `continue-on-error: true` on the build/lint step
          #48  next.config.js: reactStrictMode: false
          #49  server.js (custom server): compress: false
          #50  No @next/bundle-analyzer wired into next.config.js
        */}
      </main>
    </VitalsContext.Provider>
  );
}
