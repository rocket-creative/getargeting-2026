# Scientific Diagrams Tracker - ITL Website

**Last Updated:** January 23, 2026
**Purpose:** Track all scientific diagram placeholders for AI image generation  
**SEO Focus:** Diagrams add value through image search, increased dwell time, and educational content signals

---

## Quick Reference

| Status | Count | Description |
|--------|-------|-------------|
| 🔴 Placeholder | 0 | Ready for AI generation |
| 🟡 In Progress | 0 | Being generated |
| 🟢 Complete | 47 | Implemented and integrated |

### File Naming Convention
All images must be saved as: `[figure-id].png`  
Location: `/itl-website/public/images/diagrams/`

---

## Diagram Categories

### A. Molecular Mechanism Diagrams (16)
*Show how genetic technologies work at the molecular level*

### B. Allele Structure Diagrams (12)
*Show DNA/gene structure and modifications*

### C. Disease Pathway Diagrams (10)
*Show disease mechanisms and model applications*

### D. Decision/Flowchart Diagrams (5)
*Help researchers choose appropriate strategies*

### E. Process/Timeline Diagrams (4)
*Show project workflows and timelines*

---

## A. MOLECULAR MECHANISM DIAGRAMS

### A1. Cre-Lox Recombination Mechanism ✅ COMPLETE
- **Figure ID:** `fig-cre-lox-001`
- **Filename:** `fig-cre-lox-001.png`
- **Page:** `/cre-lox-system`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Cre recombinase recognizes 34bp loxP sites and catalyzes excision of flanked DNA sequences, leaving a single loxP site."
- **AI Generation Prompt:** "Scientific diagram showing Cre recombinase enzyme (blue protein structure) binding to two loxP sites (orange triangles) flanking a gene segment. Show the DNA before and after recombination with arrows indicating the excision process. Label loxP sites simply as 'loxP' with '34 bp' size indicator - DO NOT show actual nucleotide sequence letters. Show excised DNA as circular. Clean vector illustration style, white background, professional biotech aesthetic. Colors: navy blue, teal, orange accents."
- **Alt Text:** "Diagram illustrating Cre-lox recombination mechanism showing DNA excision between loxP sites"
- **SEO Keywords:** cre recombinase, loxP sites, site-specific recombination, conditional knockout

---

### A2. FLP-FRT Recombination System ✅ COMPLETE
- **Figure ID:** `fig-flp-frt-001`
- **Filename:** `fig-flp-frt-001.png`
- **Page:** `/flp-frt-system`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: FLP recombinase from yeast excises DNA between FRT sites, commonly used for selection cassette removal."
- **AI Generation Prompt:** "Scientific diagram showing FLP recombinase (green protein) binding to FRT recognition sites (purple triangles). Show parallel vs antiparallel FRT orientation and outcomes (excision vs inversion). Clean vector style, professional biotech aesthetic. Colors: forest green, purple, navy."
- **Alt Text:** "FLP-FRT recombination system diagram showing DNA excision and inversion outcomes"
- **SEO Keywords:** FLP recombinase, FRT sites, cassette removal, derivative alleles

---

### A3. CreERT2 Tamoxifen Induction Mechanism ✅ COMPLETE
- **Figure ID:** `fig-creert2-001`
- **Filename:** `fig-creert2-001.png`
- **Page:** `/tamoxifen-inducible-cre`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: CreERT2 remains cytoplasmic until tamoxifen binding triggers nuclear translocation and Cre activity."
- **AI Generation Prompt:** "Scientific diagram showing CreERT2 inducible system in three stages: (1) Inactive state - CreERT2 bound to HSP90 in cytoplasm, (2) Tamoxifen administration - tamoxifen molecule binding to ERT2 domain, (3) Active state - CreERT2 in nucleus with DNA. Show cell membrane, nucleus, and molecular interactions. Clean vector style."
- **Alt Text:** "Tamoxifen-inducible CreERT2 mechanism showing cytoplasmic sequestration and nuclear translocation"
- **SEO Keywords:** CreERT2, tamoxifen inducible, temporal control, inducible knockout

---

