---
generated: "2026-01-11"
purpose: "Legacy page replication manifest for Cursor (verbatim body text; layout/style only)"
source_domain: "https://www.genetargeting.com"
---

# Legacy Replication Link File (Cursor)

This file enumerates every URL in the provided legacy sitemap.
For each entry you will:
- decide whether to **reuse** the old URL or **redirect** to a new-build page,
- identify a likely **new-build page that should link to this legacy page** (if preserved),
- and extract the main content (between nav and footer) verbatim for rebuild.

## https://www.genetargeting.com

- **legacy_md:** `legacy/home.md`
- **suggested_new_build_url:** `/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/`
- **notes:** Home page

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/home.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /
     - Old URL: https://www.genetargeting.com
     - URL handling: Reuse old URL
     - "Link from" suggestion: /
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at / and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/search

- **legacy_md:** `legacy/search.md`
- **suggested_new_build_url:** `(manual mapping needed)`
- **url_handling_suggestion:** `retire`  (review)
- **suggest_link_from_new_build_pages:** `/`
- **notes:** Site search; rebuild-specific

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/search
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/search.md
   - Add a top "Legacy Header" block containing:
     - New-build link: (unmapped)
     - Old URL: https://www.genetargeting.com/search
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at  and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/knockout-mouse-models

- **legacy_md:** `legacy/knockout-mouse-models.md`
- **suggested_new_build_url:** `/knockout-mouse-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockout-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/knockout-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/knockout-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /knockout-mouse-models/
     - Old URL: https://www.genetargeting.com/knockout-mouse-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockout-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /knockout-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/conventional-knockout-mouse-models

- **legacy_md:** `legacy/conventional-knockout-mouse-models.md`
- **suggested_new_build_url:** `/conventional-knockout-mouse-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockout-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/conventional-knockout-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/conventional-knockout-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /conventional-knockout-mouse-models/
     - Old URL: https://www.genetargeting.com/conventional-knockout-mouse-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockout-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /conventional-knockout-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/conditional-knockout-mouse-models

- **legacy_md:** `legacy/conditional-knockout-mouse-models.md`
- **suggested_new_build_url:** `/conditional-knockout-mouse-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/conditional-knockout-mouse-models/`, `/custom-mouse-models/`, `/knockout-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/conditional-knockout-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/conditional-knockout-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /conditional-knockout-mouse-models/
     - Old URL: https://www.genetargeting.com/conditional-knockout-mouse-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /conditional-knockout-mouse-models/, /custom-mouse-models/, /knockout-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /conditional-knockout-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/conditional-ko-reporter

- **legacy_md:** `legacy/conditional-ko-reporter.md`
- **suggested_new_build_url:** `/conditional-knockout-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/conditional-knockout-mouse-models/`, `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/conditional-ko-reporter
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/conditional-ko-reporter.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /conditional-knockout-mouse-models/
     - Old URL: https://www.genetargeting.com/conditional-ko-reporter
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /conditional-knockout-mouse-models/, /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /conditional-knockout-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/standard-conditional-knockout

- **legacy_md:** `legacy/standard-conditional-knockout.md`
- **suggested_new_build_url:** `/conditional-knockout-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/conditional-knockout-mouse-models/`, `/custom-mouse-models/`, `/knockout-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/standard-conditional-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/standard-conditional-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /conditional-knockout-mouse-models/
     - Old URL: https://www.genetargeting.com/standard-conditional-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /conditional-knockout-mouse-models/, /custom-mouse-models/, /knockout-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /conditional-knockout-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/truview-conditional-knockout

- **legacy_md:** `legacy/truview-conditional-knockout.md`
- **suggested_new_build_url:** `/conditional-knockout-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/conditional-knockout-mouse-models/`, `/custom-mouse-models/`, `/knockout-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/truview-conditional-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/truview-conditional-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /conditional-knockout-mouse-models/
     - Old URL: https://www.genetargeting.com/truview-conditional-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /conditional-knockout-mouse-models/, /custom-mouse-models/, /knockout-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /conditional-knockout-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/knockin-mouse-models

- **legacy_md:** `legacy/knockin-mouse-models.md`
- **suggested_new_build_url:** `/knockin-mouse-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockin-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/knockin-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/knockin-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /knockin-mouse-models/
     - Old URL: https://www.genetargeting.com/knockin-mouse-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockin-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /knockin-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/cdna-knockin

- **legacy_md:** `legacy/cdna-knockin.md`
- **suggested_new_build_url:** `/cdna-knockin/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockin-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/cdna-knockin
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/cdna-knockin.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /cdna-knockin/
     - Old URL: https://www.genetargeting.com/cdna-knockin
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockin-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /cdna-knockin/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/safe-harbor-locus

- **legacy_md:** `legacy/safe-harbor-locus.md`
- **suggested_new_build_url:** `/safe-harbor-locus/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockin-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/safe-harbor-locus
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/safe-harbor-locus.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /safe-harbor-locus/
     - Old URL: https://www.genetargeting.com/safe-harbor-locus
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockin-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /safe-harbor-locus/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/rosa26

- **legacy_md:** `legacy/rosa26.md`
- **suggested_new_build_url:** `/rosa26/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockin-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/rosa26
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/rosa26.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /rosa26/
     - Old URL: https://www.genetargeting.com/rosa26
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockin-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /rosa26/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/rapid-rosa26-targeting

