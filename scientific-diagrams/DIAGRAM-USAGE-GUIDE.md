# Scientific Diagram Usage Guide

## Diagrams Successfully Added to New ITL Website Build

All 13 proven scientific diagrams from genetargeting.com have been copied to:
```
itl-website/public/images/diagrams/
```

---

## How to Use These Diagrams in Next.js Components

### Basic Image Component Usage

```typescript
import Image from 'next/image'

<Image
  src="/images/diagrams/conditional-reversible-diagram.webp"
  alt="Conditional and reversible gene expression design showing initial cDNA #1 expression, Cre-mediated switch to cDNA #2, and reversion to wild-type sequence"
  width={1024}
  height={681}
  className="w-full h-auto max-w-4xl mx-auto"
/>
```

---

## Diagram-by-Diagram Implementation Guide

### 1. Conditional Knockout Pages

#### conditional-reversible-diagram.webp
- **Dimensions:** 1024 x 681px
- **File Size:** 27KB
- **Pages:** `/conditional-knockout-mouse-models`, `/inducible-conditional-knockout`
- **Alt Text:** "Conditional and reversible gene expression design showing initial cDNA #1 expression, Cre-mediated switch to cDNA #2, and reversion to wild-type sequence"

```tsx
<Image
  src="/images/diagrams/conditional-reversible-diagram.webp"
  alt="Conditional and reversible gene expression design showing initial cDNA #1 expression, Cre-mediated switch to cDNA #2, and reversion to wild-type sequence"
  width={1024}
  height={681}
  className="w-full h-auto"
/>
```

#### cko-types-diagram.webp
- **Dimensions:** 1024 x 731px
- **File Size:** 37KB
- **Pages:** `/conditional-knockout-mouse-models`, `/conditional-vs-conventional-guide`
- **Alt Text:** "Comparison of four conditional knockout model variations: Standard Conditional KO, Conditional KO with Reporter, Knockout First with Conditional Potential, and TruView Conditional Knockout"

```tsx
<Image
  src="/images/diagrams/cko-types-diagram.webp"
  alt="Comparison of four conditional knockout model variations: Standard Conditional KO, Conditional KO with Reporter, Knockout First with Conditional Potential, and TruView Conditional Knockout"
  width={1024}
  height={731}
  className="w-full h-auto"
/>
```

---

### 2. Conventional Knockout Pages

#### conventional-knockout-reporter-neo.png
- **Dimensions:** 1024 x 261px
- **File Size:** 12KB
- **Pages:** `/conventional-knockout-mouse-models`, `/reporter-knockin`
- **Alt Text:** "Schematic showing target gene replaced with Reporter and Neomycin selection cassette for conventional knockout with reporter visualization"

```tsx
<Image
  src="/images/diagrams/conventional-knockout-reporter-neo.png"
  alt="Schematic showing target gene replaced with Reporter and Neomycin selection cassette for conventional knockout with reporter visualization"
  width={1024}
  height={261}
  className="w-full h-auto"
/>
```

#### conventional-knockout-ko-first.png
- **Dimensions:** 1024 x 471px
- **File Size:** 20KB
- **Pages:** `/conventional-knockout-mouse-models`
- **Alt Text:** "Knockout first strategy showing loxP-flanked stop cassette in early intron enabling gene inactivation with Cre recombination rescue potential"

```tsx
<Image
  src="/images/diagrams/conventional-knockout-ko-first.png"
  alt="Knockout first strategy showing loxP-flanked stop cassette in early intron enabling gene inactivation with Cre recombination rescue potential"
  width={1024}
  height={471}
  className="w-full h-auto"
/>
```

#### common-approach-2nd-ep.png
- **Dimensions:** ~800 x 600px (estimate)
- **File Size:** 53KB
- **Pages:** `/mouse-model-services`, `/custom-mouse-models`
- **Alt Text:** "Workflow diagram showing second electroporation approach to remove selection cassette before germline confirmation in mouse model production"