### A4. Conditional Knockout Mechanism ✅ COMPLETE
- **Figure ID:** `fig-cko-mechanism-001`
- **Filename:** `fig-cko-mechanism-001.png`
- **Page:** `/conditional-knockout-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Floxed alleles function normally until Cre expression triggers tissue-specific gene deletion."
- **AI Generation Prompt:** "Scientific diagram showing conditional knockout in two states: Top - floxed allele with loxP sites flanking critical exon, gene expressed normally. Bottom - after Cre expression, exon excised, gene inactivated. Show in context of a cell with Cre driver indicated. Clean vector illustration."
- **Alt Text:** "Conditional knockout mechanism showing floxed allele before and after Cre-mediated excision"
- **SEO Keywords:** conditional knockout, floxed allele, tissue-specific deletion, Cre driver

---

### A5. Tissue-Specific Cre Expression Pattern ✅ COMPLETE
- **Figure ID:** `fig-tissue-cre-001`
- **Filename:** `fig-tissue-cre-001.png`
- **Page:** `/tissue-specific-cre-lines`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Tissue-specific Cre drivers enable gene deletion restricted to defined cell populations."
- **AI Generation Prompt:** "Scientific diagram showing mouse silhouette with highlighted organs (brain, liver, heart, immune cells) and corresponding Cre driver names pointing to each. Show one organ in detail with Cre+ cells (colored) vs Cre- cells (gray). Clean anatomical illustration style."
- **Alt Text:** "Mouse diagram showing tissue-specific Cre driver expression patterns in different organs"
- **SEO Keywords:** tissue-specific Cre, Cre driver lines, organ-specific knockout, cell-type targeting

---

### A6. Humanized Gene Strategy ✅ COMPLETE
- **Figure ID:** `fig-humanization-001`
- **Filename:** `fig-humanization-001.png`
- **Page:** `/humanized-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Humanization strategies replace mouse sequences with human ortholog sequences at the endogenous locus."
- **AI Generation Prompt:** "Scientific diagram comparing three humanization strategies side by side: (1) Full gene replacement - entire mouse gene replaced with human, (2) Extracellular domain humanization - only external protein domain human, (3) Epitope humanization - minimal region replaced. Show DNA/protein level with mouse (gray) and human (blue) regions labeled."
- **Alt Text:** "Comparison of gene humanization strategies showing full replacement, domain, and epitope approaches"
- **SEO Keywords:** humanized mouse models, gene humanization, extracellular domain, therapeutic testing

---

