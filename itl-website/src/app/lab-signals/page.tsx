'use client';

/**
 * Lab Signals Page - Newsletter Hub
 * Colors: gold #fb0, black, grey, white only
 * Max width 1200px, flat grey icons
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FlodeskForm,
  IconFileText,
  IconArrowRight,
  IconTarget,
  IconFlask,
  IconMail,
} from '@/components/UXUIDC';
import { 
  newsletterArticles, 
  getAllCategories,
} from '@/data/newsletterArticles';

gsap.registerPlugin(ScrollTrigger);

// Lab Signals colors - gold, black, grey, white only
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  white: '#ffffff',
  lightGray: '#f5f5f5',
  mediumGray: '#888888',
  darkGray: '#444444',
  borderGray: '#e0e0e0',
};

// RSS Icon (flat grey)
const RSSIcon = ({ color = BRAND.mediumGray }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={color}>
    <circle cx="6.18" cy="17.82" r="2.18"/>
    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/>
  </svg>
);

export default function LabSignalsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = getAllCategories();

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
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Filter articles
  const filteredArticles = newsletterArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: BRAND.lightGray }}>
      {/* Header */}
      <header style={{ backgroundColor: BRAND.black }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link href="/lab-signals" style={{ display: 'block' }}>
            <Image 
              src="/images/lab-signals-logo.svg" 
              alt="Lab Signals" 
              width={140} 
              height={45}
              style={{ height: 'auto' }}
            />
          </Link>
          <Link
            href="/"
            style={{
              color: BRAND.gold,
              fontSize: '.85rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            ← Back to Ingenious
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section - Full Width Header Image */}
        <section ref={heroRef}>
          {/* Header Image */}
          <div style={{ position: 'relative', width: '100%', height: '300px' }}>
            <Image
              src="/images/lab-signals-header.png"
              alt="Lab Signals"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>

          {/* Hero Content */}
          <div style={{ backgroundColor: BRAND.black, padding: '40px 20px' }}>
            <div className="hero-animate" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: BRAND.gold,
              padding: '6px 16px',
              borderRadius: '20px',
              marginBottom: '20px',
            }}>
              <IconMail size={16} color={BRAND.black} />
              <span style={{ color: BRAND.black, fontSize: '.8rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                BIWEEKLY NEWSLETTER
              </span>
            </div>
            <h1 className="hero-animate" style={{
              color: BRAND.white,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '15px',
            }}>
              Lab Signals
            </h1>
            <p className="hero-animate" style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.15rem',
              lineHeight: '1.5',
              maxWidth: '550px',
              marginBottom: '25px',
            }}>
              Your Biweekly Source for Life Science Research Insights
            </p>
            <div className="hero-animate" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#signup"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: BRAND.gold,
                  color: BRAND.black,
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Subscribe Free
              </a>
              <a
                href="/api/rss/lab-signals"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: BRAND.white,
                  padding: '12px 20px',
                  borderRadius: '6px',
                  fontSize: '.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                <RSSIcon color={BRAND.white} /> RSS Feed
              </a>
            </div>
          </div>
        </section>

        {/* Signup Section with Video */}
        <section id="signup" style={{ backgroundColor: BRAND.white, padding: '50px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Video */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              paddingTop: 0,
              height: 0,
              marginBottom: '40px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                src="https://mediazilla.com/xxexlvtJRB"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen"
              />
            </div>

            {/* Signup Form */}
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{
                color: BRAND.black,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '10px',
              }}>
                Sign Up for Free Access
              </h2>
              <p style={{ color: BRAND.darkGray, fontSize: '.95rem', marginBottom: '25px' }}>
                Get biweekly research insights delivered to your inbox
              </p>
              <FlodeskForm />
            </div>
          </div>
        </section>

        {/* Why Subscribe */}
        <section style={{ backgroundColor: BRAND.lightGray, padding: '50px 20px' }}>
          <h2 style={{
            color: BRAND.black,
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '30px',
            textAlign: 'center',
          }}>
            Why Researchers Stay Connected
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}>
            {[
              { icon: IconFileText, title: "Expert Analysis", desc: "Written by PhD-level scientists with practical application." },
              { icon: IconTarget, title: "Actionable Insights", desc: "Apply trends directly to your research projects." },
              { icon: IconFlask, title: "Full Archive Access", desc: "Instant access to all past articles upon signup." }
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '25px 15px',
                backgroundColor: BRAND.white,
                borderRadius: '8px',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: BRAND.lightGray,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                }}>
                  <item.icon size={24} color={BRAND.mediumGray} />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '.95rem', fontWeight: 600, color: BRAND.black, marginBottom: '6px' }}>
                  {item.title}
                </h3>
                <p style={{ color: BRAND.darkGray, fontSize: '.85rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Articles Section */}
        <section style={{ backgroundColor: BRAND.white, padding: '50px 20px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '25px' 
          }}>
            <div>
              <h2 style={{
                color: BRAND.black,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                marginBottom: '5px',
              }}>
                All Articles ({newsletterArticles.length})
              </h2>
              {filteredArticles.length !== newsletterArticles.length && (
                <p style={{ color: BRAND.mediumGray, fontSize: '.85rem' }}>
                  Showing {filteredArticles.length} articles
                </p>
              )}
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '10px 14px',
                fontSize: '.9rem',
                border: `1px solid ${BRAND.borderGray}`,
                borderRadius: '6px',
                width: '240px',
                outline: 'none',
              }}
            />
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '6px 14px',
                  fontSize: '.8rem',
                  fontWeight: 500,
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === category ? BRAND.black : BRAND.lightGray,
                  color: selectedCategory === category ? BRAND.white : BRAND.darkGray,
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}>
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/lab-signals/${article.slug}`}
                className="animate-in"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: BRAND.lightGray,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Gold header */}
                <div style={{
                  backgroundColor: BRAND.gold,
                  padding: '14px 16px',
                }}>
                  <span style={{
                    color: BRAND.black,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.8rem',
                    fontWeight: 700,
                  }}>
                    {article.category}
                  </span>
                </div>
                <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    color: BRAND.black,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.9rem',
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginBottom: '10px',
                    flex: 1,
                  }}>
                    {article.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: BRAND.darkGray, fontSize: '.8rem', fontWeight: 500 }}>Read Article</span>
                    <IconArrowRight size={12} color={BRAND.mediumGray} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p style={{ color: BRAND.darkGray }}>No articles found.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: BRAND.black,
                  color: BRAND.white,
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '.85rem',
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: BRAND.gold, padding: '50px 20px' }}>
          <div style={{ maxWidth: '550px', margin: '0 auto', textAlign: 'center' }}>
            <IconMail size={36} color={BRAND.black} />
            <h2 style={{
              color: BRAND.black,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '15px 0 10px',
            }}>
              Join Lab Signals Today
            </h2>
            <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '.95rem', marginBottom: '25px' }}>
              Join thousands of researchers receiving biweekly insights.
            </p>
            <FlodeskForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: BRAND.black }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '30px 20px',
          textAlign: 'center',
        }}>
          <Image 
            src="/images/lab-signals-logo.svg" 
            alt="Lab Signals" 
            width={120} 
            height={40}
            style={{ height: 'auto', marginBottom: '15px' }}
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginBottom: '10px' }}>
            Powered by Ingenious Targeting Laboratory
          </p>
          <Link href="/" style={{ color: BRAND.gold, fontSize: '.85rem', textDecoration: 'none' }}>
            Visit Ingenious →
          </Link>
        </div>
      </footer>
    </div>
  );
}
