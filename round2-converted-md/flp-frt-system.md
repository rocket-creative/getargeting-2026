FLP FRT System | Site Specific Recombination | Ingenious Targeting Laboratory

Url: /flp-frt-system
Meta Description: FLP FRT recombination system for conditional gene targeting. Alternative to Cre lox for tissue specific and inducible gene control.
Primary Keyword: flp frt system
Word Count: 1500

FLP FRT System
Since 1998, ingenious targeting laboratory has utilized the FLP FRT recombination system in hundreds of gene targeting projects, providing researchers with versatile tools for selection cassette removal, conditional gene expression, and sophisticated allele conversion strategies.
The FLP FRT system offers an orthogonal recombination platform that complements Cre lox technology, enabling complex genetic manipulations including dual recombinase strategies, sequential allele conversion, and intersectional approaches for precise genetic control.
Understanding the FLP FRT System
The FLP FRT system is a site specific recombinase system derived from Saccharomyces cerevisiae (yeast) that parallels the Cre lox system in function but recognizes distinct target sequences.
System Components
FLP Recombinase
FLP (flippase) is a member of the integrase family of recombinases originally identified in the 2 micron plasmid of S. cerevisiae. FLP catalyzes recombination between FRT sites with high efficiency.
FRT Sites
FRT (flippase recognition target) sites are 34 bp sequences containing two 13 bp inverted repeats flanking an 8 bp asymmetric core. The core sequence determines directionality of recombination.
Recombination Outcomes
Like Cre lox, FLP FRT recombination outcomes depend on FRT orientation:
Parallel FRT Sites
FRT sites in the same orientation result in excision of intervening sequences. The sequences between the FRT sites are deleted, leaving a single FRT site.
Antiparallel FRT Sites
FRT sites in opposite orientation result in inversion of intervening sequences rather than deletion.
Intermolecular Recombination
FRT sites on different molecules can recombine, enabling integration or translocation events.
Applications of the FLP FRT System
Selection Cassette Removal
The most common application of FLP FRT in gene targeting:
FRT Flanked Cassettes
Selection cassettes (Neomycin, Hygromycin) are flanked by FRT sites during vector construction. After ES cell selection and mouse generation, FLP recombinase removes the cassette.
Avoiding Cassette Effects
Selection cassettes can influence expression of nearby genes or produce hypomorphic alleles. FLP mediated removal eliminates these confounding effects.
Clean Conditional Alleles
After FLP removal, only loxP sites remain flanking the target exon, producing clean conditional alleles ready for Cre mediated deletion.
Derivative Allele Conversion
FLP FRT is essential to the knockout first allele strategy:
tm1a to tm1c Conversion
The knockout first (tm1a) allele contains FRT sites flanking the LacZ Neo cassette. FLP recombination removes this cassette, converting to tm1c (conditional ready) with restored gene function.
Pathway:
tm1a (knockout first) → FLP → tm1c (conditional ready) → Cre → tm1d (conditional null)
This flexibility enables generation of multiple allele types from a single targeted ES cell line.
(/derivative-alleles)
Dual Recombinase Strategies
FLP and Cre can be used together for sophisticated genetic control:
Sequential Recombination
First FLP mediated cassette removal, then Cre mediated conditional deletion. This enables generation of clean conditional alleles that can be subsequently deleted in specific tissues or times.
Intersectional Approaches
Combined FLP and Cre expression restricts gene manipulation to cells expressing both recombinases, enabling more precise cellular targeting than either system alone.
Conditional Rescue
FLP mediated activation of gene expression in Cre defined cell populations enables rescue of cell type specific knockouts.
Gene Expression Control
FLP FRT enables conditional gene expression:
FRT Stop FRT Cassettes
Transcriptional stop cassettes flanked by FRT sites block downstream gene expression until FLP is provided.
Tissue Specific Activation
Crossing to FLP expressing driver lines activates gene expression in specific tissues.
Reporter Activation
FLP dependent reporter activation enables lineage tracing and cell population marking.
FLP FRT vs Cre Lox
Both systems offer site specific recombination, but have distinct characteristics:
Feature
FLP FRT
Cre Lox
**Origin**
Yeast 2 micron plasmid
Bacteriophage P1
**Recognition site**
34 bp FRT
34 bp loxP
**Temperature optimum**
30°C (wild type)
37°C
**Driver availability**
Limited
Extensive catalog
**Primary use**
Cassette removal
Conditional deletion
**Toxicity**
Minimal
Possible at high levels
Practical Considerations
Temperature Sensitivity
Wild type FLP has reduced activity at 37°C (mammalian body temperature). Enhanced FLP variants (FLPe, FLPo) provide improved efficiency at physiological temperature.
Driver Availability
Far fewer tissue specific FLP driver lines exist compared to Cre drivers. This limits FLP utility for tissue specific studies but makes it ideal for cassette removal where ubiquitous expression is acceptable.
Orthogonality
FLP and Cre are completely orthogonal. FLP does not recognize loxP sites, and Cre does not recognize FRT sites. This enables independent use in the same animal.
FLP Variants
Several FLP variants offer improved performance:
FLPe (Enhanced FLP)
Improved Thermostability
FLPe contains four point mutations that improve protein stability at 37°C, providing approximately 4 fold higher recombination efficiency at mammalian body temperature.
Standard Choice
FLPe is the most commonly used variant for mouse work due to balanced efficiency and low toxicity.
FLPo (Optimized FLP)
Codon Optimization
FLPo is codon optimized for mammalian expression, providing improved translation efficiency.
Highest Efficiency
Combined with FLPe mutations, FLPo provides the highest recombination efficiency.
Inducible FLP
Tamoxifen Inducible
FlpERT2 provides temporal control of FLP activity through tamoxifen administration, enabling timed cassette removal or gene activation.
FLP Driver Lines
Germline FLP Expression
For cassette removal, germline FLP expression is typically used:
ActFLPe
Ubiquitous FLPe expression from the beta actin promoter. Single cross to ActFLPe removes FRT flanked cassettes in the germline.
Rosa26 FLPe
FLPe knocked into the Rosa26 locus provides ubiquitous expression for cassette removal.
Germline Transmission
After crossing to FLP driver, screen offspring for cassette removal. Cassette removed alleles are inherited independently of the FLP driver.
Tissue Specific FLP
Limited tissue specific FLP drivers are available:
Neural Specific
Nestin FLP, Syn FLP, and other neural drivers for brain specific recombination.
Other Tissues
Fewer options than Cre drivers, limiting FLP utility for tissue specific primary manipulation.
Allele Design Incorporating FRT Sites
Standard FRT Flanked Cassette
The typical selection cassette configuration:
```
5' arm — loxP — FRT — SA — LacZ — pA — Neo — FRT — loxP — 3' arm
```
Components:

	•	SA**: Splice acceptor captures endogenous transcription
	•	LacZ**: Reporter for expression monitoring
	•	pA**: Polyadenylation signal terminates transcription
	•	Neo**: Neomycin resistance for ES cell selection
	•	FRT sites**: Enable cassette removal by FLP
	•	loxP sites**: Remain after FLP removal for conditional deletion
