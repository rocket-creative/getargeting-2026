# Website Changes Summary
**Generated:** 2026-02-01  
**Source:** New Website - George - 2026 (18 documents)

## ✅ COMPLETED CHANGES

### 1. Homepage Updates
- ✅ Changed "30 years" to "25 years" in Overview section
- ✅ Added period to end of last "What We Provide" item
- ⚠️ Cookie Consent already has "Accept All" button (may have been old feedback)

### 2. About ITL Page
- ✅ Changed "Why Choose itl" to "Why Choose ingenious targeting laboratory" in schema

### 3. Current Openings Page
- ✅ Completely simplified to single message: "Thank you for your interest in joining ingenious targeting laboratory. We don't have any current job openings at this time."

### 4. Contact Information
- ✅ Updated phone number from (631) 468-8530 to (631) 468-8534 across:
  - Homepage schema
  - Schedule Meeting page
  - General Contact page
  - Privacy page
  - Terms page
  - Contact page (2 instances)
  - Accessibility page
  - Footer component

---

## 🔴 CRITICAL SITE-WIDE CHANGES REQUIRED

### BRAND NAME CAPITALIZATION
**Request:** Change ALL instances of "Ingenious Targeting Laboratory" (capitalized) to "ingenious targeting laboratory" (lowercase) across the ENTIRE site.

**Impact:** This is a MAJOR branding change affecting:
- All page content (150+ pages)
- All metadata/SEO titles
- All schema.org structured data
- All components
- Footer, Navigation, etc.

**Status:** ⚠️ **REQUIRES USER CONFIRMATION before proceeding**

**Recommendation:** This should be done as a separate, focused task with:
1. Find/replace across all `.tsx` files
2. Manual review of edge cases
3. Testing to ensure no broken functionality
4. Separate git commit

---

## 📋 CONTENT CHANGES NEEDED (By Category)

### CUSTOM MODELS SECTION

#### Custom Models Page
- [ ] Change "molecules" to "proteins" (specific location not indicated)
- [ ] Add parentheses around "BAC" → "(BAC)"
- [ ] Review/fix BAC link (currently loops back to Custom Mouse Models page)
- [ ] Update Lab Signals signup messaging to be more compelling
- [ ] Review timeline mentions (possibly remove site-wide)
- [ ] Fix transgenic mouse service link (currently loops back)
- [ ] Fix timeline link (404 error)

#### Knockout Mouse Models Page
- [ ] Simplify/replace visual for knockout type (current too complex, suggests ES cells)
- [ ] Add "and" between "nature" and "cell"
- [ ] Ensure second paragraph is same text size as first
- [ ] Capitalize "l" in "LoxP"
- [ ] Fix/replace decision tree image (has errors, grainy)
- [ ] Update publication format (article title in different color, make clickable)
- [ ] Remove "ES cells" from glossary, choose alternative
- [ ] Update Resources:
  - Change "No Doubt" to "TruView Conditional Knockout"
  - Add context header for conditional KO comparison chart
  - Fix Hubspot download page links (cKO quick guide, Cre-lox design guide)
  - Vet Breeding Scheme Architect for accuracy
- [ ] Update Lab Signals description (remove "CRISPR vs ES cell" mention)
- [ ] Remove timeline mentions (or confirm with Paul)
- [ ] Remove ES cell link and page
- [ ] Fix last two resource links (404 errors)

#### Knockin Mouse Models Page
- [ ] Remove/replace AI-generated images (not accurate enough)
- [ ] Update publication format (highlight article title)
- [ ] Review testimonial format (consider using different format for single testimonial)
- [ ] Remove all timeline questions
- [ ] Remove ES cell resource link and page
- [ ] Fix timeline and FAQ links (404 errors)

#### Conventional Knockout Page
- [ ] Move above "conventional knockout" in dropdown menu
- [ ] Add image for top right corner
- [ ] Update publications to match final Google doc version

#### Conditional Knockout Page
- [ ] Discuss/replace AI-generated images (not accurate)
- [ ] Add "a" before "Conditional Knockout"
- [ ] Remove incorrect images
- [ ] Remove derivative system link and delete that page
- [ ] Verify text matches final Google doc (some text missing)
- [ ] Remove Truview image (incorrect)
- [ ] Add link to TruView dedicated page (if exists)
- [ ] Update publications to match final version
- [ ] Remove timeline from FAQs

