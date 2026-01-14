'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NewsletterGate, SocialShare } from '@/components/UXUIDC';
import type { NewsletterArticle } from '@/data/newsletterArticles';

gsap.registerPlugin(ScrollTrigger);

interface LabSignalsArticleClientProps {
  article: NewsletterArticle;
  articleUrl: string;
  categoryColor: string;
}

export default function LabSignalsArticleClient({
  article,
  articleUrl,
  categoryColor,
}: LabSignalsArticleClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Create a preview of the content (first 500 chars of clean text)
  const createPreview = () => {
    const textContent = article.body
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 500);
    return <p style={{ color: '#555', lineHeight: 1.8 }}>{textContent}...</p>;
  };

  return (
    <section ref={contentRef} style={{ backgroundColor: 'white', padding: '50px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Social Share Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '1px solid #e0e0e0',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <SocialShare
            url={articleUrl}
            title={article.title}
            description={article.description}
          />

          {article.relatedPage && (
            <Link
              href={article.relatedPage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#f7f7f7',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                color: '#008080',
                fontSize: '.85rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <span>Related Service</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Gated Article Content */}
        <NewsletterGate
          articleTitle={article.title}
          previewContent={createPreview()}
        >
          {/* Full Article Content */}
          <article
            className="lab-signals-article"
            dangerouslySetInnerHTML={{ __html: article.body }}
            style={{
              color: '#333',
              fontSize: '1.05rem',
              lineHeight: 1.9,
            }}
          />

          {/* Article Footer */}
          <div
            style={{
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '.75rem',
                    fontWeight: 600,
                    color: categoryColor,
                    backgroundColor: `${categoryColor}15`,
                    padding: '4px 12px',
                    borderRadius: '12px',
                  }}
                >
                  {article.category}
                </span>
              </div>

              <SocialShare
                url={articleUrl}
                title={article.title}
                description={article.description}
              />
            </div>
          </div>
        </NewsletterGate>

        {/* Article Styles */}
        <style jsx global>{`
          .lab-signals-article {
            font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
          }

          .lab-signals-article h1,
          .lab-signals-article h2,
          .lab-signals-article h3,
          .lab-signals-article h4,
          .lab-signals-article h5 {
            font-family: 'Poppins', sans-serif;
            color: #0a253c;
            margin-top: 2em;
            margin-bottom: 0.8em;
            line-height: 1.3;
          }

          .lab-signals-article h1 {
            font-size: 2rem;
            font-weight: 700;
          }

          .lab-signals-article h2 {
            font-size: 1.6rem;
            font-weight: 700;
          }

          .lab-signals-article h3 {
            font-size: 1.3rem;
            font-weight: 600;
          }

          .lab-signals-article h4 {
            font-size: 1.1rem;
            font-weight: 600;
          }

          .lab-signals-article p {
            margin-bottom: 1.5em;
          }

          .lab-signals-article ul,
          .lab-signals-article ol {
            margin-bottom: 1.5em;
            padding-left: 1.5em;
          }

          .lab-signals-article li {
            margin-bottom: 0.5em;
          }

          .lab-signals-article a {
            color: #008080;
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          .lab-signals-article a:hover {
            color: #006666;
          }

          .lab-signals-article strong {
            font-weight: 700;
            color: #0a253c;
          }

          .lab-signals-article em {
            font-style: italic;
          }

          .lab-signals-article blockquote {
            border-left: 4px solid #008080;
            padding-left: 1.5em;
            margin: 2em 0;
            color: #555;
            font-style: italic;
          }

          .lab-signals-article sup {
            font-size: 0.75em;
            vertical-align: super;
            color: #008080;
          }

          .lab-signals-article img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 2em 0;
          }

          .lab-signals-article table {
            width: 100%;
            border-collapse: collapse;
            margin: 2em 0;
          }

          .lab-signals-article th,
          .lab-signals-article td {
            border: 1px solid #e0e0e0;
            padding: 12px;
            text-align: left;
          }

          .lab-signals-article th {
            background-color: #f7f7f7;
            font-weight: 600;
          }

          .lab-signals-article code {
            background-color: #f0f0f0;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
          }

          .lab-signals-article pre {
            background-color: #1a1a1a;
            color: #e0e0e0;
            padding: 1.5em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 2em 0;
          }

          .lab-signals-article pre code {
            background: none;
            padding: 0;
          }

          .lab-signals-article hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 3em 0;
          }
        `}</style>
      </div>
    </section>
  );
}
