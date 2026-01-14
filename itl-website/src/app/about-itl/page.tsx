'use client';

/**
 * About ITL Page - Ingenious Targeting Laboratory
 * Built from MASTER TEXT: /page-text-md/about-itl.md
 * All text displayed EXACTLY as written - DO NOT MODIFY TEXT
 * 
 * Design System: UXUIDC / Biotech standards
 * Max-width: 1200px (per DESIGN-SYSTEM.md)
 * Icons: Flat SVG (no emojis)
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  UXUIDCCookieConsent,
  UXUIDCAnimatedCounter,
  UXUIDCAnimatedFAQ,
  UXUIDCStartProjectCTA,
  IconTarget,
  IconHandshake,
  IconClipboard,
  IconMicroscope,
  IconBrain,
  IconZap,
  IconShield,
  IconHeart,
  IconDNA,
  IconEye,
  IconUsers,
  IconBuilding,
  IconQuote,
  IconMouse,
  IconSettings,
  IconMessageCircle,
  IconBriefcase,
  IconImage,
} from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// MASTER TEXT DATA - from about-itl.md
// DO NOT EDIT - This is APPROVED content
// ============================================

const heroData = {
  title: 'About Ingenious Targeting Laboratory',
  intro: 'Since 1998, Ingenious Targeting Laboratory has been generating custom mouse models for researchers worldwide. From our facilities in Ronkonkoma, New York, we have completed more than 2,500 gene targeting projects contributing to over 800 peer reviewed publications across every major therapeutic area.',
};

const stats = [
  { number: '2,500+', label: 'Projects Completed' },
  { number: '800+', label: 'Publications' },
  { number: '25+', label: 'Years of Excellence' },
  { number: '100%', label: 'Custom Solutions' },
];

const missionData = {
  title: 'Our Mission',
  content: 'Ingenious Targeting Laboratory exists to accelerate biomedical research by providing researchers with precisely engineered mouse models and the scientific expertise to design optimal targeting strategies. We believe that every research question deserves a thoughtfully designed model, and we work closely with investigators to translate research goals into genetically engineered solutions.',
};

const historyData = {
  title: 'Our History',
  intro: 'Ingenious Targeting Laboratory was founded in 1998 to address the growing demand for custom knockout and knockin mouse models. What began as a small gene targeting service has grown into a comprehensive mouse model provider serving academic institutions, pharmaceutical companies, and biotechnology organizations worldwide.',
  milestones: [
    { year: '1998', text: 'Ingenious Targeting Laboratory founded' },
    { year: '2003', text: '500th project completed' },
    { year: '2008', text: 'Expanded conditional knockout capabilities with derivative allele system' },
    { year: '2012', text: '1,500th project milestone' },
    { year: '2015', text: 'Launched humanized immune checkpoint model catalog' },
    { year: '2018', text: 'Celebrated 20 years and 2,000 projects' },
    { year: '2023', text: '2,500 projects completed with 800+ publications' },
  ],
  outro: 'Throughout this history, Ingenious Targeting Laboratory has maintained commitment to rigorous scientific standards, transparent communication, and personalized project support.',
};

const approachData = {
  title: 'Our Approach',
  sections: [
    {
      title: 'Scientific Partnership',
      content: 'Every project begins with scientific consultation. Our team reviews your research goals, discusses targeting strategy options, and recommends approaches optimized for your specific application. This collaborative design process ensures that your model delivers the experimental capabilities you need.',
      Icon: IconHandshake,
    },
    {
      title: 'Documented Deliverables',
      content: 'Every Ingenious Targeting Laboratory project includes comprehensive documentation:',
      items: [
        'Targeting vector maps and sequences',
        'ES cell clone characterization data',
        'Chimera and germline transmission records',
        'Genotyping protocols and primers',
        'Archival ES cell stocks',
      ],
      Icon: IconClipboard,
    },
    {
      title: 'Ongoing Support',
      content: 'Our relationship extends beyond project completion. Ingenious Targeting Laboratory provides technical support for genotyping, breeding strategy, and experimental design throughout the life of your research program.',
      Icon: IconMicroscope,
    },
  ],
};

const teamData = {
  title: 'Our Team',
  intro: "Ingenious Targeting Laboratory's scientific team combines expertise in molecular biology, mouse genetics, and biomedical research. Our scientists have designed targeting strategies for projects spanning:",
  areas: [
    { text: 'Oncology and tumor immunology', Icon: IconTarget },
    { text: 'Neuroscience and neurodegeneration', Icon: IconBrain },
    { text: 'Metabolic disease and diabetes', Icon: IconZap },
    { text: 'Immunology and inflammation', Icon: IconShield },
    { text: 'Cardiovascular disease', Icon: IconHeart },
    { text: 'Rare and orphan diseases', Icon: IconDNA },
    { text: 'Ophthalmology and vision research', Icon: IconEye },
  ],
  outro: 'This breadth of experience enables informed project design and anticipation of potential challenges.',
};

const facilitiesData = {
  title: 'Our Facilities',
  intro: 'Ingenious Targeting Laboratory operates AAALAC accredited animal facilities meeting the highest standards for animal care and welfare. Our infrastructure includes:',
  facilities: [
    { title: 'Molecular Biology Laboratories', desc: 'for targeting vector construction, ES cell culture, and molecular characterization.' },
    { title: 'ES Cell Facilities', desc: 'with optimized conditions for C57BL/6 and 129 strain ES cell maintenance and targeting.' },
    { title: 'Microinjection Suites', desc: 'equipped for blastocyst injection and embryo transfer.' },
    { title: 'Breeding Facilities', desc: 'supporting colony maintenance, expansion, and cohort development.' },
    { title: 'Cryopreservation Infrastructure', desc: 'for sperm, embryo, and ES cell archival.' },
  ],
};

const testimonialsData = {
  title: 'What Researchers Say',
  testimonials: [
    {
      quote: 'The Hephaestin flox model made by Ingenious is now the basis for eight research publications from multiple research groups in three countries.',
      name: 'Joshua Dunaief, MD, PhD',
      affiliation: 'University of Pennsylvania',
    },
    {
      quote: 'The quality of service was exceptional. The team at Ingenious consistently met the highest possible standards in every aspect of our project.',
      name: 'Albert Basson, PhD',
      affiliation: "King's College London",
    },
  ],
};

const publicationsData = {
  title: 'Publications',
  intro: 'Ingenious Targeting Laboratory generated models appear in publications across all major journals:',
  journals: [
    'Nature, Cell, Science',
    'Journal of Clinical Investigation',
    'PNAS, EMBO Journal',
    'Specialty journals across all therapeutic areas',
  ],
};

const contactData = {
  title: 'Contact Information',
  company: 'Ingenious Targeting Laboratory',
  location: 'Holbrook, New York',
};

const faqData = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What services does Ingenious Targeting Laboratory provide?',
      answer: 'ITL provides custom genetically engineered mouse and rat model generation, including knockout, knockin, conditional knockout, humanized models, and transgenic models. Additional services include colony management, cryopreservation, backcrossing, and preclinical services.',
    },
    {
      question: 'How long has ITL been in business?',
      answer: 'ITL has been generating custom mouse models since 1998, with over 25 years of experience and 2,500+ successful projects. Our models have been published in leading journals including Nature, Cell, Science, and Journal of Clinical Investigation, demonstrating consistent quality and scientific impact.',
    },
    {
      question: 'How do I get started with a custom mouse model project?',
      answer: 'Contact ITL through our request quote form or schedule a consultation. Our scientific team provides complimentary consultation to discuss your research goals, recommend optimal targeting strategies, and develop a project proposal. We work with you throughout the project to ensure the model meets your research needs.',
    },
  ],
};

const relatedData = {
  title: 'Related Resources',
  links: [
    { label: 'Mouse Model Services', href: '/mouse-model-services', Icon: IconMouse },
    { label: 'Technologies', href: '/technologies', Icon: IconSettings },
    { label: 'Testimonials', href: '/testimonials', Icon: IconMessageCircle },
    { label: 'Current Openings', href: '/current-openings', Icon: IconBriefcase },
  ],
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }

    // Section animations
    const sections = [missionRef, historyRef, approachRef, teamRef, facilitiesRef];
    sections.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current.querySelectorAll('.animate-in'),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
            scrollTrigger: { trigger: ref.current, start: 'top 80%' }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="page-wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />

      <main id="main-content">
        {/* ========== HERO SECTION ========== */}
        <section 
          ref={heroRef}
          style={{ 
            background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)',
            padding: '80px 20px 60px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="hero-animate" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  marginBottom: '20px',
                }}>
                  <IconBuilding size={16} color="white" />
                  <span style={{ color: 'white', fontFamily: 'var(--system-ui)', fontSize: '.8rem', fontWeight: 500 }}>
                    Est. 1998 • Ronkonkoma, NY
                  </span>
                </div>
                <h1 className="hero-animate" style={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: '20px',
                }}>
                  {heroData.title}
                </h1>
                <p className="hero-animate" style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: '1.7rem',
                  marginBottom: '25px',
                }}>
                  {heroData.intro}
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
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 500,
                    }}
                  >
                    <span>Start a Project</span>
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
                      border: '1px solid rgba(255,255,255,0.5)',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 500,
                    }}
                  >
                    <span>Contact Us</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right: Image Placeholder */}
              <div className="hero-animate">
                <div style={{
                  border: '2px dashed rgba(255,255,255,0.4)',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}>
                  <IconImage size={60} color="rgba(255,255,255,0.4)" />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>
                    Laboratory / Team Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS BAR - Animated Counter ========== */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '40px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <UXUIDCAnimatedCounter stats={stats} />
          </div>
        </section>

        {/* ========== MISSION SECTION ========== */}
        <section ref={missionRef} style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="animate-in order-2 lg:order-1">
                <div style={{
                  border: '2px dashed #e0e0e0',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                }}>
                  <IconTarget size={50} color="#ccc" />
                  <span style={{ color: '#999', fontSize: '.8rem', marginTop: '10px' }}>
                    Mission / Vision Image
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="animate-in" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '15px',
                }}>
                  <div style={{
                    width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <IconTarget size={24} color="white" />
                  </div>
                  <h2 style={{
                    color: '#2384da',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}>
                    {missionData.title}
                  </h2>
                </div>
                <p className="animate-in" style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.95rem',
                  fontWeight: 300,
                  lineHeight: '1.7rem',
                }}>
                  {missionData.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== HISTORY / TIMELINE ========== */}
        <section ref={historyRef} style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="text-center animate-in" style={{ marginBottom: '40px' }}>
              <h2 style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '15px',
              }}>
                {historyData.title}
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'var(--system-ui)',
                fontSize: '.9rem',
                fontWeight: 300,
                lineHeight: '1.6rem',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                {historyData.intro}
              </p>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '30px' }}>
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '10px',
                bottom: '10px',
                width: '2px',
                backgroundColor: 'rgba(0,128,128,0.5)',
              }} />
              
              {historyData.milestones.map((milestone, i) => (
                <div key={i} className="animate-in" style={{
                  position: 'relative',
                  marginBottom: '20px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-26px',
                    top: '6px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#008080',
                    border: '3px solid #0a253c',
                  }} />
                  <span style={{
                    color: '#008080',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    minWidth: '50px',
                  }}>
                    {milestone.year}
                  </span>
                  <span style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.5rem',
                  }}>
                    {milestone.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="animate-in text-center" style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--system-ui)',
              fontSize: '.85rem',
              fontWeight: 300,
              lineHeight: '1.5rem',
              marginTop: '30px',
              fontStyle: 'italic',
            }}>
              {historyData.outro}
            </p>
          </div>
        </section>

        {/* ========== OUR APPROACH ========== */}
        <section ref={approachRef} style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in text-center" style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '40px',
            }}>
              {approachData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approachData.sections.map((section, i) => (
                <div key={i} className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{
                  backgroundColor: '#f7f7f7',
                  padding: '30px',
                  border: '.5px solid #e0e0e0',
                  borderTop: '4px solid #008080',
                }}>
                  <div style={{
                    width: '56px', height: '56px', backgroundColor: '#0a253c', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px',
                  }}>
                    <section.Icon size={28} color="white" />
                  </div>
                  <h3 style={{
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '12px',
                  }}>
                    {section.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.85rem',
                    fontWeight: 300,
                    lineHeight: '1.5rem',
                    flex: section.items ? 0 : 1,
                  }}>
                    {section.content}
                  </p>
                  {section.items && (
                    <ul style={{ marginTop: '12px', paddingLeft: '18px', flex: 1 }}>
                      {section.items.map((item, j) => (
                        <li key={j} style={{
                          color: '#666',
                          fontFamily: 'var(--system-ui)',
                          fontSize: '.8rem',
                          fontWeight: 300,
                          lineHeight: '1.4rem',
                          marginBottom: '4px',
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== OUR TEAM ========== */}
        <section ref={teamRef} style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="animate-in" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{
                    width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <IconUsers size={24} color="white" />
                  </div>
                  <h2 style={{
                    color: '#2384da',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}>
                    {teamData.title}
                  </h2>
                </div>
                <p className="animate-in" style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                  marginBottom: '20px',
                }}>
                  {teamData.intro}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {teamData.areas.map((area, i) => (
                    <div key={i} className="animate-in flex items-center gap-3 transition-all duration-300 hover:shadow-md" style={{
                      backgroundColor: 'white',
                      padding: '12px 15px',
                      border: '.5px solid #e0e0e0',
                    }}>
                      <area.Icon size={20} color="#008080" />
                      <span style={{
                        color: '#666',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.8rem',
                        fontWeight: 400,
                      }}>
                        {area.text}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="animate-in" style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.85rem',
                  fontWeight: 300,
                  lineHeight: '1.5rem',
                  marginTop: '20px',
                  fontStyle: 'italic',
                }}>
                  {teamData.outro}
                </p>
              </div>
              {/* Image Placeholder */}
              <div className="animate-in">
                <div style={{
                  border: '2px dashed #e0e0e0',
                  borderRadius: '8px',
                  aspectRatio: '4/3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}>
                  <IconUsers size={50} color="#ccc" />
                  <span style={{ color: '#999', fontSize: '.8rem', marginTop: '10px' }}>
                    Team / Scientists Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FACILITIES ========== */}
        <section ref={facilitiesRef} style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="text-center animate-in" style={{ marginBottom: '30px' }}>
              <h2 style={{
                color: '#2384da',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '15px',
              }}>
                {facilitiesData.title}
              </h2>
              <p style={{
                color: '#666',
                fontFamily: 'var(--system-ui)',
                fontSize: '.9rem',
                fontWeight: 300,
                lineHeight: '1.6rem',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                {facilitiesData.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facilitiesData.facilities.map((facility, i) => (
                    <div key={i} className="animate-in flex gap-4 transition-all duration-300 hover:shadow-md" style={{
                      backgroundColor: '#f7f7f7',
                      padding: '20px',
                      border: '.5px solid #e0e0e0',
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#008080',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{ color: 'white', fontWeight: 600, fontSize: '.9rem' }}>{i + 1}</span>
                      </div>
                      <div>
                        <h4 style={{
                          color: '#333',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '.95rem',
                          fontWeight: 600,
                          marginBottom: '5px',
                        }}>
                          {facility.title}
                        </h4>
                        <p style={{
                          color: '#666',
                          fontFamily: 'var(--system-ui)',
                          fontSize: '.8rem',
                          fontWeight: 300,
                          lineHeight: '1.4rem',
                        }}>
                          {facility.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-in">
                <div style={{
                  border: '2px dashed #e0e0e0',
                  borderRadius: '8px',
                  height: '100%',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                }}>
                  <IconBuilding size={50} color="#ccc" />
                  <span style={{ color: '#999', fontSize: '.8rem', marginTop: '10px' }}>
                    Facility Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center" style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}>
              {testimonialsData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialsData.testimonials.map((testimonial, i) => (
                <div key={i} className="flex flex-col transition-all duration-300 hover:shadow-lg" style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  border: '.5px solid #e0e0e0',
                  borderLeft: '4px solid #008080',
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <IconQuote size={32} color="#008080" />
                  </div>
                  <p style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.6rem',
                    fontStyle: 'italic',
                    flex: 1,
                  }}>
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto pt-4" style={{ borderTop: '1px solid #f0f0f0' }}>
                    <p style={{
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '.9rem',
                      fontWeight: 600,
                    }}>
                      — {testimonial.name}
                    </p>
                    <p style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.8rem',
                      fontWeight: 300,
                    }}>
                      {testimonial.affiliation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: '30px' }}>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#134978', padding: '10px 20px', minWidth: '160px', fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500 }}
              >
                <span>View All Testimonials</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== PUBLICATIONS ========== */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '15px',
            }}>
              {publicationsData.title}
            </h2>
            <p style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              lineHeight: '1.6rem',
              marginBottom: '25px',
            }}>
              {publicationsData.intro}
            </p>
            <div className="flex flex-wrap justify-center gap-3" style={{ marginBottom: '25px' }}>
              {publicationsData.journals.map((journal, i) => (
                <span key={i} style={{
                  backgroundColor: '#f7f7f7',
                  padding: '10px 20px',
                  border: '.5px solid #e0e0e0',
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.85rem',
                  fontWeight: 400,
                }}>
                  {journal}
                </span>
              ))}
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: '#134978', padding: '10px 20px', minWidth: '160px', fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500 }}
            >
              <span>View Publications</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ========== CONTACT CTA - With DNA Animation ========== */}
        <UXUIDCStartProjectCTA
          title={contactData.title}
          content={`${contactData.company} • ${contactData.location}`}
          buttons={[
            { label: 'Contact Us', href: '/contact' },
            { label: 'Request a Quote', href: '/request-quote' },
          ]}
        />

        {/* ========== FAQ - Animated Accordion ========== */}
        <UXUIDCAnimatedFAQ
          title={faqData.title}
          faqs={faqData.faqs}
          backgroundColor="#f7f7f7"
        />

        {/* ========== RELATED RESOURCES ========== */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center" style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '30px',
            }}>
              {relatedData.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedData.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '30px 20px',
                    border: '.5px solid #e0e0e0',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', backgroundColor: '#0a253c', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px',
                  }}>
                    <link.Icon size={24} color="white" />
                  </div>
                  <span className="group-hover:text-teal-600 transition-colors" style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 500,
                  }}>
                    {link.label}
                  </span>
                  <div style={{ color: '#008080', marginTop: '8px', fontSize: '1.2rem' }}>→</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <UXUIDCFooter />
      <UXUIDCCookieConsent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Ingenious Targeting Laboratory',
            description: 'Custom mouse model experts since 1998',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ingenious Targeting Laboratory',
              foundingDate: '1998',
              areaServed: 'Worldwide',
            },
          }),
        }}
      />
    </div>
  );
}
