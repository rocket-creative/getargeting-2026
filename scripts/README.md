# SEO Migration Automation Scripts

These scripts help ensure zero SEO loss during the migration from genetargeting.com to your new domain.

## Prerequisites

```bash
npm install  # Make sure dependencies are installed
```

## Scripts Overview

### 1️⃣ URL Mapping Generator
**File:** `01-url-mapping-generator.js`  
**Purpose:** Compares old sitemap to new pages, suggests redirect rules

```bash
node scripts/01-url-mapping-generator.js
```

**Output:**
- Console report of exact matches, needed redirects, missing pages
- `SUGGESTED-REDIRECTS.json` - Redirect rules to add to next.config.js

**When to run:** Pre-launch (1 week before)

---

### 2️⃣ Sitemap Generator
**File:** `02-sitemap-generator.js`  
**Purpose:** Generates sitemap.xml with all pages, proper priorities

```bash
# Use default domain
node scripts/02-sitemap-generator.js

# Or specify your domain
node scripts/02-sitemap-generator.js https://www.yourdomain.com
```

**Output:**
- `itl-website/public/sitemap.xml` - Your sitemap
- `SITEMAP-SUMMARY.json` - Statistics and validation

**When to run:** Pre-launch, regenerate if pages change

---

### 3️⃣ Metadata Audit
**File:** `03-metadata-audit.js`  
**Purpose:** Scans all pages for SEO issues, wrong canonicals

```bash
# Use default domain
node scripts/03-metadata-audit.js

# Or specify your new domain
node scripts/03-metadata-audit.js https://www.yourdomain.com
```

**Output:**
- Console report of critical issues, warnings
- `METADATA-AUDIT-REPORT.json` - Detailed findings

**What it checks:**
- Missing metadata
- Title too short/long (should be 50-60 chars)
- Description too short/long (should be 150-160 chars)
- Canonical URLs pointing to old domain
- Missing Open Graph tags

**When to run:** Pre-launch (3 days before), fix critical issues first

**Exit codes:**
- 0 = All good
- 1 = Critical issues found (blocks CI/CD)

---

### 4️⃣ Redirect Tester
**File:** `04-redirect-tester.js`  
**Purpose:** Tests all redirects work correctly (301 status, right destination)

```bash
# Test in staging
node scripts/04-redirect-tester.js https://staging.yourdomain.com

# Test in production (after launch)
node scripts/04-redirect-tester.js https://www.yourdomain.com
```

**Output:**
- Console report of passed/failed redirects
- `REDIRECT-TEST-REPORT.json` - Detailed results

**What it tests:**
- Status code is 301 (permanent)
- Location header points to correct destination
- No redirect chains or loops

**When to run:** 
- Staging (day before launch)
- Production (immediately after launch)
- After adding new redirects

**Exit codes:**
- 0 = All redirects working
- 1 = Some redirects failed

---

### 5️⃣ 404 Monitor
**File:** `05-404-monitor.js`  
**Purpose:** Monitors for 404 errors, suggests missing redirects

```bash
# Read from log file
node scripts/05-404-monitor.js /path/to/access.log

# Or pipe from Vercel
vercel logs your-deployment-url | node scripts/05-404-monitor.js

# Or pipe from local dev server
npm run dev 2>&1 | node scripts/05-404-monitor.js
```

**Output:**
- Console report of top 404s by frequency
- `404-MONITOR-REPORT.json` - Detailed analysis with referrers

**What it tracks:**
- URL that 404'd
- How many times
- Where traffic came from (referrer)
- Bot vs human traffic

**When to run:** 
- First 24 hours after launch (hourly)
- Days 2-7 after launch (daily)
- Ongoing monitoring (weekly)

---

## Recommended Workflow

### Week Before Launch

```bash
# 1. Generate URL mappings
node scripts/01-url-mapping-generator.js

# 2. Review SUGGESTED-REDIRECTS.json
# 3. Add redirects to next.config.js

# 4. Generate sitemap
node scripts/02-sitemap-generator.js https://www.yourdomain.com

# 5. Audit metadata
node scripts/03-metadata-audit.js https://www.yourdomain.com

# 6. Fix any critical issues
```

### Day Before Launch

```bash
# Test redirects in staging
node scripts/04-redirect-tester.js https://staging.yourdomain.com

# Fix any failures
```

### Launch Day

```bash
# 1. Deploy to production
# 2. Update DNS

# 3. Test redirects immediately
node scripts/04-redirect-tester.js https://www.yourdomain.com
```

### First 24 Hours

```bash
# Monitor 404s every 2-4 hours
vercel logs production | node scripts/05-404-monitor.js

# Add missing redirects as needed
# Re-run redirect tester after fixes
```

### First Week

```bash
# Daily 404 monitoring
# Check Google Search Console for issues
# Re-run metadata audit if pages change
```

---

## Automation in CI/CD

Add to your GitHub Actions / deployment pipeline:

```yaml
# .github/workflows/pre-deploy.yml
- name: Audit Metadata
  run: node scripts/03-metadata-audit.js https://www.yourdomain.com

- name: Generate Sitemap
  run: node scripts/02-sitemap-generator.js https://www.yourdomain.com
  
- name: Test Redirects (after deploy)
  run: node scripts/04-redirect-tester.js https://staging.yourdomain.com
```

---

## Troubleshooting

### "Cannot find module"
```bash
cd itl-website
npm install
cd ..
```

### "No such file: /tmp/old_urls.txt"
The URL mapping generator needs the old sitemap. Run this first:
```bash
curl -s "https://www.genetargeting.com/sitemap.xml" > /tmp/old_sitemap.xml
cat /tmp/old_sitemap.xml | grep '<loc>' | sed 's/.*<loc>//;s/<\/loc>.*//' > /tmp/old_urls.txt
```

### Redirect tester times out
- Check if domain is accessible
- Increase timeout in script (default 5s)
- Test fewer redirects at once

### 404 monitor shows no data
- Make sure logs contain 404 errors
- Try different log format (JSON vs text)
- Pipe logs directly: `tail -f access.log | node scripts/05-404-monitor.js`

---

## Files Generated

| File | Purpose | Keep? |
|------|---------|-------|
| `SUGGESTED-REDIRECTS.json` | Redirect rules to implement | Review then delete |
| `SITEMAP-SUMMARY.json` | Sitemap statistics | Optional |
| `METADATA-AUDIT-REPORT.json` | SEO issues found | Archive |
| `REDIRECT-TEST-REPORT.json` | Test results | Archive |
| `404-MONITOR-REPORT.json` | 404 analysis | Archive daily |
| `itl-website/public/sitemap.xml` | **Production sitemap** | **Keep!** |

---

## Support

If you encounter issues:
1. Check script output for specific errors
2. Verify file paths and permissions
3. Ensure Node.js version >= 16
4. Check that all dependencies are installed

---

## Next Steps After Migration

1. Submit sitemap to Google Search Console
2. Use Change of Address tool in old site's Search Console
3. Monitor rankings and traffic for 30 days
4. Keep running 404 monitor weekly
5. Don't delete old domain (keep redirects forever!)
