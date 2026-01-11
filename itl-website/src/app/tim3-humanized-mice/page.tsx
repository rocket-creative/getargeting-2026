'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { UXUIDCNavigation } from '@/components/UXUIDC/Navigation';
import { UXUIDCFooter } from '@/components/UXUIDC/Footer';
import { UXUIDCAnimatedFAQ } from '@/components/UXUIDC/AnimatedFAQ';
import { UXUIDCAnimatedCounter } from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconImage, IconQuote, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Immune Checkpoint Models",
  title: "TIM3 Humanized Mouse Models",
  intro: "Since 1998, Ingenious Targeting Laboratory has supported immuno oncology research with humanized immune checkpoint models including TIM3 humanized mice that enable direct preclinical evaluation of clinical anti TIM3 antibody candidates and next generation combination checkpoint blockade strategies.",
  description: "TIM3 humanized mice express human TIM3 (HAVCR2) protein on T cells and other immune populations, enabling testing of human specific therapeutic antibodies in immunocompetent animals with intact tumor immunity. These models are essential for evaluating the emerging class of anti TIM3 therapeutics in development."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// TIM3 Biology Items
const tim3BiologyItems = [
  {
    name: "T Cell Expression",
    description: "TIM3 is upregulated on activated and exhausted T cells. Co expression of TIM3 with PD1 marks the most dysfunctional T cell population in chronic infection and cancer."
  },
  {
    name: "Innate Immune Cell Expression",
    description: "TIM3 is constitutively expressed on macrophages, dendritic cells, and mast cells, regulating their inflammatory responses."
  },
  {
    name: "NK Cell Expression",
    description: "TIM3 is expressed on natural killer cells and can inhibit their cytotoxic function."
  }
];

// TIM3 Ligands
const tim3Ligands = [
  { ligand: "Galectin 9", description: "Carbohydrate binding protein that triggers TIM3 mediated T cell death" },
  { ligand: "Phosphatidylserine", description: "TIM3 binds phosphatidylserine on apoptotic cells, contributing to clearance" },
  { ligand: "CEACAM1", description: "Carcinoembryonic antigen related cell adhesion molecule 1 binds TIM3 and promotes T cell exhaustion" },
  { ligand: "HMGB1", description: "High mobility group box 1 binding to TIM3 on dendritic cells interferes with nucleic acid sensing" }
];

// Clinical Antibodies
const clinicalAntibodies = [
  { name: "Cobolimab (TSR 022)", description: "Anti TIM3 antibody in combination trials with anti PD1" },
  { name: "Sabatolimab (MBG453)", description: "Anti TIM3 antibody being evaluated in hematologic malignancies and solid tumors" },
  { name: "Additional Candidates", description: "Multiple other anti TIM3 antibodies are in early clinical development" }
];

// Humanization Strategies
const humanizationStrategies = [
  {
    name: "Endogenous Regulatory Control",
    description: "Human TIM3 expressed from the native mouse promoter maintains physiological expression patterns."
  },
  {
    name: "Functional Preservation",
    description: "The humanized allele preserves TIM3 function on T cells, NK cells, and myeloid populations."
  },
  {
    name: "Extracellular Domain Humanization",
    description: "Humanization of the extracellular domain provides human epitopes for antibody binding."
  }
];

// Design Considerations
const designConsiderations = [
  {
    name: "Expression on Multiple Cell Types",
    description: "TIM3 is expressed on T cells, NK cells, dendritic cells, and macrophages. Humanization should preserve expression across these populations."
  },
  {
    name: "Ligand Binding",
    description: "Consider whether human TIM3 appropriately binds mouse galectin 9 and other ligands."
  },
  {
    name: "Signaling Compatibility",
    description: "Mouse intracellular domains may be retained for compatibility with mouse signaling machinery."
  }
];

// Applications
const monotherapyApplications = [
  { name: "Syngeneic Tumor Models", description: "TIM3 humanized mice combined with syngeneic tumors enable efficacy assessment" },
  { name: "Dose Response", description: "Establish pharmacologically relevant dosing for clinical candidates" },
  { name: "Target Engagement", description: "Measure antibody binding to TIM3 positive cells in tumor and lymphoid tissues" }
];

const combinationApplications = [
  { name: "TIM3 plus PD1", description: "The most common combination under investigation. Dual humanized models expressing both human TIM3 and human PD1 enable testing" },
  { name: "TIM3 plus LAG3", description: "Alternative checkpoint combinations" },
  { name: "Triple Combinations", description: "TIM3 plus PD1 plus CTLA4 or other three way combinations" }
];

