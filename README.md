# Frontend Optimization Playground

نفس فكرة سيزون Critical CSS بالظبط: كل حلقة ليها **Before** و **After** حقيقيين تقدر تفتحهم في تابين وتسجّلهم لايف.

## التشغيل

```bash
npm install
npm run dev
```

افتح `http://localhost:3000`.

## البنية

مشروع موحّد Next.js يحتوي على كل الحلقات في مسارات `/ep/`:

|| الحلقة | الموضوع | Before | After |
||---|---|---|---|
|| E01 | القياس (Web Vitals) | — (أداة قياس) | `/ep/01-vitals` |
|| E02 | الضغط (Gzip/Brotli) | — (أداة قياس) | `/ep/02-compression` |
|| E03 | الصور | `/ep/03-images/before` | `/ep/03-images/after` |
|| E04 | الخطوط | `/ep/04-fonts/before` | `/ep/04-fonts/after` |
|| E05 | HTTP/2/3 & Bundle | `/ep/05-bundle/before` | `/ep/05-bundle/after` |
|| E06 | أنماط الرندر | — (مقارنة استراتيجيات) | `/ep/06-rendering` |
|| E07 | Layout Thrashing | `/ep/07-layout-thrash/before` | `/ep/07-layout-thrash/after` |
|| E08 | Debounce/Throttle | `/ep/08-debounce-throttle/before` | `/ep/08-debounce-throttle/after` |
|| E09 | Virtualization | `/ep/09-virtualize/before` | `/ep/09-virtualize/after` |
|| E10 | Memoization | `/ep/09-memo/before` | `/ep/09-memo/after` |
|| E11 | Web Worker | `/ep/11-worker/before` | `/ep/11-worker/after` |
|| E12 | MUI & CSS-in-JS | `/ep/12-mui/before` | `/ep/12-mui/after` |

## طريقة الاستخدام

1. **افتح الصفحة الرئيسية**: `http://localhost:3000`
2. **اختر الحلقة**: اضغط على Before أو After للحلقة المطلوبة
3. **قارن الأداء**: افتح Before و After في تابين مختلفين
4. **سجّل المقارنة**: استخدم DevTools (Performance, Network, Lighthouse) لمقارنة الأداء

## الوثائق

- مقالات تفصيلية لكل حلقة: `docs/ARTICLES.md`
- تعليمات خاصة لكل حلقة: `docs/episode-*.md`

## الملاحظات التقنية

- مشروع موحّد: لا حاجة لتشغيل multiple dev servers
- كل حلقة في مسار منفصل: `/ep/XX-topic/before` و `/ep/XX-topic/after`
- نفس التنقل من الصفحة الرئيسية لكل الحلقات# Performance-series
