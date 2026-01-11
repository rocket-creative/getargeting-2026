'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { UXUIDCNavigation } from '@/components/UXUIDC/Navigation';
import { UXUIDCFooter } from '@/components/UXUIDC/Footer';
import { UXUIDCAnimatedFAQ } from '@/components/UXUIDC/AnimatedFAQ';
import { UXUIDCAnimatedCounter } from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconQuote, IconChevronRight, IconCheckCircle, IconShield, IconLayers, IconImage } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Resources",
  title: "Mouse Model Resources",
  intro: "Ingenious Targeting Laboratory provides comprehensive resources to help researchers design, implement, and optimize custom mouse model projects.",
  description: "From selection guides that clarify strategic decisions to case studies demonstrating successful project outcomes, these resources draw on our experience from more than 2,500 projects completed since 1998."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Strategy Guides Data
const strategyGuidesData = {
  title: "Strategy Guides",
  description: "Making the right design decisions early in your project maximizes research value and minimizes timeline. These guides help you navigate key strategic choices:",
  guides: [
    {
      href: "/knockout-strategy-guide",
      title: "Knockout Strategy Guide",
      description: "Compare global knockout, conditional knockout, and knockout first approaches. Understand when each strategy provides optimal research outcomes and how to match your approach to specific research questions."
    },
    {
      href: "/conditional-vs-conventional-guide",
      title: "Conditional vs Conventional Guide",
      description: "Detailed comparison of conditional and conventional knockout strategies including timeline considerations, cost factors, and flexibility for future research applications."
    },
    {
      href: "/humanization-strategy-guide",
      title: "Humanization Strategy Guide",
      description: "Navigate decisions about gene replacement, receptor humanization, and immune checkpoint humanization. Understand technical considerations and research application implications."
    },
    {
      href: "/reporter-selection-guide",
      title: "Reporter Selection Guide",
      description: "Compare fluorescent proteins, enzymatic reporters, and bioluminescent systems. Match reporter characteristics to your imaging modality and research requirements."
    },
    {
      href: "/cre-line-selection-guide",
      title: "Cre Line Selection Guide",
      description: "Identify appropriate Cre driver lines for tissue specific gene deletion. Understand recombination efficiency, specificity considerations, and available resources."
    }
  ]
};

// Planning Guides Data
const planningGuidesData = {
  title: "Planning Guides",
  guides: [
    {
      href: "/model-generation-timeline",
      title: "Model Generation Timeline",
      description: "Detailed breakdown of project phases from targeting vector construction through germline transmission. Understand what determines timeline and options for acceleration."
    },
    {
      href: "/mouse-model-budgeting-guide",
      title: "Mouse Model Budgeting Guide",
      description: "Comprehensive guide to project costs including targeting vector, ES cell targeting, microinjection, breeding, and ongoing colony maintenance considerations."
    },
    {
      href: "/bench-to-breeding-guide",
      title: "Bench to Breeding Guide",
      description: "End to end overview of the mouse model generation process including decision points, deliverables, and what to expect at each project phase."
    }
  ]
};

// Case Studies Data
const caseStudiesData = {
  title: "Case Studies",
  description: "Real project examples demonstrate how Ingenious Targeting Laboratory approaches complex targeting challenges and delivers research ready mouse models:",
  studies: [
    {
      href: "/case-studies/embryonic-lethal-conditional",
      title: "Embryonic Lethal Conditional",
      description: "How conditional allele design enabled study of a gene essential for embryonic development without disrupting normal development."
    },
    {
      href: "/case-studies/immune-checkpoint-humanization",
      title: "Immune Checkpoint Humanization",
      description: "PD1 humanization project enabling preclinical testing of checkpoint inhibitor therapeutics."
    },
    {
      href: "/case-studies/lineage-tracing-reporter",
      title: "Lineage Tracing Reporter",
      description: "tdTomato reporter knockin enabling fate mapping of a rare cell population in metabolic disease research."
    },
    {
      href: "/case-studies/bac-integration",
      title: "BAC Integration",
      description: "Complex targeting project integrating human genomic region for humanization of a multi gene cluster."
    }
  ],
  viewAllHref: "/case-studies"
};

// Technical Resources Data
const technicalResourcesData = {
  title: "Technical Resources",
  categories: [
    {
      title: "Technology Documentation",
      description: "Detailed technical information about Ingenious Targeting Laboratory's gene targeting approaches:",
      links: [
        { href: "/es-cell-gene-targeting", label: "ES Cell Gene Targeting" },
        { href: "/cre-lox-system", label: "Cre-Lox System" },
        { href: "/derivative-alleles", label: "Derivative Alleles" },
        { href: "/selection-cassette-design", label: "Selection Cassette Design" },
        { href: "/safe-harbor-locus", label: "Safe Harbor Locus" }
      ]
    },
    {
      title: "Strain Background Information",
      links: [
        { href: "/c57bl6-mouse-background", label: "C57BL/6 Mouse Background" },
        { href: "/strain-selection-guide", label: "Strain Selection Guide" },
        { href: "/backcrossing-services", label: "Backcrossing Services" }
      ]
    }
  ]
};

