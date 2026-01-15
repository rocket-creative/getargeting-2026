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
  badge: "Custom Services",
  title: "Custom Mouse Model Projects",
  intro: "When your research requires a unique mouse model, Ingenious Targeting Laboratory delivers custom solutions tailored to your specific scientific objectives.",
  description: "With over 2,500 custom projects completed since 1998, we have the expertise to design and generate virtually any genetically modified mouse model your research requires."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Custom Approach Data
const customApproachData = [
  {
    title: "Scientific Consultation",
    description: "Every custom project begins with in depth scientific consultation. Our team works with you to understand your research questions, experimental design, and specific requirements.",
    points: [
      "Discussion of research objectives and experimental approach",
      "Review of gene structure and available allele designs",
      "Evaluation of potential complications or challenges",
      "Recommendations for optimal strategy"
    ]
  },
  {
    title: "Tailored Allele Design",
    description: "We design alleles specifically optimized for your experimental needs, drawing on our extensive experience with gene targeting strategies.",
    points: [
      "Custom targeting vector design",
      "Selection of appropriate genetic elements",
      "Consideration of downstream applications",
      "Flexibility for future experiments"
    ]
  }
];

// Project Types Data
const projectTypesData = [
  {
    title: "Conventional Knockout",
    description: "Complete gene inactivation throughout the organism.",
    features: ["Global gene deletion", "Simple allele design", "Faster timeline", "Lower cost"],
    timeline: "8-12 months"
  },
  {
    title: "Conditional Knockout",
    description: "Cre lox controlled gene deletion for tissue and temporal specificity.",
    features: ["Floxed allele design", "Tissue specific deletion", "Temporal control options", "Maximum flexibility"],
    timeline: "10-14 months"
  },
  {
    title: "Knockin",
    description: "Introduction of specific sequences, mutations, or reporter genes.",
    features: ["Point mutations", "Reporter insertions", "Human gene replacement", "Tag insertions"],
    timeline: "10-14 months"
  },
  {
    title: "Humanization",
    description: "Replacement of mouse genes with human sequences.",
    features: ["Single exon to full gene", "Functional validation", "Disease modeling", "Drug target studies"],
    timeline: "12-18 months"
  },
  {
    title: "Complex Projects",
    description: "Multi allele designs, large insertions, and specialized applications.",
    features: ["BAC transgenesis", "Multiple modifications", "Dual recombinase systems", "Custom requirements"],
    timeline: "Variable"
  }
];

// Project Workflow Data
const projectWorkflowData = {
  title: "Custom Project Workflow",
  steps: [
    {
      step: "Initial Consultation",
      description: "Discuss your research goals and requirements with our scientific team. We review the gene of interest and evaluate the best approach."
    },
    {
      step: "Proposal and Quote",
      description: "Receive a detailed proposal including allele design, project timeline, milestones, and pricing. We address any questions before proceeding."
    },
    {
      step: "Vector Construction",
      description: "Our molecular biology team constructs the targeting vector according to the approved design, with quality control at each step."
    },
    {
      step: "ES Cell Targeting",
      description: "Introduction of the targeting vector into ES cells, followed by selection and screening to identify correctly targeted clones."
    },
    {
      step: "Clone Validation",
      description: "Extensive characterization of ES cell clones using Southern blot, PCR, and sequencing to confirm correct targeting."
    },
    {
      step: "Mouse Generation",
      description: "Microinjection of validated ES cells into blastocysts, followed by embryo transfer to generate chimeric founders."
    },
    {
      step: "Germline Transmission",
      description: "Breeding of chimeras to confirm germline transmission and establish the mouse line."
    },
    {
      step: "Delivery",
      description: "Delivery of heterozygous mice along with comprehensive documentation and genotyping protocols."
    }
  ]
};

// Deliverables Data
const deliverablesData = {
  title: "What You Receive",
  items: [
    "Heterozygous mice (typically 2-4 breeding pairs)",
    "Detailed project report with all characterization data",
    "Targeting vector construct and sequence",
    "ES cell clone with characterization data",
    "Genotyping protocol and primers",
    "Southern blot probes (if applicable)",
    "Ongoing technical support"
  ]
};

// Testimonials Data
const testimonialsData = [
  {
    quote: "iTL generated a conditional knockout mouse for our laboratory in less than a year. The project manager kept us updated throughout the project, and the final characterization report was exceptionally thorough. We have now published multiple papers using this model.",
    author: "Research Director",
    affiliation: "Major Research University"
  },
  {
    quote: "Working with Ingenious Targeting Laboratory has been a wonderful experience. Their scientists are knowledgeable and responsive, and the quality of the mice they produce is excellent. I would recommend them to anyone needing custom mouse models.",
    author: "Principal Investigator",
    affiliation: "Academic Medical Center"
  },
  {
    quote: "The quality of service was exceptional and performed to the highest possible standards.",
    author: "Albert Basson, PhD",
    affiliation: "King's College London"
  }
];