### A7. Knockin vs Knockout Comparison ✅ COMPLETE
- **Figure ID:** `fig-ki-vs-ko-001`
- **Filename:** `fig-ki-vs-ko-001.png`
- **Page:** `/knockin-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Knockin modifications preserve gene structure while introducing specific changes; knockouts eliminate gene function."
- **AI Generation Prompt:** "Side-by-side scientific diagram comparing knockin vs knockout at DNA level. Left: Knockin showing gene with point mutation (red star) or reporter insertion (green segment) - gene still functional but modified. Right: Knockout showing gene with critical exon deleted (gap) - no functional protein. Clean vector illustration with annotations."
- **Alt Text:** "Comparison diagram showing knockin modification vs knockout deletion strategies"
- **SEO Keywords:** knockin mouse, knockout mouse, gene modification, point mutation

---

### A8. Reporter Gene Mechanism ✅ COMPLETE
- **Figure ID:** `fig-reporter-001`
- **Filename:** `fig-reporter-001.png`
- **Page:** `/reporter-knockin`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Reporter knockins express visualization markers under control of the endogenous promoter."
- **AI Generation Prompt:** "Scientific diagram showing reporter knockin design: endogenous promoter driving expression of reporter gene (GFP, LacZ, tdTomato shown as options) with IRES or 2A linker. Include cell image showing fluorescent reporter expression. Clean vector style with gene structure detail."
- **Alt Text:** "Reporter knockin gene structure and cellular expression visualization"
- **SEO Keywords:** reporter knockin, GFP mouse, LacZ reporter, gene expression visualization

---

### A9. Point Mutation Knockin ✅ COMPLETE
- **Figure ID:** `fig-point-mutation-001`
- **Filename:** `fig-point-mutation-001.png`
- **Page:** `/point-mutation-mice`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Point mutation knockins introduce single nucleotide changes to model human disease variants."
- **AI Generation Prompt:** "Scientific diagram showing point mutation knockin at three levels: (1) DNA sequence with single base change highlighted, (2) Codon showing amino acid change, (3) Protein structure showing location of mutation. Include example disease variant notation (e.g., G12D). Clean molecular biology illustration style."
- **Alt Text:** "Point mutation knockin diagram showing DNA, codon, and protein-level changes"
- **SEO Keywords:** point mutation, SNP knockin, disease modeling, amino acid substitution

---

### A10. Tag Knockin Design ✅ COMPLETE
- **Figure ID:** `fig-tag-knockin-001`
- **Filename:** `fig-tag-knockin-001.png`
- **Page:** `/tag-knockin-mice`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Epitope tags enable protein detection, localization, and purification from endogenous expression."
- **AI Generation Prompt:** "Scientific diagram showing tag knockin options: gene structure with N-terminal, C-terminal, and internal tag positions marked. Show common tags (FLAG, HA, V5, Myc) with their sequences. Include cell image showing tagged protein detected by antibody. Clean vector illustration."
- **Alt Text:** "Epitope tag knockin positions and detection methods diagram"
- **SEO Keywords:** epitope tag, FLAG tag, HA tag, protein localization, immunoprecipitation

---

### A11. Doxycycline Inducible System ✅ COMPLETE
- **Figure ID:** `fig-tet-system-001`
- **Filename:** `fig-tet-system-001.png`
- **Page:** `/doxycycline-inducible-systems`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Tet-On and Tet-Off systems provide reversible control of gene expression through doxycycline."
- **AI Generation Prompt:** "Scientific diagram showing Tet-On vs Tet-Off systems: Left (Tet-On) - rtTA binds TRE promoter only with doxycycline present, gene ON. Right (Tet-Off) - tTA binds TRE without doxycycline, gene OFF with dox. Show molecular components and gene expression states. Clean vector style."
- **Alt Text:** "Tet-On and Tet-Off doxycycline-inducible gene expression systems comparison"
- **SEO Keywords:** Tet-On, Tet-Off, doxycycline inducible, reversible expression, rtTA

---

### A12. ROSA26 Safe Harbor Locus ✅ COMPLETE
- **Figure ID:** `fig-rosa26-001`
- **Filename:** `fig-rosa26-001.png`
- **Page:** `/rosa26`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: The ROSA26 locus provides reliable ubiquitous expression without disrupting endogenous genes."
- **AI Generation Prompt:** "Scientific diagram showing ROSA26 locus structure with common cassette designs: CAG promoter, loxP-STOP-loxP, transgene. Show mouse chromosome with ROSA26 location marked. Include expression pattern (ubiquitous) in mouse silhouette. Clean genomic illustration style."
- **Alt Text:** "ROSA26 safe harbor locus structure and transgene insertion strategy"
- **SEO Keywords:** ROSA26, safe harbor, ubiquitous expression, knockin locus

---

### A13. ES Cell Gene Targeting ✅ COMPLETE
- **Figure ID:** `fig-es-targeting-001`
- **Filename:** `fig-es-targeting-001.png`
- **Page:** `/es-cell-gene-targeting`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: ES cell targeting uses homologous recombination to introduce precise modifications at specific genomic locations."
- **AI Generation Prompt:** "Scientific diagram showing ES cell gene targeting process: targeting vector with homology arms, electroporation into ES cells, homologous recombination at target locus, selection of correctly targeted clones. Show DNA level detail of recombination event. Clean molecular biology illustration."
- **Alt Text:** "ES cell gene targeting through homologous recombination diagram"
- **SEO Keywords:** ES cell targeting, homologous recombination, gene targeting, targeting vector

---

### A14. LoxP Site Positioning ✅ COMPLETE
- **Figure ID:** `fig-loxp-design-001`
- **Filename:** `fig-loxp-design-001.png`
- **Page:** `/loxp-site-design`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Optimal loxP site positioning preserves normal gene function while enabling efficient Cre-mediated excision."
- **AI Generation Prompt:** "Scientific diagram showing proper loxP site placement: gene structure with exons, introns, and regulatory elements. Show loxP sites positioned in introns flanking critical exon. Highlight considerations: splice site preservation, regulatory element avoidance, exon selection criteria. Clean gene structure illustration."
- **Alt Text:** "LoxP site positioning guidelines for conditional allele design"
- **SEO Keywords:** loxP positioning, conditional allele design, intronic insertion, critical exon

---

### A15. Inversion vs Excision ✅ COMPLETE
- **Figure ID:** `fig-inversion-excision-001`
- **Filename:** `fig-inversion-excision-001.png`
- **Page:** `/conditional-knockin-mice`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: LoxP site orientation determines whether Cre-mediated recombination causes excision or inversion."
- **AI Generation Prompt:** "Scientific diagram showing two scenarios: Top - parallel loxP sites (same direction arrows) leading to DNA excision and circularization. Bottom - antiparallel loxP sites (opposite arrows) leading to DNA inversion. Show before/after states for each. Clean vector illustration with directional arrows."
- **Alt Text:** "LoxP orientation effects on Cre recombination outcomes - excision vs inversion"
- **SEO Keywords:** loxP orientation, DNA excision, DNA inversion, flex allele

---

### A16. Transgenic vs Knockin Comparison ✅ COMPLETE
- **Figure ID:** `fig-tg-vs-ki-001`
- **Filename:** `fig-tg-vs-ki-001.png`
- **Page:** `/transgenic-mouse-service`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Transgenic insertion occurs randomly with variable copy number; knockin provides precise single-copy integration."
- **AI Generation Prompt:** "Scientific diagram comparing transgenic vs knockin: Left - transgenic showing random integration at multiple chromosomal sites with variable copy numbers. Right - knockin showing precise single-copy integration at endogenous locus. Show chromosome representations with insertion sites. Clean genomic illustration."
- **Alt Text:** "Comparison of random transgenic integration vs targeted knockin integration"
- **SEO Keywords:** transgenic mouse, knockin mouse, random integration, targeted integration

---

## B. ALLELE STRUCTURE DIAGRAMS

### B1. Derivative Allele System (tm1a/b/c/d) ✅ COMPLETE
- **Figure ID:** `fig-derivative-001`
- **Filename:** `fig-derivative-001.png`
- **Page:** `/derivative-alleles`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: The derivative allele system generates four functional configurations from a single ES cell targeting event."
- **AI Generation Prompt:** "Scientific diagram showing derivative allele conversions: tm1a (knockout-first with LacZ-neo cassette) → tm1b (null, Cre removes all) OR → tm1c (floxed, Flp removes cassette). Then tm1c → tm1d (conditional null, Cre in specific tissue). Show DNA structure at each stage with FRT and loxP sites. Use flow arrows. Professional genomics illustration."
- **Alt Text:** "Derivative allele system showing tm1a to tm1b, tm1c, and tm1d conversions"
- **SEO Keywords:** derivative alleles, tm1a, tm1c, knockout-first, EUCOMM

---

### B2. Knockout Allele Structure ✅ COMPLETE
- **Figure ID:** `fig-ko-structure-001`
- **Filename:** `fig-ko-structure-001.png`
- **Page:** `/knockout-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Knockout alleles eliminate gene function through deletion of critical coding sequences."
- **AI Generation Prompt:** "Scientific diagram showing knockout allele design: wild-type gene with exons numbered, then targeted allele showing deletion of critical exon(s) with selection cassette. Show resulting frameshift and premature stop. Include PCR genotyping strategy. Clean gene structure illustration."
- **Alt Text:** "Knockout allele structure showing exon deletion and resulting null allele"
- **SEO Keywords:** knockout allele, exon deletion, null allele, loss of function

