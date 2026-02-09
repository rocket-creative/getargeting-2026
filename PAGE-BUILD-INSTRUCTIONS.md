# Page Build Instructions for AI Assistant

## CRITICAL: Master Text Rules

### Source of Truth
The `/page-text-md/` folder contains **APPROVED MASTER TEXT** for every page. This text:

1. **CANNOT be edited, changed, or modified** under any circumstances
2. **MUST appear on the built page in its entirety**
3. **MUST be used exactly as written** - no rewording, summarizing, or paraphrasing

### How to Build a Page

1. **Read the master text file** from `/page-text-md/[page-name].md`
2. **Extract all content** and use it EXACTLY as written in the built components
3. **Never skip sections** - every heading, paragraph, bullet point, and quote must appear

---

## Page Structure

Every page consists of TWO types of content:

### 1. MASTER TEXT (from page-text-md) - LOCKED
This content is **SACRED** and cannot be changed:
- Page title and meta description
- Hero headline and description
- All section headings (H1, H2, H3, etc.)
- All body paragraphs
- All bullet point lists
- All quotes/testimonials with attribution
- All FAQ questions and answers

### 2. INDEPENDENT COMPONENTS - Can be added/customized
These are **separate from master text** and can be added to enhance the page:

| Component | Description | Rules |
|-----------|-------------|-------|
| Navigation | Site-wide nav bar | **NEVER CHANGES** - shared across all pages |
| Footer | Site-wide footer | **NEVER CHANGES** - shared across all pages |
| Announcement Bar | NIH funding message | **NEVER CHANGES** - shared across all pages |
| Cookie Consent | GDPR/cookie popup | **NEVER CHANGES** - shared across all pages |
| Related Pages Section | Links to other pages | **CAN ADD** for internal linking/SEO |
| CTA Sections | Call-to-action buttons | **CAN ADD** if NOT in master text (for SEO) |
| FAQ Section | Questions & answers | **CAN ADD** if NOT in master text (for SEO) |
| Glossary Section | Term definitions | **CAN ADD** if NOT in master text (for SEO) |
| Schema.org Data | Structured data | **CAN ADD** always (for SEO) |

### SEO Enhancement Rules

You **CAN ADD** these sections for SEO improvement:
- CTA sections (if not in master text)
- FAQ sections (if not in master text)
- Glossary sections (if not in master text)
- Related pages sections
- Schema.org structured data

**CRITICAL:** These additions must:
1. **NEVER overwrite** any master text
2. **NEVER replace** any master text sections
3. **NEVER modify** any master text wording
4. Be placed **around** the master text (before/after sections)
5. The master text must be **displayed in full**

---

## Build Process Checklist

When building any page:

- [ ] Read the master text file from `/page-text-md/[page-name].md`
- [ ] Identify all sections in the master text
- [ ] Create components that display master text EXACTLY
- [ ] Add independent components (nav, footer, etc.)
- [ ] Add Related Pages section if appropriate
- [ ] Verify ALL master text appears on the page unchanged
- [ ] Apply styling from design system (fullCSS.md)

---

## What CAN Be Added (Not in Master Text)

These sections are INDEPENDENT and can be added to pages:

### Navigation Component
- Logo, search, buttons
- Nav links row
- Announcement bar

### Footer Component
- Company info, links
- Contact details
- Copyright

### Related Pages Section
- Links to related content
- "You might also like" style sections
- Cross-linking between pages

### Glossary Section (if page doesn't have one)
- Technical term definitions
- Only add if NOT already in master text

### Schema.org Structured Data
- SEO markup
- Organization schema
- FAQ schema

---

## What CANNOT Be Done

❌ Edit any text in `/page-text-md/` files
❌ Rewrite or paraphrase master text
❌ Skip or omit any section from master text
❌ Change the order of master text sections
❌ Add content that contradicts master text
❌ Summarize or shorten master text

---

## Example Page Build

For `homepage.md`:

```
PAGE STRUCTURE:
├── Navigation (independent)
├── Announcement Bar (independent)
├── Hero Section (FROM MASTER TEXT)
├── Core Research Services (FROM MASTER TEXT)
├── Overview Section (FROM MASTER TEXT)
├── Modern Model-Generation Landscape (FROM MASTER TEXT)
├── High-Level Approach (FROM MASTER TEXT)
├── Conceptual Workflow (FROM MASTER TEXT)
├── Trusted by Researchers (FROM MASTER TEXT)
├── Testimonials (FROM MASTER TEXT)
├── Start Your Project CTA (FROM MASTER TEXT)
├── FAQ Section (FROM MASTER TEXT)
├── Related Pages (independent - can add)
├── Footer (independent)
└── Cookie Consent (independent)
```

---

## File Reference

| File | Purpose |
|------|---------|
| `/page-text-md/*.md` | MASTER TEXT - DO NOT EDIT |
| `/START-HERE.docx.md` | Complete sitemap (130 pages) |
| `/BUILD-TRACKER.md` | **Track pages built** - UPDATE after each build |
| `/fullCSS.md` | Design system CSS |
| `/fullhtml.md` | Webflow design reference |
| `/instructions.md` | General build instructions |
| `/itl-website/src/app/page.tsx` | Homepage component |
| `/itl-website/src/components/UXUIDC/` | Shared components |

---

## After Building Each Page

1. **Update BUILD-TRACKER.md** - Mark page as ✅ Built with date
2. **Add build notes** - Any SEO sections added, special considerations
3. **Verify master text** - Confirm ALL master text appears unchanged

---

## Navigation Structure (from START-HERE.docx.md)

All 130 pages are organized in the navigation:

### Primary Nav Items (with dropdowns)
1. **Custom Models** → 18 pages (knockout, knockin, humanized, transgenic)
2. **Catalog** → 6 pages (checkpoint mice, reporter lines)
3. **Therapeutic Areas** → 23 pages (oncology, neuro, cardio, etc.)
4. **Technology** → 15 pages (Cre-Lox, gene targeting)
5. **Services** → 10 pages (colony mgmt, cryo, preclinical)
6. **Resources** → 8 pages (guides, strain backgrounds)
7. **About** → 8 pages (contact, careers, why choose)

### Navigation Component Location
`/itl-website/src/components/UXUIDC/Navigation.tsx`

The navigation already includes all pages from the sitemap. When building new pages, they should already be linked in the nav.

---

## 60 Master Text Files

All master text files in `/page-text-md/`:
- Each file corresponds to a page in the sitemap
- File name matches URL slug (e.g., `knockout-mouse-models.md` → `/knockout-mouse-models`)
- Contains all approved content for that page

---

## Remember

> **The master text is APPROVED CONTENT. Your job is to BUILD the page using this text exactly as written, not to write or edit the content.**

Every word matters. Every section matters. Build faithfully.
