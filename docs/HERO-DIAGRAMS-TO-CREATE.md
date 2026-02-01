# Hero Diagram Images – Create & Wire Up

**Purpose:** List all hero-section diagram placeholders: (1) **use existing** images and wire `ScientificDiagramPlaceholder`, or (2) **create new** images from AI prompts, then wire them.

**Output location:** `/itl-website/public/images/diagrams/`  
**Naming:** `[figure-id].png`  
**Aspect ratio:** 4:3 unless noted  
**Style:** Clean vector scientific illustration; ITL colors (navy #0a253c, teal #008080, blue #2384da); white background.

---

## Part A: Use Existing Images

Wire these hero placeholders to **existing** figures. Image already exists; add `ScientificDiagramPlaceholder` with the `figureId` below.

| Page | Figure ID | Title / Caption |
|------|-----------|------------------|
| `/parkinsons-mouse-models` | `fig-parkinsons-001` | Parkinson's pathway: dopaminergic loss, α-synuclein, Lewy bodies |
| `/als-mouse-models` | `fig-als-001` | ALS: motor neuron degeneration, TDP-43, SOD1, neuromuscular junction |
| `/huntingtons-mouse-models` | `fig-huntingtons-001` | Huntington's: CAG expansion, huntingtin, striatal degeneration |
| `/es-cell-gene-targeting` | `fig-es-targeting-001` | ES cell targeting via homologous recombination |
| `/transgenic-mouse-service` | `fig-tg-vs-ki-001` | Transgenic vs knockin comparison |
| `/conventional-knockout-mouse-models` | `fig-conv-vs-cond-001` | Conventional vs conditional knockout |
| `/tm1a-allele-design` | `fig-tm1a-001` | tm1a knockout-first allele architecture |
| `/knockout-strategy-guide` | `fig-ko-decision-001` | Knockout strategy decision flowchart |
| `/knockout-first-allele` | `fig-tm1a-001` | Knockout-first (tm1a) allele |
| `/strain-selection-guide` | `fig-strain-selection-001` | Strain background selection guide |
| `/reporter-selection-guide` | `fig-reporter-selection-001` | Reporter gene selection guide |
| `/h11-safe-harbor` | `fig-h11-001` | H11 safe harbor locus |
| `/atherosclerosis-mouse-models` | `fig-cardiovascular-001` | Cardiovascular / atherosclerosis mechanisms |
| `/immuno-oncology-mouse-models` | `fig-checkpoint-001` | Immune checkpoint pathway |
| `/ctla4-humanized-mice` | `fig-checkpoint-001` | Immune checkpoint (CTLA-4) |
| `/tim3-humanized-mice` | `fig-checkpoint-001` | Immune checkpoint (TIM3) |
| `/conditional-knockin-mice` | `fig-lsl-ki-001` | LSL conditional knockin |
| `/reporter-knockin` | `fig-reporter-001` | Reporter knockin mechanism |
| `/point-mutation-mice` | `fig-point-mutation-001` | Point mutation knockin |
| `/cre-recombinase-mice` | `fig-cre-lox-001` | Cre-lox recombination |
| `/cdna-knockin` | `fig-cdna-ki-001` | cDNA knockin structure |
| `/cardiovascular-mouse-models` | `fig-cardiovascular-001` | Cardiovascular disease mechanisms |
| `/tissue-specific-knockout` | `fig-tissue-cre-001` | Tissue-specific Cre expression |
| `/diabetes-mouse-models` | `fig-metabolic-001` | Metabolic/diabetes pathways |

---

## Part B: Create New Images

Generate these images from the prompts below. Save as `[figure-id].png` in `/itl-website/public/images/diagrams/`, then add `ScientificDiagramPlaceholder` to the hero.

---

### B1. Type 1 Diabetes
- **Figure ID:** `fig-t1d-001`
- **Page:** `/type-1-diabetes-mice`
- **Caption:** "Fig. 1: Type 1 diabetes involves autoimmune destruction of pancreatic β-cells and loss of insulin production."
- **AI prompt:** "Scientific diagram of type 1 diabetes: pancreas with islets, immune cells (T cells) infiltrating and destroying β-cells, declining insulin secretion. Show autoantibodies, insulitis, and progression to hyperglycemia. Clean immunology/endocrine illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Type 1 diabetes pathogenesis showing β-cell destruction and autoimmunity"

---

### B2. Type 2 Diabetes
- **Figure ID:** `fig-t2d-001`
- **Page:** `/type-2-diabetes-mice`
- **Caption:** "Fig. 1: Type 2 diabetes involves insulin resistance and progressive β-cell dysfunction."
- **AI prompt:** "Scientific diagram of type 2 diabetes: insulin signaling in liver, muscle, adipose; insulin resistance (blunted receptors); β-cell exhaustion and amyloid. Show hyperglycemia, lipid accumulation, and key model targets (leptin, MC4R, GLP-1). Clean metabolic pathway illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Type 2 diabetes mechanisms: insulin resistance and β-cell dysfunction"

---

### B3. Critical Exon Selection
- **Figure ID:** `fig-exon-selection-001`
- **Page:** `/critical-exon-selection`
- **Caption:** "Fig. 1: Critical exon selection criteria ensure complete loss of function for knockout and conditional alleles."
- **AI prompt:** "Scientific diagram showing gene structure with multiple exons; highlight one 'critical' exon (essential, all isoforms, frameshift, early). Show knockout (exon deleted) vs floxed (LoxP flanking exon) outcomes. Criteria callouts: essential for function, all splice variants, frameshift, early in coding. Clean gene-structure illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Critical exon selection for knockout and conditional allele design"

---

### B4. Technology Overview
- **Figure ID:** `fig-technology-overview-001`
- **Page:** `/technology-overview`
- **Caption:** "Fig. 1: Gene targeting technologies enable precise modifications from knockout to knockin and humanization."
- **AI prompt:** "Overview diagram: central 'Gene targeting' hub with branches to ES cell targeting, Cre-lox, FLP-FRT, knockin, knockout, humanization, ROSA26. Simple icons per technology. Clean infographic style. Colors: navy, teal, blue; white background."
- **Alt text:** "Gene targeting technology platform overview"

---

### B5. Cryopreservation
- **Figure ID:** `fig-cryopreservation-001`
- **Page:** `/cryopreservation-services`
- **Caption:** "Fig. 1: Cryopreservation of embryos and sperm preserves valuable mouse lines for long-term archiving."
- **AI prompt:** "Scientific diagram: mouse embryos or sperm in cryovial; freezing curve (slow cool vs vitrification); liquid nitrogen storage; thaw and recovery to live mice. Show freeze–thaw workflow. Clean process illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Cryopreservation workflow for mouse embryos and sperm"

---

### B6. Preclinical Studies
- **Figure ID:** `fig-preclinical-001`
- **Page:** `/preclinical-services`
- **Caption:** "Fig. 1: Preclinical mouse studies bridge in vitro discovery and clinical development."
- **AI prompt:** "Diagram: pipeline from target validation → pharmacokinetics → efficacy (tumor growth, survival) → safety. Include mouse silhouettes, syringes, calipers, histology. Clean preclinical workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Preclinical mouse study workflow from PK to efficacy and safety"

---

### B7. Phenotyping
- **Figure ID:** `fig-phenotyping-001`
- **Page:** `/phenotyping-services`
- **Caption:** "Fig. 1: Comprehensive phenotyping characterizes mouse models across behavior, metabolism, and pathology."
- **AI prompt:** "Diagram showing phenotyping domains: metabolic (GTT, calorimetry, DEXA), behavioral (open field, rotarod), cardiovascular (echo, ECG), imaging (MRI, μCT), histology (H&E, IHC). Icons per domain. Clean illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Mouse model phenotyping: metabolic, behavioral, cardiovascular, imaging"

---

### B8. Rare Disease
- **Figure ID:** `fig-rare-disease-001`
- **Page:** `/rare-disease-mouse-models`
- **Caption:** "Fig. 1: Rare disease mouse models enable mechanism studies and therapy development for genetic disorders."
- **AI prompt:** "Concept diagram: DNA variant → disease pathway → organ involvement (brain, muscle, heart, liver). Include 'gene correction' or 'therapeutic approach' branch. Generic rare-disease schematic. Clean illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Rare disease modeling from genotype to phenotype and therapy"

---

### B9. Mouse Model Services Overview
- **Figure ID:** `fig-services-overview-001`
- **Page:** `/mouse-model-services`
- **Caption:** "Fig. 1: End-to-end mouse model services from design and targeting through breeding and delivery."
- **AI prompt:** "Service pipeline: Design → Targeting → Germline → Breeding → QC → Delivery. Simple flow with icons (strategy, ES cells, chimeras, breeding, shipping). Clean process diagram. Colors: navy, teal, blue; white background."
- **Alt text:** "Mouse model generation and delivery service pipeline"

---

### B10. NASH/MASH
- **Figure ID:** `fig-nash-001`
- **Page:** `/nash-mash-mouse-models`
- **Caption:** "Fig. 1: NASH/MASH models capture steatosis, inflammation, and fibrosis in fatty liver disease."
- **AI prompt:** "Liver diagram: progression from steatosis (lipid droplets) → NASH (inflammatory cells, ballooning) → fibrosis (collagen, stellate cells). Show diet (high-fat) and key genes (PNPLA3, TM6SF2). Clean hepatology illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "NASH/MASH pathogenesis from steatosis to fibrosis"

---

### B11. Autoimmune
- **Figure ID:** `fig-autoimmune-001`
- **Page:** `/autoimmune-disease-mice`
- **Caption:** "Fig. 1: Autoimmune models recapitulate loss of tolerance and organ-specific or systemic inflammation."
- **AI prompt:** "Diagram: central tolerance (thymus) vs peripheral tolerance; breakdown leading to autoreactive T/B cells; target organs (joints, pancreas, skin, gut). Include checkpoint and cytokine pathways. Clean immunology illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Autoimmune disease mechanisms and target organs"

---

### B12. Safe Harbor Overview
- **Figure ID:** `fig-safe-harbor-001`
- **Page:** `/safe-harbor-locus`
- **Caption:** "Fig. 1: Safe harbor loci allow stable transgene expression without disrupting endogenous genes."
- **AI prompt:** "Diagram comparing ROSA26 and H11: chromosome locations, locus structure, common cassettes (CAG, LSL, transgene). Show ubiquitous expression. Clean genomic illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "ROSA26 and H11 safe harbor loci for transgene insertion"

---

### B13. Rapid ROSA26 Targeting
- **Figure ID:** `fig-rosa26-001`
- **Page:** `/rapid-rosa26-targeting`
- **Reuse:** Use existing `fig-rosa26-001`. No new image.

---

### B14. Humanization Strategy Guide
- **Figure ID:** `fig-humanization-001`
- **Page:** `/humanization-strategy-guide`
- **Reuse:** Use existing `fig-humanization-001`. No new image.

---

### B15. GFP Knockin
- **Figure ID:** `fig-gfp-knockin-001`
- **Page:** `/gfp-knockin-mice`
- **Caption:** "Fig. 1: GFP knockins report gene expression and enable live imaging and flow cytometry."
- **AI prompt:** "Diagram: endogenous promoter → GFP coding sequence; cell or tissue with green fluorescence; flow cytometry histogram. Show IRES-GFP or 2A-GFP options. Clean reporter illustration. Colors: navy, teal, green accent; white background."
- **Alt text:** "GFP knockin design and fluorescence detection"

---

### B16. LacZ Knockin
- **Figure ID:** `fig-lacz-knockin-001`
- **Page:** `/lacz-knockin-mice`
- **Caption:** "Fig. 1: LacZ knockins enable histochemical detection of gene expression patterns."
- **AI prompt:** "Diagram: gene–LacZ fusion or IRES-LacZ; X-gal staining (blue) in tissue section; whole-mount stain. Show β-galactosidase reaction. Clean histology-style illustration. Colors: navy, teal, blue stain; white background."
- **Alt text:** "LacZ knockin and X-gal detection of gene expression"

---

### B17. tdTomato Knockin
- **Figure ID:** `fig-tdtomato-knockin-001`
- **Page:** `/tdtomato-knockin-mice`
- **Caption:** "Fig. 1: tdTomato knockins provide bright red fluorescence for lineage tracing and imaging."
- **AI prompt:** "Diagram: tdTomato reporter knockin; red fluorescent cells in tissue; lineage-tracing concept (mother cell → daughters). Clean fluorescent-reporter illustration. Colors: navy, teal, red/orange accent; white background."
- **Alt text:** "tdTomato knockin for lineage tracing and red fluorescence"

---

### B18. FLAG / HA Tag Knockin
- **Figure ID:** `fig-tag-knockin-001`
- **Page:** `/flag-tag-knockin`, `/ha-tag-knockin`
- **Reuse:** Use existing `fig-tag-knockin-001` for both. No new image.

---

### B19. Gene Therapy
- **Figure ID:** `fig-gene-therapy-001`
- **Page:** `/gene-therapy-mouse-models`
- **Caption:** "Fig. 1: Gene therapy models support AAV delivery, gene replacement, and correction studies."
- **AI prompt:** "Diagram: AAV vector with transgene; injection (IV, IM, CNS); transduction of tissue; functional correction (e.g. dystrophin in muscle). Clean gene-therapy workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Gene therapy mouse models: AAV delivery and correction"

---

### B20. Cell Therapy
- **Figure ID:** `fig-cell-therapy-001`
- **Page:** `/cell-therapy-mouse-models`
- **Caption:** "Fig. 1: Cell therapy models enable engraftment and efficacy studies for regenerative approaches."
- **AI prompt:** "Diagram: cell source (iPSC, primary) → expansion → delivery (injection/transplant) → engraftment in target tissue. Generic cell-therapy pipeline. Clean illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Cell therapy mouse models and engraftment workflow"

---

### B21. Epilepsy
- **Figure ID:** `fig-epilepsy-001`
- **Page:** `/epilepsy-mouse-models`
- **Caption:** "Fig. 1: Epilepsy models recapitulate seizures and circuit dysfunction for drug discovery."
- **AI prompt:** "Diagram: brain with hippocampus and cortex; hyperexcitable circuits; EEG trace (seizure); key targets (ion channels, GABA, glutamate). Clean neuroscience illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Epilepsy mechanisms and seizure circuits in mouse models"

---

### B22. Depression / Anxiety
- **Figure ID:** `fig-depression-anxiety-001`
- **Page:** `/depression-anxiety-mouse-models`
- **Caption:** "Fig. 1: Depression and anxiety models assess behavioral and neurobiological endpoints."
- **AI prompt:** "Diagram: brain regions (prefrontal cortex, hippocampus, amygdala); monoamine and neuroplasticity pathways; behavioral assays (forced swim, open field, elevated plus maze). Clean neuroscience/behavior illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Depression and anxiety modeling: circuits and behavior"

---

### B23. Autism
- **Figure ID:** `fig-autism-001`
- **Page:** `/autism-mouse-models`
- **Caption:** "Fig. 1: Autism models target synaptic and circuit genes to study social and repetitive behaviors."
- **AI prompt:** "Diagram: synapse (SHANK, NLGN, etc.); cortical circuits; behavioral domains (social approach, repetitive behavior, communication). Clean neuroscience illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Autism mouse models: synaptic genes and behavior"

---

### B24. Cystic Fibrosis
- **Figure ID:** `fig-cystic-fibrosis-001`
- **Page:** `/cystic-fibrosis-mice`
- **Caption:** "Fig. 1: CF models carry CFTR mutations and replicate lung and gut pathology."
- **AI prompt:** "Diagram: CFTR channel in epithelial cell; defective Cl⁻ transport; thickened mucus, lung infection; gut. Show ΔF508 and other mutations. Clean epithelial/pulmonary illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Cystic fibrosis and CFTR dysfunction in mouse models"

---

### B25. Inflammatory Disease
- **Figure ID:** `fig-inflammatory-001`
- **Page:** `/inflammatory-disease-mice`
- **Caption:** "Fig. 1: Inflammatory disease models target cytokines, innate immunity, and barrier function."
- **AI prompt:** "Diagram: inflammatory cascade (NF-κB, cytokines, immune cells); blood vessel; tissue infiltration. Generic inflammation schematic. Clean immunology illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Inflammatory disease mechanisms and immune targets"

---

### B26. Hypertension
- **Figure ID:** `fig-hypertension-001`
- **Page:** `/hypertension-mouse-models`
- **Caption:** "Fig. 1: Hypertension models target renal, vascular, and neuroendocrine pathways."
- **AI prompt:** "Diagram: kidney (RAAS), blood vessel (vasoconstriction), heart; blood pressure regulation. Key targets: ACE, AGT, endothelin. Clean cardiovascular illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Hypertension pathways: renal, vascular, and cardiac"

---

### B27. Rheumatoid Arthritis
- **Figure ID:** `fig-ra-001`
- **Page:** `/rheumatoid-arthritis-mice`
- **Caption:** "Fig. 1: RA models recapitulate joint inflammation, synovitis, and bone erosion."
- **AI prompt:** "Diagram: joint (synovium, cartilage, bone); immune infiltration; TNF, IL-6, autoantibodies. Show paw swelling and erosion. Clean rheumatology illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Rheumatoid arthritis joint pathology and immune mechanisms"

---

### B28. Lupus
- **Figure ID:** `fig-lupus-001`
- **Page:** `/lupus-mouse-models`
- **Caption:** "Fig. 1: Lupus models exhibit autoantibodies, immune complex deposition, and multi-organ involvement."
- **AI prompt:** "Diagram: anti-nuclear antibodies; immune complexes in kidney (glomerulus), skin, joints; type I IFN, B cells. Clean immunology illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Lupus pathogenesis: autoantibodies and organ involvement"

---

### B29. Allergy / Asthma
- **Figure ID:** `fig-allergy-asthma-001`
- **Page:** `/allergy-asthma-mouse-models`
- **Caption:** "Fig. 1: Allergy and asthma models target Th2 immunity, IgE, and airway inflammation."
- **AI prompt:** "Diagram: airway (epithelium, smooth muscle); allergen; Th2 cells, IgE, mast cells; eosinophils. Show bronchoconstriction and inflammation. Clean respiratory immunology. Colors: navy, teal, blue; white background."
- **Alt text:** "Allergy and asthma: Th2, IgE, and airway inflammation"

---

### B30. Ophthalmology
- **Figure ID:** `fig-ophthalmology-001`
- **Page:** `/ophthalmology-mouse-models`
- **Caption:** "Fig. 1: Ophthalmology models support retinal, corneal, and glaucoma research."
- **AI prompt:** "Diagram: eye cross-section (retina, RPE, optic nerve); key diseases (AMD, glaucoma, diabetic retinopathy); gene targets. Clean eye anatomy illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Ophthalmology mouse models: retina and eye disease"

---

### B31. Heart Failure
- **Figure ID:** `fig-heart-failure-001`
- **Page:** `/heart-failure-mouse-models`
- **Caption:** "Fig. 1: Heart failure models target contractility, hypertrophy, and fibrosis."
- **AI prompt:** "Diagram: heart (cardiomyocytes); hypertrophy, fibrosis, dilatation; key pathways (β-adrenergic, calcium, metabolic). Clean cardiac illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Heart failure mechanisms and cardiac remodeling"

---

### B32. Cardiac Fibrosis
- **Figure ID:** `fig-cardiac-fibrosis-001`
- **Page:** `/cardiac-fibrosis-mice`
- **Caption:** "Fig. 1: Cardiac fibrosis models capture fibroblast activation and extracellular matrix remodeling."
- **AI prompt:** "Diagram: heart section; injured myocardium; fibroblasts, collagen deposition; key signals (TGF-β, Ang II). Clean cardiac pathology illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Cardiac fibrosis and fibroblast activation"

---

### B33. Transgenic Rat
- **Figure ID:** `fig-transgenic-rat-001`
- **Page:** `/transgenic-rat-models`
- **Caption:** "Fig. 1: Transgenic rat models enable random transgene integration for physiology and behavior."
- **AI prompt:** "Diagram: pronuclear injection in rat embryo; random integration; rat silhouette with transgene expression. Compare to mouse where relevant. Clean transgenic workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Transgenic rat model generation and expression"

---

### B34. Knockout / Knockin Rat
- **Figure ID:** `fig-rat-targeting-001`
- **Page:** `/knockout-rat-models`, `/knockin-rat-models`
- **Caption:** "Fig. 1: Gene targeting in rats enables knockout and knockin models for comparative studies."
- **AI prompt:** "Diagram: rat ES cells or zygote editing; targeting vector or CRISPR; knockout/knockin allele; rat with phenotype. Clean rat gene-targeting workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Rat gene targeting for knockout and knockin models"

---

### B35. Support Services
- **Figure ID:** `fig-support-services-001`
- **Page:** `/support-services`
- **Caption:** "Fig. 1: Support services include rederivation, genotyping, breeding, and colony management."
- **AI prompt:** "Diagram: icons for rederivation (clean mouse), genotyping (gel/PCR), breeding (pairs), colony management (cages). Simple service icons in a workflow. Clean infographic. Colors: navy, teal, blue; white background."
- **Alt text:** "Mouse model support services: rederivation, genotyping, breeding"

---

### B36. Rederivation
- **Figure ID:** `fig-rederivation-001`
- **Page:** `/rederivation-services`
- **Caption:** "Fig. 1: Rederivation produces pathogen-free mice from cryopreserved or imported embryos."
- **AI prompt:** "Diagram: embryo transfer from donor to recipient; Cesarean rederivation or IVF; clean colony. Show pathogen-free outcome. Clean process illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Rederivation workflow for pathogen-free mouse lines"

---

### B37. Speed Expansion / Breeding
- **Figure ID:** `fig-speed-expansion-001`
- **Page:** `/speed-expansion-breeding`
- **Caption:** "Fig. 1: Speed expansion uses optimized breeding schemes to rapidly scale cohort production."
- **AI prompt:** "Diagram: breeding pyramid (founders → expansion → cohorts); timeline; circle of paired mice. Clean breeding scheme. Colors: navy, teal, blue; white background."
- **Alt text:** "Speed expansion breeding for rapid cohort production"

---

### B38. Colony Management
- **Figure ID:** `fig-colony-management-001`
- **Page:** `/colony-management-services`
- **Caption:** "Fig. 1: Colony management ensures genetic integrity, health monitoring, and timely weaning."
- **AI prompt:** "Diagram: mouse room/cages; weaning, tagging, record-keeping; health monitoring. Simple colony management icons. Clean illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "Colony management: breeding, weaning, and health monitoring"

---

### B39. Genotyping
- **Figure ID:** `fig-genotyping-001`
- **Page:** `/mouse-genotyping-service`
- **Caption:** "Fig. 1: Genotyping confirms genotype for knockout, knockin, and conditional alleles."
- **AI prompt:** "Diagram: tail biopsy → DNA extraction → PCR → gel or capillary; WT vs Het vs Homo bands. Clean genotyping workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Mouse genotyping workflow from biopsy to genotype call"

---

### B40. Backcrossing
- **Figure ID:** `fig-backcrossing-001`
- **Page:** `/backcrossing-services`
- **Caption:** "Fig. 1: Backcrossing transfers alleles onto desired inbred backgrounds (e.g. C57BL/6)."
- **AI prompt:** "Diagram: N1 → N2 → … → N10; recipient strain (e.g. C57BL/6) vs donor; % recipient genome increasing. Clean backcross scheme. Colors: navy, teal, blue; white background."
- **Alt text:** "Backcrossing scheme for strain background conversion"

---

### B41. Neuroscience
- **Figure ID:** `fig-neuroscience-001`
- **Page:** `/neuroscience-mouse-models`
- **Caption:** "Fig. 1: Neuroscience models span neurodegenerative, psychiatric, and circuit-level research."
- **AI prompt:** "Diagram: brain regions (cortex, hippocampus, striatum, etc.); neuron types; applications (behavior, circuits, disease). Clean neuroscience overview. Colors: navy, teal, blue; white background."
- **Alt text:** "Neuroscience mouse models: brain regions and applications"

---

### B42. Lineage Tracing
- **Figure ID:** `fig-lineage-tracing-001`
- **Page:** `/lineage-tracing-mouse-models`
- **Caption:** "Fig. 1: Lineage tracing uses Cre-lox and reporters to track cell fate and clonal dynamics."
- **AI prompt:** "Diagram: Cre driver + reporter (e.g. Rosa26-tdTomato); single cell or population labeled; progeny all fluorescent. Show lineage tree. Clean lineage-tracing schematic. Colors: navy, teal, red/orange; white background."
- **Alt text:** "Lineage tracing with Cre-lox and fluorescent reporters"

---

### B43. Technologies
- **Figure ID:** `fig-technologies-001`
- **Page:** `/technologies`
- **Caption:** "Fig. 1: Gene targeting technologies enable precise genetic modifications in mice."
- **AI prompt:** "Diagram: DNA double helix; ES targeting, CRISPR, Cre-lox, transgenesis icons; mouse output. Clean technology overview. Colors: navy, teal, blue; white background."
- **Alt text:** "Gene targeting and genome editing technologies"

---

### B44. Pathway Analysis
- **Figure ID:** `fig-pathway-analysis-001`
- **Page:** `/pathway-analysis-mice`
- **Caption:** "Fig. 1: Pathway analysis models dissect signaling cascades and regulatory networks."
- **AI prompt:** "Diagram: simplified signaling pathway (receptor → kinase cascade → transcription); knockout/knockin affecting nodes; phenotypic readout. Clean pathway schematic. Colors: navy, teal, blue; white background."
- **Alt text:** "Pathway analysis using knockout and knockin models"

---

### B45. Gene Function Studies
- **Figure ID:** `fig-gene-function-001`
- **Page:** `/gene-function-studies`
- **Caption:** "Fig. 1: Gene function studies use knockout and knockin models to link genotype to phenotype."
- **AI prompt:** "Diagram: gene → protein → pathway → phenotype; knockout (loss) vs knockin (gain/change); assay readouts. Clean gene-function workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Gene function studies from genotype to phenotype"

---

### B46. Efficacy Testing
- **Figure ID:** `fig-efficacy-001`
- **Page:** `/efficacy-testing-mouse-models`
- **Caption:** "Fig. 1: Efficacy models support therapeutic candidate testing in disease-relevant backgrounds."
- **AI prompt:** "Diagram: disease model + drug treatment; vehicle vs treated (tumor growth, survival, biomarker); dose–response concept. Clean efficacy workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Efficacy testing in disease mouse models"

---

### B47. Target Validation
- **Figure ID:** `fig-target-validation-001`
- **Page:** `/target-validation-mouse-models`
- **Caption:** "Fig. 1: Target validation models confirm therapeutic targets and mechanism in vivo."
- **AI prompt:** "Diagram: target (e.g. kinase, receptor) → genetic modulation (KO/KI) → phenotype; therapeutic hypothesis. Clean target-validation schematic. Colors: navy, teal, blue; white background."
- **Alt text:** "Target validation using genetic mouse models"

---

### B48. Biomarker Discovery
- **Figure ID:** `fig-biomarker-001`
- **Page:** `/biomarker-discovery-mice`
- **Caption:** "Fig. 1: Biomarker discovery models link genotypes and interventions to circulating or imaging biomarkers."
- **AI prompt:** "Diagram: mouse model → intervention → samples (blood, tissue); omics (proteomics, metabolomics); biomarker candidates. Clean biomarker workflow. Colors: navy, teal, blue; white background."
- **Alt text:** "Biomarker discovery in mouse models"

---

### B49. FAST Mice
- **Figure ID:** `fig-fast-mice-001`
- **Page:** `/fast-mice`
- **Caption:** "Fig. 1: FAST mice enable rapid in vivo screening of variants and therapeutic candidates."
- **AI prompt:** "Diagram: multiplexed or rapid screening workflow; many constructs or compounds; mouse cohorts; readout. Clean high-throughput screening schematic. Colors: navy, teal, blue; white background."
- **Alt text:** "FAST mice for rapid in vivo screening"

---

### B50. Antibody Therapeutics
- **Figure ID:** `fig-antibody-therapeutics-001`
- **Page:** `/antibody-therapeutics-mouse-models`
- **Caption:** "Fig. 1: Antibody therapeutic models use humanized targets for PK, efficacy, and safety studies."
- **AI prompt:** "Diagram: humanized mouse (e.g. hPD1); antibody injection; binding to target; tumor or disease readout. Clean immuno-oncology style. Colors: navy, teal, blue; white background."
- **Alt text:** "Antibody therapeutic testing in humanized mouse models"

---

### B51. Research Applications
- **Figure ID:** `fig-research-applications-001`
- **Page:** `/research-applications`
- **Caption:** "Fig. 1: Mouse models support discovery, target validation, and preclinical development."
- **AI prompt:** "Diagram: discovery → validation → preclinical → clinical; mouse icons at each stage. Simple pipeline. Colors: navy, teal, blue; white background."
- **Alt text:** "Research applications of mouse models across R&D pipeline"

---

### B52. Mouse Strain Backgrounds
- **Figure ID:** `fig-strain-backgrounds-001`
- **Page:** `/mouse-strain-backgrounds`
- **Caption:** "Fig. 1: Strain background choice affects immunology, metabolism, and behavior."
- **AI prompt:** "Diagram: C57BL/6, BALB/c, FVB, 129; compare immune, tumor, metabolism, behavior. Mouse silhouettes with strain labels. Clean comparison. Colors: navy, teal, blue; white background."
- **Alt text:** "Mouse strain backgrounds and phenotypic differences"

---

### B53. C57BL/6J vs C57BL/6N
- **Figure ID:** `fig-c57bl6j-vs-n-001`
- **Page:** `/c57bl6j-vs-c57bl6n`
- **Caption:** "Fig. 1: C57BL/6J and C57BL/6N differ at Nnt and other loci, affecting metabolism and phenotypes."
- **AI prompt:** "Diagram: side-by-side 6J vs 6N; Nnt mutation (6J); metabolic and behavioral differences. Clean strain comparison. Colors: navy, teal, blue; white background."
- **Alt text:** "C57BL/6J vs C57BL/6N substrain differences"

---

### B54. HPRT Locus
- **Figure ID:** `fig-hprt-001`
- **Page:** `/hprt-locus-targeting`
- **Caption:** "Fig. 1: HPRT locus targeting enables selectable integration and gene expression studies."
- **AI prompt:** "Diagram: HPRT locus on X chromosome; targeting vector; integration; selection (HAT). Clean gene-targeting illustration. Colors: navy, teal, blue; white background."
- **Alt text:** "HPRT locus targeting for transgene integration"

---

### B55. Request Quote / About / Why Choose
- **Figure ID:** `fig-about-001`
- **Page:** `/request-quote`, `/about-itl`, `/why-choose-itl`
- **Caption:** "Fig. 1: Ingenious Targeting Laboratory supports custom mouse model generation and services."
- **AI prompt:** "Concept diagram: scientist + mouse + DNA/genome; 'Custom mouse models' central; service icons (targeting, breeding, QC). Branded, professional. Colors: navy, teal, blue; white background."
- **Alt text:** "Custom mouse model generation and research support"

---

## Implementation Checklist

1. **Part A:** For each row, add `ScientificDiagramPlaceholder` to the hero with the given `figureId`, matching caption and alt from the tracker.
2. **Part B:** Generate images from prompts → save as `[figure-id].png` in `/itl-website/public/images/diagrams/` → add `ScientificDiagramPlaceholder` to the hero.
3. Remove existing dashed placeholder `div` and `IconImage` usage in each hero.
4. Run build and spot-check hero sections.

---

## Version History

| Date | Changes |
|------|---------|
| 2026-01-24 | Initial list: Part A (reuse existing), Part B (create new with AI prompts). |
