import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Metadata } from 'next';
import { UXUIDCNavigation, UXUIDCFooter, UXUIDCStartProjectCTA } from '@/components/UXUIDC';

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

// Simple frontmatter parser
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {} as Record<string, string>, content: fileContent };
  }

  const frontmatterStr = match[1];
  const content = match[2];

  const data: Record<string, string | string[]> = {};
  const lines = frontmatterStr.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      data[key] = arrayContent.split(',').map((item) => {
        let trimmed = item.trim();
        if (
          (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
          (trimmed.startsWith("'") && trimmed.endsWith("'"))
        ) {
          trimmed = trimmed.slice(1, -1);
        }
        return trimmed;
      });
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

// Convert markdown to HTML
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^#### (.*$)/gm, '<h4 class="blog-h4">$1</h4>')
    .replace(/^### (.*$)/gm, '<h3 class="blog-h3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="blog-h2">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="blog-h1">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="blog-link">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote class="blog-quote">$1</blockquote>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="blog-hr" />')
    // Paragraphs (double newlines)
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br />');

  // Wrap consecutive list items in ul
  html = html.replace(/(<li>[^<]*<\/li>(\s*<br \/>)?)+/g, (match) => {
    const cleaned = match.replace(/<br \/>/g, '');
    return `<ul class="blog-list">${cleaned}</ul>`;
  });

  // Clean up multiple consecutive list wraps
  html = html.replace(/<\/ul>\s*<ul class="blog-list">/g, '');

  return `<p>${html}</p>`;
}

// Get all blog slugs for static generation
export async function generateStaticParams() {
  try {
    const files = fs.readdirSync(BLOG_CONTENT_DIR);
    return files
      .filter((file) => file.endsWith('.md') && !file.startsWith('_') && file !== 'README.md')
      .map((file) => ({
        slug: file.replace('.md', ''),
      }));
  } catch {
    return [];
  }
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = parseFrontmatter(fileContent);

    const title = String(data.title || slug.replace(/-/g, ' '));

    return {
      title: `${title} | Ingenious Blog Archive | ITL`,
      description:
        String(data.description) ||
        `Archived blog post from Ingenious Targeting Laboratory: ${title}`,
    };
  } catch {
    return {
      title: 'Blog Post | Ingenious Blog Archive | ITL',
      description: 'Archived blog post from Ingenious Targeting Laboratory',
    };
  }
}

export default async function IngeniousBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);

  // Check if content file exists
  const contentExists = fs.existsSync(filePath);

  let frontmatter: Record<string, string | string[]> = {};
  let htmlContent = '';

  if (contentExists) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseFrontmatter(fileContent);
    frontmatter = parsed.data;
    htmlContent = markdownToHtml(parsed.content);
  }

  // Format the title from slug if not in frontmatter
  const title =
    String(frontmatter.title) ||
    slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const category = String(frontmatter.category) || 'General';
  const legacyUrl =
    String(frontmatter.legacy_url) || `https://www.genetargeting.com/ingenious-blog/${slug}`;

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'Technical Guide': '#008080',
      Educational: '#2384da',
      'Selection Guide': '#6b46c1',
      Protocol: '#d97706',
      'Research Spotlight': '#059669',
      'Company News': '#dc2626',
      'Industry Insights': '#7c3aed',
    };
    return colors[cat] || '#666';
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />

      <main id="main-content">
        {/* Header */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 100%)',
            padding: '70px 20px 50px',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Archive Notice */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255,200,100,0.2)',
                padding: '6px 14px',
                borderRadius: '15px',
                marginBottom: '15px',
                border: '1px solid rgba(255,200,100,0.3)',
              }}
            >
              <span style={{ fontSize: '14px' }}>📁</span>
              <span style={{ color: '#ffc864', fontSize: '.75rem', fontWeight: 500 }}>
                Archived Blog Post
              </span>
            </div>

            {/* Category */}
            <div style={{ marginBottom: '12px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '.7rem',
                  fontWeight: 600,
                  color: 'white',
                  backgroundColor: getCategoryColor(category),
                  padding: '4px 12px',
                  borderRadius: '12px',
                }}
              >
                {category}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.2rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '15px',
              }}
            >
              {title}
            </h1>

            {/* Meta */}
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '.8rem' }}>
              Originally published on{' '}
              <a
                href={legacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#00d4d4', textDecoration: 'underline' }}
              >
                genetargeting.com
              </a>
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {contentExists ? (
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                style={{
                  color: '#333',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: '#fff8e6',
                  border: '1px solid #ffd666',
                  borderRadius: '8px',
                  padding: '30px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    color: '#996600',
                    fontSize: '1rem',
                    marginBottom: '15px',
                  }}
                >
                  Content for this archived blog post is being migrated.
                </p>
                <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '20px' }}>
                  In the meantime, you can view the original post on our legacy site:
                </p>
                <a
                  href={legacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#008080',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    borderRadius: '4px',
                  }}
                >
                  View on Legacy Site →
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Back to Blog */}
        <section
          style={{ backgroundColor: '#f7f7f7', padding: '30px 20px', borderTop: '1px solid #e0e0e0' }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link
              href="/ingenious-blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#008080',
                fontSize: '.9rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <span>←</span>
              <span>Back to Blog Archive</span>
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <section style={{ backgroundColor: 'white', padding: '40px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3
              style={{
                color: '#333',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '15px',
              }}
            >
              Explore More Resources
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { label: 'Lab Signals', href: '/lab-signals' },
                { label: 'Resources', href: '/resources' },
                { label: 'Technologies', href: '/technologies' },
                { label: 'Publications', href: '/publications' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#f7f7f7',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    color: '#008080',
                    fontSize: '.85rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
