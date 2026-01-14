'use client';

/**
 * Contact Page - Ingenious Targeting Laboratory
 * Built from MASTER TEXT: /page-text-md/contact.md
 * All text displayed EXACTLY as written - DO NOT MODIFY TEXT
 * 
 * Design System: UXUIDC / Biotech standards
 * Max-width: 1440px
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
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
  IconFileText,
  IconCalendar,
  IconUsers,
  IconShield,
  IconPlus,
  IconClipboard,
  IconPackage,
  IconSearch,
  IconMessageCircle,
  IconBriefcase,
  IconGlobe,
  IconImage,
} from '@/components/UXUIDC';
import { UXUIDCAnimatedCounter } from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

// ========== STATS BAR ==========
const statsBar = [
  { number: '2,500+', label: 'Projects Completed' },
  { number: '800+', label: 'Publications' },
  { number: '25+', label: 'Years of Excellence' },
  { number: '100%', label: 'Custom Solutions' },
];

// ============================================
// MASTER TEXT DATA - from contact.md
// DO NOT EDIT - This is APPROVED content
// ============================================

const heroData = {
  title: 'Contact Ingenious Targeting Laboratory',
  intro: "Ready to discuss your mouse model project? Ingenious Targeting Laboratory's scientific consultants are available to review your research goals and recommend optimal targeting strategies. We provide complimentary project consultations for new and existing clients.",
};

const quoteData = {
  title: 'Request a Quote',
  intro: 'For project pricing and timeline estimates, submit your project details through our quote request form. Include information about:',
  items: [
    'Target gene and intended modification',
    'Model type (knockout, knockin, humanized, conditional)',
    'Strain background preference',
    'Cohort size needs',
  ],
  cta: { href: '/request-quote', label: 'Request a Quote' },
};

const consultationData = {
  title: 'Schedule a Consultation',
  intro: 'Prefer to discuss your project directly? Schedule a virtual consultation with our scientific team:',
  items: [
    'Review targeting strategy options',
    'Discuss allele design considerations',
    'Understand timeline and deliverables',
    'Address technical questions',
  ],
};

const whyChooseData = {
  title: 'Why Choose Ingenious Targeting Laboratory',
  paragraphs: [
    'With over 2,500 custom mouse model projects completed, Ingenious Targeting Laboratory brings extensive experience to every project. Our scientific consultants work closely with researchers to design optimal targeting strategies and ensure project success.',
    'We understand that each research program has unique requirements, and we tailor our approach to match your experimental goals, timeline, and budget. From initial consultation through delivery of study ready cohorts, we provide comprehensive support for your mouse model needs.',
  ],
};

const contactInfoData = {
  title: 'General Inquiries',
  email: 'inquiry@genetargeting.com',
  phone: '+1 (631) 468-8530',
  hours: 'Available Monday through Friday, 9 AM to 5 PM Eastern Time',
  address: {
    company: 'Ingenious Targeting Laboratory',
    street: '761-80 Coates Avenue Holbrook, NY, 11741',
  },
};

const inquiryTypesData = {
  title: 'Project Inquiry Types',
  types: [
    {
      title: 'New Projects',
      intro: 'Starting a new mouse model project? Our scientific consultants can help you:',
      items: [
        'Evaluate targeting strategy options',
        'Design optimal allele configurations',
        'Understand timeline and costs',
        'Plan downstream applications',
      ],
      Icon: IconPlus,
    },
    {
      title: 'Existing Projects',
      intro: 'Current clients can reach project managers for:',
      items: [
        'Project status updates',
        'Technical questions',
        'Deliverable coordination',
        'Additional service requests',
      ],
      Icon: IconClipboard,
    },
    {
      title: 'Catalog Model Inquiries',
      intro: "Interested in Ingenious Targeting Laboratory's catalog mouse models, including humanized mice?",
      cta: { href: '/order-inquiry-catalog-models', label: 'Catalog Inquiry' },
      Icon: IconPackage,
    },
    {
      title: 'Model Feasibility',
      intro: 'Not sure if your targeting design is feasible? Submit a feasibility check:',
      cta: { href: '/model-feasibility-check', label: 'Feasibility Check' },
      Icon: IconSearch,
    },
  ],
};

const responseTimeData = {
  title: 'Response Time',
  content: 'We typically respond to inquiries within one business day. Complex project inquiries may require additional time for technical review and strategy development.',
};

const resourcesData = {
  title: 'Resources Before You Contact Us',
  intro: 'These resources may answer common questions:',
  links: [
    { href: '/faqs', label: 'FAQs' },
    { href: '/model-generation-timeline', label: 'Model Generation Timeline' },
    { href: '/guides', label: 'Guides' },
    { href: '/technologies', label: 'Technologies' },
  ],
};

const partnersData = {
  title: 'Partners and Collaborators',
  intro: 'Ingenious Targeting Laboratory welcomes collaboration inquiries from:',
  items: [
    'Academic core facilities',
    'Contract research organizations',
    'Pharmaceutical and biotech companies',
    'International research institutions',
  ],
  cta: { href: '/partners', label: 'Partnership Inquiries' },
};

const careersData = {
  title: 'Careers',
  content: 'Interested in joining Ingenious Targeting Laboratory? View current openings:',
  cta: { href: '/current-openings', label: 'View Openings' },
};

const socialData = {
  title: 'Stay Connected',
  intro: 'Follow Ingenious Targeting Laboratory for news, publications, and resources:',
  items: [
    'New model capabilities and service announcements',
    'Recent publications featuring Ingenious Targeting Laboratory models',
    'Technical resources and guides',
    'Webinars and educational content',
  ],
  cta: { href: '/news', label: 'Latest News' },
};

// ============================================
// PAGE COMPONENT
// ============================================
export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const inquiryTypesRef = useRef<HTMLDivElement>(null);

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
    const sections = [formSectionRef, contactInfoRef, inquiryTypesRef];
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
                  <IconPhone size={16} color="white" />
                  <span style={{ color: 'white', fontFamily: 'var(--system-ui)', fontSize: '.8rem', fontWeight: 500 }}>
                    We're Here to Help
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
                    <span>Request a Quote</span>
                    <span>→</span>
                  </Link>
                  <a
                    href="tel:+16314688530"
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
                    <IconPhone size={16} color="white" />
                    <span>Call Us</span>
                  </a>
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
                  <IconMessageCircle size={60} color="rgba(255,255,255,0.4)" />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginTop: '10px' }}>
                    Contact / Support Image
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

        {/* ========== QUICK CONTACT BAR ========== */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '30px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div style={{
                  width: '50px', height: '50px', backgroundColor: '#008080', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <IconMail size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>Email</p>
                  <a href={`mailto:${contactInfoData.email}`} style={{ color: '#008080', fontFamily: 'var(--system-ui)', fontSize: '.85rem' }}>
                    {contactInfoData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div style={{
                  width: '50px', height: '50px', backgroundColor: '#008080', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <IconPhone size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>Phone</p>
                  <a href={`tel:${contactInfoData.phone.replace(/[^\d+]/g, '')}`} style={{ color: '#008080', fontFamily: 'var(--system-ui)', fontSize: '.85rem' }}>
                    {contactInfoData.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div style={{
                  width: '50px', height: '50px', backgroundColor: '#008080', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <IconClock size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '.9rem', fontWeight: 600 }}>Hours</p>
                  <p style={{ color: '#666', fontFamily: 'var(--system-ui)', fontSize: '.85rem' }}>Mon-Fri, 9AM-5PM ET</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== REQUEST QUOTE & CONSULTATION ========== */}
        <section ref={formSectionRef} style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Request a Quote */}
              <div className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{
                backgroundColor: '#f7f7f7',
                padding: '35px',
                border: '.5px solid #e0e0e0',
                borderTop: '4px solid #008080',
              }}>
                <div style={{
                  width: '56px', height: '56px', backgroundColor: '#0a253c', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px',
                }}>
                  <IconFileText size={28} color="white" />
                </div>
                <h2 style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}>
                  {quoteData.title}
                </h2>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.5rem',
                  marginBottom: '15px',
                }}>
                  {quoteData.intro}
                </p>
                <ul style={{ paddingLeft: '18px', marginBottom: '20px', flex: 1 }}>
                  {quoteData.items.map((item, i) => (
                    <li key={i} style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                      marginBottom: '5px',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={quoteData.cta.href}
                  className="mt-auto inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ backgroundColor: '#134978', padding: '10px 20px', minWidth: '160px', fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500, alignSelf: 'flex-start' }}
                >
                  <span>{quoteData.cta.label}</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Schedule a Consultation */}
              <div className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{
                backgroundColor: '#f7f7f7',
                padding: '35px',
                border: '.5px solid #e0e0e0',
                borderTop: '4px solid #2384da',
              }}>
                <div style={{
                  width: '56px', height: '56px', backgroundColor: '#0a253c', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px',
                }}>
                  <IconCalendar size={28} color="white" />
                </div>
                <h2 style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}>
                  {consultationData.title}
                </h2>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.5rem',
                  marginBottom: '15px',
                }}>
                  {consultationData.intro}
                </p>
                <ul style={{ paddingLeft: '18px', marginBottom: '20px', flex: 1 }}>
                  {consultationData.items.map((item, i) => (
                    <li key={i} style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.85rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                      marginBottom: '5px',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request-quote"
                  className="mt-auto inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ backgroundColor: '#008080', padding: '10px 20px', minWidth: '160px', fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500, alignSelf: 'flex-start' }}
                >
                  <span>Schedule Consultation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== RESPONSE TIME ========== */}
        <section style={{ backgroundColor: '#0a253c', padding: '40px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <IconClock size={40} color="#008080" className="mx-auto mb-4" />
            <h2 style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '10px',
            }}>
              {responseTimeData.title}
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              lineHeight: '1.6rem',
            }}>
              {responseTimeData.content}
            </p>
          </div>
        </section>

        {/* ========== WHY CHOOSE ITL ========== */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div>
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
                  <IconShield size={50} color="#ccc" />
                  <span style={{ color: '#999', fontSize: '.8rem', marginTop: '10px' }}>
                    Trust / Quality Image
                  </span>
                </div>
              </div>
              {/* Content */}
              <div>
                <h2 style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '20px',
                }}>
                  {whyChooseData.title}
                </h2>
                {whyChooseData.paragraphs.map((p, i) => (
                  <p key={i} style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.6rem',
                    marginBottom: '15px',
                  }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== GENERAL INQUIRIES / CONTACT INFO ========== */}
        <section ref={contactInfoRef} style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in text-center" style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '40px',
            }}>
              {contactInfoData.title}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="animate-in transition-all duration-300 hover:shadow-lg" style={{
                backgroundColor: '#f7f7f7',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '60px', height: '60px', backgroundColor: '#0a253c', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px',
                }}>
                  <IconMail size={28} color="white" />
                </div>
                <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                  Email
                </h3>
                <a href={`mailto:${contactInfoData.email}`} style={{
                  color: '#008080',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 500,
                }}>
                  {contactInfoData.email}
                </a>
              </div>

              <div className="animate-in transition-all duration-300 hover:shadow-lg" style={{
                backgroundColor: '#f7f7f7',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '60px', height: '60px', backgroundColor: '#0a253c', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px',
                }}>
                  <IconPhone size={28} color="white" />
                </div>
                <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                  Phone
                </h3>
                <a href={`tel:${contactInfoData.phone.replace(/[^\d+]/g, '')}`} style={{
                  color: '#008080',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 500,
                }}>
                  {contactInfoData.phone}
                </a>
                <p style={{ color: '#666', fontFamily: 'var(--system-ui)', fontSize: '.8rem', marginTop: '8px' }}>
                  {contactInfoData.hours}
                </p>
              </div>

              <div className="animate-in transition-all duration-300 hover:shadow-lg" style={{
                backgroundColor: '#f7f7f7',
                padding: '30px',
                border: '.5px solid #e0e0e0',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '60px', height: '60px', backgroundColor: '#0a253c', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px',
                }}>
                  <IconMapPin size={28} color="white" />
                </div>
                <h3 style={{ color: '#333', fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                  Mailing Address
                </h3>
                <p style={{ color: '#666', fontFamily: 'var(--system-ui)', fontSize: '.9rem', lineHeight: '1.5rem' }}>
                  {contactInfoData.address.company}<br />
                  {contactInfoData.address.street}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROJECT INQUIRY TYPES ========== */}
        <section ref={inquiryTypesRef} style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in text-center" style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '40px',
            }}>
              {inquiryTypesData.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inquiryTypesData.types.map((type, i) => (
                <div key={i} className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg" style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  border: '.5px solid #e0e0e0',
                }}>
                  <div style={{
                    width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px',
                  }}>
                    <type.Icon size={24} color="white" />
                  </div>
                  <h3 style={{
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}>
                    {type.title}
                  </h3>
                  <p style={{
                    color: '#666',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 300,
                    lineHeight: '1.5rem',
                    marginBottom: type.items ? '12px' : '15px',
                  }}>
                    {type.intro}
                  </p>
                  {type.items && (
                    <ul style={{ paddingLeft: '18px', marginBottom: '15px', flex: 1 }}>
                      {type.items.map((item, j) => (
                        <li key={j} style={{
                          color: '#666',
                          fontFamily: 'var(--system-ui)',
                          fontSize: '.85rem',
                          fontWeight: 300,
                          lineHeight: '1.4rem',
                          marginBottom: '4px',
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {!type.items && <div style={{ flex: 1 }} />}
                  {type.cta && (
                    <Link
                      href={type.cta.href}
                      className="mt-auto inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors"
                      style={{ fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500 }}
                    >
                      <span>{type.cta.label}</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== RESOURCES ========== */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center" style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '10px',
            }}>
              {resourcesData.title}
            </h2>
            <p className="text-center" style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              marginBottom: '30px',
            }}>
              {resourcesData.intro}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {resourcesData.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '25px 15px',
                    border: '.5px solid #e0e0e0',
                  }}
                >
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

        {/* ========== PARTNERS & COLLABORATORS ========== */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 style={{
                  color: '#2384da',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                }}>
                  {partnersData.title}
                </h2>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  fontWeight: 300,
                  lineHeight: '1.6rem',
                  marginBottom: '15px',
                }}>
                  {partnersData.intro}
                </p>
                <ul style={{ paddingLeft: '18px', marginBottom: '20px' }}>
                  {partnersData.items.map((item, i) => (
                    <li key={i} style={{
                      color: '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      marginBottom: '5px',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={partnersData.cta.href}
                  className="inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#134978', padding: '10px 20px', minWidth: '160px', fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500 }}
                >
                  <span>{partnersData.cta.label}</span>
                  <span>→</span>
                </Link>
              </div>
              {/* Image Placeholder */}
              <div>
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
                    Partners / Collaboration Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CAREERS ========== */}
        <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px', backgroundColor: '#0a253c', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px',
            }}>
              <IconBriefcase size={32} color="white" />
            </div>
            <h2 style={{
              color: '#2384da',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '10px',
            }}>
              {careersData.title}
            </h2>
            <p style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              lineHeight: '1.6rem',
              marginBottom: '20px',
            }}>
              {careersData.content}
            </p>
            <Link
              href={careersData.cta.href}
              className="inline-flex items-center gap-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: '#008080', padding: '10px 20px', minWidth: '160px', fontFamily: 'var(--system-ui)', fontSize: '.85rem', fontWeight: 500 }}
            >
              <span>{careersData.cta.label}</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ========== STAY CONNECTED ========== */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <IconGlobe size={40} color="#008080" className="mx-auto mb-4" />
            <h2 style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '10px',
            }}>
              {socialData.title}
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'var(--system-ui)',
              fontSize: '.9rem',
              fontWeight: 300,
              lineHeight: '1.6rem',
              marginBottom: '20px',
            }}>
              {socialData.intro}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '25px' }}>
              {socialData.items.map((item, i) => (
                <li key={i} style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.85rem',
                  fontWeight: 300,
                  lineHeight: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}>
                  <span style={{ color: '#008080' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link
              href={socialData.cta.href}
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '10px 20px',
                border: '2px solid white',
                fontFamily: 'var(--system-ui)',
                fontSize: '.9rem',
                fontWeight: 500,
              }}
            >
              <span>{socialData.cta.label}</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <UXUIDCFooter />
      <UXUIDCCookieConsent />

      {/* SEO: Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Ingenious Targeting Laboratory',
            description: 'Contact Ingenious Targeting Laboratory for custom mouse model projects.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Ingenious Targeting Laboratory',
              telephone: '+1-631-468-8530',
              email: 'inquiry@genetargeting.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '761-80 Coates Avenue',
                addressLocality: 'Holbrook',
                addressRegion: 'NY',
                postalCode: '11741',
                addressCountry: 'US',
              },
            },
          }),
        }}
      />
    </div>
  );
}
