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
  white: '#ffffff',
  lightGray: '#f5f5f5',
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

  // Create a preview of the content
  const createPreview = () => {
    const textContent = article.body
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 500);
    return <p style={{ color: '#555', lineHeight: 1.8 }}>{textContent}...</p>;
  };

  return (
    <section ref={contentRef} style={{ backgroundColor: BRAND.white, padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Social Share Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '25px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0',
          flexWrap: 'wrap',
          gap: '15px',
        }}>
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
              color: '#333',
              fontSize: '1.05rem',
              lineHeight: 1.85,
            }}
          />

          {/* Article Footer */}
          <div style={{
            marginTop: '35px',
            paddingTop: '25px',
            borderTop: '1px solid #e0e0e0',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px',
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '.7rem',
                fontWeight: 700,
                color: BRAND.black,
                backgroundColor: BRAND.gold,
                padding: '4px 12px',
                borderRadius: '12px',
              }}>
                {article.category}
              </span>
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
            color: #111;
            margin-top: 1.8em;
            margin-bottom: 0.7em;
            line-height: 1.3;
          }

          .lab-signals-article h1 { font-size: 1.8rem; font-weight: 700; }
          .lab-signals-article h2 { font-size: 1.5rem; font-weight: 700; }
          .lab-signals-article h3 { font-size: 1.25rem; font-weight: 600; }
          .lab-signals-article h4 { font-size: 1.1rem; font-weight: 600; }

          .lab-signals-article p {
            margin-bottom: 1.4em;
            color: #444;
          }

          .lab-signals-article ul,
          .lab-signals-article ol {
            margin-bottom: 1.4em;
            padding-left: 1.5em;
            color: #444;
          }

          .lab-signals-article li { margin-bottom: 0.4em; }

          .lab-signals-article a {
            color: #d4a000;
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          .lab-signals-article a:hover { color: #b38f00; }

          .lab-signals-article strong {
            font-weight: 700;
            color: #222;
          }

          .lab-signals-article em { font-style: italic; }

          .lab-signals-article blockquote {
            border-left: 3px solid #fb0;
            padding-left: 1.2em;
            margin: 1.5em 0;
            color: #555;
            font-style: italic;
          }

          .lab-signals-article sup {
            font-size: 0.75em;
            vertical-align: super;
            color: #d4a000;
          }

          .lab-signals-article img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            margin: 1.5em 0;
          }

          .lab-signals-article table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5em 0;
          }

          .lab-signals-article th,
          .lab-signals-article td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }

          .lab-signals-article th {
            background-color: #f5f5f5;
            font-weight: 600;
          }

          .lab-signals-article code {
            background-color: #f5f5f5;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
          }

          .lab-signals-article pre {
            background-color: #1a1a1a;
            color: #e8e8e8;
            padding: 1.2em;
            border-radius: 6px;
            overflow-x: auto;
            margin: 1.5em 0;
          }

          .lab-signals-article pre code {
            background: none;
            padding: 0;
            color: inherit;
          }

          .lab-signals-article hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 2.5em 0;
          }

          .lab-signals-article figure { margin: 1.5em 0; }

          .lab-signals-article figcaption {
            color: #777;
            font-size: 0.85em;
            margin-top: 0.4em;
            text-align: center;
          }
        `}</style>
      </div>
    </section>
  );
}