- **legacy_md:** `legacy/rapid-rosa26-targeting.md`
- **suggested_new_build_url:** `/rosa26/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockin-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/rapid-rosa26-targeting
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/rapid-rosa26-targeting.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /rosa26/
     - Old URL: https://www.genetargeting.com/rapid-rosa26-targeting
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/, /knockin-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /rosa26/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/fast-mice

- **legacy_md:** `legacy/fast-mice.md`
- **suggested_new_build_url:** `/fast-mice/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/fast-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/fast-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /fast-mice/
     - Old URL: https://www.genetargeting.com/fast-mice
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /fast-mice/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/humanized-mouse-models

- **legacy_md:** `legacy/humanized-mouse-models.md`
- **suggested_new_build_url:** `/humanized-mouse-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/humanized-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/humanized-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /humanized-mouse-models/
     - Old URL: https://www.genetargeting.com/humanized-mouse-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /humanized-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/gene-replacement

- **legacy_md:** `legacy/gene-replacement.md`
- **suggested_new_build_url:** `/gene-replacement/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/gene-replacement
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/gene-replacement.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /gene-replacement/
     - Old URL: https://www.genetargeting.com/gene-replacement
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /gene-replacement/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/p53-humanized-mouse-models

- **legacy_md:** `legacy/p53-humanized-mouse-models.md`
- **suggested_new_build_url:** `/humanized-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/p53-humanized-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/p53-humanized-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /humanized-mouse-models/
     - Old URL: https://www.genetargeting.com/p53-humanized-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /humanized-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/bac-to-bac-large-scale-targeting

- **legacy_md:** `legacy/bac-to-bac-large-scale-targeting.md`
- **suggested_new_build_url:** `/targeted-transgenic-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/bac-to-bac-large-scale-targeting
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/bac-to-bac-large-scale-targeting.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /targeted-transgenic-mouse-models/
     - Old URL: https://www.genetargeting.com/bac-to-bac-large-scale-targeting
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /targeted-transgenic-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/transgenic-mouse-models

- **legacy_md:** `legacy/transgenic-mouse-models.md`
- **suggested_new_build_url:** `/targeted-transgenic-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/transgenic-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/transgenic-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /targeted-transgenic-mouse-models/
     - Old URL: https://www.genetargeting.com/transgenic-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /targeted-transgenic-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/custom-mouse-models

- **legacy_md:** `legacy/custom-mouse-models.md`
- **suggested_new_build_url:** `/custom-mouse-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/custom-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/custom-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /custom-mouse-models/
     - Old URL: https://www.genetargeting.com/custom-mouse-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /custom-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/rat-models

- **legacy_md:** `legacy/rat-models.md`
- **suggested_new_build_url:** `/rat-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/rat-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/rat-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/rat-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /rat-models/
     - Old URL: https://www.genetargeting.com/rat-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /rat-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /rat-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/custom-rabbit-models

- **legacy_md:** `legacy/custom-rabbit-models.md`
- **suggested_new_build_url:** `/custom-rabbit-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/custom-rabbit-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/custom-rabbit-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/custom-rabbit-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /custom-rabbit-models/
     - Old URL: https://www.genetargeting.com/custom-rabbit-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /custom-rabbit-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /custom-rabbit-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/transgenic-animal-models

- **legacy_md:** `legacy/transgenic-animal-models.md`
- **suggested_new_build_url:** `/custom-animal-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/transgenic-animal-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/transgenic-animal-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /custom-animal-models/
     - Old URL: https://www.genetargeting.com/transgenic-animal-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /custom-animal-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/buy-transgenic-mice

- **legacy_md:** `legacy/buy-transgenic-mice.md`
- **suggested_new_build_url:** `/catalog-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/catalog-mouse-models/`, `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/buy-transgenic-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/buy-transgenic-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /catalog-mouse-models/
     - Old URL: https://www.genetargeting.com/buy-transgenic-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /catalog-mouse-models/, /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /catalog-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/humanized-immune-checkpoint-mice

- **legacy_md:** `legacy/humanized-immune-checkpoint-mice.md`
- **suggested_new_build_url:** `/catalog-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/humanized-immune-checkpoint-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/humanized-immune-checkpoint-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /catalog-mouse-models/
     - Old URL: https://www.genetargeting.com/humanized-immune-checkpoint-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /catalog-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/single-immune-checkpoint-humanized-mice

- **legacy_md:** `legacy/single-immune-checkpoint-humanized-mice.md`
- **suggested_new_build_url:** `/catalog-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/single-immune-checkpoint-humanized-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/single-immune-checkpoint-humanized-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /catalog-mouse-models/
     - Old URL: https://www.genetargeting.com/single-immune-checkpoint-humanized-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /catalog-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/double-immune-checkpoint-humanized-mice

- **legacy_md:** `legacy/double-immune-checkpoint-humanized-mice.md`
- **suggested_new_build_url:** `/catalog-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/double-immune-checkpoint-humanized-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/double-immune-checkpoint-humanized-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /catalog-mouse-models/
     - Old URL: https://www.genetargeting.com/double-immune-checkpoint-humanized-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /catalog-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/order-inquiry-catalog-models

- **legacy_md:** `legacy/order-inquiry-catalog-models.md`
- **suggested_new_build_url:** `/order-catalog-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/catalog-mouse-models/`, `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/order-inquiry-catalog-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/order-inquiry-catalog-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /order-catalog-models/
     - Old URL: https://www.genetargeting.com/order-inquiry-catalog-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /catalog-mouse-models/, /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /order-catalog-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/about-ingenious

