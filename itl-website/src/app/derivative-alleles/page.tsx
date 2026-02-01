'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconQuote, IconChevronRight, IconCheckCircle, IconDNA } from '@/components/UXUIDC/Icons';
import { ScientificDiagramPlaceholder } from '@/components/UXUIDC';

// Hero Data
const heroData = {
  badge: "Maximum Flexibility",
  title: "Derivative Allele System",
  intro: "Since 1998, ingenious targeting laboratory has used the derivative allele system to maximize flexibility and value for researchers. This approach generates multiple functional allele configurations from a single ES cell targeting project, providing knockout, conditional knockout, and reporter capabilities without additional targeting work.",
  description: "The derivative allele system has become the standard for major international consortia including EUCOMM and KOMP, and we apply the same strategy to custom projects."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 4, suffix: "", label: "Allele Types from One Project" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// The Four Derivative Alleles
const fourAlleles = [
  {
    allele: "tm1a",
    name: "Knockout First (Reporter)",
    structure: "FRT — LacZ/neo — LoxP — critical exon — LoxP",
    function: "Gene disrupted by splice acceptor and polyadenylation signal",
    utility: "Immediate knockout phenotype plus expression data",
    color: "#008080"
  },
  {
    allele: "tm1b",
    name: "Null Allele",
    structure: "Critical exon and cassette excised together",
    function: "Definitive null allele with deletion of essential sequence",
    utility: "Clean knockout for phenotypic studies",
    color: "#2384da"
  },
  {
    allele: "tm1c",
    name: "Conditional Ready (Floxed)",
    structure: "LacZ/neo removed; LoxP flanked exon remains",
    function: "Gene function restored; conditional deletion enabled",
    utility: "The floxed allele for tissue specific knockout",
    color: "#0a253c"
  },
  {
    allele: "tm1d",
    name: "Conditional Null",
    structure: "Critical exon excised in Cre expressing cells",
    function: "Null allele in specific tissues; normal elsewhere",
    utility: "Tissue specific knockout for dissecting function",
    color: "#008080"
  }
];

// Conversion Table
const conversionTable = [
  { starting: "tm1a", recombinase: "Cre", resulting: "tm1b", outcome: "Null (exon + cassette deleted)" },
  { starting: "tm1a", recombinase: "Flp", resulting: "tm1c", outcome: "Conditional ready (cassette removed)" },
  { starting: "tm1c", recombinase: "Cre", resulting: "tm1d", outcome: "Conditional null (exon deleted)" }
];

// Breeding Timeline
const breedingTimeline = [
  { conversion: "tm1a → tm1b", cross: "tm1a × Cre deleter", screening: "PCR for excision", timeline: "Contact us" },
  { conversion: "tm1a → tm1c", cross: "tm1a × Flp deleter", screening: "PCR for cassette removal", timeline: "Contact us" },
  { conversion: "tm1c → tm1d", cross: "tm1c × tissue Cre", screening: "Tissue specific PCR", timeline: "Contact us" }
];

// Allele Applications
const alleleApplications = {
  tm1a: [
    "Expression pattern analysis via LacZ staining",
    "Initial phenotype assessment with immediate loss of function",
    "Validation before breeding",
    "Heterozygote reporter without complete knockout"
  ],
  tm1b: [
    "Definitive null studies without residual cassette",
    "Phenotype confirmation of tm1a results",
    "Germline null controls",
    "Breeding simplification"
  ],
  tm1c: [
    "Tissue specific knockouts with any Cre driver",
    "Multiple tissue studies with same allele",
    "Temporal studies with inducible Cre",
    "Control animals (tm1c without Cre)"
  ],
  tm1d: [
    "Cell autonomous function studies",
    "Essential gene studies bypassing lethality",
    "Therapeutic modeling of tissue specific effects",
    "Comparative studies across different Cre drivers"
  ]
};

// Advantages
const systemAdvantages = [
  {
    category: "Maximum Flexibility",
    items: [
      "One targeting project generates four allele configurations",
      "Conditional and global knockout from same investment",
      "Reporter functionality included",
      "Future studies enabled without additional targeting"
    ]
  },
  {
    category: "Cost Efficiency",
    items: [
      "Single ES cell targeting cost",
      "Derivative conversions require only breeding",
      "No additional vector construction",
      "No additional ES cell work for derivatives"
    ]
  },
  {
    category: "Research Program Support",
    items: [
      "Initial studies use tm1a for expression and phenotype",
      "Follow up studies convert to tm1c for conditional experiments",
      "Same model supports years of research",
      "Publications can build on established allele"
    ]
  }
];

// Publications Data
// Publications Data - Verified with PubMed links (January 2026)
const publicationsData = [
  {
    authors: "Chakrabarti S et al.",
    year: "2024",
    title: "Touch sensation requires the mechanically gated ion channel ELKIN1.",
    journal: "Science",
    volume: "383(6686): 992-998",
    link: "https://pubmed.ncbi.nlm.nih.gov/38422143/"
  },
  {
    authors: "Vacher CM et al.",
    year: "2021",
    title: "Placental endocrine function shapes cerebellar development and social behavior.",
    journal: "Nature Neuroscience",
    volume: "24(10): 1392-1401",
    link: "https://pubmed.ncbi.nlm.nih.gov/34400844/"
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
const dunaiefTestimonial = getTestimonialById('dunaief-upenn')!;
const testimonials = [{ quote: dunaiefTestimonial.quote, author: formatAuthorWithCredentials(dunaiefTestimonial), affiliation: dunaiefTestimonial.affiliation }];

// Related Links
const relatedTechnologies = [
  { title: "Cre Lox System", href: "/cre-lox-system" },
  { title: "FLP FRT System", href: "/flp-frt-system" },
  { title: "Tissue Specific Cre Lines", href: "/tissue-specific-cre-lines" },
  { title: "ES Cell Gene Targeting", href: "/es-cell-gene-targeting" }
];

const relatedModelTypes = [
  { title: "Conditional Knockout Models", href: "/conditional-knockout-mouse-models" },
  { title: "Knockout Mouse Models", href: "/knockout-mouse-models" },
  { title: "Reporter Knockin", href: "/reporter-knockin" }
];

const guides = [
  { title: "Knockout Strategy Guide", href: "/knockout-strategy-guide" },
  { title: "Conditional vs Conventional Guide", href: "/conditional-vs-conventional-guide" },
  { title: "Cre Line Selection Guide", href: "/cre-line-selection-guide" }
];

// FAQ Data
const faqData = [
  {
    question: "What is the derivative allele system and why is it useful?",
    answer: "The derivative allele system generates four different allele configurations (tm1a, tm1b, tm1c, tm1d) from a single targeting event. This maximizes research flexibility: one project can support reporter studies, conventional knockouts, and conditional knockouts across multiple tissues. It is cost effective because derivative conversions only require breeding, not additional targeting."
  },
  {
    question: "How do I convert tm1a to tm1c (conditional ready floxed allele)?",
    answer: "Cross the tm1a allele to a Flp deleter strain (ACTB FLPe or Rosa26 FLPo). Flp recombinase removes the FRT flanked selection cassette (LacZ and Neo), leaving only LoxP sites flanking the critical exon. The resulting tm1c allele has normal gene function and is ready for conditional knockout experiments."
  },
  {
    question: "Can I use the same tm1c floxed allele with different Cre drivers?",
    answer: "Yes. This is a major advantage of the derivative system. A single tm1c floxed allele can be crossed to any Cre driver line to achieve tissue specific knockout in different organs. One tm1c project can support studies in liver (Albumin Cre), brain (Nestin Cre), immune cells (LysM Cre), and many other tissues."
  },
  {
    question: "What is the difference between tm1b and tm1d?",
    answer: "tm1b is a global null allele generated by crossing tm1a to a germline Cre deleter, producing gene deletion in all tissues from conception. tm1d is a conditional null allele generated by crossing tm1c to a tissue specific Cre, producing gene deletion only in Cre expressing tissues. Use tm1b for global knockout controls; use tm1d for tissue specific experiments."
  }
];

export default function DerivativeAllelesPage() {
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
                    fontWeight: 400,
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
                    fontWeight: 400,
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
                <ScientificDiagramPlaceholder
                  figureId="fig-derivative-001"
                  aspectRatio="4:3"
                  title="Derivative Allele System (tm1a/b/c/d)"
                  caption="Fig. 1: The derivative allele system generates four functional configurations from a single ES cell targeting event."
                  variant="hero"
                  altText="Derivative allele system showing tm1a to tm1b, tm1c, and tm1d conversions"
                />
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

        {/* The Four Derivative Alleles */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              The Four Derivative Alleles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fourAlleles.map((allele, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', borderTop: `4px solid ${allele.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                    <span style={{ backgroundColor: allele.color, color: 'white', padding: '5px 12px', borderRadius: '4px', fontSize: '.85rem', fontWeight: 600 }}>
                      {allele.allele}
                    </span>
                    <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600 }}>
                      {allele.name}
                    </h3>
                  </div>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem', marginBottom: '8px' }}>
                    <strong>Structure:</strong> {allele.structure}
                  </p>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem', marginBottom: '8px' }}>
                    <strong>Function:</strong> {allele.function}
                  </p>
                  <p style={{ color: allele.color, fontSize: '.85rem', lineHeight: '1.5rem', fontWeight: 500 }}>
                    <strong>Utility:</strong> {allele.utility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Table */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              How Recombinase Action Creates Derivatives
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Simple breeding crosses to Cre or Flp deleter strains convert between allele states:
            </p>

            <div className="animate-in" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: '#008080' }}>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Starting Allele</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Recombinase</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Resulting Allele</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionTable.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '15px', color: '#008080', fontSize: '.85rem', fontWeight: 600 }}>{row.starting}</td>
                      <td style={{ padding: '15px', color: '#0a253c', fontSize: '.85rem' }}>{row.recombinase}</td>
                      <td style={{ padding: '15px', color: '#008080', fontSize: '.85rem', fontWeight: 600 }}>{row.resulting}</td>
                      <td style={{ padding: '15px', color: '#555', fontSize: '.85rem' }}>{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Breeding Timeline */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Workflow and Breeding Timeline
            </h2>

            <div className="animate-in" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Conversion</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Cross</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Screening</th>
                    <th style={{ padding: '15px', textAlign: 'left', color: 'white', fontSize: '.85rem', fontWeight: 600 }}>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {breedingTimeline.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '15px', color: 'white', fontSize: '.85rem', fontWeight: 500 }}>{row.conversion}</td>
                      <td style={{ padding: '15px', color: 'rgba(255,255,255,0.85)', fontSize: '.85rem' }}>{row.cross}</td>
                      <td style={{ padding: '15px', color: 'rgba(255,255,255,0.85)', fontSize: '.85rem' }}>{row.screening}</td>
                      <td style={{ padding: '15px', color: 'rgba(255,255,255,0.85)', fontSize: '.85rem' }}>{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Applications of Each Allele
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(alleleApplications).map(([allele, apps], index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px' }}>
                  <h3 style={{ color: '#008080', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                    {allele} Applications
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {apps.map((app, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                        <IconCheckCircle size={16} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Advantages of the Derivative System
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {systemAdvantages.map((item, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                    {item.category}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {item.items.map((point, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                        <IconCheckCircle size={14} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>
              Selected Publications
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', marginBottom: '30px' }}>
              Models using derivative allele system generated by ingenious targeting laboratory:
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
          <div style={{ maxWidth: testimonials.length === 1 ? '900px' : '1100px', margin: '0 auto', width: '100%' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
              What Researchers Say
            </h2>

            <div style={{ display: testimonials.length === 1 ? 'block' : 'grid', gridTemplateColumns: testimonials.length === 2 ? 'repeat(2, 1fr)' : testimonials.length >= 3 ? 'repeat(3, 1fr)' : undefined, gap: '24px' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: testimonials.length === 1 ? '40px 48px' : '30px', borderRadius: '8px', width: '100%', maxWidth: testimonials.length === 1 ? 'none' : undefined, margin: '0 auto', boxSizing: 'border-box', textAlign: testimonials.length === 1 ? 'center' : 'left' }}>
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
              Start Your Derivative Allele Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Our scientific consultants are ready to discuss how the derivative allele system can maximize flexibility for your research program. Initial consultation is provided at no charge and includes allele design recommendations, critical exon selection, and timeline estimates.
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
                  Guides
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {guides.map((link, index) => (
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
            "name": "Derivative Allele System",
            "provider": {
              "@type": "Organization",
              "name": "ingenious targeting laboratory"
            },
            "description": "Derivative allele system for maximum flexibility from single targeting project. Generate knockout first, null, conditional, and reporter alleles since 1998.",
            "serviceType": "Derivative Alleles"
          })
        }}
      />
    </div>
  );
}
