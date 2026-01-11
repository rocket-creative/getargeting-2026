'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconImage, IconQuote, IconChevronRight, IconCheckCircle, IconLayers } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Inducible Gene Expression",
  title: "Conditional Knockin Mice",
  intro: "Conditional knockin mouse models enable controlled gene expression through Cre lox mediated recombination. Since 1998, Ingenious Targeting Laboratory has generated conditional knockin models for inducible reporter expression, tissue specific gene activation, and temporal control of gene function.",
  description: "Conditional knockin alleles are designed with loxP sites flanking a STOP cassette that prevents expression until Cre mediated recombination removes the STOP sequence. This approach enables spatial and temporal control over gene expression, essential for studying genes with developmental effects or when expression timing is critical."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Allele Design Components
const alleleDesignComponents = [
  { name: "loxP Sites", desc: "Flank the STOP cassette" },
  { name: "STOP Cassette", desc: "Prevents expression until removed" },
  { name: "Knockin Sequence", desc: "Gene, reporter, or tag to be expressed" },
  { name: "Endogenous Promoter", desc: "Native regulatory control" }
];

// Activation Mechanism
const activationMechanism = [
  "Removes STOP cassette",
  "Activates knockin expression",
  "Maintains endogenous regulation",
  "Provides permanent activation"
];

// Applications Data
const applicationsData = [
  {
    title: "Inducible Reporter Expression",
    description: "Conditional knockin enables:",
    items: [
      "Temporal reporter activation",
      "Tissue specific visualization",
      "Lineage tracing initiation",
      "Expression pattern studies"
    ]
  },
  {
    title: "Controlled Gene Expression",
    description: "Temporal gene activation:",
    items: [
      "Adult gene expression",
      "Disease modeling",
      "Therapeutic intervention studies",
      "Developmental timing studies"
    ]
  },
  {
    title: "Tag Activation",
    description: "Conditional tag expression:",
    items: [
      "Temporal protein tagging",
      "Tissue specific labeling",
      "Biochemical studies",
      "Localization analysis"
    ]
  }
];

// Design Considerations - Cre Driver Selection
const creDriverSelection = [
  "Tissue specific Cre for spatial control",
  "Inducible Cre for temporal control",
  "Ubiquitous Cre for global activation",
  "Multiple Cre lines for different applications"
];

// Design Considerations - Expression Timing
const expressionTiming = [
  "Embryonic activation",
  "Postnatal activation",
  "Adult activation",
  "Inducible activation"
];

// Testimonial Data
const testimonialData = {
  quote: "I'd like to thank the ingenious team for making this mouse for us. We are so excited! Everyone at ingenious has been wonderful to work with throughout the entire process. We will definitely be in contact the next time we need a mouse!",
  author: "Julia Maxson, PhD",
  affiliation: "Knight Cancer Institute, Oregon Health & Science University"
};

// Related Links
const relatedModelTypes = [
  { title: "Knockin Mouse Models", href: "/knockin-mouse-models" },
  { title: "Conditional Knockout Mouse Models", href: "/conditional-knockout-mouse-models" },
  { title: "Reporter Knockin", href: "/reporter-knockin" },
  { title: "Inducible Gene Expression", href: "/inducible-gene-expression" }
];

const relatedTechnologies = [
  { title: "Cre Lox System", href: "/cre-lox-system" },
  { title: "Cre Recombinase Mice", href: "/cre-recombinase-mice" },
  { title: "Tamoxifen Inducible Cre", href: "/tamoxifen-inducible-cre" }
];

// FAQ Data
const faqData = [
  {
    question: "What is the difference between conditional knockin and regular knockin?",
    answer: "Conditional knockin models include loxP-flanked stop cassettes or other conditional elements that prevent expression until Cre-mediated recombination occurs. This enables tissue-specific or temporal control of knockin expression. Regular knockin models express the inserted sequence constitutively in all tissues."
  },
  {
    question: "When should I use conditional knockin instead of standard knockin?",
    answer: "Use conditional knockin when the inserted sequence (e.g., point mutation, reporter, humanized gene) would cause lethality or severe phenotypes if expressed globally, or when you need tissue-specific or temporal control. Conditional knockin enables study of gene function in specific cell types or at specific timepoints."
  },
  {
    question: "How do you control conditional knockin expression?",
    answer: "Expression is controlled through Cre recombinase. Tissue-specific Cre drivers enable spatial control. Tamoxifen-inducible Cre (CreER) enables temporal control. After Cre-mediated recombination, the conditional element is removed and expression begins. Expression is permanent once recombination occurs."
  },
  {
    question: "What types of sequences can be conditionally inserted?",
    answer: "Conditional knockin can insert point mutations, reporters (GFP, luciferase), epitope tags, humanized gene sequences, or cDNA sequences. The conditional cassette (loxP-flanked stop) prevents expression until Cre recombination removes it, enabling controlled expression of the inserted sequence."
  },
  {
    question: "What is the timeline for generating a conditional knockin model?",
    answer: "Custom model generation takes 6-10 months from project initiation to identification of germline-transmitted mice."
  }
];

