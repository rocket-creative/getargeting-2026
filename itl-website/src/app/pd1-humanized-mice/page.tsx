'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconImage, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';
import CatalogSearch from '@/components/UXUIDC/CatalogSearch';
import TestimonialsSection from '@/app/components/TestimonialsSection';

// Hero Data
const heroData = {
  badge: "Immune Checkpoint Models",
  title: "PD1 Humanized Mouse Models",
  intro: "Since 1998, Ingenious Targeting Laboratory has supported immuno oncology researchers with custom humanized mouse models for checkpoint immunotherapy development. Our PD1 humanized mice enable direct testing of anti human PD1 therapeutic antibodies in immunocompetent mouse systems, supporting preclinical evaluation of clinical candidates.",
  description: "PD1 (programmed cell death protein 1, encoded by PDCD1) is a key immune checkpoint receptor expressed on activated T cells. Therapeutic antibodies targeting PD1 have transformed cancer treatment, with pembrolizumab, nivolumab, and other anti PD1 agents approved across multiple tumor types. Because these antibodies are designed specifically for human PD1 and show limited cross reactivity with mouse PD1, humanized models are essential for preclinical efficacy testing."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Why Humanize PD1 Data
const whyHumanizeData = {
  title: "Why Humanize PD1",
  sections: [
    {
      title: "Species Specificity of Therapeutic Antibodies",
      intro: "Anti PD1 therapeutic antibodies are engineered specifically for human PD1:",
      points: [
        "Antibody epitopes designed against human PD1 sequence",
        "Limited or no binding to mouse PD1 ortholog",
        "Cannot evaluate efficacy in wildtype mice",
        "Surrogate antibodies against mouse PD1 may not predict human responses"
      ],
      summary: "Humanized PD1 mice express the human target, enabling direct testing of clinical antibody candidates."
    },
    {
      title: "Maintaining Immunocompetent System",
      intro: "PD1 humanization preserves the mouse immune system:",
      points: [
        "Functional T cells expressing human PD1",
        "Intact tumor microenvironment interactions",
        "Normal immune cell development and function",
        "Physiological PD1/PDL1 axis signaling"
      ],
      summary: "Unlike xenograft models in immunodeficient mice, humanized checkpoint models enable immunotherapy studies in animals with functional adaptive immunity."
    },
    {
      title: "Translational Relevance",
      intro: "Humanized models improve translation to clinical outcomes:",
      points: [
        "Test the actual clinical candidate, not a surrogate",
        "Evaluate on target effects with human protein engagement",
        "Develop and validate human specific biomarkers",
        "Support regulatory submissions with relevant efficacy data"
      ]
    }
  ]
};

// Humanization Strategies Data
const strategiesData = {
  title: "Humanization Strategies",
  strategies: [
    {
      title: "Extracellular Domain Humanization",
      description: "The most common approach replaces the mouse PD1 extracellular domain with human sequence while retaining mouse intracellular signaling domains:",
      features: [
        "Human extracellular domain provides antibody binding epitopes",
        "Mouse transmembrane and intracellular domains preserved",
        "Normal signaling through mouse downstream pathways",
        "Maintained compatibility with mouse immune system"
      ],
      note: "This strategy is optimal for therapeutic antibody testing where the goal is to evaluate antibody binding and blocking activity."
    },
    {
      title: "Complete Gene Humanization",
      description: "Full replacement of mouse Pdcd1 with human PDCD1:",
      features: [
        "Complete human PD1 protein sequence",
        "Human specific signaling characteristics",
        "Study human PD1 biology comprehensively",
        "May require consideration of species specific interactions"
      ]
    },
    {
      title: "Conditional Humanization",
      description: "Conditional approaches enable controlled humanization:",
      features: [
        "Tissue specific humanization using Cre lox",
        "Inducible humanization for temporal control",
        "Compare humanized and mouse PD1 in same animal"
      ]
    }
  ]
};

// Applications Data
const applicationsData = {
  title: "Applications",
  applications: [
    {
      title: "Anti PD1 Antibody Efficacy Testing",
      description: "Primary application for PD1 humanized mice:",
      points: [
        "Test pembrolizumab, nivolumab, and other clinical antibodies",
        "Evaluate novel anti PD1 candidates",
        "Compare antibody potency and characteristics",
        "Assess Fc effector function contributions"
      ]
    },
    {
      title: "Combination Immunotherapy",
      description: "PD1 humanized mice support combination studies:",
      points: [
        "Anti PD1 plus chemotherapy",
        "Anti PD1 plus radiation",
        "Anti PD1 plus targeted therapy",
        "Anti PD1 plus other checkpoint inhibitors (dual humanized models)"
      ]
    },
    {
      title: "Tumor Model Compatibility",
      description: "PD1 humanized mice on C57BL/6 background are compatible with syngeneic tumor models. BALB/c background humanized models enable use of CT26, 4T1, and other BALB/c compatible tumor lines."
    },
    {
      title: "Biomarker Development",
      description: "Humanized models support translational biomarker work:",
      points: [
        "Human PD1 detection with clinical grade antibodies",
        "Pharmacodynamic biomarker validation",
        "Receptor occupancy assessment",
        "Immune activation markers"
      ]
    }
  ]
};

// Tumor Model Compatibility Table
const tumorModelData = [
  { model: "MC38", type: "Colon carcinoma", response: "Responsive" },
  { model: "B16", type: "Melanoma", response: "Variable" },
  { model: "LLC", type: "Lung carcinoma", response: "Variable" },
  { model: "E0771", type: "Breast carcinoma", response: "Responsive" }
];

// Combination Models Table
const combinationData = [
  { combination: "PD1 + CTLA4", applications: "Ipilimumab + nivolumab combinations" },
  { combination: "PD1 + LAG3", applications: "Next generation checkpoint combinations" },
  { combination: "PD1 + TIM3", applications: "Emerging combination strategies" },
  { combination: "PD1 + TIGIT", applications: "Novel checkpoint combinations" }
];

// Dual Checkpoint Data
const dualCheckpointData = {
  title: "Combination with Other Humanized Checkpoints",
  description: "PD1 humanization can be combined with other checkpoint humanizations. Dual humanized models enable evaluation of combination checkpoint inhibitor regimens using clinical antibodies against both targets.",
  links: [
    { href: "/ctla4-humanized-mice", label: "CTLA4 Humanized Mice" },
    { href: "/lag3-humanized-mice", label: "LAG3 Humanized Mice" }
  ],
  multiCheckpoint: "For complex combination studies, multiple checkpoint humanizations can be combined through breeding or sequential targeting. Our scientific team advises on efficient strategies for generating multi humanized models."
};

// Technical Considerations Data
const technicalData = {
  title: "Technical Considerations",
  sections: [
    {
      title: "Pre Germline Characterization",
      intro: "ES cell based targeting enables comprehensive characterization of PD1 humanized alleles before mouse generation:",
      points: [
        "Sequence verification confirms exact human sequence integration",
        "Junction analysis verifies mouse to human transitions",
        "Expression testing confirms human PD1 protein in ES cells",
        "Antibody binding can be tested in ES cells where applicable"
      ],
      summary: "Pre germline characterization ensures that humanized mice express functional human PD1 that engages therapeutic antibodies as intended."
    },
    {
      title: "Strain Background",
      intro: "Choose strain background based on tumor model compatibility:",
      points: [
        "C57BL/6: Compatible with MC38, B16, LLC, E0771",
        "BALB/c: Compatible with CT26, 4T1, EMT6"
      ],
      summary: "Our scientific team advises on optimal strain background for your research program."
    },
    {
      title: "Functional Validation",
      intro: "Validate humanized PD1 function in your experimental system:",
      points: [
        "Confirm human PD1 surface expression on T cells",
        "Verify therapeutic antibody binding",
        "Test functional checkpoint blockade",
        "Compare to wildtype controls"
      ]
    }
  ]
};

// Publications Data
const publicationsData = {
  title: "Selected Publications",
  intro: "Humanized checkpoint models generated by Ingenious Targeting Laboratory have supported immuno oncology research:",
  publications: [
    "Mlynarczyk C et al. 2023. BTG1 mutation yields supercompetitive B cells primed for malignant transformation. Science 379(6629): eabj0412.",
    "Chakrabarti S et al. 2024. Touch sensation requires the mechanically gated ion channel ELKIN1. Science 383(6686): 992 to 998.",
    "Clausen BE et al. 1999. Conditional gene targeting in macrophages and granulocytes using LysMcre mice. Transgenic Research 8(4): 265 to 277."
  ]
};

// Testimonials Data
const testimonialsData = [
  {
    quote: "iTL produced four conditional knockout mouse models on our behalf. They have been extremely helpful and informative at all stages of the project; all the way from construct design to breeding strategies and genotyping the new mouse models. I know where to turn when the need comes up again for another mouse project; it is certainly faster and cheaper than doing this by ourselves.",
    author: "William A. Coetzee, DSc",
    affiliation: "NYU School of Medicine"
  },
  {
    quote: "The quality of service was exceptional and performed to the highest possible standards.",
    author: "Albert Basson, PhD",
    affiliation: "King's College London"
  },
  {
    quote: "The Hephaestin flox model Ingenious has made for us has been great. It has helped generate eight research publications.",
    author: "Joshua Dunaief, PhD, MD",
    affiliation: "University of Pennsylvania"
  }
];

// FAQ Data
const faqData = [
  {
    question: "What is the difference between full humanization and ECD-only humanization for PD1?",
    answer: "Full humanization replaces the entire mouse PD1 gene with human PD1 sequence. ECD-only humanization replaces only the extracellular domain while retaining mouse transmembrane and cytoplasmic domains. Full humanization is preferred for antibody testing; ECD-only may preserve some mouse signaling functions."
  },
  {
    question: "Can PD1 humanized mice be combined with other checkpoint humanizations?",
    answer: "Yes. PD1 humanization can be combined with PDL1, CTLA4, LAG3, TIM3, or other checkpoint humanizations to create double, triple, or multi-checkpoint models. Common combinations include PD1+CTLA4 and PD1+LAG3 for combination checkpoint blockade studies."
  },
  {
    question: "Can PD1 humanized mice be used with syngeneic tumor models?",
    answer: "Yes. PD1 humanized mice on C57BL/6 background are compatible with syngeneic tumor models (MC38, B16, LLC, E0771) to create systems where both tumor and immune compartments express human targets. This enables evaluation of checkpoint blockade in immunocompetent animals with intact tumor immunity."
  }
];

// Related Links Data
const relatedLinksData = {
  checkpoints: [
    { href: "/pdl1-humanized-mice", label: "PDL1 Humanized Mice" },
    { href: "/ctla4-humanized-mice", label: "CTLA4 Humanized Mice" },
    { href: "/lag3-humanized-mice", label: "LAG3 Humanized Mice" },
    { href: "/tim3-humanized-mice", label: "TIM3 Humanized Mice" },
    { href: "/tigit-humanized-mice", label: "TIGIT Humanized Mice" },
    { href: "/humanized-immune-checkpoint-mice", label: "All Checkpoint Models" }
  ],
  modelTypes: [
    { href: "/humanized-mouse-models", label: "Humanized Mouse Models" },
    { href: "/knockin-mouse-models", label: "Knockin Mouse Models" },
    { href: "/immuno-oncology-mouse-models", label: "Immuno Oncology Models" },
    { href: "/oncology-mouse-models", label: "Oncology Mouse Models" }
  ],
  resources: [
    { href: "/es-cell-gene-targeting", label: "ES Cell Gene Targeting" },
    { href: "/c57bl6-mouse-background", label: "C57BL/6 Mouse Background" },
    { href: "/model-generation-timeline", label: "Model Generation Timeline" },
    { href: "/faqs", label: "FAQs" }
  ]
};

// CTA Data
const ctaData = {
  title: "Start Your PD1 Humanization Project",
  description: "Our scientific consultants are ready to discuss your PD1 humanization requirements and recommend the optimal strategy for your immuno oncology program. Initial consultation is provided at no charge and includes humanization approach recommendations, strain background guidance, and timeline estimates.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function PD1HumanizedMicePage() {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Hero animations
      const heroElements = document.querySelectorAll('.hero-animate');
      heroElements.forEach((el, index) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: "power2.out" }
        );
      });

      // Scroll-triggered animations
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
            "@type": "Service",
            "name": "PD1 Humanized Mouse Models",
            "description": "Custom PD1 humanized mouse models for anti PD1 antibody testing. Human PDCD1 extracellular domain knockin for immuno oncology research.",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory",
              "url": "https://www.genetargeting.com"
            },
            "serviceType": "Custom Mouse Model Generation",
            "areaServed": "Worldwide"
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
              <IconTarget size={14} color="#00d4d4" />
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
                textDecoration: 'none',
                transition: 'background 0.2s ease'
              }}>
                Request a Quote
                <IconChevronRight size={16} color="#ffffff" />
              </Link>
              <Link href="/humanized-mouse-models" style={{
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
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'border-color 0.2s ease'
              }}>
                All Humanized Models
              </Link>
            </div>
          </div>
        </section>

        {/* Catalog Search Section */}
        <section style={{ background: '#ffffff', padding: '40px 20px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <CatalogSearch maxResults={15} showTitle={true} />
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ background: '#f7f7f7', padding: '40px 20px', borderBottom: '1px solid #e0e0e0' }}>
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

        {/* Why Humanize PD1 Section */}
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
              {whyHumanizeData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {whyHumanizeData.sections.map((section, index) => (
                <div key={index} className="animate-in hover-card hover-card-teal group" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
                }}>
                  <h3 className="card-title transition-colors duration-300 group-hover:text-teal-600" style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {section.title}
                  </h3>
                  <p style={{ fontSize: '.9rem', color: '#666', marginBottom: '12px', lineHeight: 1.6 }}>
                    {section.intro}
                  </p>
                  {section.points && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px 0' }}>
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '.85rem',
                          color: '#666',
                          marginBottom: '8px',
                          lineHeight: 1.5
                        }}>
                          <IconCheckCircle size={16} color="#008080" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.summary && (
                    <p style={{ fontSize: '.85rem', color: '#333', fontWeight: 500, lineHeight: 1.5 }}>
                      {section.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Humanization Strategies Section */}
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
              {strategiesData.title}
            </h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {strategiesData.strategies.map((strategy, index) => (
                <div key={index} className="animate-in" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #008080'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {strategy.title}
                  </h3>
                  <p style={{ fontSize: '.9rem', color: '#666', marginBottom: '16px', lineHeight: 1.6 }}>
                    {strategy.description}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {strategy.features.map((feature, fIndex) => (
                      <div key={fIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        lineHeight: 1.5
                      }}>
                        <IconCheckCircle size={16} color="#008080" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  {strategy.note && (
                    <p style={{ fontSize: '.85rem', color: '#333', fontWeight: 500, marginTop: '16px', lineHeight: 1.5 }}>
                      {strategy.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
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
              {applicationsData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {applicationsData.applications.map((app, index) => (
                <div key={index} className="animate-in" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #00d4d4'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(0,128,128,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <IconFlask size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {app.title}
                  </h3>
                  <p style={{ fontSize: '.9rem', color: '#666', marginBottom: '12px', lineHeight: 1.6 }}>
                    {app.description}
                  </p>
                  {app.points && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {app.points.map((point, pIndex) => (
                        <li key={pIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '.85rem',
                          color: '#666',
                          marginBottom: '6px',
                          lineHeight: 1.5
                        }}>
                          <IconCheckCircle size={14} color="#008080" style={{ flexShrink: 0, marginTop: '3px' }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tumor Model Compatibility Table Section */}
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
              Tumor Model Compatibility
            </h2>
            <div className="animate-in" style={{
              background: '#f7f7f7',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#0a253c' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#ffffff', fontSize: '.9rem', fontWeight: 600 }}>Tumor Model</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#ffffff', fontSize: '.9rem', fontWeight: 600 }}>Tumor Type</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#ffffff', fontSize: '.9rem', fontWeight: 600 }}>PD1/PDL1 Response</th>
                  </tr>
                </thead>
                <tbody>
                  {tumorModelData.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '14px 20px', fontSize: '.9rem', color: '#333', fontWeight: 600 }}>{row.model}</td>
                      <td style={{ padding: '14px 20px', fontSize: '.9rem', color: '#666' }}>{row.type}</td>
                      <td style={{ padding: '14px 20px', fontSize: '.9rem', color: '#666' }}>{row.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dual Checkpoint Humanization Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {dualCheckpointData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 30px',
              lineHeight: 1.7
            }}>
              {dualCheckpointData.description}
            </p>
            <div className="animate-in" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}>
              {dualCheckpointData.links.map((link, index) => (
                <Link key={index} href={link.href} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#008080',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.2s ease'
                }}>
                  <IconDNA size={18} color="#008080" />
                  {link.label}
                  <IconChevronRight size={16} color="#008080" />
                </Link>
              ))}
            </div>
            
            <h3 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Combination Models
            </h3>
            <div className="animate-in" style={{
              background: '#ffffff',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#0a253c' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#ffffff', fontSize: '.9rem', fontWeight: 600 }}>Combination</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', color: '#ffffff', fontSize: '.9rem', fontWeight: 600 }}>Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {combinationData.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '14px 20px', fontSize: '.9rem', color: '#333', fontWeight: 600 }}>{row.combination}</td>
                      <td style={{ padding: '14px 20px', fontSize: '.9rem', color: '#666' }}>{row.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="animate-in" style={{
              fontSize: '.85rem',
              color: '#666',
              textAlign: 'center',
              marginTop: '20px',
              lineHeight: 1.6
            }}>
              {dualCheckpointData.multiCheckpoint}
            </p>
          </div>
        </section>

        {/* Technical Considerations Section */}
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
              {technicalData.title}
            </h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {technicalData.sections.map((section, index) => (
                <div key={index} className="animate-in" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #00d4d4'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(0,128,128,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconSettings size={24} color="#008080" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '12px'
                      }}>
                        {section.title}
                      </h3>
                      <p style={{ fontSize: '.9rem', color: '#666', marginBottom: '12px', lineHeight: 1.6 }}>
                        {section.intro}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px 0' }}>
                        {section.points.map((point, pIndex) => (
                          <li key={pIndex} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '.85rem',
                            color: '#666',
                            marginBottom: '6px',
                            lineHeight: 1.5
                          }}>
                            <IconCheckCircle size={14} color="#008080" style={{ flexShrink: 0, marginTop: '3px' }} />
                            {point}
                          </li>
                        ))}
                      </ul>
                      {section.summary && (
                        <p style={{ fontSize: '.85rem', color: '#333', fontWeight: 500, lineHeight: 1.5 }}>
                          {section.summary}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
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
              {publicationsData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '30px',
              lineHeight: 1.6
            }}>
              {publicationsData.intro}
            </p>
            <div style={{ display: 'grid', gap: '16px' }}>
              {publicationsData.publications.map((pub, index) => (
                <div key={index} className="animate-in" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '20px',
                  borderLeft: '4px solid #008080'
                }}>
                  <p style={{ fontSize: '.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{pub}</p>
                </div>
              ))}
            </div>
            <div className="animate-in" style={{ textAlign: 'center', marginTop: '24px' }}>
              <Link href="/publications" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#008080',
                fontSize: '.9rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}>
                View All Publications
                <IconChevronRight size={16} color="#008080" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection testimonials={testimonialsData} variant="dark" />

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

        {/* Related Links Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div className="animate-in">
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '16px'
                }}>
                  Other Humanized Checkpoint Models
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.checkpoints.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link href={link.href} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#008080',
                        fontSize: '.9rem',
                        textDecoration: 'none'
                      }}>
                        <IconChevronRight size={14} color="#008080" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-in">
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '16px'
                }}>
                  Related Model Types
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.modelTypes.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link href={link.href} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#008080',
                        fontSize: '.9rem',
                        textDecoration: 'none'
                      }}>
                        <IconChevronRight size={14} color="#008080" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-in">
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '16px'
                }}>
                  Project Resources
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.resources.map((link, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <Link href={link.href} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#008080',
                        fontSize: '.9rem',
                        textDecoration: 'none'
                      }}>
                        <IconChevronRight size={14} color="#008080" />
                        {link.label}
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
    </div>
  );
}
