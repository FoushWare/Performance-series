# مقالات Frontend Optimization

المقالات دي مرتبطة بحلقات سيزون Frontend Optimization بالعربي. كل مقال يشرح موضوع تفصيلي بشكل مستقل، مفيد حتى لو مش شفت الفيديو.

## المحتويات

1. **[E01 — القياس (Web Vitals)](./01-vitals/ARTICLE.md)**
   - إزاي تقيس أداء موقعك بالأرقام
   - فهم Core Web Vitals بالتفصيل
   - أدوات القياس المتاحة

2. **[E02 — الضغط (Gzip/Brotli)](./02-compression/ARTICLE.md)**
   - مبدأ الضغط الأساسي
   - Gzip مقابل Brotli
   - تفعيل الضغط على السيرفر

3. **[E03 — الصور](./03-images/ARTICLE.md)**
   - ليه الصور مهمة جدًا للأداء
   - الصيغ المختلفة (JPEG, PNG, WebP, AVIF)
   - Lazy Loading وCaching

4. **[E04 — الخطوط](./04-fonts/ARTICLE.md)**
   - Resource Hints (preconnect, preload, prefetch)
   - تحسين الخطوط بالتفصيل
   - font-display وSubsetting

5. **[E05 — HTTP/2/3 & Bundle](./05-bundle/ARTICLE.md)**
   - تطور بروتوكولات HTTP
   - تقسيم الملفات (Code Splitting)
   - Dynamic Import في React

6. **[E06 — أنماط الرندر](./06-rendering/ARTICLE.md)**
   - Client-Side Rendering (CSR)
   - Server-Side Rendering (SSR)
   - Static Site Generation (SSG)
   - Incremental Static Regeneration (ISR)
   - React Server Components (RSC)

7. **[E07 — Layout Thrashing](./07-layout-thrash/ARTICLE.md)**
   - مبدأ القراءة والكتابة
   - Forced Synchronous Layout
   - حلول عملية لتفادي المشكلة

8. **[E08 — Debounce/Throttle](./08-debounce-throttle/ARTICLE.md)**
   - المشكلة: شغل زائد غير ضروري
   - Debounce وThrottle
   - Virtualization

9. **[E09 — Virtualization](./09-virtualize/ARTICLE.md)**
   - إيه هي Virtualization
   - كيف بيشتغل
   - المكتبات المشهورة (react-window, react-virtualized)

10. **[E10 — Memoization](./09-memo/ARTICLE.md)**
    - المشكلة: إعادة الحساب غير الضروري
    - useMemo وuseCallback وReact.memo
    - العلاقة بينهم

11. **[E11 — Web Worker](./11-worker/ARTICLE.md)**
    - Web Worker: خيط تاني للشغل التقيل
    - Service Worker: وسيط بين الموقع والشبكة
    - الفرق بينهم

12. **[E12 — MUI & CSS-in-JS](./12-mui/ARTICLE.md)**
    - إيه هو CSS-in-JS
    - المشكلة الأساسية: Runtime CSS
    - إزاي تقلل التكلفة

## إزاي تستخدم المقالات

كل مقال مستقل، تقدر تقراه من غير ما تشوف الفيديو. لكن لو شفت الفيديو، المقال بيزود معلومات تفصيلية وأمثلة عملية إضافية.

## للمطورين

المقالات دي مكتوبة بشكل يجمع بين:
- الشرح النظري البسيط
- الأمثلة العملية بالكود
- المقارنات بالأرقام
- خطوات عملية للتنفيذ

## للمستخدمين العرب

المقالات دي مكتوبة بالعربي المبسط، مستهدفة المطورين العرب اللي عايزين يفهموا موضوعات تحسين الأداء بعمق.
