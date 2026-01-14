'use client';

/**
 * Lab Signals Page - Newsletter Hub
 * Standalone branding: #fb0 gold + black
 * No nav/footer - only link back to Ingenious
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
  IconCheckCircle,
  IconTarget,
  IconFlask,
  IconMail,
} from '@/components/UXUIDC';
import { 
  newsletterArticles, 
  getAllCategories,
  type NewsletterArticle 
} from '@/data/newsletterArticles';

gsap.registerPlugin(ScrollTrigger);

// Lab Signals brand colors
const BRAND = {
  gold: '#fb0',
  goldLight: '#ffcc33',
  black: '#000000',
  darkGray: '#111111',
  white: '#ffffff',
};

// Category colors
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Neuroscience': '#8b5cf6',
    'Metabolic': '#f59e0b',
    'Immunology': '#10b981',
    'Oncology': '#ef4444',
    'Technology': '#3b82f6',
    'Technical Guide': '#fb0',
    'Selection Guide': '#a855f7',
    'Resources': '#06b6d4',
    'Research': '#6366f1',
    'Industry Insights': '#ec4899',
    'Comparison': '#14b8a6',
  };
  return colors[category] || '#fb0';
};

// RSS Icon
const RSSIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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

  // Filter articles
  const filteredArticles = newsletterArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured articles (first 6)
  const featuredArticles = newsletterArticles.slice(0, 6);

  return (
    <div style={{ backgroundColor: BRAND.black, minHeight: '100vh' }}>
      {/* Simple Header with Logo */}
      <header style={{
        padding: '20px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link href="/lab-signals" style={{ display: 'block' }}>
          <Image 
            src="/images/logo.png" 
            alt="Lab Signals" 
            width={150} 
            height={50}
            style={{ height: 'auto' }}
          />
        </Link>
        <Link
          href="/"
          style={{
            color: BRAND.gold,
            fontSize: '.9rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>← Back to Ingenious</span>
        </Link>
      </header>

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          style={{
            backgroundColor: BRAND.black,
            padding: '60px 20px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Hero Image Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '50%',
            opacity: 0.3,
          }}>
            <Image
              src="/images/mouse-hero-blue.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(90deg, ${BRAND.black} 0%, transparent 100%)`,
            }} />
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            <div
              className="hero-animate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: BRAND.gold,
                padding: '8px 20px',
                borderRadius: '25px',
                marginBottom: '24px',
              }}
            >
              <IconMail size={18} color={BRAND.black} />
              <span style={{ color: BRAND.black, fontSize: '.85rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                BIWEEKLY NEWSLETTER
              </span>
            </div>
            <h1
              className="hero-animate"
              style={{
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '3.5rem',
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
                fontSize: '1.3rem',
                fontWeight: 400,
                lineHeight: '1.6',
                maxWidth: '600px',
                marginBottom: '30px',
              }}
            >
              Your Biweekly Source for Life Science Research Insights
            </p>

            {/* RSS Feed Link */}
            <a
              href="/api/rss/lab-signals"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-animate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f97316',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '.85rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <RSSIcon />
              <span>Subscribe via RSS</span>
            </a>
          </div>
        </section>

        {/* Signup Form Section */}
        <section style={{ backgroundColor: BRAND.darkGray, padding: '60px 20px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              color: BRAND.gold,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '15px',
            }}>
              Sign Up for Free Access
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1rem',
              marginBottom: '30px',
            }}>
              Get biweekly research insights delivered to your inbox
            </p>
            <FlodeskForm />
          </div>
        </section>

        {/* Why Subscribe Section */}
        <section style={{ backgroundColor: BRAND.black, padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              className="animate-in"
              style={{
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Why Researchers Stay Connected
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {[
                {
                  icon: IconFileText,
                  title: "Expert Analysis",
                  description: "Written by PhD-level scientists, grounded in real-world research and practical application."
                },
                {
                  icon: IconTarget,
                  title: "Actionable Insights",
                  description: "Apply trends and innovations directly to your projects with practical guidance."
                },
                {
                  icon: IconFlask,
                  title: "Exclusive Access",
                  description: "Get the latest issue plus our full archive of past articles instantly upon signup."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-in"
                  style={{
                    textAlign: 'center',
                    padding: '30px 20px',
                    backgroundColor: BRAND.darkGray,
                    borderRadius: '12px',
                    border: `1px solid ${BRAND.gold}33`,
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: `${BRAND.gold}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}>
                    <item.icon size={28} color={BRAND.gold} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: BRAND.white,
                    marginBottom: '10px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.9rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section style={{ backgroundColor: BRAND.darkGray, padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="animate-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: BRAND.gold,
                color: BRAND.black,
                fontSize: '.75rem',
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: '20px',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Featured Articles
              </span>
              <h2 style={{
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '12px',
              }}>
                Latest Research Insights
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}>
              {featuredArticles.map((article, i) => (
                <Link
                  key={article.id}
                  href={`/lab-signals/${article.slug}`}
                  className="animate-in"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: BRAND.black,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: `1px solid ${BRAND.gold}33`,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    backgroundColor: BRAND.gold,
                    padding: '20px',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      color: BRAND.black,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}>
                      {article.subtitle || article.category}
                    </span>
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: `${getCategoryColor(article.category)}22`,
                      color: getCategoryColor(article.category),
                      fontSize: '.7rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      marginBottom: '12px',
                      alignSelf: 'flex-start',
                    }}>
                      {article.category}
                    </span>
                    <h3 style={{
                      color: BRAND.white,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '.95rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: '10px',
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '.85rem',
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: '16px',
                    }}>
                      {article.description.slice(0, 100)}...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        color: BRAND.gold,
                        fontSize: '.85rem',
                        fontWeight: 600,
                      }}>
                        Read Article
                      </span>
                      <IconArrowRight size={14} color={BRAND.gold} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ backgroundColor: BRAND.gold, padding: '80px 20px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <IconMail size={56} color={BRAND.black} />
            <h2 style={{
              color: BRAND.black,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2.2rem',
              fontWeight: 700,
              margin: '24px 0 16px',
            }}>
              Join Lab Signals Today
            </h2>
            <p style={{
              color: 'rgba(0,0,0,0.8)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '30px',
            }}>
              Join thousands of researchers receiving biweekly insights on mouse model development, gene targeting strategies, and the latest in biomedical research.
            </p>
            <FlodeskForm />
          </div>
        </section>

        {/* All Articles Section */}
        <section style={{ backgroundColor: BRAND.black, padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="animate-in" style={{
              color: BRAND.white,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '30px',
              textAlign: 'center',
            }}>
              Browse All Articles
            </h2>

            {/* Search & Filter */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ marginBottom: '15px' }}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '12px 16px',
                    fontSize: '.95rem',
                    border: `1px solid ${BRAND.gold}44`,
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: BRAND.darkGray,
                    color: BRAND.white,
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: '8px 16px',
                      fontSize: '.85rem',
                      fontWeight: 500,
                      border: 'none',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: selectedCategory === category ? BRAND.gold : BRAND.darkGray,
                      color: selectedCategory === category ? BRAND.black : BRAND.white,
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.9rem', marginBottom: '20px' }}>
              Showing {filteredArticles.length} of {newsletterArticles.length} articles
            </p>

            {/* Articles Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}>
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/lab-signals/${article.slug}`}
                  className="animate-in"
                  style={{
                    display: 'block',
                    backgroundColor: BRAND.darkGray,
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${BRAND.gold}`,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: `${getCategoryColor(article.category)}22`,
                    color: getCategoryColor(article.category),
                    fontSize: '.65rem',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '10px',
                    marginBottom: '10px',
                  }}>
                    {article.category}
                  </span>
                  <h4 style={{
                    color: BRAND.white,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.95rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}>
                    {article.title}
                  </h4>
                  <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '.8rem',
                    lineHeight: 1.5,
                    marginBottom: '10px',
                  }}>
                    {article.description.slice(0, 100)}...
                  </p>
                  <span style={{
                    color: BRAND.gold,
                    fontSize: '.8rem',
                    fontWeight: 500,
                  }}>
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Just link back */}
        <footer style={{
          backgroundColor: BRAND.darkGray,
          padding: '40px 20px',
          textAlign: 'center',
          borderTop: `1px solid ${BRAND.gold}22`,
        }}>
          <Image 
            src="/images/logo.png" 
            alt="Lab Signals" 
            width={120} 
            height={40}
            style={{ height: 'auto', marginBottom: '20px' }}
          />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.85rem', marginBottom: '15px' }}>
            Lab Signals is powered by Ingenious Targeting Laboratory
          </p>
          <Link
            href="/"
            style={{
              color: BRAND.gold,
              fontSize: '.9rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Visit Ingenious Targeting Laboratory →
          </Link>
        </footer>
      </main>
    </div>
  );
}
