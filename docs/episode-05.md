# E05 — حجم الـ Bundle (Dynamic Import)

## المشكلة
مكتبة Chart.js التقيلة متحملة Eager مع أول تحميل للصفحة، حتى لو الرسم البياني مش ظاهر أصلاً.

## للتصوير
1. افتح `/before` وسجّل Network tab من أول تحميل — وقف على حجم الـ JS اللي نزل قبل ما تعمل أي حاجة.
2. افتح `/after` وسجّل نفس الحاجة — هتلاقي Chart.js مش متحملة خالص.
3. دوس زرار "اعرض الرسم البياني" في `/after` وسجّل الـ Chunk الجديد وهو بينزل لحظتها بس.

## للمستخدم
- Before: `http://localhost:3000/ep/05-bundle/before`
- After: `http://localhost:3000/ep/05-bundle/after`
- الفرق: `next/dynamic` مع `ssr: false` بيأجل تحميل المكتبة لحد ما تتاح فعليًا.
