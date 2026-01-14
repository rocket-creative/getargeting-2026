import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  UXUIDCNavigation, 
  UXUIDCFooter, 
  UXUIDCStartProjectCTA,
  FlodeskForm
} from '@/components/UXUIDC';
import { 
  getArticleBySlug, 
  getAllArticleSlugs,
  newsletterArticles 
} from '@/data/newsletterArticles';
import LabSignalsArticleClient from './LabSignalsArticleClient';

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
      title: 'Article Not Found | Lab Signals | ITL',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} | Lab Signals | ITL`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      siteName: 'Ingenious Targeting Laboratory',
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
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />

      <main id="main-content">
        {/* Header Section */}
        <section
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
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: '20px' }}>
              <Link
                href="/lab-signals"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '.85rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>←</span>
                <span>Lab Signals</span>
              </Link>
            </nav>

            {/* Category Badge */}
            <div style={{ marginBottom: '15px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '.75rem',
                  fontWeight: 600,
                  color: 'white',
                  backgroundColor: categoryColor,
                  padding: '5px 14px',
                  borderRadius: '15px',
                }}
              >
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                color: 'white',
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
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  maxWidth: '600px',
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
          <section style={{ backgroundColor: '#f7f7f7', padding: '50px 20px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3
                style={{
                  color: '#0a253c',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  marginBottom: '25px',
                }}
              >
                Related Articles in {article.category}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '20px',
                }}
              >
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/lab-signals/${related.slug}`}
                    style={{
                      display: 'block',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '8px',
                      border: '1px solid #e0e0e0',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '.7rem',
                        fontWeight: 600,
                        color: getCategoryColor(related.category),
                        backgroundColor: `${getCategoryColor(related.category)}15`,
                        padding: '3px 10px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                      }}
                    >
                      {related.category}
                    </span>
                    <h4
                      style={{
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '.95rem',
                        fontWeight: 600,
                        lineHeight: 1.4,
                        marginBottom: '8px',
                      }}
                    >
                      {related.title}
                    </h4>
                    <span
                      style={{
                        color: '#008080',
                        fontSize: '.8rem',
                        fontWeight: 500,
                      }}
                    >
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
          <section style={{ backgroundColor: 'white', padding: '40px 20px', borderTop: '1px solid #e0e0e0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h3
                style={{
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                Interested in This Research Area?
              </h3>
              <p style={{ color: '#666', fontSize: '.95rem', marginBottom: '20px' }}>
                Learn more about our mouse model services for this therapeutic area.
              </p>
              <Link
                href={article.relatedPage}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#008080',
                  color: 'white',
                  padding: '12px 28px',
                  fontSize: '.95rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                Explore Related Services →
              </Link>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section style={{ backgroundColor: '#0a253c', padding: '60px 20px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h3
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '15px',
              }}
            >
              Get More Research Insights
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '25px',
              }}
            >
              Subscribe to Lab Signals for biweekly updates on mouse model research, technical guides, and industry insights.
            </p>
            <FlodeskForm />
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
