'use client';

/**
 * Why Choose ITL Page - Master text from /page-text-md/why-choose-itl.md
 */

import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  UXUIDCAnimatedFAQ,
  UXUIDCAnimatedCounter,
  UXUIDCStartProjectCTA,
} from '@/components/UXUIDC';
import { IconTarget, IconClipboard, IconMicroscope, IconShield, IconCheckCircle, IconUsers, IconQuote, IconFileText, IconLink } from '@/components/UXUIDC/Icons';

gsap.registerPlugin(ScrollTrigger);

const heroData = {
  title: 'Why Choose Ingenious Targeting Laboratory',
  intro:
    'Selecting a mouse model provider is a consequential decision that affects research timelines, budgets, and scientific outcomes. Ingenious Targeting Laboratory has earned the trust of researchers worldwide through 28 years of consistent performance, scientific expertise, and commitment to project success.',
};

const statsBar = [
  { number: '2,500+', label: 'Projects Completed' },
  { number: '800+', label: 'Publications' },
  { number: '25+', label: 'Years of Excellence' },
  { number: '100%', label: 'Custom Solutions' },
];

const expertiseBullets = [
  'Deep experience across all model types',
  'Expertise spanning all therapeutic areas',
  'Ability to anticipate project challenges',
  'Creative solutions to complex targeting problems',
];

const designOptimization = [
  'Allele design for your specific research application',
  'Exon selection for complete loss of function',
  'loxP positioning for preserved gene function',
  'Cassette configuration for derivative allele flexibility',
];

const endToEnd = [
  'Scientific consultation and design optimization',
  'Targeting vector construction',
  'ES cell targeting and characterization',
  'Blastocyst injection and chimera generation',
  'Germline transmission and founder delivery',
  'Optional colony expansion and management',
];

const flexible = [
  'Partial services from various starting points',
  'Colony management and expansion',
  'Cryopreservation and rederivation',
  'Genotyping and phenotyping support',
];

const communication = [
  'Milestone notifications at key project phases',
  'Proactive communication about challenges',
  'Responsive answers to your questions',
  'Clear documentation of progress',
];

const accessible = [
  'Project status and timeline',
  'Technical questions and concerns',
  'Strategy adjustments if needed',
  'Downstream application planning',
];

const qualityDeliverables = [
  'Targeting vector maps and sequences',
  'ES cell characterization data',
  'Genotyping protocols and primers',
  'Project summary reports',
];

const publicationsHighImpact = ['Nature, Cell, Science, NEJM, JAMA'];
const publicationsSpecialty = ['Cancer Cell, Neuron, Immunity, Cell Metabolism, Circulation'];
const publicationsMethods = ['Detailed methods papers documenting allele design strategies'];

const faqData = [
  {
    question: 'What makes Ingenious Targeting Laboratory different from other mouse model providers?',
    answer:
      'ITL has 28 years of exclusive focus on custom mouse model generation, 2,500+ completed projects, 800+ peer-reviewed publications, and pre-germline characterization that validates allele structure before mouse generation. This sustained focus has built institutional knowledge and refined processes that translate directly to project success.',
  },
  {
    question: "How does ITL's experience benefit my project?",
    answer:
      "ITL's 2,500+ projects across every model type and therapeutic area mean we have likely encountered challenges similar to yours and developed effective solutions. Our scientific team includes specialists in molecular biology, mouse genetics, and biomedical research who actively optimize allele design, exon selection, and cassette configuration for your specific research application.",
  },
  {
    question: 'What support does ITL provide after model delivery?',
    answer:
      'ITL provides ongoing support including colony management services, cryopreservation for line archival, rederivation for health status upgrade, and technical consultation. We work with you throughout your research program to ensure model performance and address any questions that arise.',
  },
  {
    question: 'How do I get started with a custom mouse model project?',
    answer:
      'Contact ITL through our request quote form or schedule a consultation. Our scientific team provides complimentary consultation to discuss your research goals, recommend optimal targeting strategies, and develop a project proposal. We work with you throughout the project to ensure the model meets your research needs.',
  },
];

