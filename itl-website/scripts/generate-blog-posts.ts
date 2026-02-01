/**
 * Script to generate blog post markdown files from CSV export
 * 
 * Usage: npx ts-node scripts/generate-blog-posts.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSV_PATH = path.join(__dirname, '../../Ingenious Targeting Laboratory - Ingenious-blogs.csv');
const OUTPUT_DIR = path.join(__dirname, '../src/content/blog');

// Simple CSV parser that handles quoted fields with commas
function parseCSV(content: string): Record<string, string>[] {
  const lines = content.split('\n');
  const headers = parseCSVLine(lines[0]);
  const results: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    
    const values = parseCSVLine(lines[i]);
    const row: Record<string, string> = {};
    
    headers.forEach((header, index) => {
      row[header.trim()] = values[index] || '';
    });
    
    results.push(row);
  }

  return results;
}

// Parse a single CSV line handling quoted fields
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
}

// Map of legacy blog slugs for link conversion
const BLOG_SLUGS = new Set([
  '4-reasons-to-use-targeted-transgenic-mice-over-random-insertion',
  'a-new-mouse-line-for-tissue-specific-expression',
  'ace2-transgenic-mice',
  'bac-transgenic',
  'cl',
  'cre-floxed-mice',
  'crispr-cas9',
  'crispr-gene-knockout',
  'crispr-gene-targeting',
  'crispr-knockdown',
  'crispr-knockout',
  'crispr-transgenic-mice',
  'cell-strains',
  'conditional-gene-knockout-mouse',
  'conditional-knockout-mice',
  'conditional-knockout-mouse-protocol',
  'conditional-knockout-mouse-and-global-knockout-mouse',
  'conditional-mutation',
  'congratulations-to-our-clients',
  'conventional-knockout',
  'conventional-vs-conditional-knockout',
  'cre-flox',
  'cre-recombinase',
  'cre-lox-facts',
  'cre-lox-conditional-knockout-mouse-models',
  'difference-between-knock-in-and-knockout',
  'flox-design',
  'flox-sequence',
  'floxed-allele',
  'floxed-mice-cre',
  'floxing',
  'gaining-inducible-control',
  'gene-knockout',
  'gene-knockout-method',
  'history-of-creating-genetically-humanized-mice',
  'how-a-knockout-mouse-is-made',
  'how-to-make-a-knock-in-mouse',
  'how-to-make-a-transgenic-mouse',
  'floxed-cre-lox-flox',
  'humanized-mice',
  'knock-in-knock-out-mice',
  'knock-in-mice-vs-transgenic-mice',
  'knock-in-mice-protocol',
  'knockdown-mice',
  'knockout-mice-in-the-study-of-human-genetic-disease',
  'knockout-mice-in-the-study-of-human-genetic-disease-2',
  'knockout-mice-purpose',
  'meet-ingenious-scientist-jennifer-parla',
  'meet-ingenious-scientist-kristen-coughlin',
  'meet-ingenious-scientist-richard-row',
  'mouse-cell-line',
  'nih-grant-to-generate-exclusive-covid-19-ace2-mouse-models',
  'point-mutation-diseases',
  'nih-grant-covid-19-ace2-mice',
  'rat-models-of-cardiac-disease',
  'rosa26-mice',
  'the-advantages-of-rat-models',
  'top-5-lab-mouse-colony-management-software-options-for-2023',
  'top-five-reasons-mouse-models-fail-mistakes-to-avoid',
  'transgenic-mice',
  'transgenic-mouse-model',
  'transgenic-rats-vs-mice',
  'types-of-point-mutations',
  'what-is-a-conditional-allele',
  'what-is-a-knockin',
  'what-is-a-knockout-rat',
  'what-is-a-point-mutation',
  'what-is-a-stem-cell-line',
  'what-is-a-transgene',
  'what-is-the-mouse-knockout-timeline',
  'why-make-a-humanized-mouse',
  'hace2-transgenic-mice',
  'ingenious-and-smoc-catalog-humanized-mouse-models',
  'ingenious-targeting-laboratory-receives-3m-phase-ii-small-business-innovation-research-sbir-award',
]);

// Convert internal path to correct destination
function convertInternalLink(path: string): string {
  // Remove trailing slash and leading slash for comparison
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');
  
  // Check if this is a blog post slug (possibly nested like /knockin/slug or /ingenious-blog/slug)
  const segments = cleanPath.split('/');
  const lastSegment = segments[segments.length - 1];
  
  if (BLOG_SLUGS.has(lastSegment)) {
    return `/ingenious-blog/${lastSegment}`;
  }
  
  // Check for ingenious-blog path
  if (cleanPath.startsWith('ingenious-blog/')) {
    const slug = cleanPath.replace('ingenious-blog/', '');
    if (BLOG_SLUGS.has(slug)) {
      return `/ingenious-blog/${slug}`;
    }
  }
  
  // Keep other internal links as-is (they point to main site pages)
  return path;
}

// Convert HTML-like content to Markdown
function htmlToMarkdown(html: string): string {
  if (!html) return '';
  
  const md = html
    // Handle line breaks
    .replace(/<br\s*\/?>/gi, '\n')
    // Handle paragraphs
    .replace(/<\/p>\s*<p>/gi, '\n\n')
    .replace(/<p>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    // Handle headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
    // Handle bold
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b>(.*?)<\/b>/gi, '**$1**')
    // Handle italic
    .replace(/<em>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i>(.*?)<\/i>/gi, '*$1*')
    // Handle links - convert genetargeting.com links to internal links
    .replace(/<a[^>]*href="https?:\/\/(www\.)?genetargeting\.com([^"]*)"[^>]*>(.*?)<\/a>/gi, (match, www, urlPath, text) => {
      const newPath = convertInternalLink(urlPath || '/');
      return `[${text}](${newPath})`;
    })
    // Handle relative internal links
    .replace(/<a[^>]*href="\/([^"]*)"[^>]*>(.*?)<\/a>/gi, (match, urlPath, text) => {
      const newPath = convertInternalLink('/' + urlPath);
      return `[${text}](${newPath})`;
    })
    // Handle external links (keep as-is)
    .replace(/<a[^>]*href="(https?:\/\/(?!(?:www\.)?genetargeting\.com)[^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // Handle lists
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    // Handle blockquotes
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1\n\n')
    // Handle divs and spans
    .replace(/<div[^>]*>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<span[^>]*>(.*?)<\/span>/gi, '$1')
    // Handle images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)')
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Decode HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '...')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return md;
}

// Determine category from the Categories field
function normalizeCategory(category: string): string {
  const cat = category?.toLowerCase().trim() || '';
  
  if (cat.includes('technical') || cat.includes('guide')) return 'Technical Guide';
  if (cat.includes('protocol')) return 'Protocol';
  if (cat.includes('educational') || cat.includes('education')) return 'Educational';
  if (cat.includes('research') || cat.includes('spotlight')) return 'Research Spotlight';
  if (cat.includes('news') || cat.includes('company') || cat.includes('press')) return 'Company News';
  if (cat.includes('industry') || cat.includes('insight')) return 'Industry Insights';
  if (cat.includes('selection') || cat.includes('comparison')) return 'Selection Guide';
  
  return 'Educational';
}

// Generate frontmatter
function generateFrontmatter(row: Record<string, string>): string {
  const title = row['Title']?.replace(/"/g, '\\"') || 'Untitled';
  const slug = row['Slug'] || '';
  const date = row['Published On'] || row['Created On'] || '';
  const category = normalizeCategory(row['Categories'] || '');
  const author = row['Author'] || '';
  const legacyUrl = `https://www.genetargeting.com/ingenious-blog/${slug}`;

  let frontmatter = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
category: "${category}"
legacy_url: "${legacyUrl}"`;

  if (author) {
    frontmatter += `\nauthor: "${author}"`;
  }

  frontmatter += `\n---\n\n`;

  return frontmatter;
}

// Main function
async function main() {
  console.log('Reading CSV file...');
  
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`CSV file not found at: ${CSV_PATH}`);
    process.exit(1);
  }

  const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');
  const posts = parseCSV(csvContent);

  console.log(`Found ${posts.length} blog posts`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let successCount = 0;
  let errorCount = 0;

  for (const post of posts) {
    const slug = post['Slug'];
    
    if (!slug) {
      console.warn('Skipping post with no slug:', post['Title']);
      errorCount++;
      continue;
    }

    try {
      const frontmatter = generateFrontmatter(post);
      const content = htmlToMarkdown(post['paragraphs'] || '');
      const markdown = frontmatter + content;

      const outputPath = path.join(OUTPUT_DIR, `${slug}.md`);
      fs.writeFileSync(outputPath, markdown, 'utf-8');

      console.log(`✓ Created: ${slug}.md`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error creating ${slug}:`, error);
      errorCount++;
    }
  }

  console.log(`\nDone! Created ${successCount} files, ${errorCount} errors.`);
}

main().catch(console.error);