- **legacy_md:** `legacy/about-ingenious.md`
- **suggested_new_build_url:** `/about-itl/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/about-ingenious
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/about-ingenious.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /about-itl/
     - Old URL: https://www.genetargeting.com/about-ingenious
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /about-itl/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/technology-overview

- **legacy_md:** `legacy/technology-overview.md`
- **suggested_new_build_url:** `/technologies/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/technology-overview
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/technology-overview.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /technologies/
     - Old URL: https://www.genetargeting.com/technology-overview
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /technologies/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/current-openings

- **legacy_md:** `legacy/current-openings.md`
- **suggested_new_build_url:** `/about-itl/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/current-openings
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/current-openings.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /about-itl/
     - Old URL: https://www.genetargeting.com/current-openings
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /about-itl/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/partners

- **legacy_md:** `legacy/partners.md`
- **suggested_new_build_url:** `/about-itl/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/partners
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/partners.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /about-itl/
     - Old URL: https://www.genetargeting.com/partners
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /about-itl/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/testimonials

- **legacy_md:** `legacy/testimonials.md`
- **suggested_new_build_url:** `/why-choose-itl/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/testimonials
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/testimonials.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /why-choose-itl/
     - Old URL: https://www.genetargeting.com/testimonials
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /why-choose-itl/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/resources

- **legacy_md:** `legacy/resources.md`
- **suggested_new_build_url:** `/resources/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/resources
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/resources.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /resources/
     - Old URL: https://www.genetargeting.com/resources
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /resources/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/project-faqs-resources

- **legacy_md:** `legacy/project-faqs-resources.md`
- **suggested_new_build_url:** `/resources/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/project-faqs-resources
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/project-faqs-resources.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /resources/
     - Old URL: https://www.genetargeting.com/project-faqs-resources
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /resources/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/service-steps

- **legacy_md:** `legacy/service-steps.md`
- **suggested_new_build_url:** `/mouse-model-services/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/service-steps
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/service-steps.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /mouse-model-services/
     - Old URL: https://www.genetargeting.com/service-steps
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /mouse-model-services/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/transgenic-mouse-service

- **legacy_md:** `legacy/transgenic-mouse-service.md`
- **suggested_new_build_url:** `/mouse-model-services/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/transgenic-mouse-service
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/transgenic-mouse-service.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /mouse-model-services/
     - Old URL: https://www.genetargeting.com/transgenic-mouse-service
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /mouse-model-services/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/preclinical-services

- **legacy_md:** `legacy/preclinical-services.md`
- **suggested_new_build_url:** `/preclinical-services/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/preclinical-services
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/preclinical-services.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /preclinical-services/
     - Old URL: https://www.genetargeting.com/preclinical-services
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /preclinical-services/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/mouse-genotyping-service

- **legacy_md:** `legacy/mouse-genotyping-service.md`
- **suggested_new_build_url:** `/mouse-genotyping/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/mouse-genotyping-service
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/mouse-genotyping-service.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /mouse-genotyping/
     - Old URL: https://www.genetargeting.com/mouse-genotyping-service
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /mouse-genotyping/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/partial-services

- **legacy_md:** `legacy/partial-services.md`
- **suggested_new_build_url:** `/mouse-model-services/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/partial-services
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/partial-services.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /mouse-model-services/
     - Old URL: https://www.genetargeting.com/partial-services
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /mouse-model-services/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/quote-request-form

- **legacy_md:** `legacy/quote-request-form.md`
- **suggested_new_build_url:** `/request-quote/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/quote-request-form
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/quote-request-form.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /request-quote/
     - Old URL: https://www.genetargeting.com/quote-request-form
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /request-quote/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/general-contact

- **legacy_md:** `legacy/general-contact.md`
- **suggested_new_build_url:** `/contact/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/general-contact
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/general-contact.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /contact/
     - Old URL: https://www.genetargeting.com/general-contact
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /contact/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/schedule-meeting

- **legacy_md:** `legacy/schedule-meeting.md`
- **suggested_new_build_url:** `/contact/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/schedule-meeting
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/schedule-meeting.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /contact/
     - Old URL: https://www.genetargeting.com/schedule-meeting
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /contact/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/humanized-immune-target-mice

- **legacy_md:** `legacy/humanized-immune-target-mice.md`
- **suggested_new_build_url:** `/catalog-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/humanized-immune-target-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/humanized-immune-target-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /catalog-mouse-models/
     - Old URL: https://www.genetargeting.com/humanized-immune-target-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /catalog-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/point-mutation-mice

- **legacy_md:** `legacy/point-mutation-mice.md`
- **suggested_new_build_url:** `/point-mutation-mice/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/point-mutation-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/point-mutation-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /point-mutation-mice/
     - Old URL: https://www.genetargeting.com/point-mutation-mice
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /point-mutation-mice/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/custom-animal-models

- **legacy_md:** `legacy/custom-animal-models.md`
- **suggested_new_build_url:** `/custom-animal-models/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/custom-animal-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/custom-animal-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /custom-animal-models/
     - Old URL: https://www.genetargeting.com/custom-animal-models
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /custom-animal-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/humanized-catalog-mouse-models

- **legacy_md:** `legacy/humanized-catalog-mouse-models.md`
- **suggested_new_build_url:** `/catalog-mouse-models/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/catalog-mouse-models/`, `/custom-mouse-models/`, `/humanized-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/humanized-catalog-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/humanized-catalog-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /catalog-mouse-models/
     - Old URL: https://www.genetargeting.com/humanized-catalog-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /catalog-mouse-models/, /custom-mouse-models/, /humanized-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /catalog-mouse-models/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog

- **legacy_md:** `legacy/ingenious-blog.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/publications