const relatedResources = [
  { label: 'About Ingenious', href: '/about-itl' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Publications', href: '/publications' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Technologies', href: '/technologies' },
];

const factorTable = [
  { factor: 'Experience', why: 'Volume of completed projects predicts problem solving capability' },
  { factor: 'Characterization', why: 'Pre germline verification prevents downstream surprises' },
  { factor: 'Communication', why: 'Responsive updates reduce uncertainty and enable planning' },
  { factor: 'Flexibility', why: 'Ability to adjust approaches when challenges arise' },
  { factor: 'Support', why: 'Ongoing assistance after project completion' },
  { factor: 'Track Record', why: 'Publications demonstrate model utility in real research' },
];

const testimonials = [
  {
    quote:
      'The Hephaestin flox model made by Ingenious is now the basis for eight research publications from multiple research groups in three countries.',
    author: 'Joshua Dunaief, MD, PhD',
    org: 'University of Pennsylvania',
  },
  {
    quote:
      'The quality of service was exceptional. The team at Ingenious consistently met the highest possible standards in every aspect of our project.',
    author: 'Albert Basson, PhD',
    org: "King's College London",
  },
];

export default function WhyChooseITLPage() {
  // animate-in + counters
  useEffect(() => {
    const items = document.querySelectorAll('.animate-in');
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.stat-number');
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.target || '0');
      const hasPlus = el.dataset.plus === 'true';
      const hasComma = el.dataset.comma === 'true';
      const suffix = el.dataset.suffix || '';
      const start = Math.floor(target * 0.7);
      const counter = { value: start };

      gsap.to(counter, {
        value: target,
        duration: 3.5,
        ease: 'power1.out',
        onUpdate: () => {
          let display = Math.floor(counter.value).toString();
          if (hasComma || counter.value >= 1000) {
            display = Math.floor(counter.value).toLocaleString();
          }
          if (hasPlus) display += '+';
          if (suffix) display += suffix;
          el.textContent = display;
        },
      });
    });
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
      <UXUIDCNavigation />

      {/* HERO */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)',
          padding: '80px 20px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="animate-in"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  marginBottom: '20px',
                  color: 'white',
                  fontSize: '.8rem',
                  fontWeight: 500,
                }}
              >
                28 Years • 2,500+ Projects • 800+ Publications
              </div>
              <h1
                className="animate-in"
                style={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {heroData.title}
              </h1>
              <p
                className="animate-in"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: '1.7rem',
                  marginBottom: '25px',
                }}
              >
                {heroData.intro}
              </p>
              <div className="animate-in flex flex-wrap gap-4">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: '#008080',
                    padding: '10px 20px',
                    minWidth: '160px',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.85rem',
                    fontWeight: 500,
                  }}
                >
                  <span>Request a Quote</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-900"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '10px 20px',
                    minWidth: '160px',
                    border: '2px solid white',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.85rem',
                    fontWeight: 500,
                  }}
                >
                  <span>Talk to a Scientist</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="animate-in">
              <div
                style={{
                  border: '2px dashed rgba(255,255,255,0.35)',
                  borderRadius: '10px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <IconShield size={60} color="rgba(255,255,255,0.5)" />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.85rem', marginTop: '10px' }}>
                  Trusted Partner Visual
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR - Animated Counter ========== */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <UXUIDCAnimatedCounter stats={statsBar} />
        </div>
      </section>

      {/* PROVEN TRACK RECORD */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            Proven Track Record
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '28 Years of Experience',
                number: '28',
                suffix: ' Years',
                text:
                  'Since 1998, Ingenious Targeting Laboratory has focused exclusively on custom mouse model generation. This sustained focus has built institutional knowledge and refined processes that translate directly to project success.',
                accent: '#008080',
              },
              {
                title: '2,500+ Custom Projects Completed',
                number: '2500',
                plus: true,
                comma: true,
                text:
                  'Spanning every model type and therapeutic area, this volume of experience means we have likely encountered challenges similar to yours and developed effective solutions.',
                accent: '#134978',
              },
              {
                title: '800+ Peer Reviewed Publications',
                number: '800',
                plus: true,
                text:
                  'Ingenious Targeting Laboratory generated models have contributed to research published in Nature, Cell, Science, and specialty journals across all fields. Our models advance science and careers.',
                accent: '#008080',
              },
              {
                title: 'Clients Worldwide',
                text:
                  'Academic institutions, pharmaceutical companies, and biotechnology organizations on every continent trust Ingenious Targeting Laboratory for their mouse model needs.',
                icon: IconUsers,
                accent: '#134978',
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '26px',
                    border: '.5px solid #e0e0e0',
                    borderTop: `4px solid ${item.accent}`,
                    height: '100%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    {IconComponent ? (
                      <IconComponent size={28} color={item.accent} />
                    ) : (
                      <span
                        className="stat-number"
                        data-target={item.number}
                        data-plus={item.plus ? 'true' : 'false'}
                        data-comma={item.comma ? 'true' : 'false'}
                        data-suffix={item.suffix || ''}
                        style={{
                          color: item.accent,
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1.8rem',
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        0
                      </span>
                    )}
                    <h3
                      style={{
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      marginTop: '4px',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCIENTIFIC EXPERTISE */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-in">
              <h2
                style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.9rem',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                Scientific Expertise
              </h2>

              <div style={{ marginBottom: '20px' }}>
                <h3
                  style={{
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}
                >
                  Specialized Consultation
                </h3>
                <ul style={{ paddingLeft: '18px' }}>
                  {expertiseBullets.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        color: '#666',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.9rem',
                        fontWeight: 300,
                        lineHeight: '1.6rem',
                        marginBottom: '6px',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  style={{
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}
                >
                  Design Optimization
                </h3>
                <ul style={{ paddingLeft: '18px' }}>
                  {designOptimization.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        color: '#666',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.9rem',
                        fontWeight: 300,
                        lineHeight: '1.6rem',
                        marginBottom: '6px',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual placeholder to keep layout balanced without altering master text */}
            <div className="animate-in">
              <div
                style={{
                  border: '2px dashed #e0e0e0',
                  borderRadius: '10px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f7f7f7',
                }}
              >
                <IconMicroscope size={50} color="#ccc" />
                <span style={{ color: '#999', fontSize: '.85rem', marginTop: '10px' }}>
                  Scientific Expertise Visual
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICE */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-in">
              <h2
                style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.9rem',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                Comprehensive Service
              </h2>

              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                End to End Capability
              </h3>
              <ul style={{ paddingLeft: '18px', marginBottom: '18px' }}>
                {endToEnd.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                Flexible Engagement
              </h3>
              <ul style={{ paddingLeft: '18px' }}>
                {flexible.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in">
              <div
                style={{
                  border: '2px dashed #e0e0e0',
                  borderRadius: '10px',
                  padding: '24px',
                  backgroundColor: '#f7f7f7',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <IconTarget size={26} color="#134978" />
                  <h4
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    Custom Engagement Paths
                  </h4>
                </div>
                <p
                  style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.5rem',
                  }}
                >
                  Not every project requires full service—partial services and downstream support are available where needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT COMMUNICATION */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.9rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            Transparent Communication
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-in">
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                Regular Updates
              </h3>
              <ul style={{ paddingLeft: '18px' }}>
                {communication.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in">
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                Accessible Team
              </h3>
              <ul style={{ paddingLeft: '18px' }}>
                {accessible.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY STANDARDS */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.9rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            Quality Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-in flex flex-col gap-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <IconShield size={28} color="#134978" />
                <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 600 }}>
                  AAALAC Accreditation
                </h3>
              </div>
              <p
                style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.5rem',
                }}
              >
                Ingenious Targeting Laboratory's animal facilities meet the highest standards for animal care and welfare.
              </p>
            </div>

            <div className="animate-in flex flex-col gap-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <IconCheckCircle size={28} color="#008080" />
                <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 600 }}>
                  Documented Processes
                </h3>
              </div>
              <ul style={{ paddingLeft: '18px' }}>
                {['Validated targeting vector construction', 'Characterized ES cell clone selection', 'Confirmed chimera identification', 'Verified germline transmission'].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in flex flex-col gap-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <IconFileText size={28} color="#134978" />
                <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 600 }}>
                  Comprehensive Deliverables
                </h3>
              </div>
              <ul style={{ paddingLeft: '18px' }}>
                {qualityDeliverables.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            What Researchers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '24px',
                  minHeight: '220px',
                }}
              >
                <IconQuote size={28} color="#00d4d4" />
                <p
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    lineHeight: '1.6rem',
                    marginTop: '12px',
                    flex: 1,
                  }}
                >
                  “{t.quote}”
                </p>
                <p
                  style={{
                    color: '#00d4d4',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.95rem',
                    fontWeight: 600,
                    marginTop: '10px',
                  }}
                >
                  — {t.author}
                </p>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.85rem',
                    fontWeight: 300,
                  }}
                >
                  {t.org}
                </p>
              </div>
            ))}
          </div>
          <div className="animate-in text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-teal-700"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '10px 20px',
                minWidth: '160px',
                border: '2px solid white',
                fontFamily: 'var(--system-ui)',
                fontSize: '.85rem',
                fontWeight: 500,
              }}
            >
              <span>View Testimonials</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.9rem',
              fontWeight: 700,
              marginBottom: '24px',
            }}
          >
            Publications Featuring Ingenious Targeting Laboratory Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-in">
              <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>
                High Impact Journals
              </h3>
              <ul style={{ paddingLeft: '18px' }}>
                {publicationsHighImpact.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in">
              <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>
                Specialty Publications
              </h3>
              <ul style={{ paddingLeft: '18px' }}>
                {publicationsSpecialty.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in">
              <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>
                Methods and Resources
              </h3>
              <ul style={{ paddingLeft: '18px' }}>
                {publicationsMethods.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* START YOUR PROJECT (CTA with DNA animation) */}
      <UXUIDCStartProjectCTA
        title="Start Your Project"
        content="Experience the Ingenious Targeting Laboratory difference on your next mouse model project."
        buttons={[
          { label: 'Request a Quote', href: '/request-quote' },
          { label: 'Request a Quote', href: '/request-quote' },
        ]}
      />

      {/* FAQ */}
      <UXUIDCAnimatedFAQ title="Frequently Asked Questions" faqs={faqData} backgroundColor="white" />

      {/* RELATED RESOURCES */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Related Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedResources.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="animate-in flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: 'white',
                  padding: '18px 20px',
                  border: '.5px solid #e0e0e0',
                }}
              >
                <IconLink size={18} color="#008080" />
                <span
                  style={{
                    color: '#333',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FACTOR TABLE */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="animate-in text-center"
            style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Comparison Considerations
          </h2>
          <p
            className="animate-in text-center"
            style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              marginBottom: '24px',
            }}
          >
            When evaluating mouse model providers, consider:
          </p>
          <div className="animate-in overflow-x-auto" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f7f7f7' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      border: '1px solid #e0e0e0',
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '.95rem',
                    }}
                  >
                    Factor
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '12px',
                      border: '1px solid #e0e0e0',
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: '.95rem',
                    }}
                  >
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {factorTable.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f9f9f9' }}>
                    <td
                      style={{
                        padding: '12px',
                        border: '1px solid #e0e0e0',
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: '.9rem',
                      }}
                    >
                      {row.factor}
                    </td>
                    <td
                      style={{
                        padding: '12px',
                        border: '1px solid #e0e0e0',
                        color: '#666',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.9rem',
                        fontWeight: 300,
                        lineHeight: '1.5rem',
                      }}
                    >
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <UXUIDCFooter />
    </main>
  );
}
