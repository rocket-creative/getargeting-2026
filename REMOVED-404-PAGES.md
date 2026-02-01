# Removed 404 Pages Log
**Date**: February 1, 2026  
**Session**: Systematic 404 Removal

This document logs all placeholder pages and broken links that were removed from the ITL website.

---

## 1. PLACEHOLDER PAGES DELETED

### `/model-generation-timeline`
**Status**: ✅ DELETED  
**Location**: `itl-website/src/app/model-generation-timeline/page.tsx`  
**Reason**: Placeholder page with "Page content coming soon" - no real content  
**References Removed**: 27 files updated
- Sitemap
- FAQ links across service pages
- Resource links
- Navigation references

**Commit**: `044_feat_loxp-timeline-labsignals-updates`

---

### `/case-studies`
**Status**: ✅ DELETED  
**Location**: `itl-website/src/app/case-studies/page.tsx` (deleted)
**Content**: Placeholder with "Page content coming soon"
**References Removed**: Included in 24 files updated (see below)

**Original Code**:
```tsx
export default function CaseStudiesPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      <main id="main-content" style={{ minHeight: '60vh', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0a253c', marginBottom: '20px' }}>Case Studies</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Page content coming soon.</p>
      </main>
      <UXUIDCFooter />
    </div>
  );
}
```

---

### `/selection-cassette-design`
**Status**: ✅ DELETED  
**Location**: `itl-website/src/app/selection-cassette-design/page.tsx` (deleted)
**Content**: Placeholder with "Page content coming soon"
**References Removed**: Included in 24 files updated (see below)

**Original Code**:
```tsx
export default function SelectionCassetteDesignPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      <main id="main-content" style={{ minHeight: '60vh', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0a253c', marginBottom: '20px' }}>Selection Cassette Design</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Page content coming soon.</p>
      </main>
      <UXUIDCFooter />
    </div>
  );
}
```

---

## 2. PAGES TO REVIEW/REMOVE

### `/es-cell-gene-targeting`
**Status**: ⚠️ HAS CONTENT - NEEDS DECISION  
**Location**: `itl-website/src/app/es-cell-gene-targeting/page.tsx`  
**Content**: Full page with real content (not a placeholder)
**Lines**: ~695 lines of actual content
**References Found**: 98 files reference this page

**Decision Needed**: This page has substantial content. Team feedback said to "remove ES cell" references, but this is a full technology page, not a placeholder.

**Options**:
1. Keep the page (it has real content and 98 references)
2. Remove the page and all 98 references
3. Rename/redirect to a different technology approach

**References Include**:
- Sitemap
- Navigation menu
- Technology overview pages
- All model generation pages
- Resource links
- Glossary terms

---

### `/derivative-alleles`
**Status**: ✅ DELETED  
**Location**: `itl-website/src/app/derivative-alleles/` (directory deleted)
**Content**: Full page about derivative allele systems
**References Removed**: Included in 24 files updated

**Team Feedback**: "Remove derivative system link and delete that page"

**Decision**: Removed per team feedback

---

## 3. BROKEN LINKS TO FIX

### Resource Links
**Files with "Coming Soon" or Placeholder Resources**:
- Check all `/resources` pages
- TruView dedicated page (may not exist)
- Hubspot download links

### Navigation References
**Files Referencing Deleted Pages**:
- 25 files reference `/derivative-alleles`
- Need to update navigation dropdowns

---

## 4. REMOVAL STRATEGY

### Phase 1: Delete Placeholder Pages ✅
1. `/model-generation-timeline` - DONE
2. `/case-studies` - TO DO
3. `/selection-cassette-design` - TO DO

### Phase 2: Remove Derivative Alleles (Per Team Request)
1. Delete `/derivative-alleles` page
2. Remove references from 25 files:
   - Sitemap
   - Navigation
   - Technology pages
   - Glossary
   - Footer
   - Resource pages

### Phase 3: ES Cell Decision (PENDING)
**Needs team clarification**:
- Keep full ES cell gene targeting page (has real content)?
- Or remove all ES cell references (affects 98 files)?

---

## 5. STATISTICS

**Pages Removed**: 4 total
- `/model-generation-timeline` ✅
- `/case-studies` ✅
- `/selection-cassette-design` ✅
- `/derivative-alleles` ✅

**Directories Deleted**: 3  
**Files Changed**: 24  
**Total Lines Removed**: 38  
**Pages Pending Decision**: 1 (es-cell-gene-targeting - has real content, 98 references)  

---

## 6. FILES AFFECTED BY EACH REMOVAL

### `/case-studies` References:
- Sitemap
- (Searching...)

### `/selection-cassette-design` References:
- Sitemap
- Technology pages
- (Full list pending)

### All 404 Page References Removed (24 files):
- `itl-website/src/app/sitemap.ts`
- `itl-website/src/components/UXUIDC/Navigation.tsx`
- `itl-website/src/components/UXUIDC/Footer.tsx`
- `itl-website/src/data/glossaryTermsExtended.ts`
- `itl-website/src/app/flp-frt-system/page.tsx`
- `itl-website/src/app/critical-exon-selection/page.tsx`
- `itl-website/src/app/technologies/page.tsx`
- `itl-website/src/app/conditional-knockout-mouse-models/page.tsx`
- `itl-website/src/app/resources/page.tsx` (8 lines removed)
- `itl-website/src/app/lacz-knockin-mice/page.tsx`
- `itl-website/src/app/target-validation-mouse-models/page.tsx`
- `itl-website/src/app/point-mutation-mice/page.tsx`
- `itl-website/src/app/technology-overview/page.tsx`
- `itl-website/src/app/es-cell-gene-targeting/page.tsx`
- `itl-website/src/app/conditional-vs-conventional-guide/page.tsx`
- `itl-website/src/app/reporter-knockin/page.tsx`
- `itl-website/src/app/about-itl/page.tsx`
- `itl-website/src/app/cre-lox-system/page.tsx`
- `itl-website/src/app/diabetes-mouse-models/page.tsx`
- `itl-website/src/app/knockout-mouse-models/page.tsx`
- `itl-website/src/app/tm1a-allele-design/page.tsx`
- `itl-website/src/app/conventional-knockout-mouse-models/page.tsx`
- `itl-website/src/app/knockout-strategy-guide/page.tsx`
- `itl-website/src/app/why-choose-itl/page.tsx`

---

## 7. COMPLETED STEPS

1. ✅ Created this log document
2. ✅ Created comprehensive removal script (`remove-404-pages.js`)
3. ✅ Deleted 3 directories:
   - `itl-website/src/app/case-studies/`
   - `itl-website/src/app/selection-cassette-design/`
   - `itl-website/src/app/derivative-alleles/`
4. ✅ Removed all references from 24 files (38 lines removed)
5. ✅ Updated sitemap
6. ✅ Updated navigation
7. ✅ Cleaned glossary terms

## 8. REMAINING TASKS

1. ⚠️ **ES Cell Page Decision Needed**: 
   - `/es-cell-gene-targeting` has REAL content (not a placeholder)
   - 98 files reference this page
   - Team feedback was to "remove ES cell" but unclear if this meant:
     - Remove placeholder ES cell pages (done)
     - Remove the full technology page (impacts 98 files)
   - **Recommendation**: Keep the ES cell page - it has substantial content and is a legitimate technology

2. 🔄 Test site for any remaining broken links
3. 🔄 Verify navigation menus still work correctly

---

**Commit**: `045_chore_remove-404-placeholder-pages` (pending)

**End of Log**