- **legacy_md:** `legacy/publications.md`
- **suggested_new_build_url:** `/publications/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/publications
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/publications.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /publications/
     - Old URL: https://www.genetargeting.com/publications
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /publications/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/cre-mice

- **legacy_md:** `legacy/cre-mice.md`
- **suggested_new_build_url:** `/mouse-lines/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/conditional-knockout-mouse-models/`, `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/cre-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/cre-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /mouse-lines/
     - Old URL: https://www.genetargeting.com/cre-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /conditional-knockout-mouse-models/, /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /mouse-lines/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/es-cells

- **legacy_md:** `legacy/es-cells.md`
- **suggested_new_build_url:** `/es-cell-gene-targeting/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/es-cells
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/es-cells.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /es-cell-gene-targeting/
     - Old URL: https://www.genetargeting.com/es-cells
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /es-cell-gene-targeting/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/video-library

- **legacy_md:** `legacy/video-library.md`
- **suggested_new_build_url:** `/resources/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/video-library
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/video-library.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /resources/
     - Old URL: https://www.genetargeting.com/video-library
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /resources/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/post-project-services

- **legacy_md:** `legacy/post-project-services.md`
- **suggested_new_build_url:** `/post-project-services/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/post-project-services
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/post-project-services.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /post-project-services/
     - Old URL: https://www.genetargeting.com/post-project-services
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /post-project-services/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/mouse-model-generation-guide

- **legacy_md:** `legacy/mouse-model-generation-guide.md`
- **suggested_new_build_url:** `/mouse-model-generation-guide/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/mouse-model-generation-guide
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/mouse-model-generation-guide.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /mouse-model-generation-guide/
     - Old URL: https://www.genetargeting.com/mouse-model-generation-guide
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /mouse-model-generation-guide/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/inducible-rosa26

- **legacy_md:** `legacy/inducible-rosa26.md`
- **suggested_new_build_url:** `/inducible-rosa26/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`, `/knockin-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/inducible-rosa26
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/inducible-rosa26.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /inducible-rosa26/
     - Old URL: https://www.genetargeting.com/inducible-rosa26
     - URL handling: Reuse old URL
     - "Link from" suggestion: /custom-mouse-models/, /knockin-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /inducible-rosa26/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/pharma-biotech-mouse-models

- **legacy_md:** `legacy/pharma-biotech-mouse-models.md`
- **suggested_new_build_url:** `/pharma-and-biotech/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/custom-mouse-models/`
- **notes:** 1:1 or hub mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/pharma-biotech-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/pharma-biotech-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /pharma-and-biotech/
     - Old URL: https://www.genetargeting.com/pharma-biotech-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /custom-mouse-models/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /pharma-and-biotech/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-process-2

- **legacy_md:** `legacy/ingenious-process-2.md`
- **suggested_new_build_url:** `/how-it-works/`
- **url_handling_suggestion:** `redirect`  (301 to new-build URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-process-2
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-process-2.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /how-it-works/
     - Old URL: https://www.genetargeting.com/ingenious-process-2
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /how-it-works/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/lab-signals

- **legacy_md:** `legacy/lab-signals.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/lab-signals
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/lab-signals.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/lab-signals
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/start-your-project

- **legacy_md:** `legacy/start-your-project.md`
- **suggested_new_build_url:** `/start-your-project/`
- **url_handling_suggestion:** `reuse`  (keep same URL)
- **suggest_link_from_new_build_pages:** `/resources/`
- **notes:** General mapping

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/start-your-project
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/start-your-project.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /start-your-project/
     - Old URL: https://www.genetargeting.com/start-your-project
     - URL handling: Reuse old URL
     - "Link from" suggestion: /resources/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /start-your-project/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/4-reasons-to-use-targeted-transgenic-mice-over-random-insertion

- **legacy_md:** `legacy/ingenious-blog__4-reasons-to-use-targeted-transgenic-mice-over-random-insertion.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/4-reasons-to-use-targeted-transgenic-mice-over-random-insertion
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__4-reasons-to-use-targeted-transgenic-mice-over-random-insertion.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/4-reasons-to-use-targeted-transgenic-mice-over-random-insertion
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/a-new-mouse-line-for-tissue-specific-expression

- **legacy_md:** `legacy/ingenious-blog__a-new-mouse-line-for-tissue-specific-expression.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/a-new-mouse-line-for-tissue-specific-expression
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__a-new-mouse-line-for-tissue-specific-expression.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/a-new-mouse-line-for-tissue-specific-expression
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/ace2-transgenic-mice

- **legacy_md:** `legacy/ingenious-blog__ace2-transgenic-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/ace2-transgenic-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__ace2-transgenic-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/ace2-transgenic-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/bac-transgenic

- **legacy_md:** `legacy/ingenious-blog__bac-transgenic.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/bac-transgenic
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__bac-transgenic.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/bac-transgenic
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cell-strains

- **legacy_md:** `legacy/ingenious-blog__cell-strains.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cell-strains
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cell-strains.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cell-strains
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cl

- **legacy_md:** `legacy/ingenious-blog__cl.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cl
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cl.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cl
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conditional-gene-knockout-mouse

- **legacy_md:** `legacy/ingenious-blog__conditional-gene-knockout-mouse.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conditional-gene-knockout-mouse
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conditional-gene-knockout-mouse.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conditional-gene-knockout-mouse
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conditional-knockout-mice

- **legacy_md:** `legacy/ingenious-blog__conditional-knockout-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conditional-knockout-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conditional-knockout-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conditional-knockout-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conditional-knockout-mouse-and-global-knockout-mouse

