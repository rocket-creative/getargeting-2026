'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconTarget, IconImage, IconQuote, IconChevronRight, IconCheckCircle, IconDNA, IconFlask, IconSettings } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Knockout First Technology",
  title: "tm1a Allele Design",
  intro: "Since 1998, Ingenious Targeting Laboratory has generated over 580 alleles using tm1a (knockout first) design strategies, enabling researchers to rapidly generate conventional knockouts, conditional knockouts, and functional knockin variants from single targeted ES cell clone with 205+ peer reviewed publications documenting tm1a allele applications across diverse genetic models.",
  description: "The tm1a (targeted mutation 1a) allele represents a paradigm in gene targeting efficiency: a single allele design that generates conventional knockout phenotypes while preserving the genetic infrastructure for subsequent conditional knockout or knockin generation."
};

// Stats Data
const statsData = [
  { value: 580, suffix: "+", label: "tm1a Alleles Generated" },
  { value: 205, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Tm1a Architecture Elements
const tm1aElements = [
  {
    element: "LacZ selection marker",
    description: "Beta galactosidase providing positive selection for targeted ES clones and transcript disruption through splicing interference"
  },
  {
    element: "FRT sites flanking LacZ",
    description: "FLP recombinase recognition sites enabling removal of the lacZ cassette when FLP is expressed"
  },
  {
    element: "loxP sites flanking critical exon",
    description: "Cre recombinase recognition sequences surrounding critical exon for conditional deletion"
  },
  {
    element: "Neo cassette",
    description: "Neomycin phosphotransferase gene providing positive selection in ES cells"
  }
];

// Why tm1a Design Matters
const tm1aAdvantages = [
  "Produces conditional ready alleles from first targeting event",
  "Eliminates need for two separate targeting events (KO and cKO)",
  "Saves 12+ months compared to separate allele generation",
  "Single ES cell screening effort covers multiple applications"
];

// Three Functional Alleles
const functionalAlleles = [
  {
    allele: "tm1a allele",
    state: "Contains lacZ cassette",
    function: "Produces no gene function (knockout)"
  },
  {
    allele: "tm1c allele",
    state: "After FLP crossing",
    function: "Removes lacZ, restores function (reversion)"
  },
  {
    allele: "tm1d allele",
    state: "After Cre crossing",
    function: "Deletes critical exon (conditional knockout)"
  }
];

// Nomenclature Table
const nomenclatureTable = [
  { name: "tm1a", definition: "First targeted mutation allele. Full cassette with lacZ present and critical exon present." },
  { name: "tm1b", definition: "Alternative cassette configuration at same locus (if applicable)." },
  { name: "tm1c", definition: "After FLP mediated cassette removal. loxP flanked critical exon, lacks lacZ. Normal phenotype." },
  { name: "tm1d", definition: "After both FLP and Cre. Conventional knockout via exon deletion." },
  { name: "tm1e", definition: "Alternative FLP or Cre mediated modifications (when applicable)." }
];

// Processing Steps
const processingSteps = [
  {
    conversion: "tm1a to tm1c",
    method: "FLP Crossing",
    description: "Cross tm1a founders with FLP transgenic mice. FLP recognizes FRT sites and excises lacZ cassette. Offspring with FLP transgene and tm1a allele produce tm1c allele.",
    result: "tm1c mice show restored normal phenotype. They carry loxP flanked critical exons enabling conditional knockout."
  },
  {
    conversion: "tm1c to tm1d",
    method: "Cre Crossing",
    description: "Cross tm1c mice with tissue specific, inducible, or ubiquitous Cre transgenic mice. Cre recognizes loxP sites and excises critical exon.",
    result: "Ubiquitous Cre produces conventional knockout. Tissue specific Cre produces conditional knockout only in those tissues."
  }
];

// Common Applications
const tm1aApplications = [
  {
    title: "Developmental Knockout Studies",
    description: "Generate tm1a founders carrying immediate knockouts for embryonic lethal or early postnatal lethal genes. tm1c revertant lines maintain genetic infrastructure for future conditional studies."
  },
  {
    title: "Comparative Phenotyping",
    description: "Directly compare tm1a knockout phenotype with tm1c wild type phenotype using littermates, controlling for all genetic background variation."
  },
  {
    title: "Multi Tissue Conditional Studies",
    description: "Generate tm1c mice, then cross with multiple tissue specific Cre lines to characterize tissue autonomous gene function across different organs."
  },
  {
    title: "Temporal Studies",
    description: "Generate tm1c mice, then cross with inducible Cre (CreER) to study when during development or adulthood your gene becomes essential."
  }
];

// Publications Data
// Publications Data - Verified with PubMed links (January 2026)
const publicationsData = [
  {
    authors: "Skarnes WC, Rosen B, West AP, et al.",
    year: "2011",
    title: "A conditional knockout resource for the genome wide study of mouse gene function.",
    journal: "Nature",
    volume: "474(7351): 337-342",
    link: "https://pubmed.ncbi.nlm.nih.gov/21677750/"
  },
  {
    authors: "Clausen BE et al.",
    year: "1999",
    title: "Conditional gene targeting in macrophages and granulocytes using LysMcre mice.",
    journal: "Transgenic Research",
    volume: "8(4): 265-277",
    link: "https://pubmed.ncbi.nlm.nih.gov/10621974/"
  }
];

// Testimonials
// Verified testimonials from master data - https://www.genetargeting.com/testimonials
import { getTestimonialById, formatAuthorWithCredentials } from '@/data/verifiedTestimonials';

const mirmiraTestimonial = getTestimonialById('mirmira-chicago')!;
const testimonials = [
  { quote: mirmiraTestimonial.quote, author: formatAuthorWithCredentials(mirmiraTestimonial), affiliation: mirmiraTestimonial.affiliation }
];

// Related Links
const relatedTechnologies = [
  { title: "Derivative Alleles", href: "/derivative-alleles" },
  { title: "Selection Cassette Design", href: "/selection-cassette-design" },
  { title: "Critical Exon Selection", href: "/critical-exon-selection" },
  { title: "Cre Lox System", href: "/cre-lox-system" }
];

const relatedModelTypes = [
  { title: "Conventional Knockout Models", href: "/conventional-knockout-mouse-models" },
  { title: "Conditional Knockout Models", href: "/conditional-knockout-mouse-models" },
  { title: "Inducible Conditional Knockout", href: "/inducible-conditional-knockout" }
];

const relatedServices = [
  { title: "ES Cell Gene Targeting", href: "/es-cell-gene-targeting" },
  { title: "Pre Germline Characterization", href: "/pre-germline-characterization" }
];

// FAQ Data
const faqData = [
  {
    question: "What is the tm1a allele and how does it work?",
    answer: "The tm1a (targeted mutation 1a) allele is a knockout first design containing an FRT flanked LacZ cassette and loxP flanked critical exon. The LacZ cassette disrupts gene function (knockout). FLP crossing removes LacZ to create tm1c (functional allele). Cre crossing deletes the critical exon to create tm1d (conditional knockout). This single targeting event produces three functional alleles."
  },
  {
    question: "What are the advantages of tm1a design over separate targeting?",
    answer: "tm1a design enables generation of conventional knockout, revertant, and conditional knockout from a single ES cell clone, saving time (12+ months) and cost compared to separate targeting events. The design provides flexibility to choose the appropriate allele type for your research without repeating the targeting process."
  },
  {
    question: "How do you select the critical exon for tm1a design?",
    answer: "Critical exon selection follows the same principles as standard conditional knockout: target early exons (exons 1 to 4), exons encoding essential functional domains, or exons present in all transcript variants. The selected exon should create a frameshift (length not divisible by 3) or encode critical domains to ensure functional loss when deleted."
  },
  {
    question: "What is the difference between tm1a, tm1c, and tm1d alleles?",
    answer: "tm1a contains the full cassette with LacZ present and functions as a knockout. tm1c is created after FLP mediated LacZ removal and functions as a wild type allele (gene function restored). tm1d is created after both FLP (removes LacZ) and Cre (deletes critical exon) and functions as a conditional knockout."
  }
];

export default function Tm1aAlleleDesignPage() {
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
                  <IconDNA size={16} color="white" />
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
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>tm1a Allele Architecture Diagram</span>
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

        {/* tm1a Architecture Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              The tm1a Architecture
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              The tm1a allele is built upon a cassette embedded within the target intron, containing several DNA elements in precise order:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tm1aElements.map((item, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {item.element}
                  </h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-in" style={{ backgroundColor: '#008080', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
              <p style={{ color: 'white', fontSize: '.9rem', fontFamily: 'monospace', textAlign: 'center' }}>
                Complete tm1a cassette order: 5&apos;—FRT—lacZ—polyA—FRT—loxP—Neo—loxP—3&apos;
              </p>
            </div>
          </div>
        </section>

        {/* Why tm1a Design Matters */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Why tm1a Design Matters
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Historical gene targeting using simple homologous recombination produced only conditional knockout alleles. Researchers wanting both conventional and conditional knockouts required two separate targeting events—a time consuming and costly process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  tm1a Advantages
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {tm1aAdvantages.map((advantage, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <IconCheckCircle size={16} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-in" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Three Functional Alleles from One Clone
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {functionalAlleles.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: idx < functionalAlleles.length - 1 ? '1px solid #eee' : 'none' }}>
                      <span style={{ color: '#008080', fontSize: '.9rem', fontWeight: 600 }}>{item.allele}:</span>
                      <span style={{ color: '#555', fontSize: '.85rem', marginLeft: '5px' }}>{item.state}</span>
                      <p style={{ color: '#666', fontSize: '.8rem', marginTop: '5px' }}>{item.function}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Allele Nomenclature */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Allele Nomenclature System
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              The tm (targeted mutation) nomenclature follows strict ILAR (International Laboratory Animal Resource) conventions:
            </p>

            <div className="animate-in" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: '#008080' }}>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Allele</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                  {nomenclatureTable.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '15px', color: '#008080', fontSize: '.85rem', fontWeight: 600 }}>{row.name}</td>
                      <td style={{ padding: '15px', color: '#555', fontSize: '.85rem' }}>{row.definition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Processing tm1a Section */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Processing tm1a to Generate Functional Variants
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {processingSteps.map((step, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>{index + 1}</span>
                    </div>
                    <div>
                      <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>{step.conversion}</h3>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.8rem' }}>{step.method}</span>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '10px' }}>
                    {step.description}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', lineHeight: '1.5rem', fontStyle: 'italic' }}>
                    <strong>Result:</strong> {step.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Applications */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Common tm1a Applications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tm1aApplications.map((app, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                    {app.title}
                  </h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>
              Selected Publications in tm1a Allele Design
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', marginBottom: '30px' }}>
              Foundational research on knockout first allele design:
            </p>

            <div className="grid grid-cols-1 gap-4">
              {publicationsData.map((pub, index) => (
                <div
                  key={index}
                  className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #2384da'
                  }}
                >
                  <p style={{ color: '#555', fontSize: '.85rem', marginBottom: '8px' }}>
                    <span style={{ color: '#0a253c', fontWeight: 500 }}>{pub.authors}</span> ({pub.year}).
                  </p>
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        fontSize: '.95rem',
                        color: '#008080',
                        fontWeight: 600,
                        marginBottom: '8px',
                        lineHeight: '1.5',
                        textDecoration: 'none'
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {pub.title} ↗
                    </a>
                  ) : (
                    <p style={{ fontSize: '.95rem', color: '#333', fontWeight: 600, marginBottom: '8px', lineHeight: '1.5' }}>
                      {pub.title}
                    </p>
                  )}
                  <p style={{ color: '#666', fontSize: '.85rem', fontStyle: 'italic' }}>
                    <em>{pub.journal}</em>
                    {pub.volume && <span style={{ fontStyle: 'normal' }}> {pub.volume}</span>}
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-in text-center" style={{ marginTop: '25px' }}>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: '#2384da',
                  color: 'white',
                  padding: '10px 25px',
                  borderRadius: '4px',
                  fontSize: '.85rem',
                  fontWeight: 500
                }}
              >
                <span>View All Publications</span>
                <IconChevronRight size={16} color="white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
              What Researchers Say
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,128,128,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '15px'
                  }}>
                    <IconQuote size={20} color="#008080" />
                  </div>
                  <blockquote style={{
                    color: '#333',
                    fontSize: '.9rem',
                    lineHeight: '1.6rem',
                    fontStyle: 'italic',
                    marginBottom: '15px'
                  }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p style={{ color: '#0a253c', fontWeight: 600, fontSize: '.85rem', marginBottom: '2px' }}>
                      — {testimonial.author}
                    </p>
                    <p style={{ color: '#666', fontSize: '.8rem' }}>
                      {testimonial.affiliation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Start Your tm1a Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              tm1a allele design enables simultaneous achievement of conventional knockout, revertant, and conditional knockout functionality from single ES cell clone. Our team can help you select the critical exon, design your cassette configuration, and plan your FLP and Cre crossing strategy.
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
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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

              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Model Types
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedModelTypes.map((link, index) => (
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
                  Related Services
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedServices.map((link, index) => (
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
            "name": "tm1a Allele Design",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "tm1a knockout first allele design for flexible conditional targeting. Generate multiple allele types from single ES cell targeting since 1998.",
            "serviceType": "tm1a Allele Design"
          })
        }}
      />
    </div>
  );
}
