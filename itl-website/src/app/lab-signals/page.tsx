'use client';

/**
 * Lab Signals Page - Ingenious Targeting Laboratory
 * Newsletter signup and article hub with CMS-like article linking
 * Based on https://www.genetargeting.com/lab-signals
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  UXUIDCStartProjectCTA,
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
  getArticlesByCategory,
  type NewsletterArticle 
} from '@/data/newsletterArticles';

gsap.registerPlugin(ScrollTrigger);

// Category colors
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Neuroscience': '#6b46c1',
    'Metabolic': '#d97706',
    'Immunology': '#059669',
    'Oncology': '#dc2626',
    'Technology': '#2384da',
    'Technical Guide': '#008080',
    'Selection Guide': '#7c3aed',
    'Resources': '#0891b2',
    'Research': '#4f46e5',
    'Industry Insights': '#be185d',
    'Comparison': '#0d9488',
  };
  return colors[category] || '#666';
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
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />

      <main id="main-content">
        {/* Hero Section */}
        <section
          ref={heroRef}
          style={{
            background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 50%, #008080 100%)',
            padding: '100px 20px 80px',
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
                padding: '8px 20px',
                borderRadius: '25px',
                marginBottom: '24px',
              }}
            >
              <IconMail size={18} color="#00d4d4" />
              <span style={{ color: '#00d4d4', fontSize: '.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>BIWEEKLY NEWSLETTER</span>
            </div>
            <h1
              className="hero-animate"
              style={{
                color: 'white',
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
                color: 'rgba(255,255,255,0.95)',
                fontSize: '1.3rem',
                fontWeight: 400,
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '0 auto 30px',
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
                backgroundColor: '#ff6600',
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

        {/* Flodesk Signup Form Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FlodeskForm />
          </div>
        </section>

        {/* Why Subscribe Section */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              className="animate-in"
              style={{
                color: '#0a253c',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Why Researchers Like You Stay Connected
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    backgroundColor: '#f7f7f7',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,128,128,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}>
                    <item.icon size={28} color="#008080" />
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#0a253c',
                    marginBottom: '10px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '.9rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section style={{ backgroundColor: '#f7f7f7', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="animate-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#008080',
                color: 'white',
                fontSize: '.75rem',
                fontWeight: 600,
                padding: '6px 16px',
                borderRadius: '20px',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Featured Articles
              </span>
              <h2 style={{
                color: '#0a253c',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: '12px',
              }}>
                Latest Research Insights
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Recent Biomedical Articles That Used Mouse Models and This Is What We Learned
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, i) => (
                <Link
                  key={article.id}
                  href={`/lab-signals/${article.slug}`}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    backgroundColor: i % 2 === 0 ? '#0a253c' : '#134978',
                    padding: '20px',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      color: 'white',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}>
                      {article.subtitle || article.category}
                    </span>
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: `${getCategoryColor(article.category)}15`,
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
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '.95rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: '10px',
                    }}>
                      {article.title}
                    </h3>
                    <p style={{
                      color: '#555',
                      fontSize: '.85rem',
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: '16px',
                    }}>
                      {article.description.slice(0, 120)}...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        color: '#008080',
                        fontSize: '.85rem',
                        fontWeight: 600,
                      }}>
                        Read Article
                      </span>
                      <IconArrowRight size={14} color="#008080" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup CTA with Flodesk Form */}
        <section style={{ backgroundColor: '#0a253c', padding: '80px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <IconMail size={56} color="#00d4d4" />
            <h2
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.2rem',
                fontWeight: 700,
                margin: '24px 0 16px',
              }}
            >
              Sign Up Today!
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '30px',
              }}
            >
              Join thousands of researchers receiving biweekly insights on mouse model development, gene targeting strategies, and the latest in biomedical research.
            </p>
            <FlodeskForm />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.85rem', marginTop: '16px' }}>
              Lab Signals is powered by Ingenious Targeting Laboratory
            </p>
          </div>
        </section>

        {/* All Articles Section with Filtering */}
        <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              className="animate-in"
              style={{
                color: '#0a253c',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '30px',
                textAlign: 'center',
              }}
            >
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
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    outline: 'none',
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
                      backgroundColor: selectedCategory === category ? '#0a253c' : '#f0f0f0',
                      color: selectedCategory === category ? 'white' : '#666',
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '20px' }}>
              Showing {filteredArticles.length} of {newsletterArticles.length} articles
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/lab-signals/${article.slug}`}
                  className="animate-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    display: 'block',
                    backgroundColor: '#f7f7f7',
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${getCategoryColor(article.category)}`,
                    textDecoration: 'none',
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: `${getCategoryColor(article.category)}15`,
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
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.95rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}>
                    {article.title}
                  </h4>
                  <p style={{
                    color: '#666',
                    fontSize: '.8rem',
                    lineHeight: 1.5,
                    marginBottom: '10px',
                  }}>
                    {article.description.slice(0, 100)}...
                  </p>
                  <span style={{
                    color: '#008080',
                    fontSize: '.8rem',
                    fontWeight: 500,
                  }}>
                    Read Article →
                  </span>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p style={{ color: '#666', fontSize: '1rem' }}>
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  style={{
                    marginTop: '15px',
                    padding: '10px 20px',
                    backgroundColor: '#008080',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '.9rem',
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
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
              Explore More Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Publications', href: '/publications' },
                { label: 'Downloadable Resources', href: '/resources' },
                { label: 'Ingenious Blog Archive', href: '/ingenious-blog' },
                { label: 'Breeding Scheme Architect', href: '/breeding-scheme-architect' },
                { label: 'Technologies', href: '/technologies' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="animate-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    color: '#008080',
                    fontSize: '.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
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