- **legacy_md:** `legacy/ingenious-blog__conditional-knockout-mouse-and-global-knockout-mouse.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conditional-knockout-mouse-and-global-knockout-mouse
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conditional-knockout-mouse-and-global-knockout-mouse.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conditional-knockout-mouse-and-global-knockout-mouse
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conditional-knockout-mouse-protocol

- **legacy_md:** `legacy/ingenious-blog__conditional-knockout-mouse-protocol.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conditional-knockout-mouse-protocol
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conditional-knockout-mouse-protocol.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conditional-knockout-mouse-protocol
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conditional-mutation

- **legacy_md:** `legacy/ingenious-blog__conditional-mutation.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conditional-mutation
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conditional-mutation.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conditional-mutation
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/congratulations-to-our-clients

- **legacy_md:** `legacy/ingenious-blog__congratulations-to-our-clients.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/congratulations-to-our-clients
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__congratulations-to-our-clients.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/congratulations-to-our-clients
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conventional-knockout

- **legacy_md:** `legacy/ingenious-blog__conventional-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conventional-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conventional-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conventional-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/conventional-vs-conditional-knockout

- **legacy_md:** `legacy/ingenious-blog__conventional-vs-conditional-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/conventional-vs-conditional-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__conventional-vs-conditional-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/conventional-vs-conditional-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cre-flox

- **legacy_md:** `legacy/ingenious-blog__cre-flox.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cre-flox
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cre-flox.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cre-flox
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cre-floxed-mice

- **legacy_md:** `legacy/ingenious-blog__cre-floxed-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cre-floxed-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cre-floxed-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cre-floxed-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cre-lox-conditional-knockout-mouse-models

- **legacy_md:** `legacy/ingenious-blog__cre-lox-conditional-knockout-mouse-models.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cre-lox-conditional-knockout-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cre-lox-conditional-knockout-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cre-lox-conditional-knockout-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cre-lox-facts

- **legacy_md:** `legacy/ingenious-blog__cre-lox-facts.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cre-lox-facts
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cre-lox-facts.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cre-lox-facts
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/cre-recombinase

- **legacy_md:** `legacy/ingenious-blog__cre-recombinase.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/cre-recombinase
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__cre-recombinase.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/cre-recombinase
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/crispr-cas9

- **legacy_md:** `legacy/ingenious-blog__crispr-cas9.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/crispr-cas9
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__crispr-cas9.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/crispr-cas9
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/crispr-gene-knockout

- **legacy_md:** `legacy/ingenious-blog__crispr-gene-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/crispr-gene-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__crispr-gene-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/crispr-gene-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/crispr-gene-targeting

- **legacy_md:** `legacy/ingenious-blog__crispr-gene-targeting.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/crispr-gene-targeting
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__crispr-gene-targeting.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/crispr-gene-targeting
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/crispr-knockdown

- **legacy_md:** `legacy/ingenious-blog__crispr-knockdown.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/crispr-knockdown
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__crispr-knockdown.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/crispr-knockdown
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/crispr-knockout

- **legacy_md:** `legacy/ingenious-blog__crispr-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/crispr-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__crispr-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/crispr-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/crispr-transgenic-mice

- **legacy_md:** `legacy/ingenious-blog__crispr-transgenic-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/crispr-transgenic-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__crispr-transgenic-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/crispr-transgenic-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/difference-between-knock-in-and-knockout

- **legacy_md:** `legacy/ingenious-blog__difference-between-knock-in-and-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/difference-between-knock-in-and-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__difference-between-knock-in-and-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/difference-between-knock-in-and-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/flox-design

- **legacy_md:** `legacy/ingenious-blog__flox-design.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/flox-design
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__flox-design.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/flox-design
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/flox-sequence

- **legacy_md:** `legacy/ingenious-blog__flox-sequence.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/flox-sequence
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__flox-sequence.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/flox-sequence
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/floxed-allele

- **legacy_md:** `legacy/ingenious-blog__floxed-allele.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/floxed-allele
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__floxed-allele.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/floxed-allele
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/floxed-cre-lox-flox

- **legacy_md:** `legacy/ingenious-blog__floxed-cre-lox-flox.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/floxed-cre-lox-flox
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__floxed-cre-lox-flox.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/floxed-cre-lox-flox
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/floxed-mice-cre

- **legacy_md:** `legacy/ingenious-blog__floxed-mice-cre.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/floxed-mice-cre
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__floxed-mice-cre.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/floxed-mice-cre
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/floxing

- **legacy_md:** `legacy/ingenious-blog__floxing.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/floxing
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__floxing.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/floxing
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/gaining-inducible-control

- **legacy_md:** `legacy/ingenious-blog__gaining-inducible-control.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/gaining-inducible-control
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__gaining-inducible-control.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/gaining-inducible-control
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/gene-knockout

- **legacy_md:** `legacy/ingenious-blog__gene-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/gene-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__gene-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/gene-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/gene-knockout-method

- **legacy_md:** `legacy/ingenious-blog__gene-knockout-method.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/gene-knockout-method
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__gene-knockout-method.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/gene-knockout-method
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/hace2-transgenic-mice

- **legacy_md:** `legacy/ingenious-blog__hace2-transgenic-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/hace2-transgenic-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__hace2-transgenic-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/hace2-transgenic-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/history-of-creating-genetically-humanized-mice

