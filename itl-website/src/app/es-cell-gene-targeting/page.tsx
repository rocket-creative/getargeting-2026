'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconTarget, IconImage, IconQuote, IconChevronRight, IconCheckCircle, IconDNA } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Gene Targeting Technology",
  title: "ES Cell Gene Targeting",
  intro: "Since 1998, Ingenious Targeting Laboratory has completed over 2,500 custom gene targeting projects using embryonic stem cell technology. Our ES cell based approach has supported research published in Science, Nature, Cell, and more than 800 peer reviewed journals.",
  description: "ES cell gene targeting uses homologous recombination to introduce precise genetic modifications at defined genomic locations. This approach enables knockout, knockin, conditional, and humanized allele generation with complete control over allele structure."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Pre-Germline Characterization Benefits
const preGermlineCharacterization = [
  "Correct targeting: Realtime PCR confirms the modification is at the intended locus",
  "Allele structure: Complete allele configuration matches the design",
  "Single copy integration: No additional copies randomly inserted elsewhere",
  "Sequence accuracy: Critical elements are sequence verified",
  "Chromosome integrity: Karyotype analysis confirms normal structure"
];

// Why Pre-Germline Matters
const whyItMatters = [
  "Confidence in allele structure: Know exactly what will be transmitted to mice",
  "Identification of aberrant targeting events: Detect and exclude clones with unexpected rearrangements",
  "Defined starting point: The characterized clone provides a reference for all derived mice",
  "Predictable inheritance: Properly characterized alleles segregate as expected through breeding",
  "Troubleshooting foundation: If unexpected phenotypes arise, the characterized allele provides baseline for investigation"
];

// Targeting Vector Elements
const vectorElements = [
  { name: "Homology arms", desc: "Sequences flanking the modification that direct recombination to the correct locus (typically 3 to 8 kb each)" },
  { name: "Selection cassette", desc: "Positive selection marker (usually neomycin resistance) for identifying targeted clones" },
  { name: "Modification elements", desc: "The specific changes to be introduced (deletions, insertions, point mutations, loxP sites)" },
  { name: "Negative selection", desc: "Optional elements (such as thymidine kinase) to select against random integration" }
];

// Allele Types
const alleleTypes = [
  { type: "Knockout Alleles", options: ["Conventional knockout: Deletion of critical exons creates global null allele", "Conditional knockout: loxP sites flank critical exons for Cre mediated deletion", "Knockout first: Reporter and selection cassette disrupt gene, convertible to conditional"], link: "/knockout-mouse-models" },
  { type: "Knockin Alleles", options: ["Point mutations: Single nucleotide changes introduced at exact positions", "Reporter knockins: Fluorescent proteins or enzymatic reporters at endogenous loci", "Tag knockins: Epitope tags added to endogenous proteins", "Humanization: Human sequences replace mouse orthologs"], link: "/knockin-mouse-models" },
  { type: "Conditional Alleles", options: ["loxP sites: Positioned to flank critical exons for Cre mediated excision", "FRT sites: Enable Flp mediated cassette removal", "Derivative allele systems: Single targeting event enables multiple allele configurations"], link: "/conditional-knockout-mouse-models" }
];