```tsx
<Image
  src="/images/diagrams/common-approach-2nd-ep.png"
  alt="Workflow diagram showing second electroporation approach to remove selection cassette before germline confirmation in mouse model production"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

#### common-approach-flp-mating.png
- **Dimensions:** ~800 x 600px (estimate)
- **File Size:** 43KB
- **Pages:** `/mouse-model-services`, `/custom-mouse-models`
- **Alt Text:** "Workflow diagram showing FLP recombinase mating approach where chimeras mate with FLP mice to delete selection cassette"

```tsx
<Image
  src="/images/diagrams/common-approach-flp-mating.png"
  alt="Workflow diagram showing FLP recombinase mating approach where chimeras mate with FLP mice to delete selection cassette"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

---

### 3. Humanized Mouse Models Pages

#### humanization-strategies-infographic.webp
- **Dimensions:** 495 x 1024px (vertical)
- **File Size:** 44KB
- **Pages:** `/humanized-mouse-models` (featured prominently), `/gene-replacement`
- **Alt Text:** "Infographic comparing three humanization strategies: Coding Sequence Knockin for expressing human coding sequences, Point Mutation for single base changes, and Gene Replacement for up to 200kb genomic sequences"

```tsx
<Image
  src="/images/diagrams/humanization-strategies-infographic.webp"
  alt="Infographic comparing three humanization strategies: Coding Sequence Knockin for expressing human coding sequences, Point Mutation for single base changes, and Gene Replacement for up to 200kb genomic sequences"
  width={495}
  height={1024}
  className="w-full h-auto max-w-md mx-auto"
/>
```

#### truhumanization-graph.webp
- **Dimensions:** ~600 x 400px (estimate)
- **File Size:** 33KB
- **Pages:** `/gene-replacement`, `/humanized-mouse-models`
- **Alt Text:** "Comparison graph showing advantages of TruHumanization complete gene replacement versus partial gene replacement, human coding sequence expression, and point mutation approaches"

```tsx
<Image
  src="/images/diagrams/truhumanization-graph.webp"
  alt="Comparison graph showing advantages of TruHumanization complete gene replacement versus partial gene replacement, human coding sequence expression, and point mutation approaches"
  width={600}
  height={400}
  className="w-full h-auto"
/>
```

---

### 4. Rosa26 / Targeted Transgenic Pages

#### rosa26-schematic-1.webp
- **Dimensions:** ~400 x 200px (estimate)
- **File Size:** 3KB
- **Pages:** `/rosa26`, `/targeted-transgenic-mice`
- **Alt Text:** "Rosa26 locus schematic showing ubiquitous expression design with transgene inserted for constitutive gene expression"

```tsx
<Image
  src="/images/diagrams/rosa26-schematic-1.webp"
  alt="Rosa26 locus schematic showing ubiquitous expression design with transgene inserted for constitutive gene expression"
  width={400}
  height={200}
  className="w-full h-auto"
/>
```

#### rosa26-schematic-2.webp
- **Dimensions:** ~600 x 300px (estimate)
- **File Size:** 24KB
- **Pages:** `/rosa26`, `/targeted-transgenic-mice`
- **Alt Text:** "Rosa26 locus schematic showing tissue-specific and temporal control with loxP-flanked stop cassette preventing expression until Cre recombination"

```tsx
<Image
  src="/images/diagrams/rosa26-schematic-2.webp"
  alt="Rosa26 locus schematic showing tissue-specific and temporal control with loxP-flanked stop cassette preventing expression until Cre recombination"
  width={600}
  height={300}
  className="w-full h-auto"
/>
```

---

### 5. Transgenic Mouse Models Pages

#### transgenic-mouse-model-list.webp
- **Dimensions:** ~800 x 600px (estimate)
- **File Size:** 38KB
- **Pages:** `/transgenic-mouse-models`, `/mouse-model-services`
- **Alt Text:** "Overview of transgenic mouse model applications including cancer research, neuroscience, drug testing, and gene function analysis"

