# Scientific Diagrams from Genetargeting.com

**Source:** genetargeting.com (ITL's current website)  
**Downloaded:** February 1, 2026  
**Purpose:** Replace incorrect diagrams created last week in the new ITL website build

---

## All Downloaded Diagrams (12 total)

### 1. **conditional-reversible-diagram.webp** (27KB)
- **Original Page:** Conditional Knockout Mouse Models
- **Shows:** How cDNA #1 is initially expressed in place of WT, Cre activation leads to cDNA #2 expression, deletion reverts to WT
- **Use In:** Conditional knockout pages, advanced conditional strategies sections

### 2. **cko-types-diagram.webp** (37KB)
- **Original Page:** Conditional Knockout Mouse Models
- **Shows:** Four variations of conditional knockout models side-by-side comparison
- **Use In:** Conditional knockout overview, comparison pages

### 3. **conventional-knockout-reporter-neo.png** (12KB)
- **Original Page:** Conventional Knockout Mouse Models
- **Shows:** Target gene replaced with Reporter + Neo cassette schematic
- **Use In:** Conventional knockout pages, reporter knockin sections

### 4. **conventional-knockout-ko-first.png** (20KB)
- **Original Page:** Conventional Knockout Mouse Models  
- **Shows:** Knockout first strategy with loxP-flanked stop cassette, showing rescue potential via Cre
- **Use In:** Conventional knockout pages, rescue expression sections

### 5. **common-approach-2nd-ep.png** (53KB)
- **Original Page:** Conventional Knockout Mouse Models
- **Shows:** Workflow for removing Neo selection cassette via second electroporation
- **Use In:** Technical process pages, methodology sections

### 6. **common-approach-flp-mating.png** (43KB)
- **Original Page:** Conventional Knockout Mouse Models
- **Shows:** Workflow for removing Neo cassette via FLP transgenic mice mating
- **Use In:** Technical process pages, breeding strategy sections

### 7. **humanization-strategies-infographic.webp** (44KB)
- **Original Page:** Humanized Mouse Models
- **Shows:** Three main humanization strategies: Coding Sequence Knockin, Point Mutation, Gene Replacement
- **Use In:** Humanized mouse models page (featured prominently), strategy comparison sections

### 8. **truhumanization-graph.webp** (33KB)
- **Original Page:** Gene Replacement
- **Shows:** Comparison graph of TruHumanization vs Partial gene replacement vs Express human coding sequence vs Point mutation
- **Use In:** Gene replacement page, humanization comparison sections

### 9. **rosa26-schematic-1.webp** (3KB)
- **Original Page:** Rosa26 Locus
- **Shows:** Ubiquitous expression design with transgene inserted into Rosa26 locus
- **Use In:** Rosa26 targeting pages, constitutive expression sections

### 10. **rosa26-schematic-2.webp** (24KB)
- **Original Page:** Rosa26 Locus
- **Shows:** Tissue-specific/temporal control with loxP-flanked stop cassette
- **Use In:** Rosa26 targeting pages, conditional expression sections

### 11. **transgenic-mouse-model-list.webp** (38KB)
- **Original Page:** Transgenic Mouse Models
- **Shows:** List/overview of transgenic mouse model applications and types
- **Use In:** Transgenic mouse models overview, services pages

### 12. **transgenic-mice-knockin.png** (7KB)
- **Original Page:** Transgenic Mouse Models
- **Shows:** Knockin method schematic for targeted transgene insertion
- **Use In:** Transgenic mouse models pages, knockin methodology sections

### 13. **knockout-first-example-provided.png** (User Provided)
- **Original:** User attached example
- **Shows:** Same as #4 - Conventional knockout with targeting vector options
- **Use In:** Reference example of correct diagram format

---

## Next Steps

### 1. Find and Remove Incorrect Diagrams from New Build
Search the `itl-website` directory for:
- Recently added PNG/SVG diagrams (last week)
- Diagram components or scientific illustrations
- Check `/public/images/` folders
- Check component files that reference diagrams

### 2. Copy Correct Diagrams to New Build
```bash
cp -r scientific-diagrams/genetargeting/* itl-website/public/images/diagrams/
```

### 3. Update Component References
Find and update all components that reference the old/incorrect diagrams to use these correct ones.

### 4. Verify Each Diagram
- Ensure scientific accuracy
- Check file sizes (all reasonably sized for web)
- Confirm proper alt text for accessibility
- Test responsive behavior

---

## File Sizes Summary
```
Total: ~320KB for all 12 diagrams
Average: ~27KB per diagram
Largest: common-approach-2nd-ep.png (53KB)
Smallest: rosa26-schematic-1.webp (3KB)
```

All files are well-optimized for web delivery.

---

## Implementation Checklist

- [ ] Identify incorrect diagrams in itl-website build
- [ ] Remove incorrect diagrams
- [ ] Copy correct diagrams to public/images/diagrams/
- [ ] Update all component references
- [ ] Add proper alt text for accessibility
- [ ] Test on all breakpoints (mobile, tablet, desktop)
- [ ] Optimize any large files if needed
- [ ] Commit changes with proper message
- [ ] Document which pages use which diagrams

---

## Page Mapping (Where to Use Each Diagram)

### Conditional Knockout Pages
- conditional-reversible-diagram.webp
- cko-types-diagram.webp

### Conventional Knockout Pages
- conventional-knockout-reporter-neo.png
- conventional-knockout-ko-first.png
- common-approach-2nd-ep.png
- common-approach-flp-mating.png

### Humanized Mouse Models Pages
- humanization-strategies-infographic.webp
- truhumanization-graph.webp

### Rosa26 / Targeted Transgenic Pages
- rosa26-schematic-1.webp
- rosa26-schematic-2.webp

### Transgenic Mouse Models Pages
- transgenic-mouse-model-list.webp
- transgenic-mice-knockin.png

---

**Status:** ✅ All diagrams downloaded from genetargeting.com  
**Next:** Find and remove incorrect diagrams from new build
