# ITL Website Changes - Progress Report
**Date:** February 1, 2026  
**Session:** Systematic Changes Implementation

---

## ✅ COMPLETED CHANGES

### 1. **CRITICAL: Site-Wide Brand Capitalization** ✅
**Status:** COMPLETE  
**Impact:** 350 replacements across 134 files

Changed **ALL** instances of "Ingenious Targeting Laboratory" (capitalized) to "ingenious targeting laboratory" (lowercase) throughout the entire website.

**Files Affected:**
- All page components (.tsx files)
- All TypeScript utilities and data files
- All API routes
- All metadata and layout files
- Components (Navigation, Footer, etc.)

**Script Created:** `itl-website/scripts/lowercase-brand-name.js` for automated conversion

---

### 2. **Phone Number Update** ✅
**Status:** COMPLETE  
**Change:** (631) 468-8530 → (631) 468-8534

**Updated in 9 locations:**
- Homepage (page.tsx + schema)
- Contact page (page.tsx + schema)
- General Contact page
- Schedule Meeting page  
- Privacy page
- Terms page
- Accessibility page
- Footer component
- All layout files

---

### 3. **Homepage Content Updates** ✅
**Status:** COMPLETE

- Changed "30 years" to "25 years" in Overview section
- Added period to end of last "What We Provide" item (line 4)
- Cookie Consent component already has "Accept All" button (feedback may have been outdated)

---

### 4. **Current Openings Page Simplification** ✅
**Status:** COMPLETE

**Before:** Complex page with stats, features, contact sections, CTAs  
**After:** Simple centered message:
> "Thank you for your interest in joining ingenious targeting laboratory. We don't have any current job openings at this time."

Reduced from 695 lines to 27 lines of code.

---

### 5. **Content Fixes** ✅
- Added parentheses around "BAC" → "(BAC)" in custom-mouse-models page
- Fixed schema.org breadcrumb on why-choose-itl page (changed "Why Choose itl" to "Why Choose ingenious targeting laboratory")

---

### 6. **Documentation & Extraction** ✅
**Created:**
- `CHANGES-SUMMARY.md` - Comprehensive list of all 50+ required changes
- `itl-website/extracted-changes/` - All 18 Word documents extracted to markdown
- `itl-website/scripts/extract-changes.js` - Automated extraction script

---

## 🔄 IN PROGRESS / REQUIRES DECISION

### Timeline References (30+ files)
**Status:** PENDING TEAM DECISION

Feedback says "remove ALL timeline mentions" but this affects 30+ pages. Need confirmation:
- Should we delete the `/model-generation-timeline` page entirely?
- Should we remove all FAQ items mentioning timelines?
- Should we remove timeline from navigation?

**Impact:** Large change affecting many pages

---

### LoxP Capitalization
**Status:** PENDING SCIENTIFIC REVIEW

Feedback requested changing "loxP" to "LoxP" (capitalizing the 'l').

**Issue:** In scientific nomenclature, "loxP" with lowercase 'l' is the correct format. Changing to "LoxP" would be scientifically incorrect.

**Recommendation:** Confirm if this was a mistake in the feedback or if brand guidelines override scientific convention.

**Impact:** 114 instances across site

---

### "Molecules" to "Proteins"
**Status:** NEEDS CLARIFICATION

Feedback asked to change "molecules" to "proteins" but didn't specify which instance(s). Found 15 uses:
- "immune molecules"
- "checkpoint molecules"  
- "MHC molecules"
- etc.

**Question:** Which specific instances should be changed? Changing all would be scientifically inaccurate.

---

## 📋 REMAINING MAJOR TASKS

### High Priority

1. **Remove AI-Generated Images**
   - Knockout models page
   - Knockin models page  
   - Conditional knockout page
   - Replace with accurate scientific diagrams

2. **Update Publications Format**
   - Make article titles different color
   - Make titles clickable
   - Verify publications match "final Google doc version"

3. **Fix 404 Errors**
   - `/model-generation-timeline` (placeholder)
   - ES cell targeting pages
   - Various resource links
   - Timeline FAQ links

4. **Update Lab Signals Messaging**
   - Make signup more compelling
   - Use language from current ads
   - Remove references to "mouse model design" etc.

### Medium Priority

5. **Navigation Updates**
   - Move "Conventional Knockout" higher in dropdown
   - Review menu organization

6. **Resource Links**
   - Update "No Doubt" to "TruView Conditional Knockout"
   - Fix Hubspot download page links
   - Add context headers to resources

7. **Testimonials**
   - Add Carla Rothlin rat testimonial
   - Standardize testimonial format site-wide
   - Remove/verify Joseph A. Fraietta testimonial (unknown source)

8. **ES Cell Page Removal**
   - Remove ES cell links from glossary
   - Delete ES cell dedicated pages
   - Update related content

### Lower Priority

9. **Content Improvements**
   - Add missing hero images
   - Fix text formatting inconsistencies  
   - Add "and" between "nature" and "cell"
   - Add "a" before "Conditional Knockout"

10. **Breeding Scheme Architect**
    - Needs vetting by breeding scientists
    - Cannot go live until verified

---

## 📊 STATISTICS

**Total Documents Processed:** 18/18  
**Total Changes Identified:** 50+  
**Changes Completed:** 6 major items  
**Changes Pending:** 44+ items  
**Files Modified This Session:** 280+  

**Git Commits:** 1  
**Lines of Code Changed:** ~1,000+

---

## 🎯 NEXT STEPS

### Immediate (Can Do Now)
1. ✅ Commit completed changes (DONE)
2. Wait for clarification on:
   - Timeline removal scope
   - LoxP capitalization
   - "Molecules" to "proteins" specific instances

### Short Term (Next Session)
1. Remove AI-generated images (requires new diagrams)
2. Update publication formatting
3. Fix 404 errors
4. Update Lab Signals messaging

### Long Term (Multiple Sessions)
1. Source/create accurate scientific diagrams
2. Comprehensive timeline removal (if confirmed)
3. ES cell page cleanup
4. Resource reorganization

---

## ⚠️ BLOCKERS / QUESTIONS FOR TEAM

1. **Timeline Removal:** Confirm scope - delete page + remove all mentions?
2. **LoxP Format:** Should we override scientific convention for brand consistency?
3. **"Molecules" Change:** Which specific instances?
4. **Final Google Doc:** Which document contains the final publication list?
5. **Lab Signals Ad Copy:** What's the current messaging used in ads?
6. **Image Source:** Where should we get accurate scientific diagrams?
7. **Carla Rothlin Testimonial:** Where is the new rat testimonial text?
8. **Colony Management:** Keep or remove this service page?

---

## 🔧 TECHNICAL NOTES

**Scripts Created:**
- `lowercase-brand-name.js` - Automated brand capitalization fix
- `extract-changes.js` - Word document extraction

**Backup:**
- All original Word documents preserved in `/changes`
- All extracted content in `/itl-website/extracted-changes`

**Git Status:**
- Branch: ITL_2026_MAIN
- Commits ahead of origin/main: 5
- Ready to push when approved

---

**Session Duration:** ~2 hours  
**Completion Rate:** 12% (6 of 50+ items)  
**Estimated Remaining Work:** 30-40 hours

---

*This report documents all changes made and identifies remaining work. Please review and provide clarification on pending decisions.*
