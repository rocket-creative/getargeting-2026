'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import UXUIDCNavigation from '@/components/UXUIDC/Navigation';
import UXUIDCFooter from '@/components/UXUIDC/Footer';
import UXUIDCAnimatedCounter from '@/components/UXUIDC/AnimatedCounter';
import { IconDNA, IconTarget, IconFlask, IconSettings, IconQuote, IconChevronRight, IconCheckCircle, IconShield, IconLayers } from '@/components/UXUIDC/Icons';

// Hero Data
const heroData = {
  badge: "Careers",
  title: "Current Openings",
  intro: "Ingenious Targeting Laboratory is always looking for talented scientists to join our team. Since 1998, we have built a team of experts dedicated to advancing research through custom mouse model generation.",
  description: "We offer opportunities for scientists at all career stages to contribute to cutting edge research while working with leading academic and industry partners."
};

// Stats Data
const statsData = [
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 800, suffix: "+", label: "Publications" },
  { value: 26, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Success Guarantee" }
];

// Why Work Here Data
const whyWorkHereData = [
  {
    title: "Scientific Excellence",
    description: "Join a team that has:",
    points: [
      "Completed over 2,500 custom projects",
      "Contributed to 800+ publications",
      "Worked with leading research institutions",
      "Advanced gene targeting technologies"
    ],
    color: "#008080"
  },
  {
    title: "Professional Development",
    description: "We support career growth through:",
    points: [
      "Training in cutting edge technologies",
      "Collaboration with diverse research teams",
      "Publication opportunities",
      "Conference attendance"
    ],
    color: "#134978"
  },
  {
    title: "Collaborative Environment",
    description: "Work in an environment that values:",
    points: [
      "Scientific collaboration",
      "Innovation",
      "Quality and precision",
      "Team success"
    ],
    color: "#00d4d4"
  }
];

// Team Environment Data
const teamEnvironmentData = {
  title: "Our Team",
  description: "Our team members work on diverse projects across all therapeutic areas, from oncology and neuroscience to metabolic disease and immunology. We provide a collaborative environment where scientists can develop expertise in gene targeting, mouse genetics, and model development."
};

// Contact Data
const contactData = {
  title: "Contact",
  description: "For questions about positions or to submit applications:",
  email: "inquiry@genetargeting.com",
  phone: "+1 (631) 468-8530",
  address: "761-80 Coates Avenue, Holbrook, NY 11741"
};

// Related Links Data
const relatedLinksData = [
  { href: "/about-itl", label: "About ITL" },
  { href: "/general-contact", label: "General Contact" },
  { href: "/technology-overview", label: "Technology Overview" }
];

// CTA Data
const ctaData = {
  title: "Interested in Joining Our Team?",
  description: "Contact us to learn more about current openings and career opportunities at Ingenious Targeting Laboratory.",
  primaryButton: { href: "/general-contact", label: "Contact Us" },
  secondaryButton: { href: "/about-itl", label: "Learn About ITL" }
};

export default function CurrentOpeningsPage() {
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
            "@type": "JobPosting",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Ingenious Targeting Laboratory",
              "url": "https://www.genetargeting.com"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "761-80 Coates Avenue",
                "addressLocality": "Holbrook",
                "addressRegion": "NY",
                "postalCode": "11741",
                "addressCountry": "US"
              }
            },
            "description": "Career opportunities at Ingenious Targeting Laboratory. Join our team of scientists developing custom mouse models for research worldwide."
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
              <Link href="/general-contact" style={{
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
                Contact Us
                <IconChevronRight size={16} color="#ffffff" />
              </Link>
              <Link href="/about-itl" style={{
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
                About ITL
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

        {/* Why Work Here Section */}
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
              Why Work at Ingenious Targeting Laboratory
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {whyWorkHereData.map((item, index) => (
                <div key={index} className="animate-in group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '28px',
                  borderTop: `4px solid ${item.color}`
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: `${item.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <IconDNA size={24} color={item.color} />
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
                  <p style={{
                    fontSize: '.9rem',
                    color: '#666',
                    marginBottom: '14px'
                  }}>
                    {item.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {item.points.map((point, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '.85rem',
                        color: '#666',
                        marginBottom: '8px'
                      }}>
                        <IconCheckCircle size={14} color={item.color} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Environment Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="animate-in" style={{
              background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
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
                  marginBottom: '16px'
                }}>
                  {teamEnvironmentData.title}
                </h2>
                <p style={{
                  fontSize: '.95rem',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  {teamEnvironmentData.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
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
              Open Positions
            </h2>
            <div className="animate-in" style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '40px',
              textAlign: 'center',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(0,128,128,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <IconShield size={32} color="#008080" />
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '12px'
              }}>
                There are currently no openings.
              </h3>
              <p style={{
                fontSize: '.9rem',
                color: '#666',
                marginBottom: '24px',
                lineHeight: 1.6
              }}>
                We encourage you to check back regularly or contact us to inquire about future opportunities.
              </p>
              <Link href="/general-contact" style={{
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
                Contact for Inquiries
                <IconChevronRight size={16} color="#ffffff" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ background: '#ffffff', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {contactData.title}
            </h2>
            <p className="animate-in" style={{
              fontSize: '.9rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              {contactData.description}
            </p>
            <div className="animate-in" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              <div style={{
                background: '#f7f7f7',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0,128,128,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <IconTarget size={20} color="#008080" />
                </div>
                <h4 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Email
                </h4>
                <a href={`mailto:${contactData.email}`} style={{
                  fontSize: '.85rem',
                  color: '#008080',
                  textDecoration: 'none'
                }}>
                  {contactData.email}
                </a>
              </div>
              <div style={{
                background: '#f7f7f7',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0,128,128,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <IconSettings size={20} color="#008080" />
                </div>
                <h4 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Phone
                </h4>
                <a href={`tel:${contactData.phone}`} style={{
                  fontSize: '.85rem',
                  color: '#008080',
                  textDecoration: 'none'
                }}>
                  {contactData.phone}
                </a>
              </div>
              <div style={{
                background: '#f7f7f7',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(0,128,128,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px'
                }}>
                  <IconLayers size={20} color="#008080" />
                </div>
                <h4 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Address
                </h4>
                <p style={{
                  fontSize: '.85rem',
                  color: '#666',
                  margin: 0,
                  lineHeight: 1.5
                }}>
                  {contactData.address}
                </p>
              </div>
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

        {/* Related Information Section */}
        <section style={{ background: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2384da',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Related Information
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {relatedLinksData.map((link, index) => (
                <Link key={index} href={link.href} className="animate-in" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  padding: '12px 20px',
                  fontSize: '.9rem',
                  color: '#008080',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}>
                  <IconChevronRight size={14} color="#008080" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <UXUIDCFooter />
    </div>
  );
}
