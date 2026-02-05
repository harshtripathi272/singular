# Singular Website - Performance Optimizations

This document outlines the performance optimizations implemented in the Singular website.

---

## 1. Video Compression (Massive Reduction)

The background video was the primary bottleneck. We aggressively compressed it while maintaining acceptable web quality.

| File | Size | Reduction |
|------|------|-----------|
| Original (`video.mp4`) | 34.60 MB | — |
| Intermediate (`video-optimized.mp4`) | 10.30 MB | ~70% |
| **Final (`video-final.mp4`)** | **0.53 MB** | **~98.5%** |

**Command used**:
```powershell
ffmpeg -i input.mp4 -c:v libx264 -crf 30 -preset slow -vf "scale=1280:-2" -c:a aac -b:a 96k -movflags +faststart output.mp4
```

---

## 2. Video Loading Strategy

Optimized `VideoBackground.tsx` to handle loading seamlessly without blocking the user.

### Key Changes:
- **Instant Parallel Loading**: Removed the "loading screen" that blocked content. Video now loads in parallel with the rest of the site.
- **Fade-In Effect**: Added a dark overlay that keeps the video area black until the first frame is ready, then fades out smoothly (`duration-700`).
- **Faster Event Listeners**: Switched from `canplaythrough` to `loadeddata` (fires as soon as the first frame is available).
- **Preload Auto**: Added `preload="auto"` to tell the browser to prioritize this asset.
- **Cache Busting**: Added `?v=2` query parameter to force browsers to re-download the new optimized file instead of serving the old cached 34MB version.

---

## 3. GPU Acceleration

Added hints to browsers to promote the video layer to its own compositor layer:
- **Style**: `will-change: transform` (implied in CSS/component structure) to prevent repaints during scroll or opacity changes.

---

## Summary of Improvements

| Metric | Before | After |
|--------|--------|-------|
| Video Size | 34.6 MB | 0.53 MB |
| Load Time (4G) | ~30s+ | < 1s |
| Loading UX | Blocking "LOADING" text | Instant load w/ fade-in |
| Browser Cache | Stale large file | Fresh optimized file |

---

## Files Modified

- `src/components/VideoBackground.tsx` - Loading logic, fade transition, event handling
- `public/video-final.mp4` - The new optimized asset
