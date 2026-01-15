# AI Error Log & Learning Document
## ITL Website Project

**Purpose:** Document errors, solutions, and lessons learned to help AI assistants avoid repeating mistakes.

**Last Updated:** January 14, 2026

---

## Table of Contents
1. [Project Critical Rules](#project-critical-rules)
2. [Common Error Patterns](#common-error-patterns)
3. [Error Log (Chronological)](#error-log-chronological)
4. [Quick Reference Fixes](#quick-reference-fixes)
5. [Component Gotchas](#component-gotchas)

---

## Project Critical Rules

### MUST FOLLOW — These Cause Errors If Violated

| Rule | Consequence of Violation |
|------|--------------------------|
| **NO HYPHENS** in visible text | Client will reject. Use spaces instead of hyphens in all copy |
| **Company name lowercase** | Always `ingenious targeting laboratory`, never `ITL` in visible text |
| **UXUIDC prefix** for components | Component naming convention must be followed |
| **No emojis anywhere** | Use Lucide icons only |
| **Design system colors only** | Don't invent colors; use defined tokens |
| **Max content width 1000px** | Page wrapper is 1200px, content max is 1000px |

### File Locations to Remember

```
Components:     /src/components/UXUIDC/
Pages:          /src/app/[page-name]/page.tsx
Blog Content:   /src/content/blog/
Legacy Content: /src/content/legacy/
Lib Utils:      /src/lib/
```

---

## Common Error Patterns

### 1. TypeScript Type Errors

**Pattern:** Missing or incorrect types for component props

**Example Error:**
```
Type 'string' is not assignable to type 'ResourceType'
```

**Solution:** Always check the type definitions in the component file before passing props. Import types from shared type files.

**Prevention:** Read the component's interface/type definitions first.

---

### 2. Next.js Client vs Server Component Issues

**Pattern:** Using hooks or browser APIs in server components

**Example Error:**
```
useState is not a function
You're importing a component that needs useState. It only works in a Client Component
```

**Solution:** Add `'use client'` directive at top of file when using:
- useState, useEffect, useRef
- Browser APIs (window, document)
- Event handlers (onClick, onChange)

**Prevention:** Check if the page needs interactivity. Most ITL pages use client components.

---

### 3. Link/URL Errors

**Pattern:** Broken internal links or incorrect external URLs

**Known Issues Fixed:**
- HubSpot URLs needed updating from old format to `go.genetargeting.com` or HubSpot CDN
- Internal links must start with `/` not the full domain

**Solution:** For HubSpot resources, use these verified patterns:
```
go.genetargeting.com/[resource-name]
f.hubspotusercontent20.net/hubfs/[id]/[filename]
```

---

### 4. CSS/Styling Inconsistencies

**Pattern:** Not following design system exactly

**Common Mistakes:**
- Wrong padding values (should be `60px 20px` for sections)
- Wrong card styling (border-top should be `4px solid #008080`)
- Missing hover transitions (`transition-all duration-300`)

**Design System Quick Reference:**
```css
/* Cards */
backgroundColor: '#f7f7f7'
padding: '25px'
border: '.5px solid #e0e0e0'
borderTop: '4px solid #008080'

/* Primary Button */
backgroundColor: '#008080'
color: 'white'
padding: '10px 20px'
minWidth: '160px'
fontSize: '.85rem'
fontWeight: 500

/* Section Padding */
padding: '60px 20px'
```

---

### 5. Import Path Errors

**Pattern:** Wrong import paths for components

**Example Error:**
```
Module not found: Can't resolve '@/components/UXUIDC/ComponentName'
```

**Solution:** Check that:
1. Component file exists at expected path
2. Component is exported (default or named)
3. Import matches export type

**Common Pattern:**
```typescript
import { UXUIDCNavigation } from '@/components/UXUIDC/Navigation'
import { UXUIDCFooter } from '@/components/UXUIDC/Footer'
```

---

### 6. GSAP Animation Issues

**Pattern:** Animations not triggering or causing hydration errors

**Solution:**
- Always wrap GSAP in useEffect with cleanup
- Use ScrollTrigger.refresh() after dynamic content loads
- Disable GSAP for server rendering

**Pattern:**
```typescript
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  const ctx = gsap.context(() => {
    // animations here
  })
  
  return () => ctx.revert()
}, [])
```

---

### 7. Missing Metadata Exports

**Pattern:** SEO metadata not appearing on pages

**Solution:** For client components, create separate `metadata.ts` file:
```typescript
// metadata.ts
export const metadata = { ... }

// page.tsx - import and re-export
export { metadata } from './metadata'
```

---

### 8. Form Handling Errors

**Pattern:** Form submission issues

**Common Fixes:**
- Add `e.preventDefault()` to form handlers
- Validate required fields before submission
- Handle loading/error states

---

## Error Log (Chronological)

### Template for Logging Errors

When an error occurs, add an entry using this format:

```markdown
### [DATE] — [Brief Error Title]

**Error Message:**
```
Paste exact error message here
```

**Context:** What were you trying to do?

**Root Cause:** Why did this happen?

**Solution:** What fixed it?

**Prevention:** How to avoid this in future?

**Files Affected:**
- /path/to/file1.tsx
- /path/to/file2.ts
```

---

### January 13, 2026 — HubSpot Download URLs Broken

**Error Message:**
Links returning 404 or redirecting incorrectly

**Context:** Resources page download links not working

**Root Cause:** Old HubSpot URL format deprecated. URLs needed to point to new CDN structure.

**Solution:** Updated all resource links to use correct URLs:
- Landing pages: `go.genetargeting.com/[resource]`
- Direct files: `f.hubspotusercontent20.net/hubfs/[id]/[file]`

**Files Affected:**
- /src/app/resources/page.tsx

---

### [DATE] — [Add new errors here as they occur]

---

## Quick Reference Fixes

### Build Fails with Type Errors
```bash
npm run build 2>&1 | head -50
```
Look for the first error, fix it, repeat.

### Component Not Rendering
1. Check `'use client'` directive if using hooks
2. Check import path is correct
3. Check component is exported

### Styles Not Applying
1. Check class names match Tailwind classes
2. Check inline styles use correct property names (camelCase)
3. Check for CSS specificity conflicts

### GSAP Not Working
1. Ensure `gsap.registerPlugin(ScrollTrigger)` is called
2. Check element refs are attached
3. Wrap in useEffect to run after mount

### Image Not Loading
1. Check path is correct (public folder or imported)
2. Check Next.js Image component has width/height
3. For external images, add domain to next.config.js

---

## Component Gotchas

### UXUIDCNavigation
- Already includes mobile menu
- Don't duplicate nav items

### UXUIDCFooter
- Already includes all legal links
- Don't modify footer content without approval

### UXUIDCAnimatedFAQ
- Requires exactly 5 FAQ items per ITL standards
- Pass items as array of {question, answer} objects

### UXUIDCStartProjectCTA
- Use for teal CTA sections
- Has built-in button linking to `/request-quote`

### UXUIDCResourceLinks
- Three variants: `card`, `inline`, `banner`
- Use predefined resource collections when possible
- Collections defined in component file

---

## Known Working Patterns

### Page Template Structure
```typescript
'use client'

import { UXUIDCNavigation } from '@/components/UXUIDC/Navigation'
import { UXUIDCFooter } from '@/components/UXUIDC/Footer'
import { UXUIDCStartProjectCTA } from '@/components/UXUIDC/StartProjectCTA'

export default function PageName() {
  return (
    <main>
      <UXUIDCNavigation />
      
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
        padding: '80px 20px 60px'
      }}>
        {/* Hero content */}
      </section>
      
      {/* Content Sections */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Content */}
        </div>
      </section>
      
      <UXUIDCStartProjectCTA />
      <UXUIDCFooter />
    </main>
  )
}
```

### Card Component Pattern
```typescript
<div style={{
  backgroundColor: '#f7f7f7',
  padding: '25px',
  border: '.5px solid #e0e0e0',
  borderTop: '4px solid #008080',
  borderRadius: '8px',
}}>
  {/* Card content */}
</div>
```

### Button Patterns
```typescript
// Primary Button
<button style={{
  backgroundColor: '#008080',
  color: 'white',
  padding: '10px 20px',
  minWidth: '160px',
  fontSize: '.85rem',
  fontWeight: 500,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
}}>
  Button Text
</button>

// Secondary Button
<button style={{
  backgroundColor: 'transparent',
  color: '#008080',
  padding: '10px 20px',
  border: '2px solid #008080',
  borderRadius: '4px',
  cursor: 'pointer'
}}>
  Button Text
</button>
```

---

## Terminology Cheat Sheet

| Correct | Incorrect |
|---------|-----------|
| knockout | knock-out |
| knockin | knock-in |
| loxP sites | LoxP sites |
| Cre recombinase | cre recombinase |
| FRT sites | frt sites |
| germline transmission | germ-line transmission |
| conditional knockout | conditional knock-out |
| tissue specific | tissue-specific |
| study ready | study-ready |

---

## How to Use This Document

### For AI Assistants

1. **Before starting any task:** Read the "Project Critical Rules" section
2. **When encountering an error:** Check "Common Error Patterns" first
3. **After fixing an error:** Add it to the "Error Log" section
4. **When building new components:** Reference "Known Working Patterns"

### For Human Developers

1. Add new errors as they occur using the template
2. Update "Quick Reference Fixes" when discovering new solutions
3. Keep "Component Gotchas" current as components evolve

---

## Document History

| Date | Change | By |
|------|--------|-----|
| Jan 14, 2026 | Document created | AI Assistant |

---

*This document should be updated after every significant error is encountered and resolved.*