const exhaustionStudies = [
  { name: "Exhaustion Reversal", description: "Assess whether TIM3 blockade reinvigorates exhausted T cells" },
  { name: "Combination Effects", description: "Evaluate synergy with PD1 blockade in reversing exhaustion" },
  { name: "Phenotypic Analysis", description: "Characterize changes in exhaustion markers following TIM3 blockade" }
];

// Multi Checkpoint Models
const dualModels = [
  { combination: "TIM3 plus PD1", application: "Both checkpoints humanized for testing emerging combinations" },
  { combination: "TIM3 plus LAG3", application: "For alternative combination studies" }
];

const tripleModels = [
  { combination: "TIM3 plus PD1 plus LAG3", application: "Triple humanization for comprehensive checkpoint blockade studies" },
  { combination: "TIM3 plus PD1 plus CTLA4", application: "Alternative triple combination" }
];

// Tumor Models
const tumorModels = [
  { model: "MC38 Colon Carcinoma", description: "Commonly used for checkpoint studies" },
  { model: "B16 Melanoma", description: "Relevant for melanoma immunotherapy" },
  { model: "CT26 Colon Carcinoma", description: "BALB/c compatible option" }
];

// Validation Steps
const validationSteps = [
  { step: "Surface Expression", description: "Flow cytometry for human TIM3 on T cells, NK cells, and myeloid populations" },
  { step: "Inducible Expression", description: "TIM3 upregulation following T cell activation" },
  { step: "Antibody Binding", description: "Clinical candidates bind to humanized TIM3" }
];

// Phenotyping Endpoints
const immuneCharacterization = [
  { test: "T Cell Populations", description: "Flow cytometry for CD4, CD8 T cells with TIM3 and PD1 co staining" },
  { test: "Exhaustion Phenotype", description: "TIM3/PD1 double positive cells represent exhausted population" },
  { test: "NK Cell Expression", description: "TIM3 on NK cells" },
  { test: "Myeloid Expression", description: "TIM3 on dendritic cells and macrophages" }
];

// Publications
const publications = [
  {
    authors: "Chen C et al.",
    year: "2024",
    title: "Soluble Tim 3 serves as a tumor prognostic marker and therapeutic target for CD8 T cell exhaustion and anti PD1 resistance",
    journal: "Cell Reports Medicine"
  },
  {
    authors: "Soltantoyeh T et al.",
    year: "2024",
    title: "Simultaneous targeting of Tim3 and A2a receptors modulates MSLN CAR T cell antitumor function in a human cervical tumor xenograft model",
    journal: "Frontiers in Immunology"
  }
];

// Testimonials
const testimonials = [
  {
    quote: "The quality of service was exceptional. Your team went above and beyond to ensure that all aspects of the project were completed to the highest possible standards.",
    author: "Albert Basson, PhD",
    affiliation: "King's College London"
  },
  {
    quote: "I've been working with iTL over the past 5 years in the production of 3 different genetically altered mice. Not only did iTL help in the design of the mice, but the entire process was transparent with the opportunity at any time along the way to discuss my questions or concerns with scientists who had significant insight into the process. The mice were delivered on time, as billed!",
    author: "Raghu Mirmira, MD/PhD",
    affiliation: "University of Chicago"
  }
];

// Related Links
const relatedModels = [
  { title: "PD1 Humanized Mice", href: "/pd1-humanized-mice" },
  { title: "PDL1 Humanized Mice", href: "/pdl1-humanized-mice" },
  { title: "CTLA4 Humanized Mice", href: "/ctla4-humanized-mice" },
  { title: "LAG3 Humanized Mice", href: "/lag3-humanized-mice" },
  { title: "Humanized Mouse Models", href: "/humanized-mouse-models" }
];

const relatedAreas = [
  { title: "Immuno Oncology Mouse Models", href: "/immuno-oncology-mouse-models" },
  { title: "Oncology Mouse Models", href: "/oncology-mouse-models" },
  { title: "Antibody Therapeutics Models", href: "/antibody-therapeutics-mouse-models" }
];

const relatedTechnologies = [
  { title: "ES Cell Gene Targeting", href: "/es-cell-gene-targeting" },
  { title: "Knockin Mouse Models", href: "/knockin-mouse-models" }
];

