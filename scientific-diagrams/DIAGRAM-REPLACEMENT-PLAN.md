# Scientific Diagram Replacement Plan

## Problem
The new ITL website build has placeholder diagrams with incorrect/missing scientific illustrations. 
Example: `fig-ko-structure-001` shows a custom diagram that needs to be replaced with proven diagrams from genetargeting.com.

## Solution
Replace placeholder figureIds with correct diagrams downloaded from genetargeting.com (ITL's current website).

---

## All FigureIds Found in New Build (23 unique diagrams needed)

### 1. **fig-ko-structure-001** - Knockout Allele Structure
- **Used in:** `/knockout-mouse-models`, `/tumor-suppressor-knockout-mice`
- **Replace with:** `conventional-knockout-ko-first.png` (Knockout first with/without reporter)
- **Action:** Rename to `fig-ko-structure-001.png`

### 2. **fig-cko-mechanism-001** - Conditional Knockout Mechanism  
- **Used in:** `/conditional-knockout-mouse-models`
- **Replace with:** `cko-types-diagram.webp` (Four conditional knockout variations)
- **Action:** Rename to `fig-cko-mechanism-001.png`

### 3. **fig-floxed-001** - Floxed Allele Design
- **Used in:** `/conditional-knockout-mouse-models`
- **Replace with:** `conditional-reversible-diagram.webp` (Conditional + reversible design)
- **Action:** Rename to `fig-floxed-001.png`

### 4. **fig-cre-lox-001** - Cre-Lox Recombination Mechanism
- **Used in:** `/cre-lox-system`
- **Replace with:** `cko-types-diagram.webp` (Shows Cre-lox system clearly)
- **Action:** Copy and rename to `fig-cre-lox-001.png`

### 5. **fig-creert2-001** - CreERT2 Tamoxifen Induction
- **Used in:** `/tamoxifen-inducible-cre`, `/conditional-knockout-mouse-models`
- **Replace with:** `conditional-reversible-diagram.webp` (Shows inducible system)
- **Action:** Copy and rename to `fig-creert2-001.png`

### 6. **fig-humanization-001** - Humanized Gene Strategies
- **Used in:** `/humanized-mouse-models`
- **Replace with:** `humanization-strategies-infographic.webp` (Perfect match!)
- **Action:** Rename to `fig-humanization-001.png`

### 7. **fig-rosa26-001** - ROSA26 Safe Harbor Locus
- **Used in:** `/rosa26`
- **Replace with:** `rosa26-schematic-1.webp` (Ubiquitous expression)
- **Action:** Rename to `fig-rosa26-001.png`

### 8. **fig-ki-vs-ko-001** - Knockin vs Knockout Comparison
- **Used in:** `/knockin-mouse-models`
- **Replace with:** `transgenic-mice-knockin.png` (Knockin method diagram)
- **Action:** Rename to `fig-ki-vs-ko-001.png`

### 9. **fig-point-mutation-001** - Point Mutation Knockin Design
- **Used in:** `/knockin-mouse-models`
- **Replace with:** `conventional-knockout-reporter-neo.png` (Shows mutation strategy)
- **Action:** Rename to `fig-point-mutation-001.png`

### 10. **fig-flp-frt-001** - FLP-FRT Recombination System
- **Used in:** `/flp-frt-system`
- **Replace with:** `common-approach-flp-mating.png` (FLP mating workflow)
- **Action:** Rename to `fig-flp-frt-001.png`

### 11. **fig-ko-decision-001** - Knockout Strategy Decision Tree
- **Used in:** `/knockout-mouse-models`
- **Replace with:** `truhumanization-graph.webp` (Strategy comparison)
- **Action:** Rename to `fig-ko-decision-001.png`

### 12. **fig-reporter-configs-001** - TruView Reporter Configuration
- **Used in:** `/conditional-knockout-mouse-models`
- **Replace with:** `conventional-knockout-reporter-neo.png` (Reporter system)
- **Action:** Copy and rename to `fig-reporter-configs-001.png`

### 13. **fig-derivative-001** - Derivative Allele System (tm1a/b/c/d)
- **Used in:** `/derivative-alleles`
- **Replace with:** `conventional-knockout-ko-first.png` (Similar allele structure)
- **Action:** Copy and rename to `fig-derivative-001.png`

### 14. **fig-loxp-design-001** - LoxP Site Positioning
- **Used in:** `/loxp-site-design`
- **Replace with:** `cko-types-diagram.webp` (Shows loxP placement)
- **Action:** Copy and rename to `fig-loxp-design-001.png`

### 15. **fig-tag-knockin-001** - Tag Knockin Design
- **Used in:** `/tag-knockin-mice`
- **Replace with:** `transgenic-mice-knockin.png` (Knockin methodology)
- **Action:** Copy and rename to `fig-tag-knockin-001.png`

### 16. **fig-es-targeting-001** - ES Cell Gene Targeting
- **Used in:** `/pre-germline-characterization`
- **Replace with:** `common-approach-2nd-ep.png` (ES cell workflow)
- **Action:** Rename to `fig-es-targeting-001.png`

### 17. **fig-tissue-cre-001** - Tissue-Specific Cre Expression
- **Used in:** `/tissue-specific-cre-lines`
- **Replace with:** `rosa26-schematic-2.webp` (Tissue-specific control)
- **Action:** Rename to `fig-tissue-cre-001.png`

### 18. **fig-checkpoint-001** - Immune Checkpoint Pathway
- **Used in:** `/syngeneic-tumor-models`, `/humanized-immune-checkpoint-mice`
- **Replace with:** `transgenic-mouse-model-list.webp` (Cancer/immunology overview)
- **Action:** Rename to `fig-checkpoint-001.png`

### 19. **fig-amyloid-001** - Amyloid Cascade Pathway
- **Used in:** `/alzheimers-mouse-models` (used twice)
- **Replace with:** `transgenic-mouse-model-list.webp` (Neuroscience applications)
- **Action:** Copy and rename to `fig-amyloid-001.png`

### 20. **fig-tau-001** - Tau Pathology Mechanism
- **Used in:** `/alzheimers-mouse-models`
- **Replace with:** `conventional-knockout-reporter-neo.png` (Mechanism diagram)
- **Action:** Copy and rename to `fig-tau-001.png`

### 21. **fig-ibd-001** - IBD/Inflammatory Pathway
- **Used in:** `/ibd-mouse-models`
- **Replace with:** `transgenic-mouse-model-list.webp` (Disease models)
- **Action:** Copy and rename to `fig-ibd-001.png`

### 22. **fig-metabolic-001** - Metabolic Disease Pathway
- **Used in:** `/metabolic-disease-mouse-models`, `/therapeutic-areas`, `/obesity-mouse-models`
- **Replace with:** `transgenic-mouse-model-list.webp` (Disease applications)
- **Action:** Copy and rename to `fig-metabolic-001.png`

### 23. **fig-dmd-001** - Muscular Dystrophy Mechanism
- **Used in:** `/muscular-dystrophy-mouse-models`
- **Replace with:** `conventional-knockout-ko-first.png` (Disease model structure)
- **Action:** Copy and rename to `fig-dmd-001.png`

---

## Renaming Commands

Execute these commands to rename/copy diagrams to match the figureIds:

```bash
cd /Users/rocketcreative/Desktop/"CURSER BUILDS"/ITL_2026/itl-website/public/images/diagrams

# 1. Knockout structure
cp conventional-knockout-ko-first.png fig-ko-structure-001.png

# 2. Conditional knockout mechanism
cp cko-types-diagram.webp fig-cko-mechanism-001.png

# 3. Floxed allele
cp conditional-reversible-diagram.webp fig-floxed-001.png

# 4. Cre-lox system
cp cko-types-diagram.webp fig-cre-lox-001.png

# 5. CreERT2 induction
cp conditional-reversible-diagram.webp fig-creert2-001.png

# 6. Humanization strategies
cp humanization-strategies-infographic.webp fig-humanization-001.png

# 7. Rosa26 locus
cp rosa26-schematic-1.webp fig-rosa26-001.png

# 8. Knockin vs knockout
cp transgenic-mice-knockin.png fig-ki-vs-ko-001.png

# 9. Point mutation
cp conventional-knockout-reporter-neo.png fig-point-mutation-001.png

# 10. FLP-FRT system
cp common-approach-flp-mating.png fig-flp-frt-001.png

# 11. Knockout decision tree
cp truhumanization-graph.webp fig-ko-decision-001.png

# 12. Reporter configuration
cp conventional-knockout-reporter-neo.png fig-reporter-configs-001.png

# 13. Derivative alleles
cp conventional-knockout-ko-first.png fig-derivative-001.png

# 14. LoxP design
cp cko-types-diagram.webp fig-loxp-design-001.png

# 15. Tag knockin
cp transgenic-mice-knockin.png fig-tag-knockin-001.png

# 16. ES cell targeting
cp common-approach-2nd-ep.png fig-es-targeting-001.png

# 17. Tissue-specific Cre
cp rosa26-schematic-2.webp fig-tissue-cre-001.png

# 18. Immune checkpoint
cp transgenic-mouse-model-list.webp fig-checkpoint-001.png

# 19. Amyloid cascade
cp transgenic-mouse-model-list.webp fig-amyloid-001.png

# 20. Tau pathology
cp conventional-knockout-reporter-neo.png fig-tau-001.png

# 21. IBD pathway
cp transgenic-mouse-model-list.webp fig-ibd-001.png

# 22. Metabolic disease
cp transgenic-mouse-model-list.webp fig-metabolic-001.png

# 23. Muscular dystrophy
cp conventional-knockout-ko-first.png fig-dmd-001.png
```

---

## Summary

- **Total figureIds needed:** 23
- **Source diagrams from genetargeting.com:** 13
- **Strategy:** Reuse proven diagrams for multiple similar topics
- **Result:** All placeholders will show correct, proven scientific diagrams

---

## Next Steps

1. ✅ Download all diagrams from genetargeting.com
2. ✅ Copy to itl-website/public/images/diagrams/
3. ⏳ Execute renaming commands above
4. ⏳ Test each page to verify diagrams display correctly
5. ⏳ Adjust alt text in pages if needed for better SEO
6. ⏳ Commit changes

---

**Status:** Ready to execute renaming commands
