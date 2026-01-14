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
  white: '#ffffff',
  lightGray: '#f5f5f5',
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
    'Technical Guide': '#0891b2',
    'Selection Guide': '#a855f7',
    'Resources': '#06b6d4',
    'Research': '#6366f1',
    'Industry Insights': '#ec4899',
    'Comparison': '#14b8a6',
  };
  return colors[category] || '#666';
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
    <div style={{ backgroundColor: BRAND.lightGray, minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: BRAND.black,
        padding: '15px 30px',
      }}>
        <div style={{
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

      <main>
        {/* Hero/Header Section */}
        <section style={{
          backgroundColor: BRAND.black,
          padding: '30px 20px 50px',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Breadcrumb */}
            <Link
              href="/lab-signals"
              style={{
                color: BRAND.gold,
                fontSize: '.85rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '20px',
              }}
            >
              ← Back to Lab Signals
            </Link>

            {/* Category Badge */}
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '.7rem',
                fontWeight: 700,
                color: BRAND.black,
                backgroundColor: BRAND.gold,
                padding: '5px 14px',
                borderRadius: '15px',
              }}>
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              color: BRAND.white,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2.2rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '12px',
            }}>
              {article.title}
            </h1>

            {/* Subtitle */}
            {article.subtitle && (
              <p style={{
                color: BRAND.gold,
                fontSize: '1rem',
                fontWeight: 500,
              }}>
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
          <section style={{ backgroundColor: BRAND.lightGray, padding: '40px 20px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3 style={{
                color: BRAND.black,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                More in {article.category}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '16px',
              }}>
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/lab-signals/${related.slug}`}
                    style={{
                      display: 'block',
                      backgroundColor: BRAND.white,
                      padding: '16px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      borderLeft: `3px solid ${BRAND.gold}`,
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      fontSize: '.65rem',
                      fontWeight: 600,
                      color: getCategoryColor(related.category),
                      marginBottom: '8px',
                    }}>
                      {related.category}
                    </span>
                    <h4 style={{
                      color: BRAND.black,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '.9rem',
                      fontWeight: 600,
                      lineHeight: 1.35,
                      marginBottom: '8px',
                    }}>
                      {related.title}
                    </h4>
                    <span style={{ color: '#d4a000', fontSize: '.8rem', fontWeight: 500 }}>
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Service Link */}
        {article.relatedPage && (
          <section style={{ backgroundColor: BRAND.white, padding: '35px 20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h3 style={{
                color: BRAND.black,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '10px',
              }}>
                Interested in This Research Area?
              </h3>
              <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '15px' }}>
                Learn more about our mouse model services.
              </p>
              <Link
                href={article.relatedPage}
                style={{
                  display: 'inline-block',
                  backgroundColor: BRAND.black,
                  color: BRAND.white,
                  padding: '10px 24px',
                  fontSize: '.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '5px',
                }}
              >
                Explore Services →
              </Link>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section style={{ backgroundColor: BRAND.gold, padding: '45px 20px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{
              color: BRAND.black,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.4rem',
              fontWeight: 700,
              marginBottom: '10px',
            }}>
              Get More Research Insights
            </h3>
            <p style={{ color: 'rgba(0,0,0,0.75)', fontSize: '.9rem', marginBottom: '20px' }}>
              Subscribe for biweekly updates on mouse model research.
            </p>
            <FlodeskForm />
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: BRAND.black,
          padding: '30px 20px',
          textAlign: 'center',
        }}>
          <Image 
            src="/images/logo.png" 
            alt="Lab Signals" 
            width={100} 
            height={35}
            style={{ height: 'auto', marginBottom: '15px' }}
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.8rem', marginBottom: '10px' }}>
            Powered by Ingenious Targeting Laboratory
          </p>
          <Link href="/" style={{ color: BRAND.gold, fontSize: '.85rem', textDecoration: 'none' }}>
            Visit Ingenious →
          </Link>
        </footer>
      </main>
    </div>
  );
}
