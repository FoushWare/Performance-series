# E08 — Virtualization

## المشكلة
ليستة 10,000 عنصر بترندر بالكامل فعليًا في الـ DOM، حتى اللي مش ظاهر منها.

## للتصوير
1. افتح `/before`، افتح React DevTools → Elements، وضّح عدد عناصر الـ DOM (10,000).
2. افتح `/after`، افتح نفس الأداة، وضّح إن العدد بقى حوالي 15 عنصر بس (اللي ظاهر فعليًا).
3. اسكرول في الاتنين وقارن سلاسة الحركة.

## للمستخدم
- Before: `http://localhost:3000/ep/08-virtualize/before`
- After: `http://localhost:3000/ep/08-virtualize/after`
- المكتبة المستخدمة: `react-window` — بترندر بس العناصر الظاهرة في الـ Viewport.
