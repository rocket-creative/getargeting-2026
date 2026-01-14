'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NewsletterGate, SocialShare } from '@/components/UXUIDC';
import type { NewsletterArticle } from '@/data/newsletterArticles';

gsap.registerPlugin(ScrollTrigger);

// Lab Signals colors
const BRAND = {
  gold: '#fb0',
  black: '#000000',
  white: '#ffffff',
  lightGray: '#f5f5f5',
  mediumGray: '#888888',
  darkGray: '#444444',
};

interface LabSignalsArticleClientProps {
  article: NewsletterArticle;
  articleUrl: string;
}

export default function LabSignalsArticleClient({
  article,
  articleUrl,
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

  const createPreview = () => {
    const textContent = article.body
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 500);
    return <p style={{ color: BRAND.darkGray, lineHeight: 1.8 }}>{textContent}...</p>;
  };

  return (
    <section ref={contentRef} style={{ backgroundColor: BRAND.white, padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px' }}>
        {/* Social Share */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '25px',
          paddingBottom: '15px',
          borderBottom: `1px solid ${BRAND.lightGray}`,
        }}>
          <SocialShare
            url={articleUrl}
            title={article.title}
            description={article.description}
          />
        </div>

        {/* Gated Content */}
        <NewsletterGate
          articleTitle={article.title}
          previewContent={createPreview()}
        >
          <article
            className="lab-signals-article"
            dangerouslySetInnerHTML={{ __html: article.body }}
            style={{
              color: BRAND.darkGray,
              fontSize: '1.05rem',
              lineHeight: 1.85,
            }}
          />

          <div style={{
            marginTop: '35px',
            paddingTop: '25px',
            borderTop: `1px solid ${BRAND.lightGray}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px',
          }}>
            <span style={{
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
        </NewsletterGate>

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
            color: ${BRAND.black};
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
            color: ${BRAND.darkGray};
          }
          .lab-signals-article ul,
          .lab-signals-article ol {
            margin-bottom: 1.4em;
            padding-left: 1.5em;
            color: ${BRAND.darkGray};
          }
          .lab-signals-article li { margin-bottom: 0.4em; }
          .lab-signals-article a {
            color: ${BRAND.darkGray};
            text-decoration: underline;
          }
          .lab-signals-article a:hover { color: ${BRAND.black}; }
          .lab-signals-article strong {
            font-weight: 700;
            color: ${BRAND.black};
          }
          .lab-signals-article blockquote {
            border-left: 3px solid ${BRAND.mediumGray};
            padding-left: 1.2em;
            margin: 1.5em 0;
            color: ${BRAND.mediumGray};
            font-style: italic;
          }
          .lab-signals-article sup {
            font-size: 0.75em;
            vertical-align: super;
            color: ${BRAND.mediumGray};
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
            border: 1px solid ${BRAND.lightGray};
            padding: 10px;
            text-align: left;
          }
          .lab-signals-article th {
            background-color: ${BRAND.lightGray};
            font-weight: 600;
          }
          .lab-signals-article hr {
            border: none;
            border-top: 1px solid ${BRAND.lightGray};
            margin: 2.5em 0;
          }
        `}</style>
      </div>
    </section>
  );
}