- **legacy_md:** `legacy/ingenious-blog__history-of-creating-genetically-humanized-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/history-of-creating-genetically-humanized-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__history-of-creating-genetically-humanized-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/history-of-creating-genetically-humanized-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/how-a-knockout-mouse-is-made

- **legacy_md:** `legacy/ingenious-blog__how-a-knockout-mouse-is-made.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/how-a-knockout-mouse-is-made
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__how-a-knockout-mouse-is-made.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/how-a-knockout-mouse-is-made
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/how-to-make-a-knock-in-mouse

- **legacy_md:** `legacy/ingenious-blog__how-to-make-a-knock-in-mouse.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/how-to-make-a-knock-in-mouse
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__how-to-make-a-knock-in-mouse.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/how-to-make-a-knock-in-mouse
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/how-to-make-a-transgenic-mouse

- **legacy_md:** `legacy/ingenious-blog__how-to-make-a-transgenic-mouse.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/how-to-make-a-transgenic-mouse
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__how-to-make-a-transgenic-mouse.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/how-to-make-a-transgenic-mouse
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/humanized-mice

- **legacy_md:** `legacy/ingenious-blog__humanized-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/humanized-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__humanized-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/humanized-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/ingenious-and-smoc-catalog-humanized-mouse-models

- **legacy_md:** `legacy/ingenious-blog__ingenious-and-smoc-catalog-humanized-mouse-models.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/ingenious-and-smoc-catalog-humanized-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__ingenious-and-smoc-catalog-humanized-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/ingenious-and-smoc-catalog-humanized-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/ingenious-targeting-laboratory-receives-3m-phase-ii-small-business-innovation-research-sbir-award

- **legacy_md:** `legacy/ingenious-blog__ingenious-targeting-laboratory-receives-3m-phase-ii-small-business-innovation-research-sbir-award.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/ingenious-targeting-laboratory-receives-3m-phase-ii-small-business-innovation-research-sbir-award
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__ingenious-targeting-laboratory-receives-3m-phase-ii-small-business-innovation-research-sbir-award.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/ingenious-targeting-laboratory-receives-3m-phase-ii-small-business-innovation-research-sbir-award
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knock-in-knock-out-mice

- **legacy_md:** `legacy/ingenious-blog__knock-in-knock-out-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knock-in-knock-out-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knock-in-knock-out-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knock-in-knock-out-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knock-in-mice-protocol

- **legacy_md:** `legacy/ingenious-blog__knock-in-mice-protocol.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knock-in-mice-protocol
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knock-in-mice-protocol.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knock-in-mice-protocol
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knock-in-mice-vs-transgenic-mice

- **legacy_md:** `legacy/ingenious-blog__knock-in-mice-vs-transgenic-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knock-in-mice-vs-transgenic-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knock-in-mice-vs-transgenic-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knock-in-mice-vs-transgenic-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knockdown-mice

- **legacy_md:** `legacy/ingenious-blog__knockdown-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knockdown-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knockdown-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knockdown-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knockout-mice-in-the-study-of-human-genetic-disease

- **legacy_md:** `legacy/ingenious-blog__knockout-mice-in-the-study-of-human-genetic-disease.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knockout-mice-in-the-study-of-human-genetic-disease
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knockout-mice-in-the-study-of-human-genetic-disease.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knockout-mice-in-the-study-of-human-genetic-disease
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knockout-mice-in-the-study-of-human-genetic-disease-2

- **legacy_md:** `legacy/ingenious-blog__knockout-mice-in-the-study-of-human-genetic-disease-2.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knockout-mice-in-the-study-of-human-genetic-disease-2
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knockout-mice-in-the-study-of-human-genetic-disease-2.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knockout-mice-in-the-study-of-human-genetic-disease-2
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/knockout-mice-purpose

- **legacy_md:** `legacy/ingenious-blog__knockout-mice-purpose.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/knockout-mice-purpose
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__knockout-mice-purpose.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/knockout-mice-purpose
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-jennifer-parla

- **legacy_md:** `legacy/ingenious-blog__meet-ingenious-scientist-jennifer-parla.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-jennifer-parla
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__meet-ingenious-scientist-jennifer-parla.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-jennifer-parla
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-kristen-coughlin

- **legacy_md:** `legacy/ingenious-blog__meet-ingenious-scientist-kristen-coughlin.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-kristen-coughlin
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__meet-ingenious-scientist-kristen-coughlin.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-kristen-coughlin
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-richard-row

- **legacy_md:** `legacy/ingenious-blog__meet-ingenious-scientist-richard-row.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-richard-row
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__meet-ingenious-scientist-richard-row.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/meet-ingenious-scientist-richard-row
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/mouse-cell-line

- **legacy_md:** `legacy/ingenious-blog__mouse-cell-line.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/mouse-cell-line
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__mouse-cell-line.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/mouse-cell-line
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/nih-grant-covid-19-ace2-mice

- **legacy_md:** `legacy/ingenious-blog__nih-grant-covid-19-ace2-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/nih-grant-covid-19-ace2-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__nih-grant-covid-19-ace2-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/nih-grant-covid-19-ace2-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/nih-grant-to-generate-exclusive-covid-19-ace2-mouse-models

- **legacy_md:** `legacy/ingenious-blog__nih-grant-to-generate-exclusive-covid-19-ace2-mouse-models.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/nih-grant-to-generate-exclusive-covid-19-ace2-mouse-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__nih-grant-to-generate-exclusive-covid-19-ace2-mouse-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/nih-grant-to-generate-exclusive-covid-19-ace2-mouse-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/point-mutation-diseases

