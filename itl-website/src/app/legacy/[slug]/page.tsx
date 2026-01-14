import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { UXUIDCNavigation, UXUIDCFooter } from '@/components/UXUIDC';
import Link from 'next/link';

// Simple frontmatter parser (no external dependencies)
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: fileContent };
  }
  
  const frontmatterStr = match[1];
  const content = match[2];
  
  // Parse YAML-like frontmatter
  const data: Record<string, string | string[]> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    
    // Handle quoted strings
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays (simple detection)
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      data[key] = arrayContent.split(',').map(item => {
        let trimmed = item.trim();
        if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || 
            (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
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

// Get all legacy page slugs for static generation
export async function generateStaticParams() {
  const legacyDir = path.join(process.cwd(), 'src/content/legacy');
  
  try {
    const files = fs.readdirSync(legacyDir);
    return files
      .filter(file => file.endsWith('.md') && !file.startsWith('_') && file !== 'README.md')
      .map(file => ({
        slug: file.replace('.md', ''),
      }));
  } catch {
    return [];
  }
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const legacyDir = path.join(process.cwd(), 'src/content/legacy');
  const filePath = path.join(legacyDir, `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = parseFrontmatter(fileContent);
    
    return {
      title: `${data.title || slug} | Legacy Content | ingenious targeting laboratory`,
      description: `Archived content from genetargeting.com - ${data.title || slug}`,
    };
  } catch {
    return {
      title: 'Legacy Content | ingenious targeting laboratory',
    };
  }
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="legacy-h3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="legacy-h2">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="legacy-h1">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote class="legacy-quote">$1</blockquote>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br />');

  // Wrap lists
  html = html.replace(/(<li>[^<]*<\/li>)/g, '<ul class="legacy-list">$1</ul>');
  
  // Clean up multiple consecutive list wraps
  html = html.replace(/<\/ul>\s*<ul class="legacy-list">/g, '');

  return `<p>${html}</p>`;
}

export default async function LegacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const legacyDir = path.join(process.cwd(), 'src/content/legacy');
  const filePath = path.join(legacyDir, `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = parseFrontmatter(fileContent);
  const htmlContent = markdownToHtml(content);

  const linkFrom = Array.isArray(frontmatter.link_from) ? frontmatter.link_from : [];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <UXUIDCNavigation />
      
      <main id="main-content">
        {/* Header Banner */}
        <section
          style={{
            background: 'linear-gradient(135deg, #0a253c 0%, #1a4a6e 100%)',
            padding: '60px 20px 40px',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '6px 16px',
                borderRadius: '20px',
                marginBottom: '15px',
              }}
            >
              <span style={{ color: 'white', fontSize: '.75rem', fontWeight: 500 }}>
                📄 Legacy Content from genetargeting.com
              </span>
            </div>
            <h1
              style={{
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.2rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '10px',
              }}
            >
              {String(frontmatter.title || slug)}
            </h1>
            {frontmatter.legacy_url && (
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.85rem' }}>
                Content preserved from legacy site • Originally at{' '}
                <a 
                  href={String(frontmatter.legacy_url)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#00d4d4', textDecoration: 'underline' }}
                >
                  {String(frontmatter.legacy_url)}
                </a>
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section style={{ backgroundColor: 'white', padding: '50px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div
              className="legacy-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              style={{
                color: '#333',
                fontSize: '1rem',
                lineHeight: '1.8',
              }}
            />
          </div>
        </section>

        {/* Back to New Page CTA */}
        {frontmatter.new_build_url && (
          <section style={{ backgroundColor: '#f7f7f7', padding: '40px 20px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ color: '#666', fontSize: '.9rem', marginBottom: '15px' }}>
                View our updated page with the latest information:
              </p>
              <Link
                href={String(frontmatter.new_build_url)}
                className="inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: '#008080',
                  color: 'white',
                  padding: '12px 25px',
                  fontSize: '.9rem',
                  fontWeight: 500,
                  borderRadius: '4px',
                }}
              >
                <span>View Updated Page</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        )}

        {/* Related Legacy Pages */}
        {linkFrom.length > 0 && (
          <section style={{ backgroundColor: 'white', padding: '40px 20px', borderTop: '1px solid #e0e0e0' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h3 style={{ color: '#333', fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>
                Related Pages
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {linkFrom.map((link: string, i: number) => (
                  <Link
                    key={i}
                    href={link}
                    className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      backgroundColor: '#f7f7f7',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      color: '#008080',
                      fontSize: '.85rem',
                      textDecoration: 'none',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <UXUIDCFooter />
    </div>
  );
}
