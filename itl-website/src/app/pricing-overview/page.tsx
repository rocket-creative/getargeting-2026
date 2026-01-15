'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconQuote, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';
import { UXUIDCResourceLinks, pricingResources } from '@/components/UXUIDC';

// Hero Data
const heroData = {
  badge: "Pricing Guide",
  title: "Mouse Model Pricing Overview",
  intro: "Custom mouse model pricing depends on project complexity, model type, and scope of services. Ingenious Targeting Laboratory provides customized quotes based on your specific research requirements.",
  description: "This overview explains the factors that influence project pricing and helps you understand what to expect."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Model Type Pricing Data
const modelTypePricingData = [
  {
    title: "Conventional Knockout",
    description: "Conventional Knockout projects involve deletion or disruption of a target gene. These represent the most straightforward targeting projects.",
    complexity: "Standard"
  },
  {
    title: "Conditional Knockout",
    description: "Conditional Knockout projects require insertion of loxP sites flanking critical exons while preserving normal gene function. Additional design complexity increases project investment.",
    complexity: "Moderate"
  },
  {
    title: "Knockin",
    description: "Knockin projects range widely in complexity: Point mutations represent relatively simple modifications, cDNA knockins require precise sequence insertion, large insertions (reporters, human sequences) add complexity, multi component knockins require extensive design.",
    complexity: "Variable"
  },
  {
    title: "Humanized Models",
    description: "Humanized Models involve replacing mouse sequences with human counterparts. Complexity depends on sequence size and design requirements.",
    complexity: "Higher"
  }
];

// Allele Complexity Factors Data
const alleleComplexityData = {
  title: "Allele Design Complexity",
  description: "Factors that increase allele complexity:",
  factors: [
    "Multiple recombinase recognition sites (loxP, FRT, Rox)",
    "Reporter gene insertions",
    "Fusion protein designs",
    "Large sequence insertions",
    "Inducible elements",
    "Dual recombinase compatibility"
  ]
};

// Standard Project Includes Data
const standardProjectIncludesData = {
  title: "What Is Included",
  subtitle: "Standard Complete Project Includes",
  categories: [
    {
      title: "Targeting Vector",
      items: [
        "Custom vector design optimized for your target",
        "Vector construction and quality control",
        "Sequence verified plasmid",
        "Vector map and documentation"
      ]
    },
    {
      title: "ES Cell Targeting",
      items: [
        "ES cell electroporation",
        "Drug selection",
        "Clone picking and expansion",
        "Southern blot screening",
        "PCR confirmation",
        "Sequence verification of targeted clones",
        "Characterized ES cell stocks (frozen)"
      ]
    },
    {
      title: "Mouse Generation",
      items: [
        "Blastocyst microinjection",
        "Chimera generation and identification",
        "Germline transmission breeding",
        "Founder mouse genotyping"
      ]
    },
    {
      title: "Deliverables",
      items: [
        "Germline transmitted founders (typically 2 to 4 mice)",
        "Comprehensive project documentation",
        "Genotyping protocol and primers",
        "Archived ES cell clones"
      ]
    }
  ]
};

// Not Included Data
const notIncludedData = {
  title: "Not Typically Included",
  description: "These services are quoted separately based on need:",
  items: [
    "Cohort expansion beyond founders",
    "Colony management and breeding",
    "Cryopreservation services",
    "Rederivation",
    "International shipping",
    "Rush timeline acceleration",
    "Phenotyping and characterization"
  ]
};

// Payment Structure Data
const paymentStructureData = {
  title: "Payment Structure",
  description: "Projects are typically billed in milestone payments aligned with project phases:",
  milestones: [
    { milestone: "Milestone 1", description: "Project initiation (targeting vector construction)" },
    { milestone: "Milestone 2", description: "ES cell targeting complete (clone characterization)" },
    { milestone: "Milestone 3", description: "Microinjection complete (chimera generation)" },
    { milestone: "Milestone 4", description: "Project completion (germline transmission)" }
  ]
};

// Quote Process Data
const quoteProcessData = {
  title: "Quote Process",
  steps: [
    {
      title: "Request a Quote",
      description: "Submit your project details including: target gene and modification type, model type (knockout, knockin, humanized), strain background preference, timeline requirements, cohort needs."
    },
    {
      title: "Quote Delivery",
      description: "Within 1 business day, you will receive: recommended targeting strategy, allele design overview, project timeline by phase, itemized pricing, terms and conditions."
    },
    {
      title: "Quote Validity",
      description: "Quotes are typically valid for 90 days. Timeline estimates may be updated if significant time passes before project initiation."
    }
  ]
};

// Budget Planning Data
const budgetPlanningData = {
  title: "Budget Planning",
  subtitle: "Cost Saving Strategies",
  strategies: [
    {
      title: "Derivative Allele Approach",
      description: "Generate multiple model types from a single targeting event, maximizing research value per project investment."
    },
    {
      title: "Partial Services",
      description: "If you have in house capabilities for some project phases, partial service options reduce overall cost."
    },
    {
      title: "Colony Planning",
      description: "Consider founder number and breeding timeline to balance initial investment with downstream needs."
    }
  ]
};

// Catalog Models Data
const catalogModelsData = {
  title: "Catalog Models",
  description: "For certain applications, Ingenious Targeting Laboratory offers catalog models at fixed pricing:",
  models: [
    "PD1 humanized",
    "PDL1 humanized",
    "CTLA4 humanized",
    "LAG3 humanized",
    "TIM3 humanized",
    "Single and double checkpoint combinations"
  ],
  note: "Catalog models provide defined genetics at predictable pricing with shorter lead times than custom projects."
};

// FAQ Data
const faqData = [
  {
    question: "What factors affect mouse model pricing?",
    answer: "Pricing depends on model type (conventional knockout, conditional knockout, knockin, humanized, transgenic), allele design complexity (multiple recombinase sites, reporters, large insertions), strain background (standard vs specialty strains), project scope (complete project vs partial services), and timeline requirements (standard vs rush)."
  },
  {
    question: "What is included in standard project pricing?",
    answer: "Standard complete projects include targeting vector design and construction, ES cell targeting and clone characterization, chimera generation, germline transmission verification, genotyping protocols, and documentation. Pre-germline characterization validates allele structure before mouse generation. Additional services (cohort expansion, cryopreservation) are quoted separately."
  },
  {
    question: "Can I get pricing for partial services?",
    answer: "Yes. ITL provides pricing for partial services including targeting vector only, ES cell targeting only, microinjection only, or other partial services. Partial service pricing is based on the specific scope of work. Contact ITL to discuss your partial service needs and receive a customized quote."
  },
  {
    question: "Are there discounts for academic institutions?",
    answer: "Contact Ingenious Targeting Laboratory directly to discuss institutional pricing arrangements."
  },
  {
    question: "What about grant budget constraints?",
    answer: "Our team can help design projects that align with funding parameters while maximizing research value."
  },
  {
    question: "Can pricing be adjusted mid project?",
    answer: "Scope changes during a project may affect pricing. Any adjustments are discussed and approved before implementation."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation terms are included in project agreements. Costs incurred through the date of cancellation typically apply."
  }
];

// Related Resources Data
const relatedResourcesData = [
  { href: "/model-generation-timeline", label: "Model Generation Timeline" },
  { href: "/faqs", label: "FAQs" },
  { href: "/mouse-model-services", label: "Mouse Model Services" },
  { href: "/mouse-model-budgeting-guide", label: "Mouse Model Budgeting Guide" }
];

// CTA Data
const ctaData = {
  title: "Get Your Custom Quote",
  description: "Every project receives individualized attention and customized pricing based on your specific requirements.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function PricingOverviewPage() {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

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

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "name": "Mouse Model Pricing Overview",
            "description": "Custom mouse model pricing factors and budget planning. Understand costs for knockout, knockin, conditional, and humanized models.",
            "publisher": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory",
              "url": "https://www.genetargeting.com"
            },
            "articleSection": "Pricing Guide"
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
              <IconSettings size={14} color="#00d4d4" />
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
              <Link href="/request-quote" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#008080',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                Request a Quote
                <IconChevronRight size={16} color="#ffffff" />
              </Link>
              <Link href="/all-catalog-mouse-models" style={{
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
                View Catalog Models
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ background: '#ffffff', padding: '40px 20px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {statsData.map((stat, index) => (
                <div key={index} className="animate-in" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#008080', marginBottom: '4px' }}>
                    <UXUIDCAnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '.85rem', color: '#666' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Type Pricing Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Pricing Factors
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              Different model types involve varying levels of complexity
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {modelTypePricingData.map((model, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '28px',
                  borderTop: '4px solid #008080'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#333'
                    }}>
                      {model.title}
                    </h3>
                    <span style={{
                      background: 'rgba(0,128,128,0.1)',
                      color: '#008080',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '.75rem',
                      fontWeight: 600
                    }}>
                      {model.complexity}
                    </span>
                  </div>
                  <p style={{ fontSize: '.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Allele Complexity Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
              background: '#f7f7f7',
              borderRadius: '8px',
              padding: '32px',
              borderLeft: '4px solid #134978'
            }}>
              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#2384da',
                marginBottom: '12px'
              }}>
                {alleleComplexityData.title}
              </h2>
              <p style={{ fontSize: '.9rem', color: '#666', marginBottom: '20px' }}>
                {alleleComplexityData.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {alleleComplexityData.factors.map((factor, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '.85rem',
                    color: '#666'
                  }}>
                    <IconCheckCircle size={14} color="#134978" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Is Included Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {standardProjectIncludesData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              {standardProjectIncludesData.subtitle}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {standardProjectIncludesData.categories.map((category, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '14px'
                  }}>
                    {category.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '8px',
                        lineHeight: 1.5
                      }}>
                        <IconCheckCircle size={14} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Included Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
              background: '#f7f7f7',
              borderRadius: '8px',
              padding: '32px',
              borderLeft: '4px solid #2384da'
            }}>
              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '12px'
              }}>
                {notIncludedData.title}
              </h2>
              <p style={{ fontSize: '.9rem', color: '#666', marginBottom: '20px' }}>
                {notIncludedData.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {notIncludedData.items.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '.85rem',
                    color: '#666'
                  }}>
                    <IconShield size={14} color="#2384da" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Structure Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {paymentStructureData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              {paymentStructureData.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {paymentStructureData.milestones.map((item, index) => (
                <div key={index} className="animate-in" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#008080',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '.9rem'
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.95rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    {item.milestone}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Process Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              {quoteProcessData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {quoteProcessData.steps.map((step, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '28px',
                  borderTop: '4px solid #00d4d4'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(0,212,212,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    color: '#00d4d4',
                    fontWeight: 700
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Planning Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {budgetPlanningData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              {budgetPlanningData.subtitle}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {budgetPlanningData.strategies.map((strategy, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #008080'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {strategy.title}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog Models Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="animate-in" style={{
              background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
              borderRadius: '12px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,212,212,0.1) 0%, transparent 70%)'
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  {catalogModelsData.title}
                </h2>
                <p style={{
                  fontSize: '.95rem',
                  color: 'rgba(255,255,255,0.9)',
                  textAlign: 'center',
                  marginBottom: '24px'
                }}>
                  {catalogModelsData.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
                  {catalogModelsData.models.map((model, index) => (
                    <span key={index} style={{
                      background: 'rgba(0,212,212,0.2)',
                      border: '1px solid rgba(0,212,212,0.3)',
                      borderRadius: '20px',
                      padding: '8px 16px',
                      fontSize: '.85rem',
                      color: '#00d4d4'
                    }}>
                      {model}
                    </span>
                  ))}
                </div>
                <p style={{
                  fontSize: '.85rem',
                  color: 'rgba(255,255,255,0.8)',
                  textAlign: 'center',
                  marginBottom: '24px'
                }}>
                  {catalogModelsData.note}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/all-catalog-mouse-models" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#008080',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontSize: '.9rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}>
                    View All Catalog Models
                    <IconChevronRight size={16} color="#ffffff" />
                  </Link>
                </div>
              </div>
            </div>
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

        {/* Downloadable Pricing Guide Section */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <UXUIDCResourceLinks
              title="Download Pricing Guide"
              description="Get our detailed pricing guide with package options and service breakdowns."
              resources={pricingResources}
              variant="card"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Frequently Asked Questions
            </h2>
            <div className="animate-in">
              <UXUIDCAnimatedFAQ faqs={faqData} />
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
              {relatedResourcesData.map((resource, index) => (
                <Link key={index} href={resource.href} className="animate-in" style={{
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
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <UXUIDCFooter />
    </div>
  );
}