```tsx
<Image
  src="/images/diagrams/transgenic-mouse-model-list.webp"
  alt="Overview of transgenic mouse model applications including cancer research, neuroscience, drug testing, and gene function analysis"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

#### transgenic-mice-knockin.png
- **Dimensions:** ~600 x 400px (estimate)
- **File Size:** 7KB
- **Pages:** `/transgenic-mouse-models`, `/knockin-mouse-models`
- **Alt Text:** "Knockin method schematic showing targeted transgene insertion into specific genomic locus for precise gene expression control"

```tsx
<Image
  src="/images/diagrams/transgenic-mice-knockin.png"
  alt="Knockin method schematic showing targeted transgene insertion into specific genomic locus for precise gene expression control"
  width={600}
  height={400}
  className="w-full h-auto"
/>
```

---

## Responsive Design Best Practices

### Mobile-First Approach

```tsx
<div className="w-full max-w-4xl mx-auto px-4 md:px-6">
  <Image
    src="/images/diagrams/cko-types-diagram.webp"
    alt="Comparison of conditional knockout model variations"
    width={1024}
    height={731}
    className="w-full h-auto"
    priority={false}
  />
  <p className="text-sm text-gray-600 mt-2 text-center">
    Figure 1: Conditional knockout model variations
  </p>
</div>
```

### Breakpoint Sizing

```tsx
<Image
  src="/images/diagrams/humanization-strategies-infographic.webp"
  alt="Humanization strategies comparison"
  width={495}
  height={1024}
  className="
    w-full
    sm:max-w-md
    md:max-w-lg
    lg:max-w-xl
    h-auto
    mx-auto
  "
/>
```

---

## Accessibility Requirements

### Required Alt Text

Every diagram MUST have descriptive alt text that:
1. Describes what the diagram shows
2. Explains the key concepts illustrated
3. Provides context for users who cannot see the image

### Figure Captions

```tsx
<figure className="my-8">
  <Image
    src="/images/diagrams/conditional-reversible-diagram.webp"
    alt="Conditional and reversible gene expression design"
    width={1024}
    height={681}
    className="w-full h-auto"
  />
  <figcaption className="text-sm text-gray-600 mt-2 text-center">
    <strong>Figure 1:</strong> Conditional and reversible design allows switching 
    gene expression multiple times in a single mouse model through Cre-mediated recombination.
  </figcaption>
</figure>
```

---

## Performance Optimization

### Lazy Loading

For diagrams below the fold:

```tsx
<Image
  src="/images/diagrams/truhumanization-graph.webp"
  alt="TruHumanization comparison graph"
  width={600}
  height={400}
  loading="lazy"
  className="w-full h-auto"
/>
```

### Priority Loading

For hero/above-the-fold diagrams:

```tsx
<Image
  src="/images/diagrams/cko-types-diagram.webp"
  alt="Conditional knockout types"
  width={1024}
  height={731}
  priority={true}
  className="w-full h-auto"
/>
```

---

## Next Steps

1. ✅ Download all diagrams from genetargeting.com
2. ✅ Copy diagrams to `itl-website/public/images/diagrams/`
3. ⏳ Create page components that use these diagrams
4. ⏳ Add proper alt text for accessibility
5. ⏳ Test responsive behavior on all breakpoints
6. ⏳ Optimize loading strategy (priority vs lazy)
7. ⏳ Add figure captions where appropriate
8. ⏳ Commit changes with proper git message

---

## Quick Reference: All Diagram Paths

```
/images/diagrams/conditional-reversible-diagram.webp
/images/diagrams/cko-types-diagram.webp
/images/diagrams/conventional-knockout-reporter-neo.png
/images/diagrams/conventional-knockout-ko-first.png
/images/diagrams/common-approach-2nd-ep.png
/images/diagrams/common-approach-flp-mating.png
/images/diagrams/humanization-strategies-infographic.webp
/images/diagrams/truhumanization-graph.webp
/images/diagrams/rosa26-schematic-1.webp
/images/diagrams/rosa26-schematic-2.webp
/images/diagrams/transgenic-mouse-model-list.webp
/images/diagrams/transgenic-mice-knockin.png
/images/diagrams/knockout-first-example-provided.png
```

---

**Status:** ✅ All diagrams ready to use in new ITL website build  
**Location:** `itl-website/public/images/diagrams/`  
**Total Files:** 13 proven scientific diagrams from genetargeting.com