// Advantages
const advantages = [
  { category: "Precision and Predictability", items: ["Base pair level accuracy through homologous recombination", "Pre germline verification confirms allele structure before mouse production", "Predictable inheritance from characterized clone", "Complex allele designs reliably executed"] },
  { category: "Flexibility", items: ["Any genomic locus can be targeted", "Multiple modification types from single platform", "Derivative allele systems maximize utility from single project", "Characterized ES cell clones can be archived and re used"] },
  { category: "Quality Assurance", items: ["Molecular characterization at clone level", "Single copy integration confirmed before mouse production", "No mosaicism in germline transmitted allele", "Defined reference point for all derived mice"] }
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
    authors: "Mlynarczyk C et al.",
    year: "2023",
    title: "BTG1 mutation yields supercompetitive B cells primed for malignant transformation.",
    journal: "Science",
    volume: "379(6629): eabj0412",
    link: "https://pubmed.ncbi.nlm.nih.gov/36656933/"
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
const testimonials = [
  {
    quote: "The Hephaestin flox model Ingenious has made for us has been great. It has helped generate eight research publications.",
    author: "Joshua Dunaief, PhD, MD",
    affiliation: "University of Pennsylvania"
  },
  {
    quote: "The quality of service was exceptional and performed to the highest possible standards.",
    author: "Albert Basson, PhD",
    affiliation: "King's College London"
  }
];

// Related Links
const esCellTechnologies = [
  { title: "ES Cell Advantages", href: "/es-cell-advantages" },
  { title: "Pre Germline Characterization", href: "/pre-germline-characterization" },
  { title: "Homologous Recombination Targeting", href: "/homologous-recombination-targeting" }
];

const relatedModelTypes = [
  { title: "Knockout Mouse Models", href: "/knockout-mouse-models" },
  { title: "Conditional Knockout Models", href: "/conditional-knockout-mouse-models" },
  { title: "Knockin Mouse Models", href: "/knockin-mouse-models" },
  { title: "Humanized Mouse Models", href: "/humanized-mouse-models" }
];

const relatedTechnologies = [
  { title: "Cre Lox System", href: "/cre-lox-system" },
  { title: "Derivative Alleles", href: "/derivative-alleles" },
  { title: "Tissue Specific Cre Lines", href: "/tissue-specific-cre-lines" }
];

// FAQ Data
const faqData = [
  {
    question: "What is pre germline characterization and why is it important?",
    answer: "Pre germline characterization verifies that ES cell clones carry the intended genetic modification before committing to mouse generation. PCR, Southern blot analysis, and sequencing confirm correct targeting, proper allele structure, and absence of random integrations. This quality control prevents wasted time and resources on incorrectly targeted clones."
  },
  {
    question: "What strain backgrounds are available for ES cell targeting?",
    answer: "Ingenious Targeting Laboratory offers C57BL/6, BALB/c, and 129 strain ES cells. C57BL/6 is most commonly requested for its well characterized genetics and suitability for most research applications. Strain selection depends on your research requirements and downstream breeding plans."
  },
  {
    question: "Can ES cell targeting be used for any gene modification?",
    answer: "Yes. ES cell targeting via homologous recombination can modify any genomic locus with base pair precision. This includes knockouts, knockins (point mutations, reporters, tags), conditional alleles, and humanization. The approach works for any gene regardless of size or complexity."
  },
  {
    question: "What is the advantage of ES cell targeting over other methods?",
    answer: "ES cell targeting provides precision (base pair accuracy), predictability (pre germline verification), and flexibility (multiple allele types from one platform). Unlike random transgenesis or CRISPR in zygotes, ES cell targeting enables comprehensive characterization before mouse production and supports complex allele designs."
  }
];

export default function ESCellGeneTargetingPage() {
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
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>ES Cell Targeting Illustration</span>
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

        {/* Pre-Germline Characterization Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Pre Germline Characterization
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '25px' }}>
              The defining advantage of ES cell based gene targeting is pre germline characterization. Before any mouse is generated, the targeted allele is comprehensively analyzed in ES cells to confirm correct structure, single copy integration, and absence of random insertions elsewhere in the genome.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  What Characterization Confirms
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {preGermlineCharacterization.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                      <IconCheckCircle size={16} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', borderTop: '4px solid #2384da' }}>
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Why Pre Germline Characterization Matters
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {whyItMatters.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                      <IconCheckCircle size={16} color="#2384da" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.5rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Allele Types Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Allele Types Enabled by ES Cell Targeting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alleleTypes.map((type, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>{type.type}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                    {type.options.map((option, idx) => (
                      <li key={idx} style={{ color: '#555', fontSize: '.85rem', marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#008080' }}>•</span>
                        {option}
                      </li>
                    ))}
                  </ul>
                  <Link href={type.link} className="inline-flex items-center gap-2 transition-colors duration-300" style={{ color: '#2384da', fontSize: '.85rem', fontWeight: 500 }}>
                    <span>Learn more</span>
                    <IconChevronRight size={14} color="#2384da" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Advantages of ES Cell Targeting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>{adv.category}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {adv.items.map((item, idx) => (
                      <li key={idx} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0 }}>•</span>
                        {item}
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
              Models generated using ES cell targeting by Ingenious Targeting Laboratory:
            </p>

            <div className="grid grid-cols-1 gap-4">
              {publicationsData.map((pub, index) => (
                <div
                  key={index}
                  className="animate-in"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
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
              Start Your ES Cell Targeting Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Our scientific consultants are ready to discuss your project requirements and design the optimal targeting strategy for your research goals. Initial consultation is provided at no charge and includes vector design recommendations, timeline estimates, and allele configuration options.
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
                  ES Cell Technologies
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {esCellTechnologies.map((link, index) => (
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
            "name": "ES Cell Gene Targeting",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "ES cell gene targeting for precise mouse model generation. Pre germline characterization ensures allele accuracy. 2,500+ projects since 1998.",
            "serviceType": "ES Cell Gene Targeting"
          })
        }}
      />
    </div>
  );
}
