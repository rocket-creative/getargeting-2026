'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import { IconDNA, IconChevronRight, IconLayers, IconSearch } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Glossary",
  title: "Gene Targeting Glossary",
  intro: "A comprehensive reference of technical terminology used in mouse genetics and gene targeting.",
  description: "This glossary covers key concepts in knockout, knockin, conditional, and transgenic mouse model generation to help researchers understand project discussions and scientific literature."
};

// Complete Glossary Terms (60 terms from PDF)
const glossaryTerms = [
  {
    term: "Allele",
    definition: "One of two or more alternative forms of a gene that arise by mutation and are found at the same place on a chromosome. In gene targeting, alleles refer to the modified versions of genes created through targeting strategies.",
    category: "Basic Genetics"
  },
  {
    term: "BAC (Bacterial Artificial Chromosome)",
    definition: "A DNA construct used for cloning large DNA fragments (100-300 kb) in bacteria. BACs are used in gene targeting for large-scale modifications and to maintain regulatory elements.",
    category: "Tools & Vectors"
  },
  {
    term: "Blastocyst",
    definition: "An early-stage embryo (approximately 3.5 days post-fertilization in mice) consisting of an outer cell layer and an inner cell mass. ES cells are injected into blastocysts to generate chimeric mice.",
    category: "Mouse Development"
  },
  {
    term: "Chimera",
    definition: "An organism composed of cells derived from two or more different sources. In gene targeting, chimeric mice contain cells derived from both injected ES cells and the host blastocyst.",
    category: "Mouse Development"
  },
  {
    term: "Coat Color Markers",
    definition: "Visible genetic markers used to identify chimeric mice and track germline transmission. Common markers include agouti, albino, and black coat colors that help distinguish ES cell-derived tissues.",
    category: "Mouse Development"
  },
  {
    term: "Conditional Knockout",
    definition: "A gene targeting strategy where gene inactivation is controlled by a recombinase system, allowing tissue-specific or temporally-controlled gene deletion. Uses loxP sites flanking critical exons.",
    category: "Targeting Strategies"
  },
  {
    term: "Constitutive Knockout",
    definition: "A gene targeting strategy where the target gene is permanently inactivated in all cells throughout development. Also called conventional or global knockout.",
    category: "Targeting Strategies"
  },
  {
    term: "Cre Recombinase",
    definition: "A site-specific recombinase enzyme from bacteriophage P1 that catalyzes recombination between loxP sites. Used in conditional knockout systems to excise DNA sequences flanked by loxP sites.",
    category: "Recombinase Systems"
  },
  {
    term: "Cre-ERT2",
    definition: "A tamoxifen-inducible form of Cre recombinase fused to a modified estrogen receptor. Cre activity is blocked until tamoxifen administration, enabling temporal control of gene deletion.",
    category: "Recombinase Systems"
  },
  {
    term: "CRISPR/Cas9",
    definition: "A genome editing technology using a guide RNA to direct Cas9 nuclease to specific DNA sequences, creating double-strand breaks that enable targeted modifications through cellular repair mechanisms.",
    category: "Tools & Vectors"
  },
  {
    term: "Derivative Allele",
    definition: "Additional allele types generated from a single targeting event through recombinase-mediated modifications. A knockout-first allele can generate both null and conditional alleles.",
    category: "Targeting Strategies"
  },
  {
    term: "Doxycycline-Inducible System",
    definition: "A gene expression control system using the tetracycline transactivator (tTA or rtTA) to regulate gene expression in response to doxycycline administration. Enables reversible gene control.",
    category: "Inducible Systems"
  },
  {
    term: "Electroporation",
    definition: "A technique using electrical pulses to introduce DNA into cells by temporarily creating pores in the cell membrane. Used to deliver targeting vectors into ES cells.",
    category: "Laboratory Techniques"
  },
  {
    term: "Embryonic Stem (ES) Cells",
    definition: "Pluripotent cells derived from the inner cell mass of blastocyst-stage embryos. ES cells can contribute to all tissues including the germline when injected into host blastocysts.",
    category: "Mouse Development"
  },
  {
    term: "Exon",
    definition: "A segment of a gene that contains protein-coding sequences. In gene targeting, critical exons are often deleted or flanked by loxP sites to disrupt gene function.",
    category: "Basic Genetics"
  },
  {
    term: "Floxed Allele",
    definition: "A gene with loxP sites flanking a critical region. The floxed allele functions normally until Cre recombinase excises the flanked region, creating a null allele.",
    category: "Targeting Strategies"
  },
  {
    term: "Flp Recombinase",
    definition: "A site-specific recombinase from yeast that catalyzes recombination between FRT sites. Often used to remove selection cassettes from targeted alleles.",
    category: "Recombinase Systems"
  },
  {
    term: "FRT Site",
    definition: "A 34 base pair DNA sequence recognized by Flp recombinase. FRT sites are used to flank selection cassettes for subsequent removal or to create inducible systems.",
    category: "Recombinase Systems"
  },
  {
    term: "Germline Transmission",
    definition: "The passage of a targeted allele from chimeric mice to their offspring through the germline (sperm or eggs). Confirmed by breeding chimeras and genotyping progeny.",
    category: "Mouse Development"
  },
  {
    term: "Genotyping",
    definition: "The process of determining an organism's genetic makeup at specific loci. PCR-based genotyping is used to identify mice carrying targeted alleles.",
    category: "Laboratory Techniques"
  },
  {
    term: "Global Knockout",
    definition: "A gene inactivation strategy affecting all cells throughout the organism from the earliest developmental stages. Synonymous with constitutive or conventional knockout.",
    category: "Targeting Strategies"
  },
  {
    term: "Heterozygous",
    definition: "Having two different alleles at a particular gene locus, one on each chromosome. Targeted mice are typically first obtained as heterozygotes.",
    category: "Basic Genetics"
  },
  {
    term: "Homologous Recombination",
    definition: "A precise DNA repair mechanism where a sequence is exchanged between two similar DNA molecules. Used in gene targeting to insert modifications at specific genomic locations.",
    category: "Laboratory Techniques"
  },
  {
    term: "Homozygous",
    definition: "Having two identical alleles at a particular gene locus. Homozygous targeted mice are generated by intercrossing heterozygotes.",
    category: "Basic Genetics"
  },
  {
    term: "Humanized Mouse",
    definition: "A mouse model where a mouse gene or genomic region has been replaced with the corresponding human sequence, enabling study of human-specific biology.",
    category: "Model Types"
  },
  {
    term: "Inducible System",
    definition: "A gene regulation system allowing temporal control of gene expression or deletion through administration of an inducing agent such as tamoxifen or doxycycline.",
    category: "Inducible Systems"
  },
  {
    term: "Intron",
    definition: "A non-coding segment of a gene that is transcribed but removed during RNA processing. Selection cassettes are often placed in introns to minimize functional disruption.",
    category: "Basic Genetics"
  },
  {
    term: "Knockin",
    definition: "A gene targeting strategy that inserts a specific DNA sequence at a defined genomic location, such as reporter genes, point mutations, or human sequences.",
    category: "Targeting Strategies"
  },
  {
    term: "Knockout",
    definition: "A gene targeting strategy that inactivates a gene by deleting critical sequences, disrupting the reading frame, or inserting stop sequences.",
    category: "Targeting Strategies"
  },
  {
    term: "Knockout-First Allele",
    definition: "A versatile allele design that functions as a null allele but can be converted to a conditional allele through Flp-mediated recombination.",
    category: "Targeting Strategies"
  },
  {
    term: "LacZ Reporter",
    definition: "A reporter gene encoding β-galactosidase enzyme from E. coli. LacZ expression produces blue color when cells are stained with X-gal substrate.",
    category: "Reporter Systems"
  },
  {
    term: "Lineage Tracing",
    definition: "A technique to track cell populations and their descendants using reporter genes, enabling study of cell fate during development or disease.",
    category: "Research Applications"
  },
  {
    term: "loxP Site",
    definition: "A 34 base pair DNA sequence recognized by Cre recombinase. Two loxP sites in the same orientation enable excision of the flanked sequence; opposite orientations cause inversion.",
    category: "Recombinase Systems"
  },
  {
    term: "Microinjection",
    definition: "A technique to introduce DNA, RNA, or other molecules directly into cells using a fine needle. Used for ES cell injection into blastocysts and pronuclear injection.",
    category: "Laboratory Techniques"
  },
  {
    term: "Neo Cassette",
    definition: "A selection cassette containing the neomycin phosphotransferase gene conferring resistance to G418/neomycin. Used to select ES cells containing the targeted allele.",
    category: "Tools & Vectors"
  },
  {
    term: "Null Allele",
    definition: "An allele that produces no functional gene product. Created by deleting critical exons or introducing premature stop codons.",
    category: "Targeting Strategies"
  },
  {
    term: "Phenotype",
    definition: "The observable characteristics of an organism resulting from the interaction of genotype with the environment. Phenotyping assesses the effects of genetic modifications.",
    category: "Research Applications"
  },
  {
    term: "Point Mutation",
    definition: "A change in a single nucleotide within a gene sequence. Point mutation knockin models introduce specific mutations to study disease mechanisms.",
    category: "Targeting Strategies"
  },
  {
    term: "Positive Selection",
    definition: "Selection for ES cells containing the targeting construct using drug resistance genes (typically neomycin resistance). Only cells with the integrated construct survive selection.",
    category: "Laboratory Techniques"
  },
  {
    term: "Pronuclear Injection",
    definition: "A microinjection technique delivering DNA directly into the pronucleus of a fertilized egg to generate transgenic animals through random integration.",
    category: "Laboratory Techniques"
  },
  {
    term: "Reporter Gene",
    definition: "A gene encoding an easily detectable protein used to visualize gene expression patterns. Common reporters include fluorescent proteins, LacZ, and luciferase.",
    category: "Reporter Systems"
  },
  {
    term: "Rosa26 Locus",
    definition: "A genomic safe harbor locus that supports ubiquitous gene expression without disrupting essential genes. Commonly used for knockin of reporters and transgenes.",
    category: "Tools & Vectors"
  },
  {
    term: "rtTA (Reverse Tetracycline Transactivator)",
    definition: "A transcriptional activator that binds TRE sequences in the presence of doxycycline, enabling Tet-On gene expression systems.",
    category: "Inducible Systems"
  },
  {
    term: "Safe Harbor Locus",
    definition: "A genomic location where transgene insertion does not disrupt essential gene functions and supports stable expression. Rosa26 and Hipp11 are common safe harbors.",
    category: "Tools & Vectors"
  },
  {
    term: "Selection Cassette",
    definition: "A DNA element containing a drug resistance gene used to identify ES cells that have incorporated the targeting vector. Typically flanked by FRT sites for removal.",
    category: "Tools & Vectors"
  },
  {
    term: "Short Homology Arms",
    definition: "DNA sequences (typically 50-500 bp) homologous to the target locus used in CRISPR-based targeting. Shorter than traditional homology arms but effective with nuclease-mediated breaks.",
    category: "Tools & Vectors"
  },
  {
    term: "Southern Blot",
    definition: "A technique to detect specific DNA sequences in genomic DNA using labeled probes. Used to confirm correct targeting and allele structure in ES cells.",
    category: "Laboratory Techniques"
  },
  {
    term: "Strain Background",
    definition: "The genetic background of a mouse strain, affecting phenotype expression. Common backgrounds include C57BL/6, 129, and BALB/c.",
    category: "Mouse Development"
  },
  {
    term: "Tamoxifen",
    definition: "A synthetic estrogen receptor modulator used to activate Cre-ERT2 recombinase. Administration triggers nuclear localization of Cre-ERT2 and gene deletion.",
    category: "Inducible Systems"
  },
  {
    term: "Targeting Vector",
    definition: "A DNA construct containing the desired modification flanked by homology arms, used to introduce changes at specific genomic locations through homologous recombination.",
    category: "Tools & Vectors"
  },
  {
    term: "tdTomato",
    definition: "A bright red fluorescent protein reporter derived from DsRed. Widely used for lineage tracing and cell-type specific labeling due to high brightness.",
    category: "Reporter Systems"
  },
  {
    term: "Tet-Off System",
    definition: "An inducible expression system where gene expression is active in the absence of doxycycline and silenced when doxycycline is present (using tTA).",
    category: "Inducible Systems"
  },
  {
    term: "Tet-On System",
    definition: "An inducible expression system where gene expression is silenced in the absence of doxycycline and activated when doxycycline is present (using rtTA).",
    category: "Inducible Systems"
  },
  {
    term: "Tissue-Specific Expression",
    definition: "Gene expression restricted to specific cell types or tissues, achieved through tissue-specific promoters or Cre driver lines.",
    category: "Targeting Strategies"
  },
  {
    term: "Transgene",
    definition: "An exogenous gene introduced into an organism's genome. Transgenes may integrate randomly (pronuclear injection) or at specific sites (targeted insertion).",
    category: "Model Types"
  },
  {
    term: "Transgenic Mouse",
    definition: "A mouse carrying an exogenous DNA sequence integrated into its genome. Can be generated by pronuclear injection or targeted knockin approaches.",
    category: "Model Types"
  },
  {
    term: "TRE (Tetracycline Response Element)",
    definition: "A DNA element containing tetO sequences recognized by tetracycline transactivators. Placed upstream of genes for doxycycline-controlled expression.",
    category: "Inducible Systems"
  },
  {
    term: "tTA (Tetracycline Transactivator)",
    definition: "A transcriptional activator that binds TRE sequences in the absence of tetracycline/doxycycline, enabling Tet-Off gene expression systems.",
    category: "Inducible Systems"
  },
  {
    term: "Wild-Type",
    definition: "The naturally occurring, non-mutant form of a gene or organism. Used as a control for comparison with targeted alleles.",
    category: "Basic Genetics"
  },
  {
    term: "Zygote",
    definition: "A fertilized egg cell before the first cell division. Pronuclear injection targets the zygote stage for transgene delivery.",
    category: "Mouse Development"
  }
];