// Publications Data
const publicationsData = {
  title: "Publications",
  description: "Ingenious Targeting Laboratory generated mouse models have contributed to more than 800 peer reviewed publications across all major therapeutic areas and journals including Nature, Cell, Science, and specialty publications.",
  features: [
    "Searchable archive by therapeutic area",
    "Publications organized by model type",
    "Recent high impact publications",
    "Full citation information"
  ],
  href: "/publications"
};

// Video Library Data
const videoLibraryData = {
  title: "Video Library",
  description: "Educational videos covering gene targeting concepts, project workflows, and technical approaches:",
  videos: [
    "Understanding Conditional Knockouts",
    "The Derivative Allele System Explained",
    "ES Cell Targeting Process Overview",
    "Project Planning Webinar Series"
  ],
  href: "/video-library"
};

// Glossary Data
const glossaryData = {
  title: "Glossary",
  description: "Technical terminology reference for gene targeting and mouse genetics:",
  items: [
    "Allele nomenclature conventions",
    "Recombinase system terminology",
    "ES cell and mouse genetics terms",
    "Project phase definitions"
  ],
  href: "/glossary"
};

// Testimonials Data
const testimonialsData = [
  {
    quote: "The Hephaestin flox model made by Ingenious is now the basis for eight research publications from multiple research groups in three countries.",
    author: "Joshua Dunaief, MD, PhD",
    affiliation: "University of Pennsylvania"
  },
  {
    quote: "The quality of service was exceptional. The team at Ingenious consistently met the highest possible standards in every aspect of our project.",
    author: "Albert Basson, PhD",
    affiliation: "King's College London"
  }
];

// Related Services Data
const relatedServicesData = [
  { href: "/colony-management-services", label: "Colony Management Services" },
  { href: "/cryopreservation-services", label: "Cryopreservation Services" },
  { href: "/mouse-genotyping-service", label: "Mouse Genotyping Service" },
  { href: "/phenotyping-services", label: "Phenotyping Services" }
];

// FAQ Data
const faqData = [
  {
    question: "What resources does ITL provide for mouse model projects?",
    answer: "ITL provides comprehensive resources including selection guides (knockout strategy, conditional vs conventional, humanization strategy, reporter selection, Cre line selection), planning guides (model generation timeline, budgeting guide), case studies demonstrating successful project outcomes, technical resources, and FAQs addressing common project questions."
  },
  {
    question: "How do I choose the right knockout or knockin strategy?",
    answer: "Use the knockout or knockin strategy guide to compare global knockout, conditional knockout, and knockout-first approaches. Selection depends on whether the gene is essential (conditional avoids lethality), whether tissue-specific studies are needed (conditional enables spatial control), and whether temporal control is required (inducible conditional). ITL's scientific consultants provide complimentary consultation to help select optimal strategies."
  },
  {
    question: "Where can I find case studies of successful projects?",
    answer: "Case studies are available in the resources section and include examples of conditional knockout for embryonic lethal genes, humanized immune checkpoint models, reporter knockin for lineage tracing, and large-scale targeting for BAC integration. These demonstrate how ITL approaches complex targeting challenges and delivers research-ready models."
  },
  {
    question: "How do I access ITL's technical resources?",
    answer: "Technical resources including selection guides, planning guides, case studies, and FAQs are available in the resources section. ITL's scientific consultants also provide complimentary project design consultations to help plan optimal mouse model strategies. Contact ITL through the request quote form or schedule a consultation."
  }
];

