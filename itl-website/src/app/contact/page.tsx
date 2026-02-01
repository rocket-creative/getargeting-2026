'use client';

/**
 * Contact Page - ingenious targeting laboratory
 * SIMPLIFIED VERSION - Clean, focused, no redundant sections
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  IconPhone,
  IconMail,
  IconClock,
  IconMapPin,
  IconFileText,
  IconCalendar,
  IconPlus,
  IconPackage,
  IconBriefcase,
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

// Quick action cards
const quickActions = [
  {
    title: 'Request a Quote',
    description: 'Get pricing and timeline for your custom mouse model project',
    href: '/request-quote',
    icon: IconFileText,
    primary: true,
  },
  {
    title: 'Schedule Consultation',
    description: 'Discuss your project with our scientific team',
    href: '/schedule-meeting',
    icon: IconCalendar,
    primary: false,
  },
  {
    title: 'New Project Inquiry',
    description: 'Starting fresh? Let us help design your targeting strategy',
    href: '/start-your-project',
    icon: IconPlus,
    primary: false,
  },
  {
    title: 'Catalog Models',
    description: 'Browse our ready-made humanized and disease models',
    href: '/all-catalog-mouse-models',
    icon: IconPackage,
    primary: false,
  },
];

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
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <UXUIDCNavigation />

      <main id="main-content">
        {/* ========== HERO SECTION ========== */}
        <section 
          ref={heroRef}
          style={{ 
            background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
            padding: '80px 20px 60px',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="hero-animate" style={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.75rem',
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
                  marginBottom: '30px',
                }}>
                  Our scientific consultants are ready to help design your custom mouse model. 
                  Get a free consultation and personalized quote within 2-3 business days.
                </p>
                
                {/* Primary CTA Buttons */}
                <div className="hero-animate flex flex-wrap gap-4">
                  <Link
                    href="/request-quote"
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundColor: '#008080',
                      color: 'white',
                      padding: '14px 28px',
                      borderRadius: '6px',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.95rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Request a Quote</span>
                    <IconArrowRight size={18} />
                  </Link>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                      padding: '14px 28px',
                      borderRadius: '6px',
                      border: '2px solid rgba(255,255,255,0.5)',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.95rem',
                      fontWeight: 500,
                    }}
                  >
                    <IconPhone size={18} />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Right: Contact Info Card */}
              <div className="hero-animate">
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}>
                  <h2 style={{
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '24px',
                  }}>
                    Contact Information
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Email */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <IconMail size={22} color="white" />
                      </div>
                      <div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontFamily: 'var(--system-ui)', marginBottom: '2px' }}>Email</p>
                        <a href={`mailto:${contactInfo.email}`} style={{ color: 'white', fontFamily: 'var(--system-ui)', fontSize: '.95rem', fontWeight: 500 }}>
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <IconPhone size={22} color="white" />
                      </div>
                      <div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontFamily: 'var(--system-ui)', marginBottom: '2px' }}>Phone</p>
                        <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`} style={{ color: 'white', fontFamily: 'var(--system-ui)', fontSize: '.95rem', fontWeight: 500 }}>
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <IconClock size={22} color="white" />
                      </div>
                      <div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontFamily: 'var(--system-ui)', marginBottom: '2px' }}>Hours</p>
                        <p style={{ color: 'white', fontFamily: 'var(--system-ui)', fontSize: '.95rem', fontWeight: 500, margin: 0 }}>
                          {contactInfo.hours}
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '48px', height: '48px', backgroundColor: '#008080', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <IconMapPin size={22} color="white" />
                      </div>
                      <div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.75rem', fontFamily: 'var(--system-ui)', marginBottom: '2px' }}>Address</p>
                        <p style={{ color: 'white', fontFamily: 'var(--system-ui)', fontSize: '.9rem', fontWeight: 500, margin: 0, lineHeight: '1.5' }}>
                          {contactInfo.address.line2}<br />
                          {contactInfo.address.line3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== QUICK ACTIONS ========== */}
        <section ref={contentRef} style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 className="animate-in text-center" style={{
              color: '#0a253c',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '12px',
            }}>
              How Can We Help?
            </h2>
            <p className="animate-in text-center" style={{
              color: '#666',
              fontFamily: 'var(--system-ui)',
              fontSize: '1rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}>
              Choose the best way to get started with your project
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={i}
                    href={action.href}
                    className="animate-in group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      backgroundColor: action.primary ? '#0a253c' : '#f8fafc',
                      padding: '28px',
                      borderRadius: '12px',
                      border: action.primary ? 'none' : '1px solid #e5e7eb',
                      textDecoration: 'none',
                      height: '100%',
                    }}
                  >
                    <div style={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: action.primary ? '#008080' : '#0a253c',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}>
                      <Icon size={26} color="white" />
                    </div>
                    <h3 style={{
                      color: action.primary ? 'white' : '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}>
                      {action.title}
                    </h3>
                    <p style={{
                      color: action.primary ? 'rgba(255,255,255,0.8)' : '#666',
                      fontFamily: 'var(--system-ui)',
                      fontSize: '.9rem',
                      lineHeight: '1.5',
                      margin: 0,
                      flex: 1,
                    }}>
                      {action.description}
                    </p>
                    <div 
                      className="mt-4 flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                      style={{ 
                        color: action.primary ? '#00d4d4' : '#008080',
                        fontFamily: 'var(--system-ui)',
                        fontSize: '.85rem',
                        fontWeight: 600,
                      }}
                    >
                      <span>Get started</span>
                      <IconArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== RESPONSE TIME BANNER ========== */}
        <section style={{ backgroundColor: '#008080', padding: '40px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
              <IconClock size={24} color="white" />
              <h2 style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                margin: 0,
              }}>
                Quick Response Guaranteed
              </h2>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'var(--system-ui)',
              fontSize: '1rem',
              fontWeight: 400,
              margin: 0,
            }}>
              We respond to all inquiries within one business day. Complex projects receive a detailed technical review within 2-3 days.
            </p>
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
