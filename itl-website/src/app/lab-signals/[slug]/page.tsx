import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { FlodeskForm } from '@/components/UXUIDC';
import { 
  getArticleBySlug, 
  getAllArticleSlugs,
  newsletterArticles 
} from '@/data/newsletterArticles';
import LabSignalsArticleClient from './LabSignalsArticleClient';

// Lab Signals colors - gold, black, grey, white only
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  white: '#ffffff',
  lightGray: '#f5f5f5',
  mediumGray: '#888888',
  darkGray: '#444444',
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
  const articleUrl = `https://www.genetargeting.com/lab-signals/${article.slug}`;

  return (
    <div style={{ backgroundColor: BRAND.lightGray }}>
      {/* Article Header */}
      <section style={{ backgroundColor: BRAND.black, padding: '40px 20px 50px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Back Link */}
          <Link
            href="/lab-signals"
            style={{
              color: BRAND.gold,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '.85rem',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '25px',
              transition: 'opacity 0.2s ease',
            }}
          >
            ← Back to Lab Signals
          </Link>

          {/* Category */}
          <div style={{ marginBottom: '15px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '.7rem',
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              color: BRAND.black,
              backgroundColor: BRAND.gold,
              padding: '6px 16px',
              borderRadius: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
            }}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            color: BRAND.white,
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: '15px',
          }}>
            {article.title}
          </h1>

          {article.subtitle && (
            <p style={{
              color: BRAND.mediumGray,
              fontFamily: 'Lato, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.5,
            }}>
              {article.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Article Content */}
      <LabSignalsArticleClient 
        article={article}
        articleUrl={articleUrl}
      />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section style={{ backgroundColor: BRAND.lightGray, padding: '50px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{
              color: BRAND.black,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '25px',
            }}>
              More in {article.category}
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
                    backgroundColor: BRAND.white,
                    padding: '20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    borderLeft: `4px solid ${BRAND.gold}`,
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{
                    display: 'inline-block',
                    fontSize: '.65rem',
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif',
                    color: BRAND.mediumGray,
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                  }}>
                    {related.category}
                  </span>
                  <h4 style={{
                    color: BRAND.black,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.95rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '10px',
                  }}>
                    {related.title}
                  </h4>
                  <span style={{ 
                    color: BRAND.darkGray, 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '.8rem', 
                    fontWeight: 500 
                  }}>
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Service */}
      {article.relatedPage && (
        <section style={{ backgroundColor: BRAND.white, padding: '45px 20px' }}>
          <div style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto' }}>
            <h3 style={{
              color: BRAND.black,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.15rem',
              fontWeight: 600,
              marginBottom: '10px',
            }}>
              Interested in This Research Area?
            </h3>
            <p style={{ 
              color: BRAND.darkGray, 
              fontFamily: 'Lato, sans-serif',
              fontSize: '.9rem', 
              marginBottom: '18px',
              lineHeight: 1.6,
            }}>
              Learn more about our mouse model services.
            </p>
            <Link
              href={article.relatedPage}
              style={{
                display: 'inline-block',
                backgroundColor: BRAND.black,
                color: BRAND.white,
                fontFamily: 'Poppins, sans-serif',
                padding: '12px 28px',
                fontSize: '.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Explore Services →
            </Link>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: BRAND.gold, padding: '55px 20px' }}>
        <div style={{ maxWidth: '550px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            color: BRAND.black,
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            fontWeight: 700,
            marginBottom: '10px',
          }}>
            Get More Research Insights
          </h3>
          <p style={{ 
            color: 'rgba(0,0,0,0.7)', 
            fontFamily: 'Lato, sans-serif',
            fontSize: '.9rem', 
            marginBottom: '25px',
            lineHeight: 1.6,
          }}>
            Subscribe for biweekly updates on mouse model research.
          </p>
          <FlodeskForm />
        </div>
      </section>

      {/* Minimal back link */}
      <div style={{ 
        backgroundColor: BRAND.black, 
        padding: '20px',
        textAlign: 'center',
      }}>
        <Link 
          href="/" 
          style={{ 
            color: BRAND.gold, 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '.85rem', 
            textDecoration: 'none',
          }}
        >
          ← Back to Ingenious Targeting Laboratory
        </Link>
      </div>
    </div>
  );
}