---

### B3. Conventional vs Conditional Allele Structure ✅ COMPLETE
- **Figure ID:** `fig-conv-vs-cond-001`
- **Page:** `/conventional-knockout-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Conventional knockouts delete sequences directly; conditional alleles require Cre for deletion."
- **AI Generation Prompt:** "Side-by-side diagram: Left - conventional knockout showing direct exon deletion, gene non-functional from start. Right - conditional knockout showing floxed exon intact until Cre exposure. Show wild-type, targeted, and (for conditional) Cre-recombined states. Clean gene structure illustration."
- **Alt Text:** "Comparison of conventional knockout and conditional knockout allele structures"
- **SEO Keywords:** conventional knockout, conditional knockout, constitutive deletion, Cre-dependent

---

### B4. Floxed Allele Design ✅ COMPLETE
- **Figure ID:** `fig-floxed-001`
- **Page:** `/conditional-knockout-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 2: A properly designed floxed allele functions normally until exposed to Cre recombinase."
- **AI Generation Prompt:** "Scientific diagram showing floxed allele in detail: gene structure with loxP sites (triangles) in introns flanking critical exon. Show that transcription, splicing, and protein production are normal. Then show Cre+ state with exon deleted and gene inactivated. Include annotations for design considerations."
- **Alt Text:** "Floxed allele design showing normal function before and null after Cre exposure"
- **SEO Keywords:** floxed allele, loxP-flanked, conditional ready, normal function preserved

---

### B5. Knockout-First Allele (tm1a) ✅ COMPLETE
- **Figure ID:** `fig-tm1a-001`
- **Page:** `/knockout-first-allele`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: The knockout-first allele includes a gene trap cassette that can be removed to generate a conditional allele."
- **AI Generation Prompt:** "Scientific diagram showing tm1a knockout-first allele structure in detail: FRT sites flanking LacZ-neo cassette with splice acceptor and polyA, loxP sites flanking critical exon. Show gene is disrupted by cassette. Indicate Flp and Cre conversion possibilities. Professional genomics illustration."
- **Alt Text:** "Knockout-first (tm1a) allele structure with LacZ reporter and selection cassette"
- **SEO Keywords:** knockout-first, tm1a allele, gene trap, LacZ reporter

---

### B6. cDNA Knockin Structure ✅ COMPLETE
- **Figure ID:** `fig-cdna-ki-001`
- **Page:** `/cdna-knockin`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: cDNA knockins replace endogenous coding sequence while maintaining native regulatory control."
- **AI Generation Prompt:** "Scientific diagram showing cDNA knockin design: endogenous gene with promoter and regulatory elements preserved, coding sequence replaced with cDNA (can be human, modified, or alternative isoform). Show start codon alignment and polyA signal. Clean molecular biology illustration."
- **Alt Text:** "cDNA knockin allele structure showing coding sequence replacement"
- **SEO Keywords:** cDNA knockin, coding sequence replacement, humanization, isoform expression

---

### B7. Conditional Knockin (LSL) Structure ✅ COMPLETE
- **Figure ID:** `fig-lsl-ki-001`
- **Page:** `/conditional-knockin-mice`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: LSL (loxP-STOP-loxP) cassettes prevent expression until Cre-mediated removal activates the allele."
- **AI Generation Prompt:** "Scientific diagram showing conditional knockin with LSL cassette: promoter, loxP-STOP-loxP cassette (with transcriptional stop signals), transgene/mutation. Show silent state (STOP blocks transcription) and active state (Cre removes STOP, expression begins). Clean vector illustration."
- **Alt Text:** "Conditional knockin with LSL stop cassette structure and Cre activation"
- **SEO Keywords:** LSL cassette, conditional knockin, Cre-activatable, oncogene modeling

---

### B8. Reporter Allele Configurations ✅ COMPLETE
- **Figure ID:** `fig-reporter-configs-001`
- **Page:** `/reporter-knockin`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 2: Common reporter configurations include replacement, bicistronic (IRES), and 2A peptide linkage designs."
- **AI Generation Prompt:** "Scientific diagram showing three reporter knockin configurations: (1) Complete replacement - reporter replaces gene, (2) IRES-reporter - gene followed by IRES and reporter, both expressed, (3) 2A-reporter - gene and reporter separated by 2A peptide, single transcript. Show resulting proteins for each design."
- **Alt Text:** "Reporter knockin configurations comparing replacement, IRES, and 2A designs"
- **SEO Keywords:** IRES reporter, 2A peptide, bicistronic, reporter design

