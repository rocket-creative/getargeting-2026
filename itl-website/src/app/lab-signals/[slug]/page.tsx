import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FlodeskForm } from '@/components/UXUIDC';
import { 
  getArticleBySlug, 
  getAllArticleSlugs,
  newsletterArticles 
} from '@/data/newsletterArticles';
import LabSignalsArticleClient from './LabSignalsArticleClient';

// Lab Signals brand colors
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  darkGray: '#111111',
  white: '#ffffff',
};

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Lab Signals',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} | Lab Signals`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      siteName: 'Lab Signals',
      url: `https://www.genetargeting.com/lab-signals/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
    alternates: {
      types: {
        'application/rss+xml': '/api/rss/lab-signals',
      },
    },
  };
}

// Category color helper
function getCategoryColor(category: string): string {
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
}

// Get related articles
function getRelatedArticles(currentSlug: string, category: string) {
  return newsletterArticles
    .filter(a => a.slug !== currentSlug)
    .filter(a => a.category === category)
    .slice(0, 3);
}

export default async function LabSignalsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, article.category);
  const categoryColor = getCategoryColor(article.category);
  const articleUrl = `https://www.genetargeting.com/lab-signals/${article.slug}`;

  return (
    <div style={{ backgroundColor: BRAND.black, minHeight: '100vh' }}>
      {/* Simple Header */}
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
        {/* Hero/Header Section */}
        <section style={{
          backgroundColor: BRAND.black,
          padding: '40px 20px 60px',
          position: 'relative',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: '25px' }}>
              <Link
                href="/lab-signals"
                style={{
                  color: BRAND.gold,
                  fontSize: '.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>←</span>
                <span>Back to Lab Signals</span>
              </Link>
            </nav>

            {/* Category Badge */}
            <div style={{ marginBottom: '15px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '.75rem',
                  fontWeight: 700,
                  color: BRAND.black,
                  backgroundColor: BRAND.gold,
                  padding: '6px 16px',
                  borderRadius: '20px',
                }}
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.4rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '15px',
              }}
            >
              {article.title}
            </h1>

            {/* Subtitle */}
            {article.subtitle && (
              <p
                style={{
                  color: BRAND.gold,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {article.subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Client-side content with gating */}
        <LabSignalsArticleClient 
          article={article}
          articleUrl={articleUrl}
          categoryColor={categoryColor}
        />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section style={{ backgroundColor: BRAND.darkGray, padding: '50px 20px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3 style={{
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 600,
                marginBottom: '25px',
              }}>
                Related Articles in {article.category}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}>
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/lab-signals/${related.slug}`}
                    style={{
                      display: 'block',
                      backgroundColor: BRAND.black,
                      padding: '20px',
                      borderRadius: '8px',
                      border: `1px solid ${BRAND.gold}33`,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      fontSize: '.7rem',
                      fontWeight: 600,
                      color: getCategoryColor(related.category),
                      backgroundColor: `${getCategoryColor(related.category)}22`,
                      padding: '3px 10px',
                      borderRadius: '10px',
                      marginBottom: '10px',
                    }}>
                      {related.category}
                    </span>
                    <h4 style={{
                      color: BRAND.white,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '.95rem',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: '8px',
                    }}>
                      {related.title}
                    </h4>
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
        )}

        {/* Related Service Link */}
        {article.relatedPage && (
          <section style={{ 
            backgroundColor: BRAND.black, 
            padding: '40px 20px', 
            borderTop: `1px solid ${BRAND.gold}22` 
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h3 style={{
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '12px',
              }}>
                Interested in This Research Area?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.95rem', marginBottom: '20px' }}>
                Learn more about our mouse model services for this therapeutic area.
              </p>
              <Link
                href={article.relatedPage}
                style={{
                  display: 'inline-block',
                  backgroundColor: BRAND.gold,
                  color: BRAND.black,
                  padding: '12px 28px',
                  fontSize: '.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: '6px',
                }}
              >
                Explore Related Services →
              </Link>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section style={{ backgroundColor: BRAND.gold, padding: '60px 20px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{
              color: BRAND.black,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '15px',
            }}>
              Get More Research Insights
            </h3>
            <p style={{
              color: 'rgba(0,0,0,0.8)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '25px',
            }}>
              Subscribe to Lab Signals for biweekly updates on mouse model research, technical guides, and industry insights.
            </p>
            <FlodeskForm />
          </div>
        </section>

        {/* Footer */}
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
