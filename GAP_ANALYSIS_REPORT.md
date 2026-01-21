# Gap Analysis Report: ITL Website vs RULES_2026

**Generated:** January 15, 2026  
**Updated:** January 15, 2026 (After Fixes Applied)
**Total Pages Audited:** 160  
**Rules Version:** RULES_2026

---

## Executive Summary

| Category | Status | Issues Found | Priority |
|----------|--------|--------------|----------|
| SEO & Metadata | **FIXED** | ~~99+ pages missing metadata~~ | ✅ |
| Design System | **KEPT AS-IS** | Font weights per user preference | N/A |
| External Links | **VERIFIED OK** | All have rel="noopener" | ✅ |
| Canonical URLs | **FIXED** | ~~0 pages have canonical URLs~~ | ✅ |
| Schema/JSON-LD | **FIXED** | ~~157 pages missing BreadcrumbList~~ | ✅ |
| Content Copy | **FIXED** | ~~5 hyphen violations~~ | ✅ |
| Accessibility | **GOOD** | Minor issues only | ✅ |
| Privacy/Consent | **GOOD** | Consent mode v2 implemented | ✅ |
| Security | **GOOD** | Headers added, no vulnerabilities | ✅ |
| Mobile First | **FIXED** | 320px support added | ✅ |
| AI Discoverability | **FIXED** | llms.txt created | ✅ |

---

## CRITICAL ISSUES (P0)

### 1. SEO Metadata Coverage

**Rule Reference:** `seo-ai-readability.mdc` Section 1

| Metric | Current | Required | Gap |
|--------|---------|----------|-----|
| Pages with metadata export | 61 | 160 | **99 missing** |
| Pages with canonical URLs | 0 | 160 | **160 missing** |
| Pages with openGraph | 10 | 160 | **150 missing** |
| Pages with BreadcrumbList schema | 3 | 159 | **156 missing** |

**Impact:** Poor SEO, duplicate content issues, reduced rich results eligibility

**Files Missing Metadata (sample):**
- All pages in `/therapeutic-areas/` subdirectories
- All pages in `/technology/` subdirectories
- All pages in `/services/` subdirectories
- Most catalog and guide pages

---

### 2. Font Weight Violations (ERR-001, ERR-002)

**Rule Reference:** `design-philosophy.mdc` Typography Principles

**Violation:** Using font weights other than 400 (regular) and 600 (semibold)

| Issue | Count | Files Affected |
|-------|-------|----------------|
| `font-weight: 500` or `font-medium` | 750 | 122 files |
| Font loading includes 300, 500, 700 | 1 | layout.tsx |

**Root Cause in `layout.tsx`:**
```tsx
// CURRENT (WRONG):
weight: ["300", "400", "500", "600", "700"],

// REQUIRED:
weight: ["400", "600"],
```

**Impact:** Visual inconsistency, performance degradation, violates design philosophy

---

### 3. Missing Canonical URLs (ERR-007)

**Rule Reference:** `seo-ai-readability.mdc` Section 1

**Current State:** 0 pages have `alternates: { canonical: '...' }` in metadata

**Impact:** 
- Duplicate content issues across domains
- Potential SEO penalties
- Split link equity

**Required Pattern:**
```tsx
export const metadata: Metadata = {
  // ...
  alternates: {
    canonical: 'https://www.genetargeting.com/page-slug',
  },
};
```

---

## HIGH PRIORITY ISSUES (P1)

### 4. External Links Missing rel="noopener" (ERR-029)

**Rule Reference:** `seo-ai-readability.mdc` Section 14

| Metric | Count |
|--------|-------|
| Links with `target="_blank"` | 44 |
| Links with proper `rel="noopener"` | 4 |
| **Missing security attribute** | **40** |

**Affected Files (sample):**
- `neuroscience-mouse-models/page.tsx`
- `immuno-oncology-mouse-models/page.tsx`
- `transgenic-mouse-service/page.tsx`
- `es-cell-gene-targeting/page.tsx`
- `cre-lox-system/page.tsx`
- 30+ more files

**Security Risk:** Without `rel="noopener"`, linked pages can access `window.opener`

**Required Pattern:**
```tsx
<a 
  href="https://external-site.com" 
  target="_blank"
  rel="noopener noreferrer"
>
```

---

### 5. Missing JSON-LD Structured Data (ERR-008, ERR-009)

**Rule Reference:** `seo-ai-readability.mdc` Section 2

| Schema Type | Pages With | Pages Without |
|-------------|------------|---------------|
| BreadcrumbList | 3 | 156 |
| Service schema | Unknown | Most service pages |
| FAQPage schema | Unknown | Pages with FAQ sections |
| Organization schema | 1 (homepage) | OK |

**Impact:** Reduced visibility in rich results, lower AI comprehension

---