---

### B9. Inducible ROSA26 Allele ✅ COMPLETE
- **Figure ID:** `fig-rosa26-inducible-001`
- **Page:** `/inducible-rosa26`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: ROSA26 Cre-dependent alleles enable ubiquitous expression of transgenes when crossed to Cre drivers."
- **AI Generation Prompt:** "Scientific diagram showing ROSA26 inducible allele: ROSA26 locus with CAG promoter, loxP-STOP-loxP, transgene (GFP example). Show inactive state (STOP blocks) and active state after Cre (ubiquitous expression). Include mouse silhouette showing expression pattern."
- **Alt Text:** "ROSA26 Cre-dependent inducible allele for ubiquitous transgene expression"
- **SEO Keywords:** ROSA26, Cre-dependent, ubiquitous expression, STOP cassette

---

### B10. Dual Recombinase Allele ✅ COMPLETE
- **Figure ID:** `fig-dual-recombinase-001`
- **Page:** `/derivative-alleles`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 2: Alleles with both FRT and loxP sites enable sequential manipulation by Flp and Cre recombinases."
- **AI Generation Prompt:** "Scientific diagram showing dual recombinase allele: gene structure with both FRT sites (flanking cassette) and loxP sites (flanking exon). Show sequential processing: Flp removes cassette first, then Cre in specific tissue removes exon. Indicate independent control. Professional genomics illustration."
- **Alt Text:** "Dual recombinase allele with FRT and loxP sites for sequential manipulation"
- **SEO Keywords:** dual recombinase, FRT loxP, sequential recombination, intersectional genetics

---

### B11. H11 Safe Harbor Locus ✅ COMPLETE
- **Figure ID:** `fig-h11-001`
- **Page:** `/h11-safe-harbor`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: The H11 locus provides an alternative safe harbor for transgene integration with high expression."
- **AI Generation Prompt:** "Scientific diagram showing H11 safe harbor locus: chromosome location, flanking genes, and insertion site. Compare to ROSA26 location. Show common H11 knockin design with CAG promoter and transgene. Clean genomic illustration with chromosome ideogram."
- **Alt Text:** "H11 safe harbor locus structure and transgene insertion design"
- **SEO Keywords:** H11 locus, safe harbor, high expression, alternative to ROSA26

---

### B12. Selection Cassette Designs ✅ COMPLETE
- **Figure ID:** `fig-selection-cassette-001`
- **Page:** `/es-cell-gene-targeting`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 2: Selection cassettes enable identification of correctly targeted ES cell clones and can be removed after selection."
- **AI Generation Prompt:** "Scientific diagram showing common selection cassette designs: Neo cassette with PGK promoter, FRT-flanked for removal. Show positive selection (neomycin resistance) and negative selection (DTA or HSV-tk) positions in targeting vector. Include before/after cassette removal states."
- **Alt Text:** "ES cell selection cassette designs with positive and negative selection markers"
- **SEO Keywords:** selection cassette, neomycin resistance, positive selection, cassette removal

---

## C. DISEASE PATHWAY DIAGRAMS

### C1. Amyloid Cascade Pathway ✅ COMPLETE
- **Figure ID:** `fig-amyloid-001`
- **Page:** `/alzheimers-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: The amyloid cascade shows APP processing by secretases leading to Aβ plaque formation."
- **AI Generation Prompt:** "Scientific pathway diagram showing amyloid cascade: APP protein processed by β-secretase and γ-secretase to generate Aβ peptides. Show Aβ aggregation from monomers to oligomers to fibrils to plaques. Indicate where mutations (Swedish, London) affect processing. Clean pathway illustration with molecular representations."
- **Alt Text:** "Amyloid cascade pathway showing APP processing and Aβ plaque formation"
- **SEO Keywords:** amyloid cascade, APP processing, Aβ plaque, secretase, Alzheimer's

---

### C2. Tau Pathology Mechanism ✅ COMPLETE
- **Figure ID:** `fig-tau-001`
- **Page:** `/alzheimers-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 2: Tau hyperphosphorylation leads to microtubule destabilization and neurofibrillary tangle formation."
- **AI Generation Prompt:** "Scientific diagram showing tau pathology: normal tau stabilizing microtubules, then hyperphosphorylated tau detaching and aggregating into paired helical filaments and neurofibrillary tangles. Show kinases involved. Indicate P301L/P301S mutation locations. Clean molecular pathway illustration."
- **Alt Text:** "Tau pathology diagram showing hyperphosphorylation and tangle formation"
- **SEO Keywords:** tau pathology, neurofibrillary tangles, MAPT, hyperphosphorylation

---

