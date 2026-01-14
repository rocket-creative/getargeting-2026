# Legacy Migration Status

## Overview

This document tracks the implementation of the legacy page replication system for migrating content from `genetargeting.com` to the new ITL website.

## Infrastructure Created

### 1. Legacy Content System
- `src/content/legacy/` - Directory for storing legacy content markdown files
- `src/content/legacy/README.md` - Documentation for content format

### 2. Type Definitions & Utilities
- `src/lib/legacy/types.ts` - TypeScript interfaces
- `src/lib/legacy/legacyUtils.ts` - Utility functions for reading legacy content
- `src/lib/legacy/index.ts` - Barrel exports

### 3. Components
- `src/components/legacy/LegacyPageTemplate.tsx` - Reusable page template with ITL styling
- `src/components/legacy/index.ts` - Barrel exports

### 4. Redirects Configuration
- `src/lib/legacy/redirects.json` - 35+ URL redirects from legacy paths
- `next.config.ts` - Updated to include redirects automatically

### 5. Manifest Files
- `src/lib/legacy/pages-to-build.json` - List of pages to build with "reuse" URL strategy
- `scripts/parse-legacy-manifest.ts` - Script for parsing the full manifest
- `scripts/extract-legacy-content.md` - Guide for content extraction

## Pages Created (Missing from Legacy Manifest)

The following pages were created to match URLs from the legacy manifest:

| Page | URL | Status |
|------|-----|--------|
| Lab Signals | `/lab-signals` | ✅ Created |
| Custom Animal Models | `/custom-animal-models` | ✅ Created |
| Custom Rabbit Models | `/custom-rabbit-models` | ✅ Created |
| Inducible Rosa26 | `/inducible-rosa26` | ✅ Created |
| Post-Project Services | `/post-project-services` | ✅ Created |
| Mouse Model Generation Guide | `/mouse-model-generation-guide` | ✅ Created |
| Start Your Project | `/start-your-project` | ✅ Created |

## Redirect Configuration

The following legacy URLs will automatically redirect to their new destinations:

| Legacy URL | → | New URL |
|------------|---|---------|
| `/conditional-ko-reporter` | → | `/conditional-knockout-mouse-models/` |
| `/standard-conditional-knockout` | → | `/conditional-knockout-mouse-models/` |
| `/truview-conditional-knockout` | → | `/conditional-knockout-mouse-models/` |
| `/about-ingenious` | → | `/about-itl/` |
| `/testimonials` | → | `/why-choose-itl/` |
| `/quote-request-form` | → | `/request-quote/` |
| `/general-contact` | → | `/contact/` |
| `/ingenious-blog` | → | `/lab-signals/` |
| `/ingenious-blog/*` | → | `/lab-signals/` |
| `/exclusive-newsletter-content/*` | → | `/lab-signals/` |
| ... and 25+ more |

See `src/lib/legacy/redirects.json` for the complete list.

## Existing Pages (Already Built)

Most core pages from the legacy manifest already exist in the new site with content from `page-text-md/`:

- `/knockout-mouse-models` ✅
- `/conditional-knockout-mouse-models` ✅
- `/conventional-knockout-mouse-models` ✅
- `/knockin-mouse-models` ✅
- `/humanized-mouse-models` ✅
- `/custom-mouse-models` ✅
- `/rosa26` ✅
- `/safe-harbor-locus` ✅
- `/fast-mice` ✅
- `/cdna-knockin` ✅
- `/rat-models` ✅
- `/resources` ✅
- `/preclinical-services` ✅
- `/publications` ✅
- ... and 100+ more pages

## Content Extraction

The legacy site is built with Webflow and uses JavaScript-heavy rendering. Content for most pages already exists in `page-text-md/` directory.

For pages that need content extracted from the legacy site:
1. Follow the guide in `scripts/extract-legacy-content.md`
2. Save extracted content to `src/content/legacy/[slug].md`
3. Use `LegacyPageTemplate` component to render with new styling

## Next Steps

1. **Review Redirects**: Verify all redirects are working correctly after deployment
2. **SEO Monitoring**: Monitor 404s and search rankings after migration
3. **Content Review**: Review legacy content pages for accuracy and completeness
4. **Blog Content**: Populate `/lab-signals` with actual blog articles

## Files Reference

```
itl-website/
├── src/
│   ├── app/
│   │   ├── lab-signals/page.tsx           # NEW
│   │   ├── custom-animal-models/page.tsx  # NEW
│   │   ├── custom-rabbit-models/page.tsx  # NEW
│   │   ├── inducible-rosa26/page.tsx      # NEW
│   │   ├── post-project-services/page.tsx # NEW
│   │   ├── mouse-model-generation-guide/page.tsx # NEW
│   │   └── start-your-project/page.tsx    # NEW
│   ├── components/
│   │   └── legacy/
│   │       ├── LegacyPageTemplate.tsx     # NEW
│   │       └── index.ts                   # NEW
│   ├── content/
│   │   └── legacy/
│   │       ├── README.md                  # NEW
│   │       └── _sample-page.md            # NEW
│   └── lib/
│       └── legacy/
│           ├── types.ts                   # NEW
│           ├── legacyUtils.ts             # NEW
│           ├── redirects.json             # NEW
│           ├── pages-to-build.json        # NEW
│           └── index.ts                   # NEW
├── scripts/
│   ├── parse-legacy-manifest.ts           # NEW
│   └── extract-legacy-content.md          # NEW
└── next.config.ts                         # UPDATED (redirects)
```

---
Generated: January 11, 2026