export default function ConditionalKnockinMicePage() {
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
                  <IconSettings size={16} color="white" />
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
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>Conditional Knockin Diagram</span>
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

        {/* How Conditional Knockin Works */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              How Conditional Knockin Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Allele Design */}
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: '20px' }}>
                  Allele Design
                </h3>
                <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '15px' }}>
                  Conditional knockin alleles contain:
                </p>
                <div className="space-y-3">
                  {alleleDesignComponents.map((component, index) => (
                    <div 
                      key={index}
                      style={{
                        backgroundColor: '#f8f9fa',
                        padding: '12px 15px',
                        borderRadius: '6px',
                        borderLeft: '3px solid #008080'
                      }}
                    >
                      <span style={{ color: '#0a253c', fontWeight: 600, fontSize: '.85rem' }}>{component.name}:</span>
                      <span style={{ color: '#666', fontSize: '.85rem', marginLeft: '5px' }}>{component.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Activation Mechanism */}
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: '20px' }}>
                  Activation Mechanism
                </h3>
                <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '15px' }}>
                  Cre mediated recombination:
                </p>
                <div className="space-y-3">
                  {activationMechanism.map((step, index) => (
                    <div 
                      key={index}
                      style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}
                    >
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: '#008080',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '.85rem',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <span style={{ color: '#555', fontSize: '.9rem' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {applicationsData.map((app, index) => (
                <div 
                  key={index}
                  className="animate-in"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    padding: '25px',
                    borderRadius: '8px'
                  }}
                >
                  <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>
                    {app.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', marginBottom: '15px' }}>
                    {app.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {app.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <IconCheckCircle size={14} color="white" style={{ flexShrink: 0 }} />
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '.85rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Considerations */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Design Considerations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cre Driver Selection */}
              <div className="animate-in">
                <div style={{
                  backgroundColor: 'white',
                  padding: '25px',
                  borderRadius: '8px',
                  borderTop: '4px solid #008080'
                }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                    Cre Driver Selection
                  </h3>
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '15px' }}>
                    Choose appropriate Cre lines:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {creDriverSelection.map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                        <IconCheckCircle size={16} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ color: '#555', fontSize: '.9rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/cre-line-selection-guide"
                    className="inline-flex items-center gap-2 transition-colors duration-300 mt-3"
                    style={{ color: '#008080', fontSize: '.85rem', fontWeight: 500 }}
                  >
                    <span>View Cre Line Selection Guide</span>
                    <IconChevronRight size={14} color="#008080" />
                  </Link>
                </div>
              </div>
              
              {/* Expression Timing */}
              <div className="animate-in">
                <div style={{
                  backgroundColor: 'white',
                  padding: '25px',
                  borderRadius: '8px',
                  borderTop: '4px solid #2384da'
                }}>
                  <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                    Expression Timing
                  </h3>
                  <p style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.6rem', marginBottom: '15px' }}>
                    Consider when activation is needed:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {expressionTiming.map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                        <IconCheckCircle size={16} color="#2384da" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ color: '#555', fontSize: '.9rem' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="animate-in" style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,128,128,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px'
              }}>
                <IconQuote size={30} color="#008080" />
              </div>
              <blockquote style={{ 
                color: '#333', 
                fontSize: '1.1rem', 
                lineHeight: '1.8rem',
                fontStyle: 'italic',
                marginBottom: '25px'
              }}>
                &ldquo;{testimonialData.quote}&rdquo;
              </blockquote>
              <div>
                <p style={{ color: '#0a253c', fontWeight: 600, fontSize: '.95rem', marginBottom: '3px' }}>
                  — {testimonialData.author}
                </p>
                <p style={{ color: '#666', fontSize: '.85rem' }}>
                  {testimonialData.affiliation}
                </p>
              </div>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 transition-colors duration-300 mt-4"
                style={{ color: '#008080', fontSize: '.85rem', fontWeight: 500 }}
              >
                <span>Read more testimonials</span>
                <IconChevronRight size={14} color="#008080" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Request Conditional Knockin Models
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Contact us to discuss conditional knockin models for your research. Our scientific consultants will help you design the optimal allele structure for your experimental goals.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            "name": "Conditional Knockin Mice",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "Conditional knockin mouse models with inducible gene expression. Cre lox controlled knockin alleles for temporal and spatial gene control.",
            "serviceType": "Conditional Knockin Mouse Model Generation"
          })
        }}
      />
    </div>
  );
}
