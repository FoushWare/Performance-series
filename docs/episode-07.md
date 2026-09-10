# E07 — Layout Thrashing

## المشكلة
قراءة `offsetHeight` وكتابة `style` بالتبادل جوه Loop بتجبر المتصفح يعيد حساب التخطيط مع كل عنصر.

## للتصوير
1. افتح `/before`، افتح Performance panel، سجّل وانت بتدوس الزرار.
2. وقف على الأشرطة الحمرا الصغيرة المكتوب جنبها "Layout" في الـ Timeline.
3. افتح `/after`، سجّل نفس الحاجة — وضّح اختفاء الأشرطة الحمرا.
4. قارن رقم `console.time` بين الاتنين (يظهر في الـ Console).

## للمستخدم
- Before: `http://localhost:3000/ep/07-layout-thrash/before`
- After: `http://localhost:3000/ep/07-layout-thrash/after`
- القاعدة: اقرأ كل حاجة الأول، اكتب كل حاجة بعدين — متخلطش بينهم.
