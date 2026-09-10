# E04 — الخطوط وResource Hints

## المشكلة
الخط بيتحمل متأخر من غير preconnect ولا preload، فبيحصل تبديل ملحوظ في شكل النص (FOUT).

## للتصوير
1. افتح `/before` وسجّل Network tab — وقف على توقيت تحميل ملف الخط.
2. حدّث الصفحة ببطء ووضّح لحظة تغيّر شكل النص.
3. افتح `/after` — وضّح إن next/font بيحمّل الخط بأولوية preload من غير أي تبديل ملحوظ.

## للمستخدم
- Before: `http://localhost:3000/ep/04-fonts/before`
- After: `http://localhost:3000/ep/04-fonts/after`
- الفرق الأساسي: `next/font/google` بيعمل self-host وpreload تلقائي، حتى لو مطبق على صفحة واحدة بس مش الـ layout الرئيسي.