## MEDIUM PRIORITY ISSUES (P2)

### 6. Hyphenated Words in Copy (ERR-010)

**Rule Reference:** `content-copy.mdc`

**Found 5 violations in 2 files:**

| File | Violations |
|------|------------|
| `tag-knockin-mice/page.tsx` | 2 instances |
| `admin/page.tsx` | 3 instances |

**Common violations:**
- "real-time" → should be "real time"
- "state-of-the-art" → should be "cutting edge"

---

### 7. Missing llms.txt File

**Rule Reference:** `seo-ai-readability.mdc` Section 3

**Current State:** No `/public/llms.txt` file exists

**Impact:** AI crawlers (ChatGPT, Perplexity, Gemini) have no guidance file

**Recommended Content:**
```txt
# ingenious targeting laboratory
> Custom mouse model engineering since 1998

## About
Leading provider of knockout, knockin, humanized, and transgenic mouse models.

## Services
- Knockout mouse models
- Knockin mouse models
- Humanized mouse models
- Transgenic services
- Colony management
- Cryopreservation

## Contact
Phone: (631) 751 5000
Email: info@genetargeting.com
```

---

## COMPLIANT AREAS

### Security (GOOD)

| Requirement | Status |
|-------------|--------|
| CSP Headers | ✅ Added |
| X-Frame-Options | ✅ DENY |
| X-Content-Type-Options | ✅ nosniff |
| HSTS | ✅ Configured |
| No hardcoded secrets | ✅ Verified |
| No eval/exec | ✅ Verified |
| npm audit | ✅ 0 vulnerabilities |

### Privacy & Consent (GOOD)

| Requirement | Status |
|-------------|--------|
| Cookie consent banner | ✅ Implemented |
| Granular consent options | ✅ 4 categories |
| Default denied | ✅ Consent mode v2 |
| Accept/Reject equal prominence | ✅ Compliant |
| No pre-checked boxes | ✅ Compliant |
| Preference center | ✅ Available |

### Mobile Responsiveness (GOOD - Fixed)

| Requirement | Status |
|-------------|--------|
| 320px minimum support | ✅ Fixed this session |
| Grid overflow protection | ✅ min(100%, Xpx) pattern |
| Table scroll containers | ✅ Already implemented |

### Sitemap & Robots (GOOD)

| File | Status |
|------|--------|
| sitemap.ts | ✅ 130 pages listed |
| robots.txt | ✅ Properly configured |

---

## Remediation Priority Matrix

### Phase 1: Critical SEO (Estimated: 99 files)
1. Add canonical URLs to ALL pages
2. Add BreadcrumbList schema to all non-homepage pages
3. Ensure all pages have unique metadata export
4. Add openGraph tags to remaining pages

### Phase 2: Design System (Estimated: 122 files)
1. Fix font weight loading in layout.tsx (change to 400, 600 only)
2. Replace all `font-medium` with `font-normal` or `font-semibold`
3. Replace all `fontWeight: 500` with `fontWeight: 400` or `fontWeight: 600`

### Phase 3: External Links (Estimated: 35 files)
1. Add `rel="noopener noreferrer"` to all external links with `target="_blank"`

### Phase 4: Content & AI (Estimated: 3 files)
1. Fix hyphenated words in copy
2. Create llms.txt file
3. Add FAQPage schema where FAQ sections exist

---

## Files Requiring Most Changes

| File | Issues |
|------|--------|
| `layout.tsx` | Font weights (CRITICAL) |
| `neuroscience-mouse-models/page.tsx` | 16 font-medium, external links |
| `immunology-mouse-models/page.tsx` | 21 font-medium |
| `conditional-knockout-mouse-models/page.tsx` | 14 font-medium |
| `cre-lox-system/page.tsx` | 12 font-medium |
| All 99 pages without metadata | SEO metadata missing |

---

## Automated Fix Commands (Reference)

```bash
# Find all font-medium usage
rg "font-medium" --type tsx -l

# Find all external links without noopener
rg 'target="_blank"' --type tsx -l

# Find pages without metadata
rg -L "export const metadata" src/app/*/page.tsx

# Find font-weight: 500
rg "fontWeight: 500|font-weight: 500" --type tsx -l
```

---

## Conclusion

The website has **critical SEO and design system gaps** that require immediate attention:

1. **99 pages** are missing proper SEO metadata
2. **160 pages** are missing canonical URLs
3. **750+ instances** of incorrect font weights
4. **40 external links** have security vulnerabilities

However, the website is **compliant** in:
- Security headers and practices
- Privacy/consent implementation
- Mobile responsiveness
- Sitemap and robots configuration

**Recommended Action:** Prioritize SEO metadata and canonical URL fixes first, as these have the highest impact on search visibility and can cause duplicate content penalties.

---

END OF REPORT
