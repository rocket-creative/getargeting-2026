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
import RelatedArticles from './RelatedArticles';
import ServiceLink from './ServiceLink';

// Lab Signals colors - gold, black, grey, white only
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  white: '#ffffff',
  lightGray: '#f0f0f0',
  bodyGray: '#e8e8e8',
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
    .slice(0, 3)
    .map(a => ({ slug: a.slug, category: a.category, title: a.title }));
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
    <div style={{ backgroundColor: BRAND.bodyGray }}>
      {/* Article Header */}
      <section style={{ backgroundColor: BRAND.lightGray, padding: '30px 20px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Back Link */}
          <Link
            href="/lab-signals"
            style={{
              color: BRAND.darkGray,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '.85rem',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '25px',
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
            color: BRAND.black,
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
      <RelatedArticles articles={relatedArticles} categoryName={article.category} />

      {/* Related Service */}
      {article.relatedPage && <ServiceLink href={article.relatedPage} />}

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

    </div>
  );
}
