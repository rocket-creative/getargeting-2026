'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';
import TestimonialsSection from '@/app/components/TestimonialsSection';

// Hero Data
const heroData = {
  badge: "Inducible Gene Control",
  title: "Doxycycline Inducible Systems",
  intro: "Since 1998, ingenious targeting laboratory has implemented doxycycline inducible systems in mouse models requiring reversible, tunable gene expression control for transgene regulation, disease modeling, and therapeutic target validation.",
  description: "Doxycycline inducible systems use tetracycline responsive elements to control transgene expression. Unlike permanent Cre mediated recombination, Tet systems provide reversible control, allowing genes to be turned on and off repeatedly by administering or withdrawing doxycycline."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Core Components Data
const coreComponentsData = {
  title: "How Tet Systems Work",
  intro: "Understanding the core components of tetracycline-controlled gene expression systems.",
  components: [
    {
      title: "Tetracycline Responsive Element (TRE)",
      description: "Promoter containing multiple tetO operator sequences upstream of minimal promoter. Drives expression only when bound by transactivator."
    },
    {
      title: "Transactivator Proteins",
      description: "Fusion proteins combining tetracycline repressor DNA binding domain with transcriptional activation domain."
    },
    {
      title: "Doxycycline",
      description: "Tetracycline derivative that controls transactivator binding to TRE. More stable and better tissue penetration than tetracycline."
    }
  ]
};

// System Configurations Data
const systemConfigData = {
  title: "Two System Configurations",
  systems: [
    {
      title: "Tet Off (tTA System)",
      description: "tTA (tetracycline transactivator) binds TRE and activates transcription by default. Doxycycline causes conformational change that releases tTA from TRE, silencing expression.",
      tableData: [
        { state: "Active", doxycycline: "Absent", binding: "Bound to TRE", transgene: "ON" },
        { state: "Inactive", doxycycline: "Present", binding: "Released from TRE", transgene: "OFF" }
      ]
    },
    {
      title: "Tet On (rtTA System)",
      description: "rtTA (reverse tetracycline transactivator) requires doxycycline to bind TRE. No expression without drug; expression activated by doxycycline administration.",
      tableData: [
        { state: "Inactive", doxycycline: "Absent", binding: "Cannot bind TRE", transgene: "OFF" },
        { state: "Active", doxycycline: "Present", binding: "Bound to TRE", transgene: "ON" }
      ]
    }
  ]
};

// Selection Guide Data
const selectionGuideData = {
  title: "System Selection Guide",
  guides: [
    {
      title: "When to Choose Tet Off",
      features: [
        "Baseline Expression Needed: Gene should be expressed normally until you want to turn it off",
        "Studying Gene Loss: Model acute gene silencing to study withdrawal effects",
        "Long Term Expression: Default ON state without continuous drug administration",
        "Developmental Studies: Gene expressed during development, then silenced at specific time"
      ]
    },
    {
      title: "When to Choose Tet On",
      features: [
        "Controlled Activation: Gene should be silent until you want to turn it on",
        "Toxic Transgenes: Keep potentially harmful genes silent until experimental timepoint",
        "Oncogene Studies: Activate oncogene at defined time to model tumor initiation",
        "Therapeutic Modeling: Model drug target activation rather than inhibition"
      ]
    }
  ]
};

// Improved Variants Data
const improvedVariantsData = {
  title: "Improved rtTA Variants",
  intro: "Original rtTA showed limitations including background activity and suboptimal induction. Improved variants address these issues:",
  variants: [
    {
      title: "rtTA Advanced (rtTA3)",
      improvements: "Lower background activity without doxycycline. Higher fold induction. Better stability.",
      mutations: "Multiple amino acid changes improve doxycycline affinity and reduce ligand independent activity.",
      recommendation: "Use rtTA3 or rtTA Advanced for new projects requiring Tet On control."
    },
    {
      title: "rtTA2S M2",
      properties: "High doxycycline sensitivity allows lower doses. Reduced background activity.",
      applications: "Suitable when minimizing doxycycline dose is important."
    },
    {
      title: "Tet3G",
      properties: "Third generation system with minimal background and high induction ratio.",
      considerations: "Requires specific TRE3G promoter for optimal function."
    }
  ]
};

// Implementation Strategies Data
const implementationData = {
  title: "Implementation Strategies",
  strategies: [
    {
      title: "Two Component System",
      description: "Standard approach requires two transgenic elements:",
      components: [
        "Component 1: Transactivator - Tissue specific promoter driving tTA or rtTA expression. Determines WHERE control is possible.",
        "Component 2: TRE Responder - TRE promoter driving gene of interest. Determines WHAT is controlled.",
        "Breeding: Cross transactivator line to responder line. Double transgenic offspring have inducible control."
      ]
    },
    {
      title: "Single Component Systems",
      description: "Alternative approaches for streamlined implementation:",
      components: [
        "Autoregulatory: TRE drives both gene of interest and transactivator. Self amplifying loop.",
        "Knockin Approaches: Insert TRE responder at endogenous locus for single site integration."
      ]
    },
    {
      title: "Combining with Cre",
      description: "TRE drives Cre expression. Doxycycline controls when Cre is produced, enabling temporal control of permanent genetic changes.",
      components: [
        "Advantages: Combines reversible drug control with permanent genetic modification.",
        "Stop doxycycline to stop Cre production; existing recombination is permanent."
      ]
    }
  ]
};

// Administration Data
const administrationData = {
  title: "Doxycycline Administration",
  methods: [
    {
      title: "Drinking Water",
      features: [
        "Standard Method: Dissolve doxycycline in drinking water at 1 to 2 mg/mL",
        "Sweetening: Add 5% sucrose to mask bitter taste and ensure adequate consumption",
        "Light Protection: Doxycycline is light sensitive. Use amber bottles or wrap in foil",
        "Change Frequency: Replace water every 2 to 3 days to maintain potency",
        "Dosing: Mice drink approximately 5 mL/day, providing roughly 5 to 10 mg doxycycline daily"
      ]
    },
    {
      title: "Doxycycline Diet",
      features: [
        "Commercial Diets: Available at 200, 625, 1000, or 2000 mg/kg diet",
        "Advantages: More consistent dosing. No water bottle issues. Better for large cohorts",
        "Considerations: More expensive than water. May take 1 to 2 days for full induction"
      ]
    },
    {
      title: "Injection",
      features: [
        "IP Injection: 50 to 100 mg/kg for rapid induction",
        "Applications: Acute studies or when oral administration is problematic",
        "Limitations: Not practical for long term studies. More stressful to animals"
      ]
    }
  ]
};

// Timing Data
const timingData = {
  title: "Timing and Kinetics",
  sections: [
    {
      title: "Induction Kinetics",
      points: [
        "Onset: Expression changes typically begin within 12 to 24 hours of doxycycline administration",
        "Maximum Effect: Full induction usually achieved within 48 to 72 hours",
        "Dose Response: Higher doxycycline concentrations generally produce higher expression levels (to a plateau)"
      ]
    },
    {
      title: "Deinduction Kinetics",
      points: [
        "Clearance: Doxycycline half life in mice is approximately 3 to 4 hours in serum, but tissue levels persist longer",
        "Expression Decay: After doxycycline withdrawal, expression decreases over 2 to 5 days depending on tissue and transgene",
        "Considerations: Proteins with long half lives persist after transcription stops. Plan for appropriate washout periods"
      ]
    },
    {
      title: "Reversibility Experiments",
      points: [
        "Multiple Cycles: Tet systems support repeated on/off cycling",
        "Applications: Model intermittent drug treatment. Study adaptation to repeated gene changes"
      ]
    }
  ]
};

// Technical Considerations Data
const technicalData = {
  title: "Technical Considerations",
  considerations: [
    {
      title: "Background Activity",
      problem: "rtTA may show low level TRE activation without doxycycline (leaky expression).",
      solutions: "Use improved rtTA variants (rtTA3, rtTA2S M2). Include uninduced controls. Consider tTS (tetracycline silencer) to actively repress TRE without doxycycline."
    },
    {
      title: "Position Effects",
      problem: "Transgene Integration: Random integration can cause variable expression depending on genomic location.",
      solutions: "Screen multiple founder lines for optimal expression. Use targeted integration at safe harbor locus (Rosa26)."
    },
    {
      title: "Doxycycline Effects",
      problem: "Microbiome: Doxycycline affects gut microbiome, potentially confounding metabolic or immunological studies. Mitochondria: Tetracyclines can affect mitochondrial protein synthesis at high doses.",
      solutions: "Include doxycycline treated controls without Tet system to assess drug effects."
    }
  ]
};

// Applications Data
const applicationsData = {
  title: "Applications",
  applications: [
    {
      title: "Oncology",
      description: "Inducible Oncogenes: Tet On systems activate oncogene expression at defined time to model tumor initiation. Reversible Cancer Models: Remove doxycycline to study tumor regression upon oncogene withdrawal (oncogene addiction).",
      example: "Example: Tet O MYC models demonstrate tumor regression when MYC expression is silenced."
    },
    {
      title: "Neuroscience",
      description: "Circuit Manipulation: Control expression of channel proteins or receptors in specific brain regions. Neurodegenerative Disease: Inducible expression of disease proteins (tau, alpha synuclein) at adult stages."
    },
    {
      title: "Metabolism",
      description: "Inducible Metabolic Genes: Control expression of enzymes or transporters to study acute metabolic effects. Therapeutic Modeling: Model effects of gene therapy by inducing therapeutic transgene expression."
    },
    {
      title: "Developmental Biology",
      description: "Timed Gene Expression: Activate developmental regulators at specific stages. Rescue Experiments: Re-express gene in knockout background to confirm phenotype specificity."
    }
  ]
};

// Testimonials Data
// Verified testimonials from master data - https://www.genetargeting.com/testimonials
import { getTestimonialById, formatAuthorWithCredentials } from '@/data/verifiedTestimonials';

const plumleyTestimonial = getTestimonialById('plumley-warren')!;

const testimonialsData = [
  { quote: plumleyTestimonial.quote, author: formatAuthorWithCredentials(plumleyTestimonial), affiliation: plumleyTestimonial.affiliation },
];

// FAQ Data
const faqData = [
  {
    question: "How do doxycycline-inducible systems work?",
    answer: "Doxycycline-inducible systems use two components: a transactivator (tTA or rtTA) expressed under a tissue-specific promoter, and a responder (TRE promoter driving gene of interest). In Tet-Off systems (tTA), doxycycline prevents expression; removal activates expression. In Tet-On systems (rtTA), doxycycline activates expression."
  },
  {
    question: "What is the difference between Tet-Off and Tet-On systems?",
    answer: "Tet-Off (tTA) requires continuous absence of doxycycline for expression; adding doxycycline turns off expression. Tet-On (rtTA) requires doxycycline presence for expression; removing doxycycline turns off expression. Tet-On is generally preferred for experimental flexibility and reversibility."
  },
  {
    question: "How is doxycycline administered to mice?",
    answer: "Doxycycline is typically administered in drinking water (1-2 mg/mL with 5% sucrose) or in diet (200-2000 mg/kg). Drinking water requires changing every 2-3 days and light protection. Diet provides more consistent dosing and is better for large cohorts. IP injection (50-100 mg/kg) provides rapid induction."
  },
  {
    question: "Can doxycycline systems be combined with Cre-lox?",
    answer: "Yes. TRE can drive Cre expression, enabling doxycycline control of when Cre is produced. This combines reversible drug control (doxycycline) with permanent genetic modification (Cre-mediated recombination). Stopping doxycycline stops Cre production, but existing recombination is permanent."
  }
];

// Related Links Data
const relatedLinksData = {
  inducibleSystems: [
    { href: "/inducible-gene-expression", label: "Inducible Gene Expression" },
    { href: "/tamoxifen-inducible-cre", label: "Tamoxifen Inducible Cre" },
    { href: "/tet-on-tet-off-systems", label: "Tet On Tet Off Systems" }
  ],
  modelTypes: [
    { href: "/inducible-conditional-knockout", label: "Inducible Conditional Knockout" },
    { href: "/conditional-knockout-mouse-models", label: "Conditional Knockout Mouse Models" },
    { href: "/transgenic-mouse-service", label: "Transgenic Mouse Service" }
  ],
  technologies: [
    { href: "/safe-harbor-locus", label: "Safe Harbor Locus" },
    { href: "/rosa26", label: "Rosa26" }
  ]
};

// CTA Data
const ctaData = {
  title: "Our Tet System Services",
  description: "In need of a custom inducible mouse model? Contact us to discuss your specific project details.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function DoxycyclineInducibleSystemsPage() {
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
            "@type": "Service",
            "name": "Doxycycline Inducible Systems",
            "description": "Doxycycline inducible systems provide reversible gene expression control in mice. Learn about Tet On, Tet Off, rtTA variants, and experimental applications.",
            "provider": {
              "@type": "Organization",
              "name": "ingenious targeting laboratory",
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
              fontWeight: 400,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '16px',
              lineHeight: 1.7,
              maxWidth: '800px'
            }}>
              {heroData.intro}
            </p>
            <p className="hero-animate" style={{
              fontSize: '.9rem',
              fontWeight: 400,
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
              <Link href="/inducible-gene-expression" style={{
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
                All Inducible Systems
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

        {/* Core Components Section */}
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
              {coreComponentsData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              {coreComponentsData.intro}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {coreComponentsData.components.map((component, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
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
                    <IconDNA size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {component.title}
                  </h3>
                  <p style={{ fontSize: '.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Configurations Section */}
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
              {systemConfigData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {systemConfigData.systems.map((system, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #00d4d4'
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
                    <IconSettings size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {system.title}
                  </h3>
                  <p style={{ fontSize: '.9rem', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>
                    {system.description}
                  </p>
                  <div style={{
                    background: '#ffffff',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.8rem' }}>
                      <thead>
                        <tr style={{ background: '#0a253c' }}>
                          <th style={{ padding: '8px', color: '#fff', fontWeight: 600, textAlign: 'left' }}>State</th>
                          <th style={{ padding: '8px', color: '#fff', fontWeight: 600, textAlign: 'left' }}>Dox</th>
                          <th style={{ padding: '8px', color: '#fff', fontWeight: 600, textAlign: 'left' }}>Binding</th>
                          <th style={{ padding: '8px', color: '#fff', fontWeight: 600, textAlign: 'left' }}>Gene</th>
                        </tr>
                      </thead>
                      <tbody>
                        {system.tableData.map((row, rIndex) => (
                          <tr key={rIndex} style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <td style={{ padding: '8px', color: '#333' }}>{row.state}</td>
                            <td style={{ padding: '8px', color: '#666' }}>{row.doxycycline}</td>
                            <td style={{ padding: '8px', color: '#666' }}>{row.binding}</td>
                            <td style={{
                              padding: '8px',
                              color: row.transgene === 'ON' ? '#008080' : '#999',
                              fontWeight: 600
                            }}>
                              {row.transgene}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Guide Section */}
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
              {selectionGuideData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {selectionGuideData.guides.map((guide, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '16px'
                  }}>
                    {guide.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {guide.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '10px',
                        lineHeight: 1.5
                      }}>
                        <IconCheckCircle size={16} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Improved Variants Section */}
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
              {improvedVariantsData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              {improvedVariantsData.intro}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {improvedVariantsData.variants.map((variant, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #00d4d4'
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
                    {variant.title}
                  </h3>
                  {variant.improvements && (
                    <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '8px', lineHeight: 1.5 }}>
                      <strong style={{ color: '#333' }}>Improvements:</strong> {variant.improvements}
                    </p>
                  )}
                  {variant.mutations && (
                    <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '8px', lineHeight: 1.5 }}>
                      <strong style={{ color: '#333' }}>Mutations:</strong> {variant.mutations}
                    </p>
                  )}
                  {variant.properties && (
                    <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '8px', lineHeight: 1.5 }}>
                      <strong style={{ color: '#333' }}>Properties:</strong> {variant.properties}
                    </p>
                  )}
                  {variant.applications && (
                    <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '8px', lineHeight: 1.5 }}>
                      <strong style={{ color: '#333' }}>Applications:</strong> {variant.applications}
                    </p>
                  )}
                  {variant.considerations && (
                    <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '8px', lineHeight: 1.5 }}>
                      <strong style={{ color: '#333' }}>Considerations:</strong> {variant.considerations}
                    </p>
                  )}
                  {variant.recommendation && (
                    <p style={{ fontSize: '.85rem', color: '#008080', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                      {variant.recommendation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Strategies Section */}
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
              {implementationData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {implementationData.strategies.map((strategy, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
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
                    <IconLayers size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    {strategy.title}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>
                    {strategy.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {strategy.components.map((comp, cIndex) => (
                      <li key={cIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '8px',
                        lineHeight: 1.5
                      }}>
                        <IconCheckCircle size={14} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Administration Section */}
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
              {administrationData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {administrationData.methods.map((method, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #00d4d4'
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
                    {method.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {method.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '8px',
                        lineHeight: 1.5
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timing Section */}
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
              {timingData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {timingData.sections.map((section, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '16px'
                  }}>
                    {section.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {section.points.map((point, pIndex) => (
                      <li key={pIndex} style={{
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '10px',
                        lineHeight: 1.5
                      }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {technicalData.considerations.map((item, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderLeft: '4px solid #00d4d4'
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
                    <IconShield size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '12px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '10px', lineHeight: 1.5 }}>
                    <strong style={{ color: '#333' }}>Problem:</strong> {item.problem}
                  </p>
                  <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                    <strong style={{ color: '#333' }}>Solutions:</strong> {item.solutions}
                  </p>
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
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #008080'
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
                    <IconTarget size={24} color="#008080" />
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
                  <p style={{ fontSize: '.9rem', color: '#666', lineHeight: 1.6, marginBottom: app.example ? '10px' : 0 }}>
                    {app.description}
                  </p>
                  {app.example && (
                    <p style={{ fontSize: '.85rem', color: '#008080', fontStyle: 'italic', margin: 0 }}>
                      {app.example}
                    </p>
                  )}
                </div>
              ))}
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              <div className="animate-in">
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '20px'
                }}>
                  Related Inducible Systems
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.inducibleSystems.map((link, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <Link href={link.href} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
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
                  marginBottom: '20px'
                }}>
                  Related Model Types
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.modelTypes.map((link, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <Link href={link.href} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
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
                  marginBottom: '20px'
                }}>
                  Related Technologies
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.technologies.map((link, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <Link href={link.href} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
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