// Publications Data
const publicationsData = {
  title: "Published Research",
  description: "Custom models from Ingenious Targeting Laboratory have contributed to over 800 peer reviewed publications across all areas of biomedical research.",
  journals: ["Nature", "Cell", "Science", "PNAS", "Journal of Clinical Investigation", "Nature Medicine", "Cell Metabolism", "Immunity"]
};

// FAQ Data
const faqData = [
  {
    question: "How long does a custom mouse model project take?",
    answer: "Timeline varies by project type. Conventional knockouts typically take 8-12 months, conditional knockouts 10-14 months, and complex projects may require 12-18 months. We provide detailed timeline estimates with every proposal and keep you updated throughout the project."
  },
  {
    question: "What is included in the project cost?",
    answer: "Project cost includes all vector construction, ES cell work, mouse generation, and breeding to germline transmission. You receive heterozygous mice, full characterization data, genotyping protocols, and ongoing technical support. There are no hidden fees."
  },
  {
    question: "What if my gene of interest is difficult to target?",
    answer: "We have successfully completed projects on genes considered difficult by other providers. Our extensive experience allows us to design strategies that work even for challenging targets. We evaluate each project individually and discuss any anticipated challenges during initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with researchers worldwide. We can ship mice internationally and have experience navigating international shipping regulations. Additional fees may apply for international shipping."
  }
];

// Related Links Data
const relatedLinksData = {
  modelTypes: [
    { href: "/conventional-knockout-mouse-models", label: "Conventional Knockout" },
    { href: "/conditional-knockout-mouse-models", label: "Conditional Knockout" },
    { href: "/knockin-mouse-models", label: "Knockin Models" },
    { href: "/humanized-mouse-models", label: "Humanized Models" }
  ],
  resources: [
    { href: "/knockout-strategy-guide", label: "Knockout Strategy Guide" },
    { href: "/model-generation-timeline", label: "Model Generation Timeline" },
    { href: "/pricing-overview", label: "Pricing Overview" }
  ],
  catalog: [
    { href: "/catalog-mouse-models", label: "Catalog Mouse Models" },
    { href: "/disease-model-catalog", label: "Disease Model Catalog" }
  ]
};

// CTA Data
const ctaData = {
  title: "Start Your Custom Project",
  description: "Contact us to discuss your custom mouse model requirements. Our scientific team will work with you to design the optimal approach for your research.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function CustomProjectsPage() {
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
            "name": "Custom Mouse Model Projects",
            "description": "Custom mouse model generation services including knockout, knockin, conditional, and humanized models. Over 2,500 projects completed since 1998.",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory",
              "url": "https://www.genetargeting.com"
            },
            "serviceType": "Custom Genetic Engineering Services"
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
              <Link href="/catalog-mouse-models" style={{
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
                Browse Catalog Models
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

        {/* Custom Approach Section */}
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
              Our Custom Approach
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {customApproachData.map((item, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '28px',
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
                    <IconFlask size={24} color="#008080" />
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
                  <p style={{ fontSize: '.9rem', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {item.points.map((point, idx) => (
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
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types Section */}
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
              Project Types
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {projectTypesData.slice(0, 3).map((type, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #134978'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {type.title}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.6, marginBottom: '14px' }}>
                    {type.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0' }}>
                    {type.features.map((feature, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '6px'
                      }}>
                        <IconCheckCircle size={12} color="#008080" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    fontSize: '.8rem',
                    color: '#008080',
                    fontWeight: 600,
                    paddingTop: '12px',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    Timeline: {type.timeline}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '24px' }}>
              {projectTypesData.slice(3).map((type, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#f7f7f7',
                  borderRadius: '8px',
                  padding: '24px',
                  borderTop: '4px solid #00d4d4'
                }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    {type.title}
                  </h3>
                  <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.6, marginBottom: '14px' }}>
                    {type.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0' }}>
                    {type.features.map((feature, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '6px'
                      }}>
                        <IconCheckCircle size={12} color="#008080" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    fontSize: '.8rem',
                    color: '#008080',
                    fontWeight: 600,
                    paddingTop: '12px',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    Timeline: {type.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Workflow Section */}
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
              {projectWorkflowData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {projectWorkflowData.steps.map((step, index) => (
                <div key={index} className="animate-in" style={{
                  display: 'flex',
                  gap: '16px',
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '20px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#008080',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '.85rem'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '.95rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '6px'
                    }}>
                      {step.step}
                    </h3>
                    <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
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
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>
                  {deliverablesData.title}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {deliverablesData.items.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '.9rem',
                      color: 'rgba(255,255,255,0.9)'
                    }}>
                      <IconCheckCircle size={16} color="#00d4d4" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px'
            }}>
              {publicationsData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              marginBottom: '30px',
              lineHeight: 1.7
            }}>
              {publicationsData.description}
            </p>
            <div className="animate-in" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px'
            }}>
              {publicationsData.journals.map((journal, index) => (
                <span key={index} style={{
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '.85rem',
                  color: '#333',
                  fontWeight: 500
                }}>
                  {journal}
                </span>
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
                  Model Types
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
                  Resources
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.resources.map((link, index) => (
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
                  Catalog
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.catalog.map((link, index) => (
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
