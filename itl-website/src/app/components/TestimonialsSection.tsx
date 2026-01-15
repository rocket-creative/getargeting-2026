/**
 * What Researchers Say - Testimonials Section
 * Supports both light and dark background variants
 * Dark variant uses glass effect for cards
 */

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/UXUIDC/gsap';

interface Testimonial {
  quote: string;
  name?: string;
  author?: string; // Support both 'name' and 'author' field names
  affiliation: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  variant?: 'light' | 'dark';
  showCta?: boolean;
}

export default function TestimonialsSection({ 
  testimonials, 
  variant = 'light',
  showCta = true 
}: TestimonialsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isDark = variant === 'dark';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Styles based on variant
  const sectionStyle = isDark 
    ? { background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)', padding: '60px 20px' }
    : { backgroundColor: '#f7f7f7', padding: '60px 20px' };

  const titleStyle = isDark
    ? { color: '#ffffff' }
    : { color: '#2384da' };

  const cardStyle = isDark
    ? {
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
      }
    : {
        backgroundColor: '#ffffff',
        border: '1px solid #e0e0e0',
      };

  const quoteStyle = isDark
    ? { color: 'rgba(255,255,255,0.9)' }
    : { color: '#666' };

  const nameStyle = isDark
    ? { color: '#00d4d4' }
    : { color: '#333' };

  const affiliationStyle = isDark
    ? { color: 'rgba(255,255,255,0.7)' }
    : { color: '#666' };

  const buttonStyle = isDark
    ? { backgroundColor: '#00d4d4', color: '#0a253c' }
    : { backgroundColor: '#134978', color: '#ffffff' };

  return (
    <section
      ref={sectionRef}
      style={{
        ...sectionStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          ...titleStyle,
          textAlign: 'center',
          letterSpacing: '-.5px',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: '40px',
        }}
      >
        What Researchers Say
      </h2>

      <div
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          maxWidth: '1000px', 
          width: '100%' 
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            style={{
              ...cardStyle,
              opacity: 0,
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
            }}
          >
            <p
              style={{
                ...quoteStyle,
                fontFamily: 'Lato, sans-serif',
                fontSize: '.9rem',
                fontWeight: 300,
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '20px',
                flex: 1,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div style={{ marginTop: 'auto' }}>
              <p
                style={{
                  ...nameStyle,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  marginBottom: '5px',
                }}
              >
                — {testimonial.name || testimonial.author}
              </p>
              <p
                style={{
                  ...affiliationStyle,
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '.8rem',
                  fontWeight: 400,
                }}
              >
                {testimonial.affiliation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showCta && (
        <Link
          href="/testimonials"
          style={{
            ...buttonStyle,
            marginTop: '30px',
            padding: '12px 24px',
            fontFamily: 'Lato, sans-serif',
            fontSize: '.9rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
          }}
        >
          <span>View All Testimonials</span>
          <span>→</span>
        </Link>
      )}

      <style jsx>{`
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: ${isDark 
            ? '0 8px 32px rgba(0,212,212,0.15)' 
            : '0 8px 20px rgba(0,0,0,0.1)'};
        }
        @media (max-width: 900px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
