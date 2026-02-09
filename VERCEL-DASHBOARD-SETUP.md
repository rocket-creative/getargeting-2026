# Vercel Dashboard Configuration Guide

**Date:** February 9, 2026  
**Issue:** Removed `vercel.json` due to schema and path issues  
**Solution:** Configure via Vercel Dashboard instead

---

## Why Dashboard Configuration?

The `vercel.json` file had issues with:
1. ❌ `rootDirectory` property not in schema
2. ❌ `buildCommand` with `cd` not working correctly
3. ❌ Path resolution issues in monorepo setup

Dashboard configuration is:
- ✅ More reliable for monorepo setups
- ✅ Doesn't require schema validation
- ✅ Can be changed without git commits
- ✅ Recommended by Vercel for this use case

---

## Configuration Steps

### Step 1: Access Project Settings

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `getargeting-2026`
3. Click **Settings** (top navigation)

### Step 2: Configure Root Directory

1. In Settings, go to **General** section
2. Scroll to **Root Directory**
3. Click **Edit**
4. Enter: `itl-website`
5. Click **Save**

**Screenshot location in UI:**
```
Settings → General → Build & Development Settings → Root Directory
```

### Step 3: Verify Framework Detection

Vercel should automatically detect:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

You don't need to change these - Vercel auto-detects from `itl-website/package.json`.

### Step 4: Save and Redeploy

1. After setting Root Directory, click **Save**
2. Go to **Deployments** tab
3. Click **Redeploy** on the latest deployment
4. Or push a new commit to trigger deployment

---

## Expected Build Process

With Root Directory set to `itl-website`, Vercel will:

```
1. Clone repo (229MB) ✅
2. Apply .vercelignore (removes 145MB dev assets) ✅
3. Change to itl-website/ directory ✅
4. Run: npm install
5. Run: npm run build
6. Deploy .next folder
```

**Estimated time:** 3-4 minutes

---

## Verification

After configuration, check the build logs for:

```
✅ Cloning completed
✅ Removed N ignored files defined in .vercelignore
✅ Running "vercel build"
✅ Detected Next.js
✅ Installing dependencies...
✅ Building...
✅ Generating static pages (337/337)
✅ Build completed
```

---

## Alternative: Manual Deploy (If Git Clone Still Fails)

If the git clone still times out (229MB might still be too large):

### Option 1: Vercel CLI Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from itl-website folder
cd itl-website
vercel --prod
```

This uploads only the necessary files, not the entire git history.

### Option 2: GitHub Actions + Vercel CLI

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [ITL_2026_MAIN]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Vercel CLI
        run: npm install -g vercel
      
      - name: Deploy to Vercel
        run: |
          cd itl-website
          vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

This deploys from GitHub Actions instead of Vercel's git integration.

---

## Current Status

✅ `vercel.json` removed (was causing errors)  
✅ `.vercelignore` in place (excludes 145MB dev assets)  
✅ Git history cleaned (229MB, down from 221MB original)  
✅ Committed and pushed to GitHub  

**Next:** Configure Root Directory in Vercel Dashboard to `itl-website`

---

## Troubleshooting

### Build still fails with "No such file or directory"
- Verify Root Directory is set to `itl-website` in dashboard
- Check that `.vercelignore` isn't excluding `itl-website/`
- Try manual deploy with Vercel CLI

### Git clone times out
- Contact Vercel support for increased timeout
- Or use Vercel CLI deployment instead
- Or implement GitHub Actions workflow

### Build succeeds but site doesn't work
- Check environment variables in Vercel dashboard
- Verify `.env.local` variables are set in Vercel
- Check build logs for missing dependencies

---

## Support

If issues persist:
- Vercel Support: https://vercel.com/support
- Include build logs
- Mention: "Monorepo with Root Directory: itl-website"
- Reference: 229MB git repo size
