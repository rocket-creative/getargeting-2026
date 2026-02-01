/**
 * |UXUIDC| Lab Signals Newsletter Signup Component
 * Displays newsletter signup callouts throughout the site
 * Based on https://www.genetargeting.com/lab-signals
 */

import Link from 'next/link';
import { IconMail, IconFileText, IconArrowRight, IconFlask, IconTarget } from './Icons';

interface LabSignalsSignupProps {
  variant?: 'banner' | 'inline' | 'card' | 'sidebar';
  title?: string;
  description?: string;
  showArticles?: boolean;
  relatedArticles?: {
    title: string;
    slug: string;
    category?: string;
  }[];
}

// Featured Lab Signals Articles - from newsletter CSV
export const labSignalsArticles = [
  {
    title: "Insights into Neurodegenerative Diseases: Alzheimer's Disease Progression and Treatments",
    slug: "insights-into-neurodegenerative-diseases-alzheimers-disease-progression-and-treatments",
    category: "Neuroscience",
    relatedPages: ["/alzheimers-mouse-models", "/neuroscience-mouse-models"]
  },
  {
    title: "Advances in Metabolic Disorders Research: Obesity and Diabetes",
    slug: "article-2-advances-in-metabolic-disorders-research-obesity-and-diabetes",
    category: "Metabolic",
    relatedPages: ["/nash-mash-mouse-models", "/cardiovascular-mouse-models"]
  },
  {
    title: "Developments in Immune and Infectious Diseases: Insights from Humanized Models",
    slug: "article-3-developments-in-immune-and-infectious-diseases-insights-from-humanized-models",
    category: "Immunology",
    relatedPages: ["/humanized-mouse-models", "/immunology-mouse-models", "/immuno-oncology-mouse-models"]
  },
  {
    title: "Breakthroughs in Cancer Research: Innovations in Immunotherapy",
    slug: "article-4-breakthroughs-in-cancer-research-innovations-in-immunotherapy",
    category: "Oncology",
    relatedPages: ["/oncology-mouse-models", "/immuno-oncology-mouse-models", "/tumor-suppressor-knockout-mice"]
  },
  {
    title: "Advancements in Gene Editing Technologies: Enhancements in CRISPR-Cas9",
    slug: "article-5-advancements-in-gene-editing-technologies-enhancements-in-crispr-cas9",
    category: "Technology",
    relatedPages: ["/knockout-mouse-models", "/knockin-mouse-models", "/cre-lox-system"]
  },
  {
    title: "Building Better Floxed Alleles for Conditional Knockout Mice",
    slug: "building-better-floxed-alleles-for-conditional-knockout-mice",
    category: "Technical Guide",
    relatedPages: ["/conditional-knockout-mouse-models", "/cre-lox-system"]
  },
  {
    title: "Conventional vs. Conditional Knockout Mice",
    slug: "conventional-vs-conditional-knockout-mice",
    category: "Selection Guide",
    relatedPages: ["/conditional-knockout-mouse-models", "/conventional-knockout-mouse-models", "/conditional-vs-conventional-guide"]
  },
  {
    title: "Cre-Lox: 6 Facts You May Not Know",
    slug: "cre-lox-6-facts-you-may-not-know",
    category: "Technical Guide",
    relatedPages: ["/cre-lox-system", "/conditional-knockout-mouse-models", "/cre-line-selection-guide"]
  },
  {
    title: "How Humanized Mouse Models Are Transforming Pre-clinical R&D",
    slug: "how-humanized-mouse-models-are-transforming-pre-clinical-r-d",
    category: "Industry Insights",
    relatedPages: ["/humanized-mouse-models", "/pd1-humanized-mice", "/immuno-oncology-mouse-models"]
  },
  {
    title: "How a Knockout Mouse Is Made",
    slug: "how-a-knockout-mouse-is-made",
    category: "Educational",
    relatedPages: ["/knockout-mouse-models", "/custom-mouse-models"]
  },
  {
    title: "Knock-In Mice vs. Transgenic Mice: What You Need to Know",
    slug: "knock-in-mice-vs-transgenic-mice-what-you-need-to-know",
    category: "Selection Guide",
    relatedPages: ["/knockin-mouse-models", "/transgenic-mouse-service"]
  },
  {
    title: "Leveraging Mouse Models for Point Mutation Diseases: R&D Landscape",
    slug: "leveraging-mouse-models-for-point-mutation-diseases-r-d-landscape",
    category: "Industry Insights",
    relatedPages: ["/point-mutation-mice"]
  },
  {
    title: "Top 5 Lab Mouse Colony Management Software Options For 2025",
    slug: "top-5-lab-mouse-colony-management-software-options-for-2025",
    category: "Resources",
    relatedPages: ["/colony-management-services", "/breeding-scheme-architect"]
  }
];

// Get related articles for a specific page
export function getRelatedLabSignalsArticles(currentPath: string) {
  return labSignalsArticles.filter(article => 
    article.relatedPages.includes(currentPath)
  );
}