// CTA Data
const ctaData = {
  title: "Start Your Project",
  description: "Ready to discuss your research goals? Our scientific consultants provide complimentary project design consultations to help you plan the optimal mouse model strategy.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function ResourcesPage() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Mouse Model Resources",
            "description": "Mouse model selection guides, case studies, FAQs, and technical resources. Expert guidance for knockout, knockin, and humanized model projects since 1998.",
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
              <Link href="/case-studies" style={{
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
                View Case Studies
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

        {/* Selection Guides Section */}
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
              Selection Guides
            </h2>

            {/* Strategy Guides */}
            <h3 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '12px',
              marginTop: '40px'
            }}>
              {strategyGuidesData.title}
            </h3>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              marginBottom: '24px',
              lineHeight: 1.6
            }}>
              {strategyGuidesData.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
              {strategyGuidesData.guides.map((guide, index) => (
                <Link key={index} href={guide.href} className="animate-in" style={{
                  display: 'block',
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080',
                  textDecoration: 'none'
                }}>
                  <h4 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {guide.title}
                  </h4>
                  <p style={{
                    fontSize: '.85rem',
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '12px'
                  }}>
                    {guide.description}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '.85rem',
                    fontWeight: 600,
                    color: '#008080'
                  }}>
                    Read Guide
                    <IconChevronRight size={14} color="#008080" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Planning Guides */}
            <h3 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '24px'
            }}>
              {planningGuidesData.title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {planningGuidesData.guides.map((guide, index) => (
                <Link key={index} href={guide.href} className="animate-in" style={{
                  display: 'block',
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #134978',
                  textDecoration: 'none'
                }}>
                  <h4 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {guide.title}
                  </h4>
                  <p style={{
                    fontSize: '.85rem',
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '12px'
                  }}>
                    {guide.description}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '.85rem',
                    fontWeight: 600,
                    color: '#134978'
                  }}>
                    Read Guide
                    <IconChevronRight size={14} color="#134978" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {caseStudiesData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              {caseStudiesData.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {caseStudiesData.studies.map((study, index) => (
                <Link key={index} href={study.href} className="animate-in" style={{
                  display: 'block',
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '28px',
                  borderLeft: '4px solid #00d4d4',
                  textDecoration: 'none'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {study.title}
                  </h3>
                  <p style={{
                    fontSize: '.9rem',
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '14px'
                  }}>
                    {study.description}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '.85rem',
                    fontWeight: 600,
                    color: '#008080'
                  }}>
                    Read Case Study
                    <IconChevronRight size={14} color="#008080" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="animate-in" style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link href={caseStudiesData.viewAllHref} style={{
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
                View All Case Studies
                <IconChevronRight size={16} color="#ffffff" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Resources Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              {technicalResourcesData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {technicalResourcesData.categories.map((category, index) => (
                <div key={index} className="animate-in" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '28px',
                  borderTop: '4px solid #008080'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {category.title}
                  </h3>
                  {category.description && (
                    <p style={{
                      fontSize: '.9rem',
                      color: '#666',
                      marginBottom: '16px'
                    }}>
                      {category.description}
                    </p>
                  )}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {category.links.map((link, idx) => (
                      <li key={idx} style={{ marginBottom: '10px' }}>
                        <Link href={link.href} style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '.9rem',
                          color: '#008080',
                          textDecoration: 'none',
                          fontWeight: 500
                        }}>
                          <IconChevronRight size={14} color="#008080" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
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
                  {publicationsData.title}
                </h2>
                <p style={{
                  fontSize: '.95rem',
                  color: 'rgba(255,255,255,0.9)',
                  textAlign: 'center',
                  marginBottom: '24px',
                  lineHeight: 1.7
                }}>
                  {publicationsData.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '500px', margin: '0 auto 24px' }}>
                  {publicationsData.features.map((feature, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '.9rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}>
                      <IconCheckCircle size={16} color="#00d4d4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Link href={publicationsData.href} style={{
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
                    Browse Publications
                    <IconChevronRight size={16} color="#ffffff" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ background: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              What Researchers Say
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="animate-in" style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  padding: '28px',
                  borderLeft: '4px solid #00d4d4'
                }}>
                  <div style={{ marginBottom: '16px' }}>
                    <IconQuote size={28} color="#00d4d4" />
                  </div>
                  <p style={{
                    fontSize: '.95rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                    fontStyle: 'italic'
                  }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p style={{ fontSize: '.9rem', color: '#00d4d4', fontWeight: 600, marginBottom: '4px' }}>
                      {testimonial.author}
                    </p>
                    <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,0.7)' }}>
                      {testimonial.affiliation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-in" style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link href="/testimonials" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#00d4d4',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                View More Testimonials
                <IconChevronRight size={16} color="#00d4d4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Video Library & Glossary Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {/* Video Library */}
              <div className="animate-in" style={{
                background: '#ffffff',
                borderRadius: '8px',
                padding: '28px',
                borderTop: '4px solid #00d4d4'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(0,212,212,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <IconImage size={24} color="#00d4d4" />
                </div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '12px'
                }}>
                  {videoLibraryData.title}
                </h3>
                <p style={{
                  fontSize: '.9rem',
                  color: '#666',
                  marginBottom: '14px'
                }}>
                  {videoLibraryData.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                  {videoLibraryData.videos.map((video, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '.85rem',
                      color: '#666',
                      marginBottom: '8px'
                    }}>
                      <IconCheckCircle size={14} color="#00d4d4" />
                      <span>{video}</span>
                    </li>
                  ))}
                </ul>
                <Link href={videoLibraryData.href} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  color: '#008080',
                  textDecoration: 'none'
                }}>
                  View Video Library
                  <IconChevronRight size={14} color="#008080" />
                </Link>
              </div>

              {/* Glossary */}
              <div className="animate-in" style={{
                background: '#ffffff',
                borderRadius: '8px',
                padding: '28px',
                borderTop: '4px solid #134978'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(19,73,120,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <IconLayers size={24} color="#134978" />
                </div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '12px'
                }}>
                  {glossaryData.title}
                </h3>
                <p style={{
                  fontSize: '.9rem',
                  color: '#666',
                  marginBottom: '14px'
                }}>
                  {glossaryData.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                  {glossaryData.items.map((item, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '.85rem',
                      color: '#666',
                      marginBottom: '8px'
                    }}>
                      <IconCheckCircle size={14} color="#134978" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={glossaryData.href} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  color: '#134978',
                  textDecoration: 'none'
                }}>
                  View Glossary
                  <IconChevronRight size={14} color="#134978" />
                </Link>
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

        {/* Related Services Section */}
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
              Related Services
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {relatedServicesData.map((service, index) => (
                <Link key={index} href={service.href} className="animate-in" style={{
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
                  {service.label}
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
