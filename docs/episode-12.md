# E12 — MUI Imports (الحلقة الختامية)

## المشكلة
استيراد المكتبة كلها من `@mui/material` مباشرة (Barrel Import) بدل الاستيراد المباشر لكل مكوّن.

## للتصوير
1. شغّل `npm run analyze` على `/before` — وضّح حجم `@mui/material` في تقرير الـ Bundle Analyzer.
2. اعمل نفس الحاجة على `/after` — وضّح الفرق في الحجم.

## للمستخدم
- Before: `http://localhost:3000/ep/12-mui/before`
- After: `http://localhost:3000/ep/12-mui/after`
- الفرق: كل مكوّن متستورد من مساره المباشر (`@mui/material/Button`) بدل المسار الرئيسي، عشان الـ Tree-Shaking يشتغل صح.
