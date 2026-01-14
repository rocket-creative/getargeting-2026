'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedFAQ from '@/components/UXUIDC/AnimatedFAQ';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconTarget, IconImage, IconQuote, IconChevronRight, IconCheckCircle } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Immune Checkpoint Models",
  title: "CTLA4 Humanized Mice",
  intro: "Since 1998, Ingenious Targeting Laboratory has generated custom knockin mouse models, including humanized immune checkpoint mice for developing next generation immunotherapies. CTLA4 humanized mice express human cytotoxic T lymphocyte associated protein 4, enabling preclinical testing of anti CTLA4 antibodies in immunocompetent mice with functional immune systems.",
  description: "These models support development of ipilimumab biosimilars, novel anti CTLA4 antibodies, and combination checkpoint immunotherapy approaches for oncology research."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// CTLA4 Biology Points
const ctla4Biology = [
  "CTLA4 is an inhibitory receptor expressed on activated T cells and constitutively on regulatory T cells",
  "CTLA4 competes with the costimulatory receptor CD28 for binding to B7 ligands (CD80 and CD86)",
  "CTLA4 engagement suppresses T cell activation",
  "Blocking CTLA4 with antibodies enhances T cell activation and antitumor immunity"
];

// Applications
const applications = [
  { 
    title: "Anti CTLA4 Antibody Development", 
    desc: "CTLA4 humanized mice enable preclinical efficacy testing of anti CTLA4 antibodies including ipilimumab biosimilars and novel antibodies with modified Fc regions."
  },
  { 
    title: "Combination Immunotherapy", 
    desc: "Double humanized mice expressing both human CTLA4 and human PD1 enable preclinical testing of combination checkpoint blockade strategies."
  },
  { 
    title: "Toxicity and Safety Studies", 
    desc: "CTLA4 humanized mice support safety assessment of anti CTLA4 antibodies. Immune related adverse events can be modeled and mitigation strategies evaluated."
  },
  { 
    title: "Mechanism of Action Studies", 
    desc: "Humanized mice enable study of antibody effects on T cell activation, regulatory T cell function, and tumor immune infiltration."
  }
];

// Humanization Strategies
const humanizationStrategies = [
  { 
    name: "Extracellular Domain Humanization", 
    desc: "Humanizes the extracellular domain where therapeutic antibodies bind, while retaining mouse transmembrane and intracellular domains. Maintains normal CTLA4 signaling while enabling human antibody binding."
  },
  { 
    name: "Complete Gene Replacement", 
    desc: "Complete replacement of mouse CTLA4 with human CTLA4 provides a fully humanized target but may affect T cell function if human CTLA4 interacts differently with mouse signaling partners."
  }
];

// Compatible Tumor Lines
const tumorLines = [
  { name: "MC38", type: "Colon carcinoma" },
  { name: "B16", type: "Melanoma" },
  { name: "E0771", type: "Breast carcinoma" },
  { name: "Lewis Lung", type: "Lung carcinoma" }
];

// Available Designs
const availableDesigns = [
  "Single immune checkpoint models: CTLA4 humanized mice as standalone models",
  "Double immune checkpoint models: CTLA4 humanized combined with PD1 humanized",
  "Triple and multi checkpoint models: CTLA4 combined with multiple checkpoint humanizations"
];

// Related Checkpoint Models
const checkpointModels = [
  { title: "PD1 Humanized Mice", href: "/pd1-humanized-mice" },
  { title: "PDL1 Humanized Mice", href: "/pdl1-humanized-mice" },
  { title: "LAG3 Humanized Mice", href: "/lag3-humanized-mice" },
  { title: "TIM3 Humanized Mice", href: "/tim3-humanized-mice" },
  { title: "Humanized Immune Checkpoint Mice", href: "/humanized-immune-checkpoint-mice" }
];

// Related Applications
const relatedApplications = [
  { title: "Immuno Oncology Mouse Models", href: "/immuno-oncology-mouse-models" },
  { title: "Oncology Mouse Models", href: "/oncology-mouse-models" },
  { title: "Syngeneic Tumor Models", href: "/syngeneic-tumor-models" },
  { title: "Double Checkpoint Mice", href: "/double-checkpoint-mice" }
];

// Testimonial Data
const testimonialData = {
  quote: "iTL has done a tremendous job assisting us with our projects. Not only have they provided successful mouse lines, but their project management has always been on top of things. Communication was excellent, and at all times I felt I could trust the scientists at iTL with my work.",
  author: "Thomas G.H. Diekwisch, DMD, PhD (sc), PhD (phil.)",
  affiliation: "Texas A&M University College of Dentistry"
};