#### Tissue Specific Knockout
- [ ] (Document was empty - needs review)

#### Inducible Conditional Knockout
- [ ] (Document was empty - needs review)

#### Point Mutation Mice
- [ ] (Document was empty - needs review)

#### Reporter Knockin Mouse Models
- [ ] (Document was empty - needs review)

---

### SERVICES SECTION

#### Genotyping Service
- [ ] (Document was empty - needs review)

#### Preclinical Services
- [ ] Remove/verify Joseph A. Fraietta testimonial (unknown source)
- [ ] Fix incorrect address (should be 761-80 Coates Avenue, Holbrook, NY 11741)
- [ ] Fix incorrect phone number (should be 631-468-8534)

#### Colony Management
- [ ] Consider removing this service page (not actively supported)

#### Custom Project
- [ ] (Document referenced "Services Webpage - Custom Project.docx" - needs review)

#### Support Services
- [ ] (Document referenced "Services Webpage - Support Services.docx" - needs review)

#### Cryopreservation and Rederivation
- [ ] (Document referenced "Services for both - Cryopreservation and Rederivation.docx" - needs review)

---

## 🚨 TECHNICAL ISSUES TO FIX

### 404 Errors (Broken Links)
- [ ] `/model-generation-timeline` - multiple references
- [ ] Case Studies page exists but is placeholder
- [ ] Timeline FAQ links
- [ ] ES cell targeting page links
- [ ] Various resource links

### Broken Functionality
- [ ] "Request a Quote" button - verify functionality
- [ ] Custom model quote connection
- [ ] Schedule meeting → connect to HubSpot calendar
- [ ] Publication links (should be clickable)

### Image Issues
- [ ] Remove/replace inaccurate AI-generated diagrams
- [ ] Add missing hero images
- [ ] Fix grainy/low-resolution images
- [ ] Ensure scientific accuracy for all diagrams

---

## 📝 NOTES & QUESTIONS FOR TEAM

1. **Brand Capitalization:** Confirm lowercase "ingenious targeting laboratory" is correct across entire site
2. **Timeline References:** Should ALL timeline mentions be removed site-wide? Need confirmation from Paul
3. **ES Cell Pages:** Confirm deletion of ES cell dedicated pages
4. **Publications:** Verify all publications match "final Google doc version" - which doc is this?
5. **Lab Signals Messaging:** What language is used in current ads? Should be incorporated
6. **TruView Technology:** Does dedicated page exist? Where should it link?
7. **Breeding Scheme Architect:** Needs vetting by breeding scientists before going live
8. **Colony Management Service:** Confirm if this service page should remain or be removed
9. **Testimonials:** Which format should be used site-wide for consistency?

---

## 🎯 RECOMMENDED APPROACH

### Phase 1: Quick Fixes (Low Risk)
1. Fix phone numbers (DONE)
2. Current Openings simplification (DONE)
3. Add periods, fix typos
4. Fix obvious broken links

### Phase 2: Content Updates (Medium Risk)
1. Update publications to match final versions
2. Remove timeline references
3. Update Lab Signals messaging
4. Fix resource links

### Phase 3: Structural Changes (High Risk)
1. Brand capitalization change (site-wide)
2. Remove/replace AI images with accurate diagrams
3. Delete deprecated pages (ES cells, derivative system, etc.)
4. Reorganize navigation/dropdown menus

### Phase 4: Integration & Testing
1. Connect HubSpot calendar
2. Verify all CTAs work correctly
3. Test all internal links
4. Review SEO/schema changes

---

## 📊 PROGRESS TRACKER

**Documents Processed:** 18/18  
**Changes Completed:** 4 major items  
**Changes Pending:** ~50+ items  
**Critical Decisions Needed:** 9

**Estimated Effort:**
- Quick fixes: 2-3 hours
- Content updates: 8-10 hours  
- Structural changes: 15-20 hours
- Testing & QA: 5-8 hours
- **Total:** 30-40 hours

---

**Next Steps:**
1. Review and prioritize changes
2. Get team confirmation on critical decisions (especially brand capitalization)
3. Source accurate scientific diagrams to replace AI-generated images
4. Obtain "final Google doc version" for publication matching
5. Schedule testing window for major changes
