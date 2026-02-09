# ITL Website Migration Plan
## GeneTargeting.com → New ITL Site (2026)

**Goal:** Zero SEO loss during migration from www.genetargeting.com to new domain
**Old Site:** 152 URLs tracked in sitemap
**New Site:** 152 pages built in Next.js

---

## PHASE 1: PRE-LAUNCH PREPARATION (Week Before)

### 1.1 URL Mapping & Redirect Audit

**Status:** ✅ Partially Complete
- Already have `redirects.json` with 30 redirects configured
- Need to verify ALL old URLs have destinations

**Action Items:**
- [ ] Run automated URL mapping script (see below)
- [ ] Review and approve redirect mappings
- [ ] Add missing redirects to `next.config.js`
- [ ] Test all redirects in staging

**Automation Available:** Script will compare old sitemap to new pages and generate redirect rules

### 1.2 Sitemap Generation

**Status:** ⚠️ Needs Creation
- New sitemap.xml must be generated for new site
- Should match or exceed old site's 152 URLs

**Action Items:**
- [ ] Generate dynamic sitemap with all pages
- [ ] Include lastmod dates (use today's date for launch)
- [ ] Set priority levels (homepage: 1.0, main services: 0.8, subpages: 0.6)
- [ ] Validate sitemap format

**Automation Available:** Script will auto-generate sitemap.xml from your app directory

### 1.3 robots.txt Verification

**Status:** ✅ Complete
- Already blocks /admin/ from indexing
- Needs sitemap URL updated to new domain

**Action Items:**
- [ ] Update sitemap URL in robots.txt to new domain
- [ ] Verify all admin/private paths are blocked

### 1.4 Metadata Audit

**Status:** ⚠️ Needs Verification
- All 98 service pages have metadata
- Need to verify canonical URLs point to NEW domain

**Action Items:**
- [ ] Run metadata audit script
- [ ] Update any canonicals pointing to genetargeting.com
- [ ] Verify all title tags are 50-60 chars
- [ ] Verify all descriptions are 150-160 chars

**Automation Available:** Script will scan all pages for metadata issues

### 1.5 Google Search Console Setup

**Status:** 🔴 Required Before Launch

**Action Items:**
- [ ] Add new domain to Google Search Console
- [ ] Verify ownership (DNS verification recommended)
- [ ] Submit new sitemap.xml
- [ ] Set up email alerts for crawl errors
- [ ] Keep OLD domain in Search Console (don't delete)

### 1.6 Google Analytics 4 Setup

**Status:** 🔴 Required Before Launch

**Action Items:**
- [ ] Create new GA4 property for new domain OR
- [ ] Configure existing property to track both domains during transition
- [ ] Update GA4 ID in environment variables
- [ ] Test tracking is working in staging
- [ ] Set up conversion events (quote requests, contact forms)

---

## PHASE 2: LAUNCH DAY (The Big Switch)

### 2.1 DNS Cutover (Point of No Return)

**Timing:** Schedule during low traffic hours (2-4 AM EST recommended)

**Steps:**
1. [ ] Take final backup of old site
2. [ ] Deploy new site to production
3. [ ] Update DNS records to point to new hosting
4. [ ] Monitor DNS propagation (15-60 minutes typically)

**⚠️ CRITICAL:** Have rollback plan ready (keep old site accessible at backup subdomain)

### 2.2 Immediate Verification (First 30 Minutes)

**Checklist:**
- [ ] Homepage loads correctly
- [ ] Test 10 random service pages load
- [ ] Forms work (quote request, contact)
- [ ] GA4 tracking fires on page views
- [ ] Admin dashboard accessible at /admin
- [ ] SSL certificate valid
- [ ] robots.txt accessible at new domain
- [ ] Test 5 old URLs redirect properly

### 2.3 Submit Domain Change to Google (Within 2 Hours)

**Steps:**
1. [ ] Open OLD site in Google Search Console
2. [ ] Go to Settings → Change of Address tool
3. [ ] Select new domain from dropdown
4. [ ] Verify 301 redirects are working (Google tests this)
5. [ ] Submit change of address request

**⚠️ CRITICAL:** This tells Google "We moved, please transfer all rankings"

---

## PHASE 3: POST-LAUNCH MONITORING (First 72 Hours)

### 3.1 Hour 1-6: Immediate Watch

**Monitor Every 30 Minutes:**
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor server logs for 404 errors
- [ ] Check GA4 for traffic patterns
- [ ] Test organic search results (search for brand name)
- [ ] Verify redirect chains aren't breaking

### 3.2 Day 1-3: Active Monitoring

**Check Every 4-6 Hours:**
- [ ] Google Search Console coverage report
- [ ] Top 20 keywords still ranking (use Google Search Console)
- [ ] Server error logs for patterns
- [ ] Page load times (should be < 2 seconds)
- [ ] Core Web Vitals in Search Console

### 3.3 Week 1: URL Inspection

**Action Items:**
- [ ] Use "URL Inspection" tool in Search Console on top 20 pages
- [ ] Request indexing for any pages Google hasn't crawled
- [ ] Check that old URLs show "Redirected" status
- [ ] Verify new URLs are being indexed

---

## PHASE 4: WEEK 1-4 STABILIZATION

### 4.1 Week 1 Tasks

- [ ] Check ranking positions for top 50 keywords
- [ ] Fix any 404s discovered in Search Console
- [ ] Review redirect analytics (which old URLs getting traffic?)
- [ ] Check for broken internal links
- [ ] Verify backlinks are being followed through redirects

### 4.2 Week 2-4 Tasks

- [ ] Monitor organic traffic trends (expect 5-15% dip, temporary)
- [ ] Check Google Search Console "Links" report for backlink transfer
- [ ] Request re-indexing of any pages with issues
- [ ] Update sitemap if any pages added/removed
- [ ] Check that schema markup validates on new domain

---

## AUTOMATION SCRIPTS PROVIDED

I'll create the following automation scripts for you:

### Script 1: URL Mapping Generator
Compares old sitemap to new pages, suggests redirect rules

### Script 2: Sitemap Generator
Creates sitemap.xml with all new pages, proper priorities

### Script 3: Metadata Audit
Scans all pages for SEO issues, missing metadata

### Script 4: Redirect Tester
Tests all redirects are working (301 status, correct destination)

### Script 5: 404 Monitor
Checks server logs, reports unfound URLs

---

## RISK MITIGATION

### Expected SEO Impact
- **Days 1-7:** Minimal impact, Google transfers rankings
- **Days 8-30:** Possible 5-15% temporary traffic dip (normal)
- **Days 31-60:** Recovery to previous levels
- **Days 61-90:** Potential traffic increase (new site is faster/better)

### Emergency Rollback Plan
If critical issues arise in first 24 hours:
1. Point DNS back to old site
2. Keep new site at staging URL
3. Fix issues, try again in 48 hours
4. Google Change of Address can be canceled within 180 days

### What Could Go Wrong (And How to Fix)

| Issue | Symptom | Fix |
|-------|---------|-----|
| Missing redirects | 404 errors in logs | Add redirect, request re-indexing |
| Canonical points wrong | Duplicate content warnings | Update metadata, redeploy |
| GA4 not tracking | No traffic in analytics | Fix tracking ID, clear cache |
| DNS propagation slow | Some users see old site | Wait, normal (24-48 hrs max) |
| Redirect chains | Slow page loads | Fix redirect to point directly |
| Mobile issues | High mobile bounce rate | Test mobile, fix responsive issues |

---

## SUCCESS METRICS

### Week 1 Goals
- ✅ Zero 404 errors for old URLs
- ✅ 95%+ traffic maintained
- ✅ All top 20 pages indexed
- ✅ Forms receiving submissions
- ✅ Google acknowledges redirect

### Week 4 Goals
- ✅ 100% traffic recovered
- ✅ All backlinks transferred
- ✅ Core Web Vitals pass
- ✅ All old URLs showing "Redirected" in Search Console

### Week 12 Goals
- ✅ Traffic exceeds old site baseline
- ✅ Rankings improved (faster site = better SEO)
- ✅ New pages indexed
- ✅ Old domain can be retired (but keep redirects!)

---

## CRITICAL REMINDERS

1. **DO NOT DELETE OLD DOMAIN** - Keep it forever for redirects
2. **301 REDIRECTS ARE PERMANENT** - Don't use 302 (temporary)
3. **KEEP OLD SEARCH CONSOLE** - Monitor both for 6 months
4. **TEST BEFORE LAUNCH** - Use staging environment extensively
5. **COMMUNICATE WITH STAKEHOLDERS** - Warn them about temporary dips

---

## NEXT STEPS

Ready to proceed? I can now:

1. **Generate all automation scripts** (URL mapping, sitemap, metadata audit, etc.)
2. **Create redirect mappings** for all 152 old URLs
3. **Build sitemap.xml** with all 152+ new pages
4. **Audit metadata** across all pages
5. **Create monitoring dashboard** for post-launch tracking

**Which would you like me to start with?**