export default function LabSignalsSignup({
  variant = 'banner',
  title = "Stay Ahead with Lab Signals",
  description = "Expert research insights delivered biweekly. Written by PhD scientists, designed for researchers who need cutting-edge knowledge to advance their projects.",
  showArticles = false,
  relatedArticles = []
}: LabSignalsSignupProps) {
  
  if (variant === 'sidebar') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
        borderRadius: '12px',
        padding: '24px',
        color: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <IconMail size={24} color="#00d4d4" />
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.1rem',
            fontWeight: 600,
            margin: 0
          }}>
            Lab Signals
          </h3>
        </div>
        <p style={{ fontSize: '.85rem', lineHeight: 1.6, marginBottom: '16px', opacity: 0.9 }}>
          Expert insights from PhD scientists. Latest research, breakthroughs, and practical guidance delivered biweekly.
        </p>
        <Link
          href="/lab-signals"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: '#008080',
            color: 'white',
            borderRadius: '6px',
            fontSize: '.85rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
        >
          Subscribe Free
          <IconArrowRight size={14} color="white" />
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,128,128,0.08) 0%, rgba(0,128,128,0.15) 100%)',
        borderLeft: '4px solid #008080',
        borderRadius: '0 8px 8px 0',
        padding: '20px 24px',
        marginTop: '24px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <IconMail size={20} color="#008080" />
              <h4 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#0a253c',
                margin: 0
              }}>
                {title}
              </h4>
            </div>
            <p style={{ fontSize: '.85rem', color: '#555', lineHeight: 1.5, margin: 0 }}>
              {description}
            </p>
          </div>
          <Link
            href="/lab-signals"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: '#008080',
              color: 'white',
              borderRadius: '6px',
              fontSize: '.85rem',
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            Subscribe Free
            <IconArrowRight size={14} color="white" />
          </Link>
        </div>
        
        {showArticles && relatedArticles.length > 0 && (
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(0,128,128,0.2)' }}>
            <p style={{ fontSize: '.8rem', color: '#666', marginBottom: '8px', fontWeight: 500 }}>Related Articles:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {relatedArticles.slice(0, 3).map((article, idx) => (
                <Link
                  key={idx}
                  href={`/lab-signals#${article.slug}`}
                  style={{
                    fontSize: '.8rem',
                    color: '#008080',
                    textDecoration: 'none',
                    padding: '4px 12px',
                    background: 'rgba(0,128,128,0.1)',
                    borderRadius: '20px'
                  }}
                >
                  {article.title.length > 40 ? article.title.substring(0, 40) + '...' : article.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div style={{
        background: '#f7f7f7',
        borderRadius: '12px',
        padding: '28px',
        borderTop: '4px solid #008080'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(0,128,128,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IconMail size={24} color="#008080" />
          </div>
          <div>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#0a253c',
              margin: 0
            }}>
              Lab Signals Newsletter
            </h3>
            <p style={{ fontSize: '.85rem', color: '#666', margin: '4px 0 0 0' }}>
              Expert research insights from PhD scientists
            </p>
          </div>
        </div>
        
        <p style={{ fontSize: '.9rem', color: '#555', lineHeight: 1.6, marginBottom: '20px' }}>
          {description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.8rem', color: '#666' }}>
            <IconFileText size={14} color="#008080" />
            <span>Expert Analysis</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.8rem', color: '#666' }}>
            <IconTarget size={14} color="#008080" />
            <span>Actionable Insights</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.8rem', color: '#666' }}>
            <IconFlask size={14} color="#008080" />
            <span>Full Archive Access</span>
          </div>
        </div>

        <Link
          href="/lab-signals"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#008080',
            color: 'white',
            borderRadius: '6px',
            fontSize: '.9rem',
            fontWeight: 500,
            textDecoration: 'none'
          }}
        >
          Subscribe Free
          <IconArrowRight size={16} color="white" />
        </Link>

        {showArticles && relatedArticles.length > 0 && (
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
            <p style={{ fontSize: '.85rem', color: '#666', marginBottom: '12px', fontWeight: 600 }}>Featured Articles:</p>
            {relatedArticles.slice(0, 3).map((article, idx) => (
              <Link
                key={idx}
                href={`/lab-signals#${article.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 0',
                  borderBottom: idx < 2 ? '1px solid #eee' : 'none',
                  textDecoration: 'none',
                  color: '#333'
                }}
              >
                <IconFileText size={14} color="#008080" />
                <span style={{ fontSize: '.85rem', flex: 1 }}>{article.title}</span>
                <IconArrowRight size={12} color="#008080" />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default banner variant
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a253c 0%, #134978 100%)',
      borderRadius: '12px',
      padding: '40px 32px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,212,0.15) 0%, transparent 70%)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '20%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,128,128,0.1) 0%, transparent 70%)'
      }} />
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <IconMail size={28} color="#00d4d4" />
            <span style={{
              fontSize: '.75rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#00d4d4',
              fontWeight: 600
            }}>
              Lab Signals Newsletter
            </span>
          </div>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '12px',
            marginTop: 0
          }}>
            {title}
          </h3>
          <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: 0 }}>
            {description}
          </p>
        </div>
        
        <Link
          href="/lab-signals"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            background: '#008080',
            color: 'white',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,128,128,0.3)'
          }}
        >
          Subscribe Free
          <IconArrowRight size={18} color="white" />
        </Link>
      </div>
    </div>
  );
}