// FAQ Data
const faqData = [
  {
    question: "What is the difference between full humanization and ECD only humanization for TIM3?",
    answer: "Full humanization replaces the entire mouse TIM3 (Havcr2) gene with human TIM3 (HAVCR2) sequence. ECD only humanization replaces only the extracellular domain while retaining mouse transmembrane and cytoplasmic domains. Full humanization is preferred for antibody testing; ECD only may preserve some mouse signaling functions."
  },
  {
    question: "Can TIM3 humanized mice be combined with other checkpoint humanizations?",
    answer: "Yes. TIM3 humanization can be combined with PD1, PDL1, CTLA4, LAG3, or other checkpoint humanizations to create double, triple, or multi checkpoint models. Common combinations include TIM3+PD1 and TIM3+LAG3 for combination checkpoint blockade studies targeting exhausted T cells."
  },
  {
    question: "Can TIM3 humanized mice be used with syngeneic tumor models?",
    answer: "Yes. TIM3 humanized mice can be combined with syngeneic tumor cell lines (MC38, B16, LLC) to create systems where both tumor and immune compartments express human targets. This enables evaluation of checkpoint blockade in immunocompetent animals with intact tumor immunity, providing more physiologically relevant testing."
  }
];

export default function TIM3HumanizedMicePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (heroRef.current) {
        const heroElements = heroRef.current.querySelectorAll('.hero-animate');
        gsap.fromTo(heroElements,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
        );
      }

      const animatedElements = document.querySelectorAll('.animate-in');
      animatedElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    };

    loadGSAP();
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />

      <main id="main-content">
        {/* Hero Section */}
        <section
          ref={heroRef}
          style={{
            background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)',
            padding: '80px 20px 60px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="hero-animate"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    marginBottom: '20px'
                  }}
                >
                  <IconTarget size={16} color="white" />
                  <span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>{heroData.badge}</span>
                </div>

                <h1
                  className="hero-animate"
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2.8rem',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: '20px'
                  }}
                >
                  {heroData.title}
                </h1>

                <p
                  className="hero-animate"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    lineHeight: '1.7rem',
                    marginBottom: '15px'
                  }}
                >
                  {heroData.intro}
                </p>

                <p
                  className="hero-animate"
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.6rem',
                    marginBottom: '25px'
                  }}
                >
                  {heroData.description}
                </p>

                <div className="hero-animate flex flex-wrap gap-4">
                  <Link
                    href="/request-quote"
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundColor: 'white',
                      color: '#0a253c',
                      padding: '10px 20px',
                      minWidth: '160px',
                      fontSize: '.85rem',
                      fontWeight: 500
                    }}
                  >
                    <span>Request a Quote</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                      padding: '10px 20px',
                      minWidth: '160px',
                      border: '2px solid white',
                      fontSize: '.85rem',
                      fontWeight: 500
                    }}
                  >
                    <span>Talk to a Scientist</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="hero-animate">
                <div style={{
                  border: '2px dashed rgba(255,255,255,0.4)',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.05)'
                }}>
                  <IconImage size={60} color="rgba(255,255,255,0.4)" />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>TIM3 Humanized Model Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ backgroundColor: '#0a253c', padding: '30px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700 }}>
                    <UXUIDCAnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.85rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIM3 in Cancer Immunotherapy */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              TIM3 in Cancer Immunotherapy
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              T cell immunoglobulin and mucin domain containing 3 (TIM3, also known as HAVCR2) is an immune checkpoint receptor under active clinical development, with multiple anti TIM3 antibodies in trials for various malignancies.
            </p>

            <h3 className="animate-in" style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
              TIM3 Biology
            </h3>
            <p className="animate-in" style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '20px' }}>
              TIM3 is expressed on multiple immune cell populations and contributes to immune regulation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {tim3BiologyItems.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                  <h4 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {item.name}
                  </h4>
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIM3 Ligands */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h3 className="animate-in" style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
              TIM3 Ligands
            </h3>
            <p className="animate-in" style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '25px' }}>
              TIM3 has multiple ligands affecting its function:
            </p>

            <div className="animate-in" style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0a253c' }}>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Ligand</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontWeight: 600 }}>Function</th>
                  </tr>
                </thead>
                <tbody>
                  {tim3Ligands.map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '15px', color: '#008080', fontWeight: 600 }}>{item.ligand}</td>
                      <td style={{ padding: '15px', color: '#555' }}>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Clinical Anti TIM3 Antibodies */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h3 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
              Clinical Anti TIM3 Antibodies
            </h3>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '25px' }}>
              Multiple anti TIM3 antibodies are in clinical development:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {clinicalAntibodies.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {item.name}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
              <h4 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                Species Specificity
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                Clinical anti TIM3 antibodies are designed for human TIM3 and typically do not cross react with mouse Tim3, necessitating humanized models for preclinical evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* TIM3 Humanization Strategies */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              TIM3 Humanization Strategies
            </h2>

            <h3 className="animate-in" style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
              Complete Gene Replacement
            </h3>
            <p className="animate-in" style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '25px' }}>
              Full replacement of mouse Havcr2 with human HAVCR2 (TIM3) coding sequences:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {humanizationStrategies.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                  <h4 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {item.name}
                  </h4>
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="animate-in" style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px' }}>
              Design Considerations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {designConsiderations.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderTop: '4px solid #2384da' }}>
                  <h4 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {item.name}
                  </h4>
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Applications of TIM3 Humanized Mice
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Monotherapy Evaluation */}
              <div className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Monotherapy Evaluation
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {monotherapyApplications.map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <span style={{ color: 'white', fontWeight: 600, fontSize: '.9rem' }}>{item.name}:</span>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', marginLeft: '5px' }}>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Combination Checkpoint Blockade */}
              <div className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Combination Checkpoint Blockade
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {combinationApplications.map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <span style={{ color: 'white', fontWeight: 600, fontSize: '.9rem' }}>{item.name}:</span>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', marginLeft: '5px' }}>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* T Cell Exhaustion Studies */}
              <div className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  T Cell Exhaustion Studies
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exhaustionStudies.map((item, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <span style={{ color: 'white', fontWeight: 600, fontSize: '.9rem' }}>{item.name}:</span>
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', marginLeft: '5px' }}>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Multi Checkpoint Humanized Models */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Multi Checkpoint Humanized Models
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '25px' }}>
              Combination checkpoint approaches require models expressing multiple human targets:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-in" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Dual Humanized Models
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                  <tbody>
                    {dualModels.map((item, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '12px', color: '#008080', fontWeight: 600, width: '40%' }}>{item.combination}</td>
                        <td style={{ padding: '12px', color: '#555' }}>{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="animate-in" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Higher Order Combinations
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                  <tbody>
                    {tripleModels.map((item, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '12px', color: '#008080', fontWeight: 600, width: '50%' }}>{item.combination}</td>
                        <td style={{ padding: '12px', color: '#555' }}>{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/pd1-humanized-mice"
                className="animate-in inline-flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#008080', fontSize: '.85rem', fontWeight: 500 }}
              >
                <IconChevronRight size={14} color="#008080" />
                <span>PD1 Humanized Mice</span>
              </Link>
              <Link
                href="/lag3-humanized-mice"
                className="animate-in inline-flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#008080', fontSize: '.85rem', fontWeight: 500 }}
              >
                <IconChevronRight size={14} color="#008080" />
                <span>LAG3 Humanized Mice</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Model Design Considerations */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Model Design Considerations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Background Strain Selection
                </h3>
                <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <p style={{ color: '#008080', fontWeight: 600, marginBottom: '5px' }}>C57BL/6</p>
                  <p style={{ color: '#555', fontSize: '.9rem' }}>Standard background for immuno oncology studies. Compatible with commonly used syngeneic tumor models.</p>
                </div>
                <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                  <p style={{ color: '#008080', fontWeight: 600, marginBottom: '5px' }}>BALB/c</p>
                  <p style={{ color: '#555', fontSize: '.9rem' }}>Alternative for specific tumor models.</p>
                </div>
                <Link
                  href="/c57bl6-mouse-background"
                  className="inline-flex items-center gap-2 transition-colors duration-300 mt-4"
                  style={{ color: '#2384da', fontSize: '.85rem', fontWeight: 500 }}
                >
                  <IconChevronRight size={14} color="#2384da" />
                  <span>C57BL/6 Mouse Background</span>
                </Link>
              </div>

              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Syngeneic Tumor Compatibility
                </h3>
                <p style={{ color: '#555', fontSize: '.9rem', marginBottom: '15px' }}>
                  TIM3 humanized mice should be crossed to appropriate syngeneic compatible backgrounds:
                </p>
                <div style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                    <tbody>
                      {tumorModels.map((item, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                          <td style={{ padding: '12px', color: '#008080', fontWeight: 600 }}>{item.model}</td>
                          <td style={{ padding: '12px', color: '#555' }}>{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expression Validation */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Expression Validation
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '25px' }}>
              Before experimental use, confirm:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {validationSteps.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px'
                  }}>
                    <IconCheckCircle size={24} color="white" />
                  </div>
                  <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {item.step}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phenotyping TIM3 Humanized Models */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Phenotyping TIM3 Humanized Models
            </h2>

            <h3 className="animate-in" style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
              Immune Characterization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {immuneCharacterization.map((item, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
                  <p style={{ color: '#008080', fontWeight: 600, marginBottom: '5px' }}>{item.test}</p>
                  <p style={{ color: '#555', fontSize: '.9rem' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ITL's Approach */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Our Approach to TIM3 Humanized Models
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Pre Germline Characterization
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', marginBottom: '10px' }}>
                  ES cell based targeting enables comprehensive verification:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', marginBottom: '8px' }}>
                    <span style={{ color: '#008080', marginRight: '8px' }}>✓</span>
                    Sequence Confirmation: Ensures correct human TIM3 sequences at all junctions
                  </li>
                  <li style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem' }}>
                    <span style={{ color: '#008080', marginRight: '8px' }}>✓</span>
                    Expression Verification: Optional early validation of human TIM3 expression
                  </li>
                </ul>
              </div>

              <div className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                <h3 style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Quality Assurance
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', marginBottom: '10px' }}>
                  Ingenious Targeting Laboratory validates TIM3 humanized models:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', marginBottom: '8px' }}>
                    <span style={{ color: '#008080', marginRight: '8px' }}>✓</span>
                    Flow Cytometry: Confirms human TIM3 surface expression
                  </li>
                  <li style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', marginBottom: '8px' }}>
                    <span style={{ color: '#008080', marginRight: '8px' }}>✓</span>
                    Functional Testing: Binding of clinical antibody candidates
                  </li>
                  <li style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem' }}>
                    <span style={{ color: '#008080', marginRight: '8px' }}>✓</span>
                    Baseline Immune Status: Normal immune development and function
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Selected Publications in TIM3 Research
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.9rem', marginBottom: '25px' }}>
              According to PubMed, recent publications demonstrate the importance of TIM3 in checkpoint immunotherapy:
            </p>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
                  <p style={{ color: '#0a253c', fontWeight: 600, fontSize: '.9rem', marginBottom: '5px' }}>
                    {pub.authors} ({pub.year})
                  </p>
                  <p style={{ color: '#555', fontSize: '.9rem', marginBottom: '5px' }}>
                    {pub.title}
                  </p>
                  <p style={{ color: '#008080', fontSize: '.85rem', fontStyle: 'italic' }}>
                    {pub.journal}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/publications"
              className="animate-in inline-flex items-center gap-2 transition-colors duration-300 mt-6"
              style={{ color: '#2384da', fontSize: '.85rem', fontWeight: 500 }}
            >
              <IconChevronRight size={14} color="#2384da" />
              <span>View All Publications</span>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
              What Researchers Say
            </h2>

            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-in" style={{ marginBottom: index < testimonials.length - 1 ? '30px' : 0 }}>
                <div style={{ textAlign: 'center', backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,128,128,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <IconQuote size={24} color="#008080" />
                  </div>
                  <blockquote style={{
                    color: '#333',
                    fontSize: '.95rem',
                    lineHeight: '1.7rem',
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: '#0a253c', fontWeight: 600, fontSize: '.9rem', marginBottom: '3px' }}>
                    — {testimonial.author}
                  </p>
                  <p style={{ color: '#666', fontSize: '.85rem' }}>
                    {testimonial.affiliation}
                  </p>
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <Link
                href="/testimonials"
                className="animate-in inline-flex items-center gap-2 transition-colors duration-300"
                style={{ color: '#2384da', fontSize: '.85rem', fontWeight: 500 }}
              >
                <IconChevronRight size={14} color="#2384da" />
                <span>Read More Testimonials</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Start Your TIM3 Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Ready to discuss TIM3 humanization for your immuno oncology research? Our scientific team provides complimentary consultation to design the optimal model for your program.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: '#008080',
                  color: 'white',
                  padding: '12px 30px',
                  fontSize: '.9rem',
                  fontWeight: 500
                }}
              >
                <span>Request a Quote</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '12px 30px',
                  border: '2px solid white',
                  fontSize: '.9rem',
                  fontWeight: 500
                }}
              >
                <span>Free Consultation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
            <div className="animate-in">
              <UXUIDCAnimatedFAQ faqs={faqData} />
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Humanized Models
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedModels.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Therapeutic Areas
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedAreas.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Technologies
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedTechnologies.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-teal-600"
                        style={{ color: '#2384da', fontSize: '.85rem' }}
                      >
                        <IconChevronRight size={12} color="#2384da" />
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <UXUIDCFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "TIM3 Humanized Mouse Models",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "TIM3 humanized mouse models for immune checkpoint research. Study TIM3 targeting therapeutics and combination immunotherapy. Since 1998.",
            "serviceType": "Humanized Mouse Model Generation"
          })
        }}
      />
    </div>
  );
}
