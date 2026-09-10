# Lighthouse Verification Checklist

## ⚠️ Important: Production Build Only

**Never trust Lighthouse scores on `npm run dev`** — dev builds are unminified and React runs in development mode.

## Production Test Procedure

### 1. Build the Production Version

```bash
npm run build
```

### 2. Start the Production Server

```bash
npm run start
```

### 3. Test in an Incognito Browser Window

Open the application in an Incognito/Private window to avoid extension interference:
- Default: `http://localhost:3000`
- If port 3000 is occupied: `http://localhost:3001`

### 4. Run Lighthouse Audits

Open Chrome DevTools → Lighthouse tab, then run audits on:

#### Home Page
- URL: `http://localhost:3000`
- Categories: Performance, Accessibility, Best Practices, SEO

#### Episode Pages (Sample)
- E01 Before: `http://localhost:3000/ep/01-vitals/before`
- E01 After: `http://localhost:3000/ep/01-vitals/after`
- E03 Before: `http://localhost:3000/ep/03-images/before`
- E03 After: `http://localhost:3000/ep/03-images/after`

#### Expected Results

**E01 After (Optimized):**
- LCP: < 2.5s (Good)
- FID: < 100ms (Good)
- CLS: < 0.1 (Good)

**E01 Before (Intentionally Poor):**
- LCP: > 4.0s (Poor) - intentional baseline
- FID: > 100ms (Poor) - intentional baseline
- CLS: > 0.25 (Poor) - intentional baseline

## Manual Verification Tools

### Performance Panel
1. Open Chrome DevTools → Performance tab
2. Click "Record"
3. Interact with the page
4. Stop recording and analyze:
   - Long tasks (> 50ms)
   - Main thread activity
   - Script evaluation time

### Network Panel
1. Open Chrome DevTools → Network tab
2. Reload the page
3. Check:
   - Image formats (WebP/AVIF preferred)
   - Compression (gzip/brotli)
   - Font loading (font-display: swap)
   - Preconnect hints working

### Additional Verification

#### Image Optimization
- Check Network tab for image requests
- Verify WebP/AVIF formats are used (on E03 After, E01 After)
- Verify lazy loading on non-hero images

#### Font Optimization
- Check Network tab for font requests
- Verify only 2 weights of Tajawal are loaded
- Verify font-display: swap is applied
- No Google Fonts `<link>` tags in optimized pages

#### Bundle Size
- Check Network tab for JavaScript bundles
- Verify static pages have minimal JavaScript (converted to server components)
- E02, E03, E04, E05, E07 should be ~160B (server components)

#### Server Components
- View page source - HTML should be fully rendered
- Check that static pages don't hydrate unnecessarily

## Real-World Field Data

For production deployments, use:
- **Vercel Speed Insights** (if deployed on Vercel)
- **Sentry** (for error tracking and performance)
- **Chrome UX Report (CrUX)** - real user metrics from Chrome

## Build Summary

### Final Build Results
- **Build Time:** ~8 seconds
- **Total Pages:** 27 static pages
- **First Load JS (shared):** 87.3 kB
  - chunks/2200cc46-a09922c24e4368fb.js: 53.6 kB
  - chunks/945-1c211e57d71e9eab.js: 31.7 kB
  - other shared chunks: 1.99 kB
- **Warnings:** None
- **Errors:** None

### Optimizations Applied

#### FONTS
- ✅ Replaced Google Fonts `<link>` with `next/font/google`
- ✅ Limited to 2 weights (400, 700)
- ✅ Added `font-display: swap`
- ✅ Added Arabic subset loading

#### IMAGES
- ✅ Replaced raw `<img>` with Next.js `<Image>` in E01 After
- ✅ Added `fill` prop with proper container sizing
- ✅ Added `loading="lazy"` for non-hero images
- ✅ Added `sizes` prop for responsive images
- ✅ Added preconnect for picsum.photos

#### JAVASCRIPT BUNDLE
- ✅ Removed production `console.log` statements

#### REACT RENDER
- ✅ Fixed index keys to use stable identifiers (`row.ep` instead of index)

#### LAYOUT/CSS
- ✅ Removed unnecessary `transition: 'all'` properties

#### NETWORK/CONFIG
- ✅ Added preconnect for picsum.photos
- ✅ Config already has `compress: true`
- ✅ Config already has `productionBrowserSourceMaps: false`
- ✅ Config already has `reactStrictMode: true`

#### NEXT.JS RENDER MODE
- ✅ Converted 9 static pages to server components (E02, E03, E04, E05, E07)
- ✅ Removed unnecessary `'use client'` directives
- ✅ Reduced page sizes from ~900B to ~160B for static pages

#### CSS-IN-JS
- ✅ No CSS-in-JS libraries installed (not applicable)

## Known Educational Baselines

The following pages are intentionally unoptimized for educational purposes:

### E01 Before (`/ep/01-vitals/before`)
- Intentionally poor LCP, FID, CLS scores
- Multiple Google Fonts links
- Large unoptimized images (1920x1080)
- Heavy data generation (10,000 items)
- CSS @import blocking rendering

### E03 Before (`/ep/03-images/before`)
- Raw `<img>` tags without Next.js Image
- No automatic WebP/AVIF conversion
- Manual lazy loading (less effective)

These pages serve as the "before" state to demonstrate optimization impact.

## Troubleshooting

### Port Already in Use
If port 3000 is occupied, Next.js will automatically try port 3001. Check the terminal output for the actual URL.

### Lighthouse Scores Don't Match Expected
- Ensure you're running production build (`npm run build && npm run start`)
- Test in Incognito/Private window
- Clear browser cache before testing
- Disable browser extensions that might interfere

### Images Not Loading
- Verify `next.config.js` has picsum.photos in `remotePatterns`
- Check browser console for CORS errors
- Ensure images are loaded from HTTPS

## Next Steps

1. Deploy to production (Vercel, Netlify, etc.)
2. Set up real user monitoring (RUM)
3. Monitor Core Web Vitals in production
4. Compare E01 Before vs After scores to demonstrate optimization impact