// FAQ Data
const faqData = [
  {
    question: "What is the difference between full humanization and ECD only humanization for CTLA4?",
    answer: "Full humanization replaces the entire mouse CTLA4 gene with human CTLA4 sequence. ECD only humanization replaces only the extracellular domain while retaining mouse transmembrane and cytoplasmic domains. Full humanization is preferred for antibody testing, while ECD only may preserve some mouse signaling functions."
  },
  {
    question: "Can CTLA4 humanized mice be combined with other checkpoint humanizations?",
    answer: "Yes. CTLA4 humanization can be combined with PD1, PDL1, LAG3, TIM3, or other checkpoint humanizations to create double, triple, or multi checkpoint models. These models enable testing of combination checkpoint blockade therapies in immunocompetent animals with human targets."
  },
  {
    question: "Can CTLA4 humanized mice be used with syngeneic tumor models?",
    answer: "Yes. CTLA4 humanized mice can be combined with syngeneic tumor cell lines to create systems where both tumor and immune compartments express human targets. This enables evaluation of checkpoint blockade in immunocompetent animals with intact tumor immunity."
  },
  {
    question: "What tumor models are compatible with CTLA4 humanized mice?",
    answer: "CTLA4 humanized mice on C57BL/6 background are compatible with MC38 (colon carcinoma), B16 (melanoma), E0771 (breast carcinoma), and Lewis lung carcinoma. These syngeneic models enable evaluation of anti CTLA4 antibody efficacy in various tumor contexts."
  }
];

export default function CTLA4HumanizedMicePage() {
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
                  <IconTarget size={16} color="white" />
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
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>CTLA4 Humanized Model</span>
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

        {/* CTLA4 Biology Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              CTLA4 Biology and Therapeutic Relevance
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '25px' }}>
              Cytotoxic T lymphocyte associated protein 4 (CTLA4, CD152) is a critical immune checkpoint that regulates T cell activation. Blocking CTLA4 with antibodies such as ipilimumab enhances antitumor immunity and was the first checkpoint inhibitor approved for cancer treatment.
            </p>

            <div className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '8px', borderLeft: '4px solid #008080' }}>
              <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '15px' }}>
                Key CTLA4 Biology
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {ctla4Biology.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                    <IconCheckCircle size={16} color="#008080" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ color: '#555', fontSize: '.9rem', lineHeight: '1.5rem' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in" style={{ backgroundColor: '#0a253c', padding: '25px 30px', borderRadius: '8px', marginTop: '25px' }}>
              <h3 style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                Species Specificity Challenge
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.9rem', lineHeight: '1.6rem' }}>
                Therapeutic anti CTLA4 antibodies are designed to bind human CTLA4 and typically do not cross react with mouse CTLA4. CTLA4 humanized mice solve this problem by expressing human CTLA4, enabling preclinical evaluation of human specific antibodies.
              </p>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              Applications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', borderTop: '4px solid #008080' }}>
                  <h3 style={{ color: '#0a253c', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>{app.title}</h3>
                  <p style={{ color: '#555', fontSize: '.85rem', lineHeight: '1.6rem' }}>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Humanization Strategy Section */}
        <section style={{ backgroundColor: '#008080', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
              CTLA4 Humanization Strategy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {humanizationStrategies.map((strategy, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '8px' }}>
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>{strategy.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.85rem', lineHeight: '1.6rem' }}>{strategy.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tumor Model Compatibility */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{ color: '#2384da', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Tumor Model Compatibility
            </h2>
            <p className="animate-in" style={{ color: '#555', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '25px' }}>
              CTLA4 humanized mice are generated on the C57BL/6 background, providing compatibility with established syngeneic tumor models for checkpoint inhibitor efficacy studies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tumorLines.map((tumor, index) => (
                <div key={index} className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                  <h4 style={{ color: '#008080', fontSize: '1rem', fontWeight: 600, marginBottom: '5px' }}>{tumor.name}</h4>
                  <p style={{ color: '#555', fontSize: '.8rem' }}>{tumor.type}</p>
                </div>
              ))}
            </div>

            <div className="animate-in" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', marginTop: '25px', borderLeft: '4px solid #2384da' }}>
              <h3 style={{ color: '#0a253c', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>Available Designs</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {availableDesigns.map((design, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <IconCheckCircle size={16} color="#2384da" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ color: '#555', fontSize: '.85rem' }}>{design}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="animate-in" style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
              Start Your Project
            </h2>
            <p className="animate-in" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '.95rem', lineHeight: '1.7rem', marginBottom: '30px' }}>
              Ready to discuss humanized mice for your immunotherapy research? Our scientific team provides complimentary consultation to help you select the optimal checkpoint model design.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in">
                <h3 style={{ color: '#0a253c', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                  Related Checkpoint Models
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {checkpointModels.map((link, index) => (
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
                  Related Applications
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {relatedApplications.map((link, index) => (
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
            "name": "CTLA4 Humanized Mice",
            "provider": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory"
            },
            "description": "CTLA4 humanized mouse models for anti CTLA4 antibody testing. Ipilimumab and checkpoint inhibitor preclinical evaluation in immunocompetent mice.",
            "serviceType": "CTLA4 Humanized Mouse Model Generation"
          })
        }}
      />
    </div>
  );
}
