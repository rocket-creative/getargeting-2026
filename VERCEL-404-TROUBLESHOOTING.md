# Vercel 404 Error Troubleshooting

**Issue:** https://getargeting-2026.vercel.app/ returns 404 Not Found  
**Date:** February 9, 2026

---

## Most Likely Causes

### 1. Root Directory Configuration Issue
**Symptom:** 404 on homepage  
**Cause:** Vercel looking in wrong directory for pages

**Fix:**
1. Go to Vercel Dashboard → Project Settings
2. Navigate to: General → Build & Development Settings
3. Check **Root Directory** is set to: `itl-website`
4. If not set, set it to `itl-website`
5. Click **Save**
6. Go to Deployments → Click **Redeploy**

---

### 2. Build Output Directory Wrong
**Symptom:** Build succeeds but 404 at runtime  
**Cause:** Vercel can't find the built `.next` folder

**Check:**
- Output Directory should be empty or `.next` (auto-detected)
- NOT `itl-website/.next` (Root Directory handles the path)

**Fix:**
1. Vercel Dashboard → Settings → General
2. Output Directory: Leave blank or set to `.next`
3. Save and redeploy

---

### 3. Missing Homepage File
**Symptom:** 404 specifically on root path  
**Cause:** No `page.tsx` at `itl-website/src/app/page.tsx`

**Check locally:**
```bash
ls -la itl-website/src/app/page.tsx
```

Should exist. If missing, this is critical.

---

### 4. Framework Detection Failed
**Symptom:** Build succeeds but deployment broken  
**Cause:** Vercel didn't detect Next.js correctly

**Check build logs for:**
```
✓ Detected Next.js
```

**If missing, fix:**
1. Settings → General → Framework Preset
2. Select: "Next.js"
3. Save and redeploy

---

### 5. Environment Variables Missing
**Symptom:** Build succeeds, runtime errors  
**Cause:** Missing required env vars

**Check:**
1. Settings → Environment Variables
2. Ensure all `NEXT_PUBLIC_*` vars are set
3. Add for all environments (Production, Preview, Development)

---

## How to Debug

### Step 1: Check Deployment Logs
1. Go to Vercel Dashboard
2. Click **Deployments**
3. Find latest deployment
4. Click **View Build Logs**

**Look for:**
- ✓ Cloning completed
- ✓ Detected Next.js
- ✓ Installing dependencies
- ✓ Building application
- ✓ Generating static pages
- ✓ Deployment ready

**Red flags:**
- ✗ Framework detection failed
- ✗ Build errors
- ✗ Missing files

### Step 2: Check Runtime Logs
1. In deployment view
2. Click **View Function Logs**
3. Look for errors when accessing homepage

### Step 3: Test Specific Routes
Try accessing different pages:
- `/` - Homepage (404?)
- `/about-itl` - About page
- `/contact` - Contact page

If other pages work but `/` doesn't, it's a homepage-specific issue.

---

## Quick Fixes

### Fix 1: Redeploy Current Commit
```bash
# Force new deployment
git commit --allow-empty -m "012_fix_trigger-vercel-redeploy"
git push origin main
```

### Fix 2: Check Vercel Project Settings
Go through this checklist in Vercel Dashboard → Settings:

**General:**
- [ ] Root Directory: `itl-website`
- [ ] Framework Preset: Next.js
- [ ] Node.js Version: 18.x or 20.x
- [ ] Install Command: (empty - auto-detect)
- [ ] Build Command: (empty - auto-detect)
- [ ] Output Directory: (empty - auto-detect)

**Git:**
- [ ] Production Branch: `main`
- [ ] Connected to: github.com/rocket-creative/getargeting-2026

### Fix 3: Clear Build Cache
1. Settings → General
2. Scroll to bottom
3. Click "Clear Build Cache"
4. Redeploy

---

## Vercel CLI Debugging

If dashboard doesn't help, use CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Check project link
cd itl-website
vercel link

# Deploy directly (bypassing git)
vercel --prod

# Check logs
vercel logs
```

---

## Expected Working Configuration

### Vercel Dashboard Settings
```
Root Directory: itl-website
Framework Preset: Next.js
Node.js Version: 20.x
Build Command: (empty)
Output Directory: (empty)
Install Command: (empty)
```

### Build Logs Should Show
```
✓ Cloning completed: 2.3s
✓ Removed 549 ignored files defined in .vercelignore
✓ Detected Next.js version 16.1.1
✓ Installing dependencies...
✓ Building...
✓ Generating static pages (337/337)
✓ Deployment ready
```

### File Structure on Vercel
```
/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Homepage (must exist!)
│   │   ├── layout.tsx
│   │   └── [other pages]/
│   ├── components/
│   └── lib/
├── public/
├── .next/                     ← Build output
├── package.json
└── next.config.ts
```

---

## Still Having Issues?

### Contact Vercel Support
1. Go to: https://vercel.com/support
2. Include:
   - Deployment URL
   - Build logs (copy/paste)
   - Error message
   - "Monorepo with Root Directory: itl-website"

### Temporary Workaround
Deploy from subdirectory using CLI:
```bash
cd itl-website
vercel --prod
```

This deploys directly from `itl-website/` folder, bypassing root directory configuration.

---

## Prevention

### Before Every Deployment:
1. Test local build: `cd itl-website && npm run build`
2. Check homepage exists: `ls itl-website/src/app/page.tsx`
3. Verify Root Directory setting in Vercel
4. Monitor first deployment closely

### Monthly Checklist:
- [ ] Verify Vercel settings haven't changed
- [ ] Test full site functionality
- [ ] Check build times (should be 3-4 min)
- [ ] Review deployment logs

---

## Current Status (Feb 9, 2026)

**Known State:**
- ✅ Root Directory set to `itl-website` in dashboard
- ✅ `vercel.json` removed from repo
- ✅ `.vercelignore` configured
- ✅ Git history cleaned
- ✅ All code merged to `main`

**Issue:**
- ❌ Homepage returns 404

**Next Step:**
1. Check Vercel deployment logs
2. Verify Root Directory setting
3. Try redeploy
4. If still fails, check runtime logs

---

## Documentation
- Main workflow: `WORKFLOW-GUIDE.md`
- Vercel setup: `VERCEL-DASHBOARD-SETUP.md`
- This file: `VERCEL-404-TROUBLESHOOTING.md`
