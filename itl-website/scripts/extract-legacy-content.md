# Legacy Content Extraction Guide

## Overview

This guide explains how to extract content from the legacy genetargeting.com website and save it in the new site's legacy content format.

## Process for Each Page

### Step 1: Open the Legacy URL

Navigate to the legacy URL in a browser (e.g., `https://www.genetargeting.com/knockout-mouse-models`).

### Step 2: Scroll and Locate Main Content

Scroll to the end of the page to ensure all content is loaded, then identify the main content region (between the site navigation and footer).

### Step 3: Extract Content

Extract the main content body verbatim. Do NOT edit any text - preserve headings, lists, and formatting exactly as they appear.

### Step 4: Create Markdown File

Create a markdown file in `src/content/legacy/` with this structure:

```markdown
---
legacy_url: "https://www.genetargeting.com/[path]"
new_build_url: "/[new-path]/"
url_handling: "reuse" | "redirect"
link_from: ["/related-page-1/", "/related-page-2/"]
extracted_date: "YYYY-MM-DD"
title: "Page Title"
---

# Page Title

[Extracted content here - verbatim from legacy site]
```

## File Naming Convention

- Top-level pages: `{slug}.md` (e.g., `knockout-mouse-models.md`)
- Nested pages: `{parent}__{child}.md` (e.g., `ingenious-blog__ace2-transgenic-mice.md`)

## Example

For `https://www.genetargeting.com/knockout-mouse-models`:

**File:** `src/content/legacy/knockout-mouse-models.md`

```markdown
---
legacy_url: "https://www.genetargeting.com/knockout-mouse-models"
new_build_url: "/knockout-mouse-models/"
url_handling: "reuse"
link_from: ["/custom-mouse-models/", "/knockout-mouse-models/"]
extracted_date: "2026-01-11"
title: "Knockout Mouse Models"
---

# Knockout Mouse Models

Since 1998, Ingenious Targeting Laboratory has completed over 2,500 custom gene targeting projects...

[rest of content]
```

## Using with LegacyPageTemplate

Once content is extracted, create a page that uses the `LegacyPageTemplate` component:

```tsx
import { LegacyPageTemplate } from '@/components/legacy';

export default function LegacyKnockoutPage() {
  return (
    <LegacyPageTemplate
      title="Knockout Mouse Models"
      description="Since 1998, ITL has completed over 2,500 custom gene targeting projects..."
      content={`<h2>Our Approach</h2><p>Content here...</p>`}
      legacyUrl="https://www.genetargeting.com/knockout-mouse-models"
      relatedPages={[
        { label: 'Custom Mouse Models', href: '/custom-mouse-models' },
      ]}
    />
  );
}
```

## Automated Extraction (Browser Console)

For faster extraction, you can use this browser console script:

```javascript
// Run this in the browser console on a legacy page
(function() {
  const main = document.querySelector('main') || document.querySelector('[role="main"]') || document.querySelector('.main-content');
  const title = document.querySelector('h1')?.textContent || document.title;
  
  console.log('---');
  console.log(`legacy_url: "${window.location.href}"`);
  console.log(`extracted_date: "${new Date().toISOString().split('T')[0]}"`);
  console.log(`title: "${title}"`);
  console.log('---');
  console.log('');
  console.log(main?.innerHTML || 'Could not find main content');
})();
```

## Priority Order

Extract content in this priority order:
1. High-traffic pages (home, custom-mouse-models, knockout-mouse-models, etc.)
2. Service pages (preclinical-services, mouse-genotyping-service, etc.)
3. Product pages (catalog models, humanized mice, etc.)
4. Blog/article pages (ingenious-blog/*, exclusive-newsletter-content/*)