// Get all unique categories
const categories = [...new Set(glossaryTerms.map(t => t.category))].sort();

// CTA Data
const ctaData = {
  title: "Need Help Understanding Your Project?",
  description: "Our scientific consultants can explain technical concepts and help you understand the best approach for your research goals.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function GlossaryPage() {
  const animatedElementsRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const heroElements = document.querySelectorAll('.hero-animate');
      heroElements.forEach((el, index) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power2.out" }
        );
      });

      const animatedElements = document.querySelectorAll('.animate-in');
      animatedElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    };

    initGSAP();
  }, []);

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group filtered terms by first letter
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "name": "Gene Targeting Glossary",
            "description": "Technical terminology reference for gene targeting and mouse genetics including knockout, knockin, conditional, and transgenic mouse model terms.",
            "publisher": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory",
              "url": "https://www.genetargeting.com"
            }
          })
        }}
      />
      <UXUIDCNavigation />
      <main ref={animatedElementsRef}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
          padding: '80px 20px 60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05
          }}>
            <div style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #00d4d4 0%, transparent 70%)',
              top: '-200px',
              right: '-200px'
            }} />
          </div>
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="hero-animate" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,212,212,0.15)',
              border: '1px solid rgba(0,212,212,0.3)',
              borderRadius: '20px',
              padding: '6px 14px',
              marginBottom: '20px'
            }}>
              <IconLayers size={14} color="#00d4d4" />
              <span style={{ color: '#00d4d4', fontSize: '.85rem', fontWeight: 500 }}>{heroData.badge}</span>
            </div>
            <h1 className="hero-animate" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2.8rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              {heroData.title}
            </h1>
            <p className="hero-animate" style={{
              fontSize: '1rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '16px',
              lineHeight: 1.7,
              maxWidth: '800px'
            }}>
              {heroData.intro}
            </p>
            <p className="hero-animate" style={{
              fontSize: '.9rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '30px',
              lineHeight: 1.7,
              maxWidth: '800px'
            }}>
              {heroData.description}
            </p>
            <div className="hero-animate" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/resources" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                Back to Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section style={{ background: '#ffffff', padding: '40px 20px', borderBottom: '1px solid #e0e0e0', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Search Box */}
              <div style={{ position: 'relative', flex: '1', minWidth: '300px', maxWidth: '500px' }}>
                <IconSearch size={18} color="#666" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search terms or definitions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 44px',
                    fontSize: '.9rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    outline: 'none'
                  }}
                />
              </div>
              
              {/* Category Filter */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSelectedCategory(null)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '.85rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '20px',
                    background: selectedCategory === null ? '#008080' : '#ffffff',
                    color: selectedCategory === null ? '#ffffff' : '#666',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: '8px 16px',
                      fontSize: '.85rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '20px',
                      background: selectedCategory === category ? '#008080' : '#ffffff',
                      color: selectedCategory === category ? '#ffffff' : '#666',
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Results count */}
            <div style={{ marginTop: '16px', fontSize: '.85rem', color: '#666' }}>
              Showing {filteredTerms.length} of {glossaryTerms.length} terms
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section style={{ background: '#f7f7f7', padding: '20px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => {
                const hasTerms = groupedTerms[letter]?.length > 0;
                return (
                  <a
                    key={letter}
                    href={hasTerms ? `#letter-${letter}` : undefined}
                    style={{
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '.85rem',
                      fontWeight: 600,
                      borderRadius: '4px',
                      background: hasTerms ? '#008080' : '#e0e0e0',
                      color: hasTerms ? '#ffffff' : '#999',
                      textDecoration: 'none',
                      cursor: hasTerms ? 'pointer' : 'default'
                    }}
                  >
                    {letter}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Glossary Terms Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {sortedLetters.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <IconDNA size={48} color="#e0e0e0" />
                <p style={{ fontSize: '1rem', color: '#666', marginTop: '20px' }}>
                  No terms found matching your search criteria.
                </p>
              </div>
            ) : (
              sortedLetters.map(letter => (
                <div key={letter} id={`letter-${letter}`} style={{ marginBottom: '48px', scrollMarginTop: '180px' }}>
                  <h2 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#008080',
                    marginBottom: '24px',
                    paddingBottom: '12px',
                    borderBottom: '3px solid #00d4d4'
                  }}>
                    {letter}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {groupedTerms[letter].map((item, index) => (
                      <div key={index} className="animate-in" style={{
                        background: '#f7f7f7',
                        borderRadius: '8px',
                        padding: '24px',
                        borderLeft: '4px solid #008080'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '12px' }}>
                          <h3 style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#333',
                            margin: 0
                          }}>
                            {item.term}
                          </h3>
                          <span style={{
                            fontSize: '.75rem',
                            fontWeight: 600,
                            color: '#008080',
                            background: 'rgba(0,128,128,0.1)',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            whiteSpace: 'nowrap'
                          }}>
                            {item.category}
                          </span>
                        </div>
                        <p style={{
                          fontSize: '.9rem',
                          color: '#666',
                          lineHeight: 1.7,
                          margin: 0
                        }}>
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ background: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              {ctaData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px',
              lineHeight: 1.7
            }}>
              {ctaData.description}
            </p>
            <div className="animate-in" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link href={ctaData.primaryButton.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#008080',
                padding: '14px 28px',
                borderRadius: '6px',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                {ctaData.primaryButton.label}
                <IconChevronRight size={16} color="#008080" />
              </Link>
              <Link href={ctaData.secondaryButton.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '6px',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                {ctaData.secondaryButton.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Related Resources
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { href: "/knockout-strategy-guide", label: "Knockout Strategy Guide" },
                { href: "/conditional-vs-conventional-guide", label: "Conditional vs Conventional" },
                { href: "/cre-lox-system", label: "Cre-Lox System" },
                { href: "/resources", label: "All Resources" }
              ].map((link, index) => (
                <Link key={index} href={link.href} className="animate-in" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  padding: '12px 20px',
                  fontSize: '.9rem',
                  color: '#008080',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}>
                  <IconChevronRight size={14} color="#008080" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <UXUIDCFooter />
    </>
  );
}
