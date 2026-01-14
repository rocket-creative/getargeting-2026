'use client';

/**
 * Lab Signals Page - Ingenious Targeting Laboratory
 * Newsletter signup and article hub
 * Based on https://www.genetargeting.com/lab-signals
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UXUIDCNavigation,
  UXUIDCFooter,
  UXUIDCStartProjectCTA,
  FlodeskForm,
  IconDNA,
  IconFileText,
  IconArrowRight,
  IconCheckCircle,
  IconTarget,
  IconFlask,
  IconMail,
} from '@/components/UXUIDC';

gsap.registerPlugin(ScrollTrigger);

// Featured Articles from Lab Signals Newsletter
const featuredArticles = [
  {
    id: 'article-1',
    title: "Insights into Neurodegenerative Diseases: Alzheimer's Disease Progression and Treatments",
    subtitle: "Insights into Neurodegenerative Diseases",
    description: "We read the most important recent biomedical articles that used mouse models and this is what we learned about Alzheimer's disease research.",
    category: "Neuroscience",
    slug: "insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments",
    relatedPage: "/alzheimers-mouse-models"
  },
  {
    id: 'article-2',
    title: "Advances in Metabolic Disorders Research: Obesity and Diabetes",
    subtitle: "Advances in Metabolic Disorders Research",
    description: "Key insights from recent publications on metabolic disease mouse models, obesity research, and diabetes therapeutic development.",
    category: "Metabolic",
    slug: "article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes",
    relatedPage: "/nash-mash-mouse-models"
  },
  {
    id: 'article-3',
    title: "Developments in Immune and Infectious Diseases: Insights from Humanized Models",
    subtitle: "Developments in Immune and Infectious Diseases",
    description: "How humanized mouse models are advancing our understanding of immune responses and infectious disease mechanisms.",
    category: "Immunology",
    slug: "article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models",
    relatedPage: "/humanized-mouse-models"
  },
  {
    id: 'article-4',
    title: "Breakthroughs in Cancer Research: Innovations in Immunotherapy",
    subtitle: "Breakthroughs in Cancer Research",
    description: "The latest innovations in immunotherapy development using genetically engineered mouse models for oncology research.",
    category: "Oncology",
    slug: "article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy",
    relatedPage: "/immuno-oncology-mouse-models"
  },
  {
    id: 'article-5',
    title: "Advancements in Gene Editing Technologies: Enhancements in CRISPR-Cas9",
    subtitle: "Advancements in Gene Editing Technologies",
    description: "How CRISPR-Cas9 improvements are accelerating mouse model generation and enabling more precise genetic modifications.",
    category: "Technology",
    slug: "article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9",
    relatedPage: "/knockout-mouse-models"
  },
  {
    id: 'article-6',
    title: "Top 5 Lab Mouse Colony Management Software Options For 2025",
    subtitle: "Colony Management",
    description: "Compare the best software solutions for managing your mouse breeding colonies, including our Breeding Scheme Architect.",
    category: "Resources",
    slug: "top-5-lab-mouse-colony-management-software-options-for-2025",
    relatedPage: "/breeding-scheme-architect"
  }
];

// Additional Technical Articles
const technicalArticles = [
  {
    title: "Building Better Floxed Alleles for Conditional Knockout Mice",
    description: "Best practices for loxP site placement and critical exon selection.",
    category: "Technical Guide",
    slug: "building-better-floxed-alleles-for-conditional-knockout-mice"
  },
  {
    title: "Conventional vs. Conditional Knockout Mice",
    description: "Understanding when to choose each approach for your research.",
    category: "Selection Guide",
    slug: "conventional-vs-conditional-knockout-mice"
  },
  {
    title: "Cre-Lox: 6 Facts You May Not Know",
    description: "Essential insights about the Cre-lox recombination system.",
    category: "Technical Guide",
    slug: "cre-lox-6-facts-you-may-not-know"
  },
  {
    title: "How a Knockout Mouse Is Made",
    description: "Step-by-step overview of the knockout mouse generation process.",
    category: "Educational",
    slug: "how-a-knockout-mouse-is-made"
  },
  {
    title: "How Humanized Mouse Models Are Transforming Pre-clinical R&D",
    description: "The growing role of humanized mice in drug development.",
    category: "Industry Insights",
    slug: "how-humanized-mouse-models-are-transforming-pre-clinical-r-d"
  },
  {
    title: "Knock-In Mice vs. Transgenic Mice: What You Need to Know",
    description: "Comparing targeted knockin approaches with random integration.",
    category: "Selection Guide",
    slug: "knock-in-mice-vs-transgenic-mice-what-you-need-to-know"
  },
  {
    title: "Leveraging Mouse Models for Point Mutation Diseases",
    description: "R&D landscape for disease variant modeling.",
    category: "Industry Insights",
    slug: "leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape"
  },
  {
    title: "The Impact of Knockout and Knock-in Mouse Models on Biomedical Research",
    description: "How genetically engineered mice have advanced science.",
    category: "Educational",
    slug: "the-impact-of-knockout-and-knock-in-mouse-models-on-biomedical-research"
  }
];

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
                We Read the Most Important...
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                Recent Biomedical Articles That Used Mouse Models and This Is What We Learned
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, i) => (
                <div
                  key={article.id}
                  id={article.slug}
                  className="animate-in flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0',
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
                      {article.subtitle}
                    </span>
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: '#e8f4f4',
                      color: '#008080',
                      fontSize: '.7rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '12px',
                      marginBottom: '12px',
                      alignSelf: 'flex-start',
                    }}>
                      {article.category}
                    </span>
                    <p style={{
                      color: '#555',
                      fontSize: '.9rem',
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: '16px',
                    }}>
                      {article.description}
                    </p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a
                        href={`https://www.genetargeting.com/lab-signals/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-all duration-300"
                        style={{
                          color: '#008080',
                          fontSize: '.85rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                      >
                        <span>Read More</span>
                        <IconArrowRight size={14} color="#008080" />
                      </a>
                      {article.relatedPage && (
                        <Link
                          href={article.relatedPage}
                          className="inline-flex items-center gap-1"
                          style={{
                            color: '#666',
                            fontSize: '.8rem',
                            textDecoration: 'none',
                          }}
                        >
                          <span>Related Service →</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
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

        {/* More Articles Grid */}
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
              Technical Guides & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {technicalArticles.map((article, i) => (
                <div
                  key={i}
                  className="animate-in transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: '#f7f7f7',
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: '3px solid #008080',
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#e8f4f4',
                    color: '#008080',
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
                  }}>
                    {article.description}
                  </p>
                </div>
              ))}
            </div>
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
                { label: 'Ingenious Blog', href: '/ingenious-blog' },
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