Self Excising Cassettes
Some applications use cassettes that remove themselves:
Developmental Excision
Testes specific promoters driving FLP remove cassettes during spermatogenesis, producing cassette free offspring without need for FLP crosses.
Advantages
Reduces breeding requirements and ensures all germline transmitted alleles lack the cassette.
ITL's Approach to FLP FRT
Standard Allele Architecture
ITL designs knockout first alleles with FRT flanked cassettes:
Flexibility
Single targeted generates multiple allele types through recombinase crosses.
Reporter Function
Reporter cassettes enables expression analysis before and after cassette removal.
Clean Conditional
After FLP mediated cassette removal, clean conditional alleles contain only loxP sites.
Functional Testing
Transient FLP expression in ES cells can verify recombination competence before mouse generation.
Selected Publications
Recent publications demonstrate applications of FLP FRT technology in mouse genetics:
The FLP FRT system is widely used in conjunction with conditional allele strategies documented throughout the scientific literature.
(/publications)
What Researchers Say
"The Hephaestin flox model has been so successful that our colony has recently expanded to different laboratories, generating eight research publications thus far."

— **Joshua Dunaief, MD, PhD**, University of Pennsylvania
(/testimonials)
FLP FRT System Applications
The FLP FRT system is particularly valuable when multiple recombinase systems are needed in the same model. Researchers can use Cre lox for one gene and FLP FRT for another, enabling complex genetic manipulations that would be difficult with a single system.
FLP FRT is also useful when Cre expression patterns overlap with your target gene expression, allowing you to use FLP for conditional control instead. This flexibility makes FLP FRT an important tool in the conditional gene targeting toolkit.
FLP FRT vs Cre Lox
While Cre lox is more commonly used, FLP FRT offers advantages in specific applications. FLP recombinase activity can be more tightly controlled in some contexts, and the system provides an alternative when Cre driver lines are not suitable for your research needs.
Our scientific consultants can help you determine whether FLP FRT, Cre lox, or a combination approach best meets your experimental requirements.
Related Technologies
	•	(/cre-lox-system)
	•	(/derivative-alleles)
	•	(/es-cell-gene-targeting)
	•	(/inducible-conditional-knockout)
Related Model Types
	•	(/conditional-knockout-mouse-models)
	•	(/knockin-mouse-models)
	•	(/reporter-knockin)
Related Guides
	•	(/conditional-vs-conventional-guide)
	•	(/knockout-strategy-guide)
Frequently Asked Questions
When should I use FLP-FRT instead of Cre-lox?
FLP-FRT is primarily used for removal of FRT-flanked selection cassettes from knockout-first alleles (tm1a to tm1c conversion), enabling generation of clean conditional alleles. FLP can also be used in dual recombinase experiments where independent control of Cre and FLP modifications is needed.
How does FLP recombination efficiency compare to Cre?
FLP recombinase activity is generally efficient but may vary by target locus and driver strength, similar to Cre. FLP activity works well at 37°C in mammalian cells. For cassette removal applications, germline FLP expression (ActFLPe or Rosa26-FLPe) provides efficient removal in offspring.
Can FLP-FRT be combined with Cre-lox in the same model?
Yes. Dual recombinase designs use both FRT (for FLP) and loxP (for Cre) sites, enabling independent control. For example, FLP removes FRT-flanked cassettes to generate clean conditional alleles, then Cre controls gene deletion. This sequential use enables flexible allele architecture from knockout-first designs.
What FLP driver lines are available?
Germline FLP expression lines include ActFLPe (ubiquitous from beta-actin promoter) and Rosa26-FLPe (ubiquitous from Rosa26 locus). Tissue-specific FLP drivers are more limited than Cre drivers. Nestin-FLP and Syn-FLP provide neural-specific recombination, but fewer options exist for other tissues.
(/request-quote)
