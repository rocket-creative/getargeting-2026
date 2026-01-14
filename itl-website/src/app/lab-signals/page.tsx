'use client';

/**
 * Lab Signals Page - Ingenious Targeting Laboratory
 * Newsletter and blog content hub
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  UXUIDCStartProjectCTA,
  IconDNA,
  IconFileText,
  IconArrowRight,
} from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

export default function LabSignalsPage() {
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

  const articles = [
    {
      title: 'Building Better Floxed Alleles for Conditional Knockout Mice',
      description: 'Best practices for loxP site placement and critical exon selection in conditional knockout design.',
      category: 'Technical Guide',
    },
    {
      title: 'Conventional vs Conditional Knockout Mice',
      description: 'Understanding when to choose each approach for your research goals.',
      category: 'Selection Guide',
    },
    {
      title: 'Cre-Lox: 6 Facts You May Not Know',
      description: 'Essential insights about the Cre-lox recombination system for gene targeting.',
      category: 'Technical Guide',
    },
    {
      title: 'How a Knockout Mouse is Made',
      description: 'Step-by-step overview of the knockout mouse generation process.',
      category: 'Educational',
    },
    {
      title: 'How Humanized Mouse Models are Transforming Pre-Clinical R&D',
      description: 'The growing role of humanized mice in drug development and translational research.',
      category: 'Industry Insights',
    },
    {
      title: 'Knock-in Mice vs Transgenic Mice: What You Need to Know',
      description: 'Comparing targeted knockin approaches with random transgenic integration.',
      category: 'Selection Guide',
    },
  ];

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
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
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
              <IconFileText size={16} color="white" />
              <span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>Research Insights</span>
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
              Lab Signals
            </h1>
            <p
              className="hero-animate"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.1rem',
                fontWeight: 300,
                lineHeight: '1.7rem',
                maxWidth: '700px',
              }}
            >
              Technical insights, research guides, and expert perspectives on genetically engineered mouse model development from the Ingenious Targeting Laboratory team.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              className="animate-in"
              style={{
                color: '#2384da',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <div
                  key={i}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '25px',
                    border: '.5px solid #e0e0e0',
                    borderTop: `4px solid ${i % 2 === 0 ? '#008080' : '#134978'}`,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e8f4f4',
                      color: '#008080',
                      fontSize: '.75rem',
                      fontWeight: 500,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      marginBottom: '12px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {article.category}
                  </span>
                  <h3
                    style={{
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '10px',
                      lineHeight: '1.4',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      color: '#666',
                      fontSize: '.9rem',
                      fontWeight: 300,
                      lineHeight: '1.5rem',
                      flex: 1,
                    }}
                  >
                    {article.description}
                  </p>
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 mt-4 transition-all duration-300 hover:text-teal-700"
                    style={{
                      color: '#008080',
                      fontSize: '.85rem',
                      fontWeight: 500,
                    }}
                  >
                    <span>Read More</span>
                    <IconArrowRight size={14} color="#008080" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <IconDNA size={48} color="#00d4d4" />
            <h2
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                margin: '20px 0 15px',
              }}
            >
              Stay Updated
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: '1.6rem',
                marginBottom: '25px',
              }}
            >
              Subscribe to Lab Signals for the latest technical guides, research insights, and updates from Ingenious Targeting Laboratory.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: '#008080',
                color: 'white',
                padding: '12px 28px',
                fontSize: '.9rem',
                fontWeight: 500,
              }}
            >
              <span>Subscribe</span>
              <IconArrowRight size={16} color="white" />
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '50px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3
              className="animate-in"
              style={{
                color: '#333',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Related Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Publications', href: '/publications' },
                { label: 'Resources', href: '/resources' },
                { label: 'Knockout Strategy Guide', href: '/knockout-strategy-guide' },
                { label: 'Technologies', href: '/technologies' },
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
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <UXUIDCStartProjectCTA
          title="Ready to Start Your Project?"
          content="Our scientific consultants are available to discuss your research requirements and help design the optimal mouse model for your experimental goals."
          buttons={[
            { label: 'Request a Quote', href: '/request-quote' },
            { label: 'Contact Us', href: '/contact' },
          ]}
        />
      </main>

      <UXUIDCFooter />
    </div>
  );
}
