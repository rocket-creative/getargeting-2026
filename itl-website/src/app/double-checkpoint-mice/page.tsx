'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { UXUIDCNavigation } from '@/components/UXUIDC/Navigation';
import { UXUIDCFooter } from '@/components/UXUIDC/Footer';
import { UXUIDCAnimatedFAQ } from '@/components/UXUIDC/AnimatedFAQ';
import { UXUIDCAnimatedCounter } from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconQuote, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Dual Checkpoint Models",
  title: "Double Immune Checkpoint Mice",
  intro: "Double immune checkpoint humanized mouse models express two human immune checkpoint proteins simultaneously, enabling evaluation of combination checkpoint inhibitor therapies. Since 1998, Ingenious Targeting Laboratory has generated custom mouse models, including dual checkpoint models such as PD1+CTLA4, PD1+PDL1, and other combinations for immunotherapy research.",
  description: "Combination checkpoint blockade has shown enhanced efficacy compared to monotherapy in multiple cancer types. Double immune checkpoint humanized models enable preclinical evaluation of combination therapies using clinical antibody candidates, supporting therapeutic development programs."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Models Data
const modelsData = {
  title: "Available Double Immune Checkpoint Models",
  models: [
    {
      title: "PD1 + CTLA4 Humanized",
      subtitle: "Dual humanized PD1 and CTLA4:",
      features: [
        "Combination checkpoint blockade",
        "Enhanced anti tumor responses",
        "Synergistic T cell activation",
        "Clinical combination modeling"
      ]
    },
    {
      title: "PD1 + PDL1 Humanized",
      subtitle: "Dual humanized PD1 and PDL1:",
      features: [
        "PD1/PDL1 axis targeting",
        "Enhanced checkpoint blockade",
        "Tumor microenvironment studies",
        "Combination therapy evaluation"
      ]
    },
    {
      title: "Other Combinations",
      subtitle: "Additional dual checkpoint combinations:",
      features: [
        "PD1 + LAG3",
        "PD1 + TIM3",
        "CTLA4 + PDL1",
        "Custom combinations"
      ]
    }
  ]
};

// Applications Data
const applicationsData = {
  title: "Applications",
  applications: [
    {
      title: "Combination Therapy Testing",
      subtitle: "Evaluate combination checkpoint inhibitors:",
      features: [
        "Synergistic effects",
        "Enhanced efficacy",
        "Safety profiles",
        "Optimal dosing"
      ]
    },
    {
      title: "Mechanism Studies",
      subtitle: "Study combination checkpoint biology:",
      features: [
        "Interaction effects",
        "Signaling pathways",
        "T cell responses",
        "Tumor microenvironment"
      ]
    }
  ]
};

// Testimonials Data
const testimonialsData = [
  {
    quote: "My experience with iTL has been great. This is a very professional and efficient team. Everything went smoothly throughout the process and we got our mouse model in a very timely manner. I would highly recommend iTL to my colleagues.",
    author: "Emily Wu, PhD",
    affiliation: "University of California, Los Angeles"
  }
];

// FAQ Data
const faqData = [
  {
    question: "What checkpoint combinations are available in double immune checkpoint models?",
    answer: "Combinations include PD1 + CTLA4, PD1 + LAG3, PD1 + TIM3, CTLA4 + LAG3, and other paired checkpoint humanizations. Selection depends on your research question and therapeutic targets. Ingenious targeting laboratory can combine any two checkpoint humanizations for combination immunotherapy studies."
  },
  {
    question: "How do you generate double checkpoint models?",
    answer: "Double checkpoint models are generated through sequential targeting and breeding. First the initial immune checkpoint is humanized. Then, the second immune checkpoint is humanized on the same background, followed by breeding to combine both humanizations. Careful genotyping ensures both alleles are maintained throughout breeding."
  },
  {
    question: "What is the advantage of double immune checkpoint models over single immune checkpoint models?",
    answer: "Double immune checkpoint models enable testing of combination checkpoint blockade therapies in a single model system. This is important because combination therapies (e.g., PD1 + CTLA4) show enhanced efficacy in clinical trials. Testing combinations in double humanized models provides more physiologically relevant preclinical data."
  },
  {
    question: "How long does it take to generate double immune checkpoint models?",
    answer: "Combining two checkpoints requires sequential targeting (if starting from scratch) plus breeding time to generate double-humanized animals. If single-humanized models already exist, combining them requires only breeding time. We also have a catalog of already-created double immune checkpoint models that are maintained as live colonies for quick distribution. Contact us to determine the timeline for your specific model of interest."
  },
  {
    question: "Can triple or multi-checkpoint models be created?",
    answer: "Yes. Ingenious targeting laboratory can combine three or more checkpoint humanizations for complex immunotherapy combination studies. Multiple humanizations require careful breeding and genotyping to maintain all alleles. Triple-checkpoint models enable testing of triple combination therapies or more sophisticated experimental designs."
  }
];

// Related Links Data
const relatedLinksData = {
  models: [
    { href: "/humanized-immune-checkpoint-mice", label: "Humanized Immune Checkpoint Mice" },
    { href: "/pd1-humanized-mice", label: "PD1 Humanized Mice" },
    { href: "/ctla4-humanized-mice", label: "CTLA4 Humanized Mice" }
  ],
  resources: [
    { href: "/immuno-oncology-mouse-models", label: "Immuno-Oncology Mouse Models" },
    { href: "/humanized-mouse-models", label: "Humanized Mouse Models" },
    { href: "/humanization-strategy-guide", label: "Humanization Strategy Guide" }
  ]
};

// CTA Data
const ctaData = {
  title: "Request Double Checkpoint Models",
  description: "Contact us to discuss double immune checkpoint humanized models for combination therapy research.",
  primaryButton: { href: "/request-quote", label: "Request a Quote" },
  secondaryButton: { href: "/contact", label: "Contact Us" }
};

export default function DoubleCheckpointMicePage() {
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
            "@type": "Service",
            "name": "Double Immune Checkpoint Humanized Mice",
            "description": "Double checkpoint humanized mouse models for combination immunotherapy testing. PD1+CTLA4, PD1+PDL1, and other dual checkpoint combinations.",
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
              <IconShield size={14} color="#00d4d4" />
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
              <Link href="/humanized-immune-checkpoint-mice" style={{
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
                All Checkpoint Models
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

        {/* Models Section */}
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
              {modelsData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {modelsData.models.map((model, index) => (
                <div key={index} className="animate-in" style={{
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
                    <IconShield size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    {model.title}
                  </h3>
                  <p style={{
                    fontSize: '.85rem',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    {model.subtitle}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {model.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '8px'
                      }}>
                        <IconCheckCircle size={14} color="#008080" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
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
              {applicationsData.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {applicationsData.applications.map((app, index) => (
                <div key={index} className="animate-in" style={{
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
                    <IconTarget size={24} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    {app.title}
                  </h3>
                  <p style={{
                    fontSize: '.85rem',
                    color: '#666',
                    marginBottom: '12px'
                  }}>
                    {app.subtitle}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {app.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '8px'
                      }}>
                        <IconCheckCircle size={14} color="#008080" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
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
            <div className="animate-in" style={{ textAlign: 'center', marginTop: '24px' }}>
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
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
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
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
              <div className="animate-in">
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '20px'
                }}>
                  Related Models
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedLinksData.models.map((link, index) => (
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
                  Related Resources
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
            </div>
          </div>
        </section>
      </main>
      <UXUIDCFooter />
    </>
  );
}