- **legacy_md:** `legacy/ingenious-blog__point-mutation-diseases.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/point-mutation-diseases
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__point-mutation-diseases.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/point-mutation-diseases
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/rat-models-of-cardiac-disease

- **legacy_md:** `legacy/ingenious-blog__rat-models-of-cardiac-disease.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/rat-models-of-cardiac-disease
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__rat-models-of-cardiac-disease.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/rat-models-of-cardiac-disease
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/rosa26-mice

- **legacy_md:** `legacy/ingenious-blog__rosa26-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/rosa26-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__rosa26-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/rosa26-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/the-advantages-of-rat-models

- **legacy_md:** `legacy/ingenious-blog__the-advantages-of-rat-models.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/the-advantages-of-rat-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__the-advantages-of-rat-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/the-advantages-of-rat-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/top-5-lab-mouse-colony-management-software-options-for-2023

- **legacy_md:** `legacy/ingenious-blog__top-5-lab-mouse-colony-management-software-options-for-2023.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/top-5-lab-mouse-colony-management-software-options-for-2023
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__top-5-lab-mouse-colony-management-software-options-for-2023.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/top-5-lab-mouse-colony-management-software-options-for-2023
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/top-five-reasons-mouse-models-fail-mistakes-to-avoid

- **legacy_md:** `legacy/ingenious-blog__top-five-reasons-mouse-models-fail-mistakes-to-avoid.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/top-five-reasons-mouse-models-fail-mistakes-to-avoid
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__top-five-reasons-mouse-models-fail-mistakes-to-avoid.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/top-five-reasons-mouse-models-fail-mistakes-to-avoid
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/transgenic-mice

- **legacy_md:** `legacy/ingenious-blog__transgenic-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/transgenic-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__transgenic-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/transgenic-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/transgenic-mouse-model

- **legacy_md:** `legacy/ingenious-blog__transgenic-mouse-model.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/transgenic-mouse-model
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__transgenic-mouse-model.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/transgenic-mouse-model
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/transgenic-rats-vs-mice

- **legacy_md:** `legacy/ingenious-blog__transgenic-rats-vs-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/transgenic-rats-vs-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__transgenic-rats-vs-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/transgenic-rats-vs-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/types-of-point-mutations

- **legacy_md:** `legacy/ingenious-blog__types-of-point-mutations.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/types-of-point-mutations
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__types-of-point-mutations.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/types-of-point-mutations
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-a-conditional-allele

- **legacy_md:** `legacy/ingenious-blog__what-is-a-conditional-allele.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-a-conditional-allele
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-a-conditional-allele.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-a-conditional-allele
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-a-knockin

- **legacy_md:** `legacy/ingenious-blog__what-is-a-knockin.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-a-knockin
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-a-knockin.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-a-knockin
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-a-knockout-rat

- **legacy_md:** `legacy/ingenious-blog__what-is-a-knockout-rat.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-a-knockout-rat
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-a-knockout-rat.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-a-knockout-rat
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-a-point-mutation

- **legacy_md:** `legacy/ingenious-blog__what-is-a-point-mutation.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-a-point-mutation
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-a-point-mutation.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-a-point-mutation
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-a-stem-cell-line

- **legacy_md:** `legacy/ingenious-blog__what-is-a-stem-cell-line.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-a-stem-cell-line
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-a-stem-cell-line.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-a-stem-cell-line
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-a-transgene

- **legacy_md:** `legacy/ingenious-blog__what-is-a-transgene.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-a-transgene
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-a-transgene.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-a-transgene
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/what-is-the-mouse-knockout-timeline

- **legacy_md:** `legacy/ingenious-blog__what-is-the-mouse-knockout-timeline.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/what-is-the-mouse-knockout-timeline
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__what-is-the-mouse-knockout-timeline.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/what-is-the-mouse-knockout-timeline
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/ingenious-blog/why-make-a-humanized-mouse

- **legacy_md:** `legacy/ingenious-blog__why-make-a-humanized-mouse.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Blog index/articles -> Lab Signals (or Resources Guides)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/ingenious-blog/why-make-a-humanized-mouse
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/ingenious-blog__why-make-a-humanized-mouse.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/ingenious-blog/why-make-a-humanized-mouse
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes

- **legacy_md:** `legacy/exclusive-newsletter-content__article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models

- **legacy_md:** `legacy/exclusive-newsletter-content__article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy

- **legacy_md:** `legacy/exclusive-newsletter-content__article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9

- **legacy_md:** `legacy/exclusive-newsletter-content__article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/building-better-floxed-alleles-for-conditional-knockout-mice

- **legacy_md:** `legacy/exclusive-newsletter-content__building-better-floxed-alleles-for-conditional-knockout-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/building-better-floxed-alleles-for-conditional-knockout-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__building-better-floxed-alleles-for-conditional-knockout-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/building-better-floxed-alleles-for-conditional-knockout-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/conventional-vs-conditional-knockout-mice

- **legacy_md:** `legacy/exclusive-newsletter-content__conventional-vs-conditional-knockout-mice.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/conventional-vs-conditional-knockout-mice
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__conventional-vs-conditional-knockout-mice.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/conventional-vs-conditional-knockout-mice
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/cre-lox-6-facts-you-may-not-know

