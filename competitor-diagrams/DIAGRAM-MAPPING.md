# Scientific Diagram Mapping Guide

## Source: Genetargeting.com (Ingenious Targeting Laboratory)

This document maps the scientific diagrams downloaded from the competitor website to where they should be inserted into the ITL website design.

---

## Downloaded Diagrams

### 1. Conditional + Reversible Diagram
**File:** `genetargeting/conditional-reversible-diagram.webp`
**Original URL:** https://www.genetargeting.com/conditional-knockout-mouse-models
**Original Context:** Explains conditional+reversible design that allows switching gene expression multiple times

**Usage on ITL Website:**
- **Page:** Conditional Knockout Mouse Models (`/conditional-knockout-mouse-models`)
- **Page:** Inducible Conditional Knockout (`/inducible-conditional-knockout`)
- **Section:** Advanced conditional strategies
- **Description:** Shows how cDNA #1 is initially expressed in place of wild-type (WT), then Cre activation leads to expression of cDNA #2, and deletion of both cDNAs reverts to WT expression

---

### 2. Conditional Knockout Types Diagram
**File:** `genetargeting/cko-types-diagram.webp`
**Original URL:** https://www.genetargeting.com/conditional-knockout-mouse-models
**Original Context:** Shows different variations of conditional knockout models

**Usage on ITL Website:**
- **Page:** Conditional Knockout Mouse Models (`/conditional-knockout-mouse-models`)
- **Page:** Conditional vs Conventional Guide (`/conditional-vs-conventional-guide`)
- **Section:** Types of conditional knockouts overview
- **Description:** Visual comparison of Standard Conditional KO, Conditional KO with Reporter, Knockout First with Conditional Potential, and TruView Conditional Knockout

---

### 3. Conventional Knockout: Gene Replaced with Reporter + Neo
**File:** `genetargeting/conventional-knockout-reporter-neo.png`
**Original URL:** https://www.genetargeting.com/conventional-knockout-mouse-models
**Original Context:** Strategy where target gene is replaced with reporter gene + Neo cassette

**Usage on ITL Website:**
- **Page:** Conventional Knockout Mouse Models (`/conventional-knockout-mouse-models`)
- **Page:** Reporter Knockin (`/reporter-knockin`)
- **Section:** Gene replacement with reporter strategy
- **Description:** Schematic showing target gene replaced with Reporter + Neo cassette, demonstrating knockout with reporter visualization capability

---

### 4. Conventional Knockout: Knockout First with/without Reporter
**File:** `genetargeting/conventional-knockout-ko-first.png`
**Original URL:** https://www.genetargeting.com/conventional-knockout-mouse-models
**Original Context:** Knockout first strategy with rescue potential

**Usage on ITL Website:**
- **Page:** Conventional Knockout Mouse Models (`/conventional-knockout-mouse-models`)
- **Section:** Knockout first with rescue of expression
- **Description:** Shows loxP-flanked stop cassette in early intron for gene inactivation, with Cre recombination option to rescue expression in tissue-specific, temporal, or global manner

---

### 5. Common Approach 1: Second Electroporation (2nd EP)
**File:** `genetargeting/common-approach-1-2nd-ep.png`
**Original URL:** https://www.genetargeting.com/conventional-knockout-mouse-models
**Original Context:** Traditional method to remove Neo selection cassette via second electroporation

**Usage on ITL Website:**
- **Page:** Mouse Model Services (`/mouse-model-services`)
- **Page:** Custom Mouse Models (`/custom-mouse-models`)
- **Section:** Technical methodology / Process workflows
- **Description:** Workflow diagram showing second electroporation approach to remove selection cassette before germline confirmation

---

### 6. Common Approach 2: FLP Mating
**File:** `genetargeting/common-approach-2-flp-mating.png`
**Original URL:** https://www.genetargeting.com/conventional-knockout-mouse-models
**Original Context:** Traditional in vivo method to remove Neo cassette via FLP transgenic mice mating

**Usage on ITL Website:**
- **Page:** Mouse Model Services (`/mouse-model-services`)
- **Page:** Custom Mouse Models (`/custom-mouse-models`)
- **Section:** Technical methodology / Process workflows
- **Description:** Workflow diagram showing FLP mating approach where chimeras are mated to FLP recombinase mice to delete selection cassette

