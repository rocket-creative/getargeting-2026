#!/usr/bin/env python3
"""
Generate TypeScript data file from the Exclusive Newsletter Contents CSV.
Preserves full HTML content without truncation.
"""

import csv
import re
import json
from pathlib import Path
from datetime import datetime

CSV_PATH = Path("Ingenious Targeting Laboratory - Exclusive Newsletter Contents.csv")
OUTPUT_PATH = Path("itl-website/src/data/newsletterArticles.ts")

def clean_html(html_content):
    """Clean HTML content while preserving structure."""
    if not html_content:
        return ""
    # Fix double-escaped quotes from CSV
    html_content = html_content.replace('""', '"')
    # Remove empty id attributes
    html_content = re.sub(r'\s+id="[^"]*"', '', html_content)
    # Clean empty paragraphs
    html_content = re.sub(r'<p>\s*‍?\s*</p>', '', html_content)
    # Fix unclosed tags and other issues
    html_content = html_content.replace('<strong>', '<strong>').replace('</strong>', '</strong>')
    return html_content.strip()

def escape_for_ts(s):
    """Escape string for TypeScript template literal."""
    if not s:
        return ""
    # Escape backticks and ${} for template literals
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s

def get_category(name, slug):
    """Determine category based on article name/content."""
    name_lower = name.lower()
    
    if 'neurodegenerative' in name_lower or 'alzheimer' in name_lower:
        return 'Neuroscience'
    elif 'metabolic' in name_lower or 'obesity' in name_lower or 'diabetes' in name_lower:
        return 'Metabolic'
    elif 'immune' in name_lower or 'infectious' in name_lower:
        return 'Immunology'
    elif 'humanized' in name_lower:
        return 'Immunology'
    elif 'cancer' in name_lower or 'immunotherapy' in name_lower or 'oncology' in name_lower:
        return 'Oncology'
    elif 'crispr' in name_lower or 'gene editing' in name_lower:
        return 'Technology'
    elif 'floxed' in name_lower or 'knockout' in name_lower and 'conditional' in name_lower:
        return 'Technical Guide'
    elif 'cre-lox' in name_lower or 'conditional' in name_lower:
        return 'Technical Guide'
    elif 'knock-in' in name_lower or 'knockin' in name_lower or 'transgenic' in name_lower:
        return 'Selection Guide'
    elif 'colony' in name_lower or 'software' in name_lower:
        return 'Resources'
    elif 'clinical' in name_lower or 'cro' in name_lower or 'practice' in name_lower:
        return 'Industry Insights'
    elif 'model vs' in name_lower or 'organoid' in name_lower:
        return 'Comparison'
    elif 'knockout' in name_lower:
        return 'Technical Guide'
    else:
        return 'Research'

def get_related_page(name, slug):
    """Determine related service page based on article content."""
    name_lower = name.lower()
    
    if 'alzheimer' in name_lower or 'neurodegenerative' in name_lower:
        return '/alzheimers-mouse-models'
    elif 'metabolic' in name_lower or 'obesity' in name_lower or 'diabetes' in name_lower:
        return '/metabolic-disease-mouse-models'
    elif 'humanized' in name_lower:
        return '/humanized-mouse-models'
    elif 'immune' in name_lower:
        return '/immunology-mouse-models'
    elif 'cancer' in name_lower or 'immunotherapy' in name_lower:
        return '/immuno-oncology-mouse-models'
    elif 'crispr' in name_lower:
        return '/knockout-mouse-models'
    elif 'floxed' in name_lower or 'conditional knockout' in name_lower:
        return '/conditional-knockout-mouse-models'
    elif 'cre-lox' in name_lower:
        return '/cre-lox-system'
    elif 'knock-in' in name_lower or 'knockin' in name_lower:
        return '/knockin-mouse-models'
    elif 'transgenic' in name_lower:
        return '/transgenic-mouse-service'
    elif 'point mutation' in name_lower:
        return '/point-mutation-mice'
    elif 'knockout' in name_lower and 'conditional' in name_lower:
        return '/conditional-knockout-mouse-models'
    elif 'knockout' in name_lower:
        return '/knockout-mouse-models'
    elif 'colony' in name_lower or 'software' in name_lower:
        return '/breeding-scheme-architect'
    else:
        return '/custom-mouse-models'