- **legacy_md:** `legacy/exclusive-newsletter-content__cre-lox-6-facts-you-may-not-know.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/cre-lox-6-facts-you-may-not-know
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__cre-lox-6-facts-you-may-not-know.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/cre-lox-6-facts-you-may-not-know
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/how-a-knockout-mouse-is-made

- **legacy_md:** `legacy/exclusive-newsletter-content__how-a-knockout-mouse-is-made.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/how-a-knockout-mouse-is-made
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__how-a-knockout-mouse-is-made.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/how-a-knockout-mouse-is-made
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/how-humanized-mouse-models-are-transforming-pre-clinical-r-d

- **legacy_md:** `legacy/exclusive-newsletter-content__how-humanized-mouse-models-are-transforming-pre-clinical-r-d.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/how-humanized-mouse-models-are-transforming-pre-clinical-r-d
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__how-humanized-mouse-models-are-transforming-pre-clinical-r-d.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/how-humanized-mouse-models-are-transforming-pre-clinical-r-d
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/how-to-obtain-a-conditional-knockout

- **legacy_md:** `legacy/exclusive-newsletter-content__how-to-obtain-a-conditional-knockout.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/how-to-obtain-a-conditional-knockout
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__how-to-obtain-a-conditional-knockout.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/how-to-obtain-a-conditional-knockout
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/inside-the-humanized-mouse-engineering-the-human-immune-system

- **legacy_md:** `legacy/exclusive-newsletter-content__inside-the-humanized-mouse-engineering-the-human-immune-system.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/inside-the-humanized-mouse-engineering-the-human-immune-system
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__inside-the-humanized-mouse-engineering-the-human-immune-system.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/inside-the-humanized-mouse-engineering-the-human-immune-system
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments

- **legacy_md:** `legacy/exclusive-newsletter-content__insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/knock-in-mice-vs-transgenic-mice-what-you-need-to-know

- **legacy_md:** `legacy/exclusive-newsletter-content__knock-in-mice-vs-transgenic-mice-what-you-need-to-know.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/knock-in-mice-vs-transgenic-mice-what-you-need-to-know
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__knock-in-mice-vs-transgenic-mice-what-you-need-to-know.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/knock-in-mice-vs-transgenic-mice-what-you-need-to-know
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape

- **legacy_md:** `legacy/exclusive-newsletter-content__leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/model-vs-model-humanized-mice-compared-to-organoids-chips-and-ai

- **legacy_md:** `legacy/exclusive-newsletter-content__model-vs-model-humanized-mice-compared-to-organoids-chips-and-ai.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/model-vs-model-humanized-mice-compared-to-organoids-chips-and-ai
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__model-vs-model-humanized-mice-compared-to-organoids-chips-and-ai.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/model-vs-model-humanized-mice-compared-to-organoids-chips-and-ai
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/modeling-complexity-multi-cytokine-and-multi-organ-humanization

- **legacy_md:** `legacy/exclusive-newsletter-content__modeling-complexity-multi-cytokine-and-multi-organ-humanization.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/modeling-complexity-multi-cytokine-and-multi-organ-humanization
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__modeling-complexity-multi-cytokine-and-multi-organ-humanization.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/modeling-complexity-multi-cytokine-and-multi-organ-humanization
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/the-impact-of-knockout-and-knock-in-mouse-models-on-biomedical-research

- **legacy_md:** `legacy/exclusive-newsletter-content__the-impact-of-knockout-and-knock-in-mouse-models-on-biomedical-research.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/the-impact-of-knockout-and-knock-in-mouse-models-on-biomedical-research
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__the-impact-of-knockout-and-knock-in-mouse-models-on-biomedical-research.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/the-impact-of-knockout-and-knock-in-mouse-models-on-biomedical-research
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/top-5-lab-mouse-colony-management-software-options-for-2025

- **legacy_md:** `legacy/exclusive-newsletter-content__top-5-lab-mouse-colony-management-software-options-for-2025.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/top-5-lab-mouse-colony-management-software-options-for-2025
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__top-5-lab-mouse-colony-management-software-options-for-2025.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/top-5-lab-mouse-colony-management-software-options-for-2025
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.


## https://www.genetargeting.com/exclusive-newsletter-content/translating-promise-into-practice---clinical-applications-cros-and-the-future

- **legacy_md:** `legacy/exclusive-newsletter-content__translating-promise-into-practice---clinical-applications-cros-and-the-future.md`
- **suggested_new_build_url:** `/lab-signals/`
- **url_handling_suggestion:** `keep_or_redirect`  (review)
- **suggest_link_from_new_build_pages:** `/lab-signals/`
- **notes:** Exclusive content -> Lab Signals (members-only as applicable)

Cursor steps:
1) Open legacy URL: https://www.genetargeting.com/exclusive-newsletter-content/translating-promise-into-practice---clinical-applications-cros-and-the-future
2) Scroll to the end of the page, then locate the main content region (between site nav and footer).
3) Extract the main content verbatim (no wording edits). Preserve headings and lists as-is.
4) Create markdown file at: legacy/exclusive-newsletter-content__translating-promise-into-practice---clinical-applications-cros-and-the-future.md
   - Add a top "Legacy Header" block containing:
     - New-build link: /lab-signals/
     - Old URL: https://www.genetargeting.com/exclusive-newsletter-content/translating-promise-into-practice---clinical-applications-cros-and-the-future
     - URL handling: Redirect old URL → new-build link
     - "Link from" suggestion: /lab-signals/
5) Build the page in the new site:
   - If URL handling is "reuse", publish page at the SAME path as the old URL.
   - If "redirect", publish at /lab-signals/ and add a 301 from the old URL.
   - Use new layout/style components only; content body must remain verbatim.

