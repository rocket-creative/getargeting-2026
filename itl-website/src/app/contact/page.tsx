'use client';

/**
 * Contact Page - ingenious targeting laboratory
 * General contact form for inquiries and questions
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  HubSpotForm,
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
  IconFileText,
  IconCalendar,
  IconCheckCircle,
  IconBriefcase,
  IconPackage,
  IconArrowRight,
} from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

// Contact information
const contactInfo = {
  email: 'inquiry@genetargeting.com',
  phone: '+1 (631) 468-8534',
  hours: 'Monday - Friday, 9 AM - 5 PM ET',
  address: {
    line1: 'ingenious targeting laboratory',
    line2: '761-80 Coates Avenue',
    line3: 'Holbrook, NY 11741',
  },
};

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />

      <main id="main-content" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        {/* ========== HERO SECTION ========== */}
        <section 
          ref={heroRef}
          style={{ 
            background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
            padding: '80px 20px 60px',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Hero Header */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 className="hero-animate" style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}>
                Let&apos;s Start Your Project
              </h1>
              <p className="hero-animate" style={{
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'var(--system-ui)',
                fontSize: '1.1rem',
                fontWeight: 400,
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto',
              }}>
                Our scientific consultants are ready to help design your custom mouse model. 
                Choose the best way to get started below.
              </p>
            </div>

            {/* Contact Method Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Request a Quote */}
              <Link
                href="/request-quote"
                className="hero-animate group"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#008080',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <IconFileText size={28} color="white" />
                </div>
                <h3 style={{
                  color: '#0a253c',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}>
                  Request a Quote
                </h3>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flex: 1,
                }}>
                  Get detailed pricing and timeline for your custom mouse model project. Submit your project details and receive a quote within 1 business day.
                </p>
                <div 
                  className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                  style={{ 
                    color: '#008080',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Get pricing</span>
                  <IconArrowRight size={16} />
                </div>
              </Link>

              {/* Card 2: Schedule Meeting */}
              <Link
                href="/schedule-meeting"
                className="hero-animate group"
                style={{
                  backgroundColor: '#0a253c',
                  borderRadius: '12px',
                  padding: '32px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  border: '2px solid #008080',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#008080',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <IconCalendar size={28} color="white" />
                </div>
                <h3 style={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}>
                  Schedule Consultation
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flex: 1,
                }}>
                  Book a free phone consultation with our scientific team. Discuss your project strategy, timeline, and get expert recommendations.
                </p>
                <div 
                  className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                  style={{ 
                    color: '#00d4d4',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Book meeting</span>
                  <IconArrowRight size={16} />
                </div>
              </Link>

              {/* Card 3: General Inquiry */}
              <Link
                href="/general-contact"
                className="hero-animate group"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#008080',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <IconMail size={28} color="white" />
                </div>
                <h3 style={{
                  color: '#0a253c',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}>
                  Send a Message
                </h3>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flex: 1,
                }}>
                  Have a general question or inquiry? Send us a detailed message and our team will respond within 1 business day.
                </p>
                <div 
                  className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                  style={{ 
                    color: '#008080',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Contact us</span>
                  <IconArrowRight size={16} />
                </div>
              </Link>
            </div>

            {/* Direct Contact Info */}
            <div className="hero-animate" style={{
              marginTop: '50px',
              textAlign: 'center',
              padding: '30px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.9rem', marginBottom: '16px' }}>
                Prefer to reach out directly?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  style={{
                    color: '#00d4d4',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: 500,
                  }}
                >
                  <IconMail size={20} color="#00d4d4" />
                  <span>{contactInfo.email}</span>
                </a>
                <a 
                  href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                  style={{
                    color: '#00d4d4',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: 500,
                  }}
                >
                  <IconPhone size={20} color="#00d4d4" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ADDITIONAL INFO ========== */}
        <section ref={contentRef} style={{ padding: '50px 20px', backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar Content */}
              <div className="lg:col-span-1 space-y-5">
                {/* Contact Info Card */}
                <div className="animate-in" style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}>
                  <h3 style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}>
                    Contact Information
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <IconMail size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Email</p>
                        <a href={`mailto:${contactInfo.email}`} style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', textDecoration: 'none' }}>
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <IconPhone size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Phone</p>
                        <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', textDecoration: 'none' }}>
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <IconClock size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Hours</p>
                        <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                          {contactInfo.hours}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <IconMapPin size={18} color="#008080" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>Address</p>
                        <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'var(--system-ui)', margin: 0, lineHeight: '1.4' }}>
                          {contactInfo.address.line2}<br />
                          {contactInfo.address.line3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links Card */}
                <div className="animate-in" style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}>
                  <h3 style={{
                    color: '#0a253c',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}>
                    Quick Links
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Link href="/request-quote" style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px',
                      backgroundColor: '#f8fafc', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s',
                    }} className="hover:bg-gray-100">
                      <IconFileText size={18} color="#008080" />
                      <div>
                        <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'Poppins, sans-serif', fontWeight: 500, margin: 0 }}>
                          Request a Quote
                        </p>
                        <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                          Get project pricing
                        </p>
                      </div>
                    </Link>
                    <Link href="/schedule-meeting" style={{
                      display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px',
                      backgroundColor: '#f8fafc', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s',
                    }} className="hover:bg-gray-100">
                      <IconCalendar size={18} color="#008080" />
                      <div>
                        <p style={{ color: '#0a253c', fontSize: '.875rem', fontFamily: 'Poppins, sans-serif', fontWeight: 500, margin: 0 }}>
                          Schedule a Meeting
                        </p>
                        <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                          Book a consultation
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="animate-in" style={{
                  backgroundColor: '#0a253c',
                  borderRadius: '12px',
                  padding: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <IconCheckCircle size={20} color="#00d4d4" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: 'white', fontSize: '.9rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, margin: '0 0 4px 0' }}>
                        Fast Response
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.8rem', fontFamily: 'var(--system-ui)', margin: 0, lineHeight: '1.4' }}>
                        We typically respond to inquiries within 1 business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Quick Links */}
              <div className="lg:col-span-2">
                <div className="animate-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <Link href="/request-quote" style={{
                    display: 'flex', alignItems: 'center', gap: '10px', padding: '20px',
                    backgroundColor: 'white', borderRadius: '8px', textDecoration: 'none',
                    border: '1px solid #e5e7eb', transition: 'all 0.2s',
                  }} className="hover:shadow-md hover:-translate-y-1">
                    <IconFileText size={24} color="#008080" />
                    <div>
                      <p style={{ color: '#0a253c', fontSize: '.9rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, margin: 0 }}>
                        Request a Quote
                      </p>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                        Get project pricing
                      </p>
                    </div>
                  </Link>
                  <Link href="/schedule-meeting" style={{
                    display: 'flex', alignItems: 'center', gap: '10px', padding: '20px',
                    backgroundColor: 'white', borderRadius: '8px', textDecoration: 'none',
                    border: '1px solid #e5e7eb', transition: 'all 0.2s',
                  }} className="hover:shadow-md hover:-translate-y-1">
                    <IconCalendar size={24} color="#008080" />
                    <div>
                      <p style={{ color: '#0a253c', fontSize: '.9rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, margin: 0 }}>
                        Schedule a Meeting
                      </p>
                      <p style={{ color: '#666', fontSize: '.75rem', fontFamily: 'var(--system-ui)', margin: 0 }}>
                        Book a consultation
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CAREERS & PARTNERSHIPS ========== */}
        <section style={{ backgroundColor: '#f8fafc', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Careers */}
              <div 
                className="animate-in"
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#0a253c',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <IconBriefcase size={28} color="white" />
                </div>
                <h3 style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}>
                  Join Our Team
                </h3>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}>
                  Interested in working at the forefront of genetic engineering? View current openings at ingenious targeting laboratory.
                </p>
                <Link
                  href="/current-openings"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: '#008080',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 600,
                  }}
                >
                  <span>View Openings</span>
                  <IconArrowRight size={16} />
                </Link>
              </div>

              {/* Partnerships */}
              <div 
                className="animate-in"
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#0a253c',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <IconPackage size={28} color="white" />
                </div>
                <h3 style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}>
                  Partnership Inquiries
                </h3>
                <p style={{
                  color: '#666',
                  fontFamily: 'var(--system-ui)',
                  fontSize: '.9rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}>
                  Academic core facilities, CROs, and pharma/biotech companies looking to collaborate.
                </p>
                <a
                  href={`mailto:${contactInfo.email}?subject=Partnership Inquiry`}
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    color: '#008080',
                    fontFamily: 'var(--system-ui)',
                    fontSize: '.9rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Contact us</span>
                  <IconArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <UXUIDCFooter />

      {/* SEO: Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact ingenious targeting laboratory',
            description: 'Contact ingenious targeting laboratory for custom mouse model projects.',
            mainEntity: {
              '@type': 'Organization',
              name: 'ingenious targeting laboratory',
              telephone: '+1-631-468-8534',
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
