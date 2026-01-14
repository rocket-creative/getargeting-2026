'use client';

/**
 * Start Your Project Page - Ingenious Targeting Laboratory
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  IconDNA,
  IconTarget,
  IconMicroscope,
  IconCheckCircle,
  IconArrowRight,
} from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'Request a Quote',
    description: 'Submit your project details through our quote request form. Include your target gene, desired modification type, and research goals.',
    action: 'Request Quote',
    href: '/request-quote',
    Icon: IconTarget,
  },
  {
    number: '2',
    title: 'Scientific Consultation',
    description: 'Our scientific team will review your requirements and schedule a consultation to discuss strategy options and project design.',
    action: 'Contact Us',
    href: '/contact',
    Icon: IconMicroscope,
  },
  {
    number: '3',
    title: 'Project Proposal',
    description: 'Receive a detailed project proposal including strategy design, timeline, deliverables, and pricing. Review and approve to begin.',
    action: 'Learn More',
    href: '/mouse-model-generation-guide',
    Icon: IconDNA,
  },
  {
    number: '4',
    title: 'Project Initiation',
    description: 'Once approved, your project enters our production pipeline. Regular updates keep you informed of progress through each milestone.',
    action: 'View Timeline',
    href: '/model-generation-timeline',
    Icon: IconCheckCircle,
  },
];

export default function StartYourProjectPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }

    const animateElements = document.querySelectorAll('.animate-in');
    animateElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
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
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
            <div
              className="hero-animate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '6px 16px',
                borderRadius: '20px',
                marginBottom: '20px',
              }}
            >
              <IconDNA size={16} color="white" />
              <span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>Get Started</span>
            </div>
            <h1
              className="hero-animate"
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.8rem',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              Start Your Project
            </h1>
            <p
              className="hero-animate"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.1rem',
                fontWeight: 300,
                lineHeight: '1.7rem',
                maxWidth: '700px',
                margin: '0 auto 30px',
              }}
            >
              Ready to begin your custom mouse model project? Our team is here to help you design and generate the optimal model for your research goals.
            </p>
            <div className="hero-animate flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: 'white',
                  color: '#0a253c',
                  padding: '12px 28px',
                  fontSize: '.9rem',
                  fontWeight: 600,
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
                  padding: '12px 28px',
                  border: '2px solid white',
                  fontSize: '.9rem',
                  fontWeight: 600,
                }}
              >
                <span>Talk to a Scientist</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              className="animate-in text-center"
              style={{
                color: '#2384da',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '15px',
              }}
            >
              How It Works
            </h2>
            <p
              className="animate-in text-center"
              style={{
                color: '#666',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: '1.6rem',
                maxWidth: '600px',
                margin: '0 auto 40px',
              }}
            >
              From initial inquiry to project completion, we guide you through every step of the process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '30px',
                    border: '.5px solid #e0e0e0',
                    borderTop: `4px solid ${i % 2 === 0 ? '#008080' : '#134978'}`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      style={{
                        minWidth: '48px',
                        height: '48px',
                        backgroundColor: '#0a253c',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <step.Icon size={24} color="white" />
                    </div>
                    <div>
                      <span
                        style={{
                          color: '#008080',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '.8rem',
                          fontWeight: 600,
                        }}
                      >
                        Step {step.number}
                      </span>
                      <h3
                        style={{
                          color: '#333',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1.2rem',
                          fontWeight: 600,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      color: '#666',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.6rem',
                      flex: 1,
                    }}
                  >
                    {step.description}
                  </p>
                  <Link
                    href={step.href}
                    className="inline-flex items-center gap-2 mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      backgroundColor: '#008080',
                      color: 'white',
                      padding: '10px 20px',
                      fontSize: '.85rem',
                      fontWeight: 500,
                      alignSelf: 'flex-start',
                    }}
                  >
                    <span>{step.action}</span>
                    <IconArrowRight size={14} color="white" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Questions? We're Here to Help
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: '1.7rem',
                marginBottom: '30px',
              }}
            >
              Our scientific consultants are available to discuss your research requirements and answer any questions about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.85rem', marginBottom: '5px' }}>Phone</p>
                <a href="tel:+16314688530" style={{ color: '#00d4d4', fontSize: '1.1rem', fontWeight: 500 }}>
                  +1 (631) 468-8530
                </a>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.85rem', marginBottom: '5px' }}>Email</p>
                <a href="mailto:inquiry@genetargeting.com" style={{ color: '#00d4d4', fontSize: '1.1rem', fontWeight: 500 }}>
                  inquiry@genetargeting.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '50px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3
              className="animate-in text-center"
              style={{
                color: '#333',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Explore Our Services
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Custom Mouse Models', href: '/custom-mouse-models' },
                { label: 'Knockout Mouse Models', href: '/knockout-mouse-models' },
                { label: 'Knockin Mouse Models', href: '/knockin-mouse-models' },
                { label: 'Humanized Mouse Models', href: '/humanized-mouse-models' },
                { label: 'Pricing Overview', href: '/pricing-overview' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="animate-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: 'white',
                    padding: '10px 20px',
                    border: '1px solid #e0e0e0',
                    color: '#008080',
                    fontSize: '.9rem',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {item.label}
                  <IconArrowRight size={14} color="#008080" />
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
