'use client';

/**
 * Mouse Model Generation Guide Page - Ingenious Targeting Laboratory
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
  IconArrowRight,
} from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Project Consultation',
    description: 'Our scientific team reviews your research goals and recommends the optimal targeting strategy. We discuss model design, timeline, and deliverables.',
  },
  {
    number: '02',
    title: 'Strategy Design',
    description: 'Detailed allele design including selection of critical exons, loxP site positioning for conditional models, and verification of targeting approach.',
  },
  {
    number: '03',
    title: 'Targeting Vector Construction',
    description: 'Construction and verification of the targeting vector containing your designed modifications, selection cassette, and homology arms.',
  },
  {
    number: '04',
    title: 'ES Cell Targeting',
    description: 'Introduction of the targeting vector into embryonic stem cells and selection of correctly targeted clones through Southern blot verification.',
  },
  {
    number: '05',
    title: 'Microinjection',
    description: 'Injection of targeted ES cells into blastocysts and transfer to pseudopregnant females to generate chimeric founder animals.',
  },
  {
    number: '06',
    title: 'Germline Transmission',
    description: 'Breeding of chimeras to confirm germline transmission of the targeted allele. Delivery of heterozygous F1 mice with genotyping protocols.',
  },
];

export default function MouseModelGenerationGuidePage() {
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
              <IconDNA size={16} color="white" />
              <span style={{ color: 'white', fontSize: '.8rem', fontWeight: 500 }}>Project Guide</span>
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
              Mouse Model Generation Guide
            </h1>
            <p
              className="hero-animate"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: '1.7rem',
                maxWidth: '800px',
              }}
            >
              Understanding the mouse model generation process helps you plan your research timeline and set expectations for project milestones. This guide outlines the key steps from initial consultation to delivery of your custom mouse model.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              className="animate-in text-center"
              style={{
                color: '#2384da',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '40px',
              }}
            >
              Project Steps
            </h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="animate-in flex gap-6"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '25px',
                    border: '.5px solid #e0e0e0',
                    borderLeft: '4px solid #008080',
                  }}
                >
                  <div
                    style={{
                      minWidth: '60px',
                      height: '60px',
                      backgroundColor: '#0a253c',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                    }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        marginBottom: '8px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: '#666',
                        fontSize: '.95rem',
                        fontWeight: 400,
                        lineHeight: '1.6rem',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Note */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '50px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              className="animate-in"
              style={{
                color: '#2384da',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Project Timelines
            </h2>
            <p
              className="animate-in"
              style={{
                color: '#666',
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: '1.7rem',
                marginBottom: '25px',
              }}
            >
              Project timelines vary based on model type and complexity. Conventional knockouts are generally faster than conditional knockouts and cDNA knockins due to simpler allele designs. With ongoing advances in gene editing technology, timelines continue to improve. Contact our team for current timeline estimates tailored to your specific project.
            </p>
            <Link
              href="/request-quote"
              className="animate-in inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: '#134978',
                color: 'white',
                padding: '12px 24px',
                fontSize: '.9rem',
                fontWeight: 500,
              }}
            >
              <span>Get a Project Estimate</span>
              <IconArrowRight size={16} color="white" />
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
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
              Related Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Knockout Strategy Guide', href: '/knockout-strategy-guide' },
                { label: 'Request a Quote', href: '/request-quote' },
                { label: 'ES Cell Gene Targeting', href: '/es-cell-gene-targeting' },
                { label: 'Resources', href: '/resources' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="animate-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: '#f7f7f7',
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

        <UXUIDCStartProjectCTA
          title="Ready to Start Your Project?"
          content="Our scientific consultants are available to discuss your research requirements and provide a detailed project plan."
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