### C3. Immune Checkpoint Pathway ✅ COMPLETE
- **Figure ID:** `fig-checkpoint-001`
- **Page:** `/humanized-immune-checkpoint-mice`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Immune checkpoint interactions regulate T cell activation and tumor immune evasion."
- **AI Generation Prompt:** "Scientific diagram showing immune checkpoint interactions: T cell with PD-1, CTLA-4 receptors; tumor cell with PD-L1; APC with B7. Show inhibitory signals blocking T cell activation. Indicate where checkpoint inhibitor antibodies block these interactions. Clean immunology illustration with cell representations."
- **Alt Text:** "Immune checkpoint pathway showing PD-1/PD-L1 and CTLA-4/B7 interactions"
- **SEO Keywords:** immune checkpoint, PD-1, CTLA-4, checkpoint inhibitor, immuno-oncology

---

### C4. Parkinson's Disease Pathway ✅ COMPLETE
- **Figure ID:** `fig-parkinsons-001`
- **Page:** `/parkinsons-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Parkinson's disease involves dopaminergic neuron loss and α-synuclein aggregation in the substantia nigra."
- **AI Generation Prompt:** "Scientific diagram showing Parkinson's pathway: dopaminergic neurons in substantia nigra, α-synuclein protein aggregation into Lewy bodies, dopamine synthesis pathway disruption, connection to motor symptoms. Indicate SNCA, LRRK2, PINK1 gene involvement. Clean neuroscience illustration."
- **Alt Text:** "Parkinson's disease pathway showing dopaminergic neuron loss and α-synuclein aggregation"
- **SEO Keywords:** Parkinson's disease, α-synuclein, dopaminergic neurons, Lewy bodies

---

### C5. Metabolic Disease Pathway ✅ COMPLETE
- **Figure ID:** `fig-metabolic-001`
- **Page:** `/metabolic-disease-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Metabolic disease mouse models target key pathways in glucose homeostasis, lipid metabolism, and energy balance."
- **AI Generation Prompt:** "Scientific diagram showing interconnected metabolic pathways: insulin signaling in liver/muscle/adipose, glucose uptake, lipid synthesis, leptin signaling. Highlight key targets for mouse models (insulin receptor, leptin receptor, GLUT4). Organ-level and molecular detail. Clean metabolic pathway illustration."
- **Alt Text:** "Metabolic disease pathways showing insulin, glucose, and lipid metabolism targets"
- **SEO Keywords:** metabolic disease, insulin signaling, obesity, diabetes, lipid metabolism

---

### C6. Cardiovascular Disease Mechanisms ✅ COMPLETE
- **Figure ID:** `fig-cardiovascular-001`
- **Page:** `/cardiovascular-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Cardiovascular mouse models enable study of atherosclerosis, heart failure, and cardiac development."
- **AI Generation Prompt:** "Scientific diagram showing cardiovascular disease targets: heart cross-section with cardiomyocytes, blood vessel with atherosclerotic plaque formation, and cardiac conduction system. Indicate key gene targets (ApoE, LDLR for atherosclerosis; Myh7 for cardiomyopathy). Clean anatomical illustration."
- **Alt Text:** "Cardiovascular disease mechanisms including atherosclerosis and cardiomyopathy"
- **SEO Keywords:** cardiovascular, atherosclerosis, heart failure, cardiomyopathy, ApoE

---

### C7. IBD/Inflammatory Pathway ✅ COMPLETE
- **Figure ID:** `fig-ibd-001`
- **Page:** `/ibd-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: IBD involves disruption of intestinal barrier function and dysregulated immune responses."
- **AI Generation Prompt:** "Scientific diagram showing IBD pathogenesis: intestinal epithelial barrier with tight junctions, underlying immune cells (macrophages, T cells), microbiome representation. Show barrier disruption, immune activation, and inflammatory cytokine production. Clean gastrointestinal illustration."
- **Alt Text:** "IBD pathogenesis showing intestinal barrier disruption and immune activation"
- **SEO Keywords:** IBD, inflammatory bowel disease, intestinal barrier, mucosal immunity

---

### C8. Muscular Dystrophy Mechanism ✅ COMPLETE
- **Figure ID:** `fig-dmd-001`
- **Page:** `/muscular-dystrophy-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Muscular dystrophies result from defects in the dystrophin-associated protein complex."
- **AI Generation Prompt:** "Scientific diagram showing dystrophin complex: muscle fiber membrane with dystrophin protein linking actin cytoskeleton to extracellular matrix. Show complex components (dystroglycan, sarcoglycans). Indicate DMD gene location and effect of dystrophin loss. Clean molecular/cellular illustration."
- **Alt Text:** "Dystrophin-associated protein complex and muscular dystrophy mechanism"
- **SEO Keywords:** muscular dystrophy, dystrophin, DMD, mdx mouse, muscle fiber

---

### C9. Huntington's Disease Pathway ✅ COMPLETE
- **Figure ID:** `fig-huntingtons-001`
- **Page:** `/huntingtons-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Huntington's disease results from CAG repeat expansion in HTT gene causing toxic protein aggregation."
- **AI Generation Prompt:** "Scientific diagram showing Huntington's pathogenesis: HTT gene with CAG repeat expansion, mutant huntingtin protein with polyglutamine tract, protein aggregation in neurons, striatal neuron degeneration. Show repeat length correlation with disease severity. Clean neuroscience illustration."
- **Alt Text:** "Huntington's disease pathway from CAG expansion to neuronal degeneration"
- **SEO Keywords:** Huntington's disease, CAG repeat, huntingtin, polyglutamine, striatum