---

### 7. Humanization Strategies Infographic
**File:** `genetargeting/humanization-strategies-infographic.webp`
**Original URL:** https://www.genetargeting.com/humanized-mouse-models
**Original Context:** Visual overview of different humanization approaches

**Usage on ITL Website:**
- **Page:** Humanized Mouse Models (`/humanized-mouse-models`)
- **Page:** Gene Replacement (`/gene-replacement`)
- **Section:** Strategy comparison overview
- **Description:** Infographic showing three main strategies: Coding Sequence Knockin, Point Mutation, and Gene Replacement (up to 200kb), with key features and applications of each

---

## Implementation Guidelines

### Design Integration
1. **Consistent Styling:** Apply ITL brand colors and styling to diagram borders/containers
2. **Responsive Sizing:** Ensure diagrams scale appropriately on mobile, tablet, and desktop
3. **Alt Text:** Add descriptive alt text for accessibility (see descriptions above)
4. **Image Optimization:** Convert to WebP format where applicable, optimize file sizes

### Technical Specifications
```typescript
// Example Next.js Image component usage
<Image
  src="/images/diagrams/conditional-reversible-diagram.webp"
  alt="Conditional and reversible gene expression design showing cDNA #1 initial expression, Cre-mediated switch to cDNA #2, and reversion to wild-type sequence"
  width={1024}
  height={681}
  className="w-full h-auto max-w-4xl mx-auto"
  priority={false}
/>
```

### Placement Recommendations

**Hero Sections:**
- Humanization Strategies Infographic (on Humanized Mouse Models page)
- cKO Types Diagram (on Conditional Knockout page)

**Educational Content Sections:**
- All technical workflow diagrams in "How It Works" sections
- Strategy comparison diagrams in service detail pages

**Sidebar/Callout Sections:**
- Simplified versions of technical diagrams as quick reference guides

---

## Page-by-Page Diagram Assignment

### Conditional Knockout Mouse Models Page
1. **Hero/Overview Section:** cKO Types Diagram
2. **Advanced Strategies Section:** Conditional + Reversible Diagram

### Conventional Knockout Mouse Models Page
1. **Gene Replacement Strategy Section:** Conventional Knockout Reporter + Neo Diagram
2. **Knockout First Strategy Section:** Knockout First with/without Reporter Diagram
3. **Technical Process Section:** Common Approach 1 & 2 Diagrams (side by side comparison)

### Humanized Mouse Models Page
1. **Strategy Overview Section:** Humanization Strategies Infographic (featured prominently)

### Knockin Mouse Models Page
1. **Related Diagrams:** Conditional + Reversible (for advanced knockin strategies)
2. **Strategy Comparison:** Link to humanization infographic

### Reporter Knockin Page
1. **Methodology Section:** Conventional Knockout Reporter + Neo Diagram

### Custom Mouse Models Page
1. **Process Overview Section:** Common Approach 1 & 2 Diagrams (workflow comparison)

---

## Notes for Implementation

### Remove Current Scientific Diagrams
Before implementing these competitor diagrams, identify and remove any existing overly technical/scientific diagrams that may confuse general audiences.

### Simplification Recommendations
Some of these diagrams are highly technical. Consider:
1. Creating simplified versions for general audiences
2. Using progressive disclosure (simple version first, detailed diagram in expandable section)
3. Adding annotations/callouts to highlight key features
4. Creating animated versions to show step-by-step processes

### Accessibility Considerations
- Provide text descriptions of all processes shown in diagrams
- Ensure sufficient color contrast
- Don't rely solely on color to convey information
- Provide downloadable PDF versions for detailed study

---

## Copyright & Attribution
**Source:** Genetargeting.com (Ingenious Targeting Laboratory)
**Downloaded:** February 1, 2026
**Purpose:** Competitive analysis and reference for ITL website redesign
**Note:** These diagrams should be recreated with original ITL branding and design language, not used directly as-is.

---

## Next Steps
1. ✅ Download all diagrams from competitor site
2. ⏳ Analyze diagram effectiveness and clarity
3. ⏳ Create ITL-branded versions with improved design
4. ⏳ Optimize for web performance
5. ⏳ Implement in appropriate page sections
6. ⏳ Add proper alt text and accessibility features
7. ⏳ Test responsive behavior across devices