def extract_description(html_content, max_length=200):
    """Extract a plain text description from HTML content."""
    if not html_content:
        return ""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', html_content)
    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    # Remove special characters
    text = text.replace('‍', '').replace('\u200b', '')
    text = re.sub(r'&nbsp;', ' ', text)
    text = re.sub(r'&amp;', '&', text)
    text = re.sub(r'&lt;', '<', text)
    text = re.sub(r'&gt;', '>', text)
    # Truncate
    if len(text) > max_length:
        text = text[:max_length].rsplit(' ', 1)[0] + '...'
    return text

def parse_csv():
    articles = []
    
    with open(CSV_PATH, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row.get('Name', '').strip()
            slug = row.get('Slug', '').strip()
            body = row.get('Body', '').strip()
            name_pt1 = row.get('Name-pt1', '').strip()
            name_pt2 = row.get('Name-pt2', '').strip()
            
            # Skip empty rows or rows that look like HTML fragments
            if not name or not slug or slug.startswith('<'):
                continue
            if name.startswith('<'):
                continue
            # Skip if body is too short (less than 500 chars suggests incomplete)
            if len(body) < 100:
                continue
                
            # Clean title - remove "Article X." prefix
            display_title = re.sub(r'^Article \d+[.:]\s*', '', name)
            
            # Build subtitle from name parts if available
            if name_pt1 and name_pt2:
                subtitle = name_pt1
            else:
                subtitle = ""
            
            # Clean the HTML body - preserve full content
            cleaned_body = clean_html(body)
            
            # Extract description
            description = extract_description(body)
            
            # Determine category and related page
            category = get_category(name, slug)
            related_page = get_related_page(name, slug)
            
            article = {
                'id': slug,
                'slug': slug,
                'title': display_title,
                'subtitle': subtitle,
                'description': description,
                'category': category,
                'relatedPage': related_page,
                'body': cleaned_body,
                'publishedAt': '2025-01-01',
                'bodyLength': len(cleaned_body),
            }
            articles.append(article)
            
    return articles

def generate_typescript(articles):
    """Generate TypeScript file content."""
    
    ts_content = '''/**
 * Newsletter Articles Data
 * Auto-generated from Exclusive Newsletter Contents CSV
 * DO NOT EDIT MANUALLY - regenerate using generate-newsletter-data.py
 */

export interface NewsletterArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  relatedPage: string;
  body: string;
  publishedAt: string;
}

export const newsletterArticles: NewsletterArticle[] = [
'''
    
    for i, article in enumerate(articles):
        ts_content += f'''  {{
    id: "{article['id']}",
    slug: "{article['slug']}",
    title: `{escape_for_ts(article['title'])}`,
    subtitle: `{escape_for_ts(article['subtitle'])}`,
    description: `{escape_for_ts(article['description'])}`,
    category: "{article['category']}",
    relatedPage: "{article['relatedPage']}",
    body: `{escape_for_ts(article['body'])}`,
    publishedAt: "{article['publishedAt']}",
  }}'''
        if i < len(articles) - 1:
            ts_content += ','
        ts_content += '\n'
    
    ts_content += '''];

// Helper function to get article by slug
export function getArticleBySlug(slug: string): NewsletterArticle | undefined {
  return newsletterArticles.find(article => article.slug === slug);
}

// Helper function to get all slugs for static generation
export function getAllArticleSlugs(): string[] {
  return newsletterArticles.map(article => article.slug);
}

// Get featured articles (first 6)
export function getFeaturedArticles(): NewsletterArticle[] {
  return newsletterArticles.slice(0, 6);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set(newsletterArticles.map(article => article.category));
  return ['All', ...Array.from(categories).sort()];
}

// Filter articles by category
export function getArticlesByCategory(category: string): NewsletterArticle[] {
  if (category === 'All') return newsletterArticles;
  return newsletterArticles.filter(article => article.category === category);
}
'''
    
    return ts_content

def main():
    articles = parse_csv()
    
    print(f"\n=== Found {len(articles)} articles ===\n")
    
    for i, article in enumerate(articles, 1):
        print(f"{i}. {article['title'][:60]}...")
        print(f"   Slug: {article['slug']}")
        print(f"   Category: {article['category']}")
        print(f"   Body length: {article['bodyLength']} chars")
        print()
    
    # Generate TypeScript file
    ts_content = generate_typescript(articles)
    
    # Ensure output directory exists
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"\nGenerated TypeScript file: {OUTPUT_PATH}")
    print(f"Total articles: {len(articles)}")
    total_content = sum(a['bodyLength'] for a in articles)
    print(f"Total content: {total_content:,} characters")

if __name__ == '__main__':
    main()