---

### C10. ALS Disease Mechanisms ✅ COMPLETE
- **Figure ID:** `fig-als-001`
- **Page:** `/als-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: ALS involves motor neuron degeneration through multiple pathogenic mechanisms."
- **AI Generation Prompt:** "Scientific diagram showing ALS pathogenesis: motor neuron with protein aggregates (TDP-43, SOD1), disrupted axonal transport, muscle denervation at neuromuscular junction. Show gene targets (SOD1, TDP-43, FUS, C9orf72). Include upper and lower motor neuron involvement. Clean neuromuscular illustration."
- **Alt Text:** "ALS pathogenic mechanisms showing motor neuron degeneration and protein aggregation"
- **SEO Keywords:** ALS, motor neuron disease, SOD1, TDP-43, neuromuscular junction

---

## D. DECISION/FLOWCHART DIAGRAMS

### D1. Knockout Strategy Decision Tree ✅ COMPLETE
- **Figure ID:** `fig-ko-decision-001`
- **Page:** `/knockout-strategy-guide`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Decision flowchart for selecting between conventional, conditional, and inducible knockout strategies."
- **AI Generation Prompt:** "Decision flowchart diagram: Start with 'Is gene essential for development?' → If Yes: 'Conditional knockout required' → 'Need temporal control?' → If Yes: 'Inducible CreERT2' / If No: 'Tissue-specific Cre'. If gene not essential: 'Conventional knockout possible' → 'Multiple tissue studies planned?' → branches for derivative allele vs conventional. Clean flowchart with decision diamonds and outcome boxes."
- **Alt Text:** "Knockout strategy decision flowchart for conventional vs conditional approaches"
- **SEO Keywords:** knockout strategy, decision guide, conditional vs conventional, model selection

---

### D2. Conditional vs Conventional Comparison ✅ COMPLETE
- **Figure ID:** `fig-cond-conv-compare-001`
- **Page:** `/conditional-vs-conventional-guide`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Comparison guide showing when to choose conditional versus conventional knockout approaches."
- **AI Generation Prompt:** "Comparison diagram with two columns: Conventional Knockout (pros: simpler, faster, lower cost; cons: embryonic lethality risk, global deletion only) vs Conditional Knockout (pros: tissue control, temporal control, essential genes; cons: longer timeline, higher cost, requires Cre). Include recommendation criteria at bottom. Clean comparison layout."
- **Alt Text:** "Conventional vs conditional knockout comparison chart with selection criteria"
- **SEO Keywords:** conditional knockout, conventional knockout, comparison guide, model selection

---

### D3. Cre Line Selection Guide ✅ COMPLETE
- **Figure ID:** `fig-cre-selection-001`
- **Page:** `/cre-line-selection-guide`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Framework for selecting appropriate Cre driver lines based on target tissue and timing requirements."
- **AI Generation Prompt:** "Decision framework diagram for Cre selection: Start with tissue type (neural, immune, metabolic, cardiac, etc.) → branch to constitutive vs inducible need → specific Cre line recommendations for each path. Include considerations box (expression timing, mosaic expression, background strain). Clean flowchart with tissue icons."
- **Alt Text:** "Cre driver line selection framework based on tissue and timing requirements"
- **SEO Keywords:** Cre selection, tissue-specific Cre, inducible Cre, Cre driver choice

---

### D4. Reporter Selection Guide ✅ COMPLETE
- **Figure ID:** `fig-reporter-selection-001`
- **Page:** `/reporter-selection-guide`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Guide for selecting appropriate reporter genes based on detection method and experimental design."
- **AI Generation Prompt:** "Reporter selection decision diagram: Start with detection method (fluorescence microscopy, flow cytometry, histology, live imaging) → recommended reporters for each. Consider brightness, tissue penetration, spectral compatibility. Include color spectrum showing fluorescent protein options (blue to far-red). Clean decision matrix layout."
- **Alt Text:** "Reporter gene selection guide based on detection methods and applications"
- **SEO Keywords:** reporter selection, GFP, tdTomato, LacZ, fluorescent protein

---

### D5. Strain Background Selection ✅ COMPLETE
- **Figure ID:** `fig-strain-selection-001`
- **Page:** `/strain-selection-guide`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Guide for selecting appropriate mouse strain backgrounds based on research application."
- **AI Generation Prompt:** "Strain selection decision diagram: Research applications (immunology, oncology, behavior, metabolism) mapping to recommended strains (C57BL/6, BALB/c, FVB, 129). Include strain characteristics (immune response type, tumor susceptibility, learning ability). Mouse silhouettes with strain names. Clean decision matrix."
- **Alt Text:** "Mouse strain background selection guide for different research applications"
- **SEO Keywords:** strain background, C57BL/6, BALB/c, strain selection, genetic background

---

## E. PROCESS/TIMELINE DIAGRAMS

### E1. Mouse Model Generation Timeline ✅ COMPLETE
- **Figure ID:** `fig-timeline-001`
- **Page:** `/model-generation-timeline`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Typical timeline for custom knockout mouse model generation from design to germline transmission."
- **AI Generation Prompt:** "Timeline diagram showing knockout mouse generation: Month 1-2: Strategy design and vector construction; Month 2-4: ES cell targeting and screening; Month 4-5: Chimera generation; Month 5-7: Breeding for germline transmission; Month 7-8: F1 heterozygote delivery. Use horizontal timeline with milestone markers. Clean project timeline style."
- **Alt Text:** "Knockout mouse model generation timeline from design to delivery"
- **SEO Keywords:** mouse model timeline, project timeline, germline transmission, ES cell targeting

---

### E2. Breeding Scheme for Homozygotes ✅ COMPLETE
- **Figure ID:** `fig-breeding-001`
- **Page:** `/breeding-scheme-architect`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 1: Standard breeding scheme to generate homozygous knockout mice from heterozygous founders."
- **AI Generation Prompt:** "Breeding scheme diagram showing: F1 Het × Het cross → F2 generation with Mendelian ratios (25% WT, 50% Het, 25% Homo). Include genotyping strategy for each genotype. Show timeline for each generation. Use Punnett square element. Clean genetics illustration."
- **Alt Text:** "Breeding scheme for generating homozygous knockout mice from heterozygous founders"
- **SEO Keywords:** breeding scheme, heterozygous cross, homozygous, Mendelian inheritance

---

### E3. Conditional Knockout Breeding ✅ COMPLETE
- **Figure ID:** `fig-cko-breeding-001`
- **Page:** `/conditional-knockout-mouse-models`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 3: Breeding scheme to generate tissue-specific knockouts by crossing floxed mice to Cre drivers."
- **AI Generation Prompt:** "Breeding diagram for conditional knockout: Floxed/Floxed mouse × Cre/+ mouse → offspring with Cre; Floxed/+ (tissue-specific knockout in Cre-expressing cells) and Floxed/+ (control, no Cre). Show which offspring are experimental vs control. Include subsequent cross to get homozygous floxed + Cre. Clean genetics illustration."
- **Alt Text:** "Conditional knockout breeding scheme crossing floxed allele to Cre driver"
- **SEO Keywords:** conditional knockout breeding, Cre cross, floxed breeding, tissue-specific knockout

---

### E4. Derivative Allele Conversion Workflow ✅ COMPLETE
- **Figure ID:** `fig-derivative-workflow-001`
- **Page:** `/derivative-alleles`
- **Aspect Ratio:** 4:3
- **Caption:** "Fig. 2: Workflow for converting knockout-first alleles to conditional-ready and null configurations."
- **AI Generation Prompt:** "Workflow diagram showing derivative conversions: Central tm1a allele with branches to: (1) Cre deleter cross → tm1b (null), (2) Flp deleter cross → tm1c (floxed), then tm1c + tissue Cre → tm1d (conditional null). Include timeline for each conversion (2-3 months per cross). Use flowchart arrows. Clean workflow style."
- **Alt Text:** "Derivative allele conversion workflow from tm1a to tm1b, tm1c, and tm1d"
- **SEO Keywords:** derivative allele conversion, tm1a breeding, Flp deleter, Cre deleter

---

## Implementation Notes

### Adding Diagrams to Pages

1. Import the component:
```tsx
import { ScientificDiagramPlaceholder } from '@/components/UXUIDC/ScientificDiagramPlaceholder';
```

2. Add to page:
```tsx
<ScientificDiagramPlaceholder
  figureId="fig-cre-lox-001"
  aspectRatio="4:3"
  title="Cre-Lox Recombination Mechanism"
  caption="Fig. 1: Cre recombinase recognizes 34bp loxP sites and catalyzes excision of flanked DNA sequences."
  variant="section"
  altText="Diagram illustrating Cre-lox recombination mechanism"
/>
```

### AI Generation Guidelines

When generating images:
1. Use scientific illustration style (clean vectors, not photos)
2. Colors: Navy (#0a253c), Teal (#008080), Blue (#2384da), White background
3. Include labels and annotations
4. Keep consistent with ITL brand aesthetic
5. Ensure scientific accuracy
6. Format: SVG preferred, PNG acceptable at 2x resolution
7. Size: Minimum 1200px wide for 4:3, 800px for 1:1

### SEO Considerations

- Each diagram should have unique, descriptive alt text
- File names should include primary keyword
- Surrounding text should reference the figure
- Schema.org ImageObject markup recommended for key diagrams

---

## Version History

| Date | Changes |
|------|---------|
| 2026-01-24 | **Content-based mapping:** Sci-draw images matched to figure IDs by visual content (not filename/timestamp/sequence). Replaced diagram assets accordingly. Added ScientificDiagramPlaceholder to tissue-specific-cre-lines, rosa26, alzheimers-mouse-models. Fixed tamoxifen page figureId (fig-creert2-001). Mapping: `content_based_mapping.json`. |
| 2026-01-23 | 47 diagrams implemented and added to /itl-website/public/images/diagrams/ |
| 2026-01-22 | Initial tracker created with 47 diagram specifications |
