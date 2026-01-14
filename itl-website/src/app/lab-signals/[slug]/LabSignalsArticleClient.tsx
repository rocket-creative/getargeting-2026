'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NewsletterGate, SocialShare } from '@/components/UXUIDC';
import type { NewsletterArticle } from '@/data/newsletterArticles';

gsap.registerPlugin(ScrollTrigger);

// Lab Signals brand colors
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  darkGray: '#111111',
  white: '#ffffff',
};

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
    return <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>{textContent}...</p>;
  };

  return (
    <section ref={contentRef} style={{ backgroundColor: BRAND.darkGray, padding: '50px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Social Share Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: `1px solid ${BRAND.gold}33`,
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <SocialShare
            url={articleUrl}
            title={article.title}
            description={article.description}
          />
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
              color: BRAND.white,
              fontSize: '1.05rem',
              lineHeight: 1.9,
            }}
          />

          {/* Article Footer */}
          <div
            style={{
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: `1px solid ${BRAND.gold}33`,
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
                    fontWeight: 700,
                    color: BRAND.black,
                    backgroundColor: BRAND.gold,
                    padding: '5px 14px',
                    borderRadius: '15px',
                  }}
                >
                  {article.category}
                </span>
              </div>

              <SocialShare
                url={articleUrl}
                title={article.title}
                description={article.description}
                showRss={false}
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
            color: ${BRAND.gold};
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
            color: rgba(255, 255, 255, 0.9);
          }

          .lab-signals-article ul,
          .lab-signals-article ol {
            margin-bottom: 1.5em;
            padding-left: 1.5em;
            color: rgba(255, 255, 255, 0.9);
          }

          .lab-signals-article li {
            margin-bottom: 0.5em;
          }

          .lab-signals-article a {
            color: ${BRAND.gold};
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          .lab-signals-article a:hover {
            color: #ffcc33;
          }

          .lab-signals-article strong {
            font-weight: 700;
            color: ${BRAND.white};
          }

          .lab-signals-article em {
            font-style: italic;
          }

          .lab-signals-article blockquote {
            border-left: 4px solid ${BRAND.gold};
            padding-left: 1.5em;
            margin: 2em 0;
            color: rgba(255, 255, 255, 0.8);
            font-style: italic;
          }

          .lab-signals-article sup {
            font-size: 0.75em;
            vertical-align: super;
            color: ${BRAND.gold};
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
            border: 1px solid ${BRAND.gold}44;
            padding: 12px;
            text-align: left;
          }

          .lab-signals-article th {
            background-color: ${BRAND.gold}22;
            font-weight: 600;
            color: ${BRAND.gold};
          }

          .lab-signals-article code {
            background-color: ${BRAND.black};
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
            color: ${BRAND.gold};
          }

          .lab-signals-article pre {
            background-color: ${BRAND.black};
            color: rgba(255, 255, 255, 0.9);
            padding: 1.5em;
            border-radius: 8px;
            overflow-x: auto;
            margin: 2em 0;
            border: 1px solid ${BRAND.gold}33;
          }

          .lab-signals-article pre code {
            background: none;
            padding: 0;
          }

          .lab-signals-article hr {
            border: none;
            border-top: 1px solid ${BRAND.gold}33;
            margin: 3em 0;
          }

          .lab-signals-article figure {
            margin: 2em 0;
          }

          .lab-signals-article figcaption {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9em;
            margin-top: 0.5em;
            text-align: center;
          }
        `}</style>
      </div>
    </section>
  );
}
